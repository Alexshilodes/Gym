const assert = require('node:assert/strict');
const fs = require('node:fs');
let JSDOM; try { ({JSDOM} = require('jsdom')); } catch { ({JSDOM} = require('./.qa/node_modules/jsdom')); }
const html = fs.readFileSync('index.html','utf8');
const code = fs.readFileSync('app.js','utf8');
const profile = {name:'Alex',age:30,sex:'male',height:180,weight:85,goal:'strength',level:'beginner',difficulty:'normal',sessionMinutes:60,readiness:'normal',equipment:'machines'};
function boot(saved={}) {
 const dom=new JSDOM(html,{url:'https://alexshilodes.github.io/Gym/',runScripts:'outside-only',pretendToBeVisual:true});
 const w=dom.window; const errors=[]; w.addEventListener('error',e=>errors.push(e.error));
 for(const [k,v] of Object.entries(saved)) w.localStorage.setItem(k,v);
 w.eval(code+'\nwindow.qa={buildWorkout,getAdjustedPlan,storage,saveBodyWeight,saveSet};');
 return {dom,w,doc:w.document,errors};
}
function snapshot(w) {return Object.fromEntries(Array.from({length:w.localStorage.length},(_,i)=>{const k=w.localStorage.key(i);return [k,w.localStorage.getItem(k)]}));}
(async()=>{
 let a=boot(); assert(a.doc.body.classList.contains('is-onboarding'));
 const form=a.doc.querySelector('#profileForm');
 for (const [k,v] of Object.entries(profile)) form.elements.namedItem(k).value=v;
 form.requestSubmit();assert.equal(JSON.parse(a.w.localStorage.getItem('gym-profile')).name,'Alex');
 for(const tab of ['tracker','profile','plan','tracker']) {a.doc.querySelector('[data-target="'+tab+'"]').click();assert.equal(a.doc.querySelector('.tab-view.active').dataset.tab,tab);assert.equal(a.doc.querySelectorAll('.tab-view:not([hidden])').length,1);}
 let saved=snapshot(a.w); assert.deepEqual(a.errors,[]); a.dom.window.close();
 a=boot(saved);assert(!a.doc.body.classList.contains('is-onboarding'));assert.equal(a.doc.querySelector('#profileForm').elements.namedItem('name').value,'Alex');
 const f=a.doc.querySelector('#profileForm');f.elements.namedItem('name').value='Alex updated';f.elements.namedItem('name').dispatchEvent(new a.w.Event('input',{bubbles:true}));
 await new Promise(r=>setTimeout(r,850));assert.equal(JSON.parse(a.w.localStorage.getItem('gym-profile')).name,'Alex updated');
 a.doc.querySelector('[data-open-weight]').click();assert(a.doc.querySelector('#weightDialog').hasAttribute('open'));a.doc.querySelector('#bodyWeightInput').value='84,5';a.doc.querySelector('#planBodyWeightForm').requestSubmit();assert.equal(JSON.parse(a.w.localStorage.getItem('gym-body-weight'))[0].weight,84.5);assert(!a.doc.querySelector('#weightDialog').hasAttribute('open'));
 const q=a.doc.querySelector('.quick-set-form');q.elements.namedItem('weight').value=20;q.elements.namedItem('reps').value=10;q.requestSubmit();assert.equal(JSON.parse(a.w.localStorage.getItem('gym-tracker'))[0].weight,20);
 // Focused workout mode: resume state, effort and progressive recommendation.
a.doc.querySelector('#startWorkout').click();assert(a.doc.querySelector('#workoutDialog').hasAttribute('open'));assert.match(a.doc.querySelector('#sessionStep').textContent,/1 ИЗ/);let sessionForm=a.doc.querySelector('#sessionEntry');sessionForm.elements.namedItem('weight').value=50;sessionForm.elements.namedItem('reps').value=20;sessionForm.elements.namedItem('effort').value='easy';sessionForm.requestSubmit();let last=JSON.parse(a.w.localStorage.getItem('gym-tracker')).slice(-1)[0];assert.equal(last.effort,'easy');assert(last.nextWeight>50);assert(JSON.parse(a.w.localStorage.getItem('gym-active-workout')).startedAt);a.doc.querySelector('#closeWorkout').click();a.doc.querySelector('#startWorkout').click();assert(a.doc.querySelector('#workoutDialog').hasAttribute('open'));
saved=snapshot(a.w);assert.deepEqual(a.errors,[]);a.dom.window.close();a=boot(saved);assert.equal(a.w.qa.storage.bodyWeight[0].weight,84.5);assert.equal(a.w.qa.storage.tracker[0].weight,20);
 let tested=0;const signatures=new Set();
 for(const goal of ['strength','mass','weightloss','tone','general'])for(const equipment of ['machines','mixed','dumbbells'])for(const level of ['beginner','intermediate','advanced'])for(const sessionMinutes of [30,45,60,75])for(const readiness of ['normal','tired']) {
 const p={...profile,goal,equipment,level,sessionMinutes,readiness};a.w.qa.storage.profile=p;
 for(const day of [1,2,3,5,7,15,29,30]){
 const first=a.w.qa.buildWorkout(p,day),second=a.w.qa.buildWorkout(p,day);assert.equal(JSON.stringify(first),JSON.stringify(second));const adjusted=a.w.qa.getAdjustedPlan(first);const minutes=adjusted.reduce((n,e)=>n+(e.kind==='cardio'?e.minutes:Number(e.sets.split('×')[0])*3),adjusted.length?7:0);assert(minutes<=sessionMinutes,'Budget '+JSON.stringify(p)+' day'+day);
 assert.equal(new Set(first.exercises.map(e=>e.name)).size,first.exercises.length);
 for(const e of first.exercises){assert(e.name&&e.sets&&e.note);if(e.image)assert(fs.existsSync(e.image));if(equipment==='dumbbells')assert(e.group==='dumbbells'||e.name==='Ходьба на улице');if(equipment==='machines')assert(e.group==='machines'||e.kind==='cardio');}
 if(day===1)signatures.add(first.exercises.map(e=>e.name).join('|')); tested++;
 }
 }
 assert(signatures.size>20);assert.deepEqual(a.errors,[]);a.dom.window.close();
 a=boot({'gym-profile':JSON.stringify({...profile,name:42}),'gym-tracker':'{}','gym-body-weight':'{}','gym-program-progress':'null'});assert(a.doc.body.classList.contains('is-onboarding'));assert.deepEqual(a.errors,[]);a.dom.window.close();
 a=boot();a.doc.querySelector('#profileForm').elements.namedItem('name').value='Draft';a.doc.querySelector('#profileForm').elements.namedItem('name').dispatchEvent(new a.w.Event('input',{bubbles:true}));saved=snapshot(a.w);a.dom.window.close();a=boot(saved);assert.equal(a.doc.querySelector('#profileForm').elements.namedItem('name').value,'Draft');a.dom.window.close();
 console.log('PASS: native forms, autosave, reload, navigation, weight, workout logs, corrupt storage; '+tested+' planner scenarios, '+signatures.size+' distinct day-one plans.');
})().catch(e=>{console.error(e);process.exit(1)});
