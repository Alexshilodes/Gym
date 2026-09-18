const fs=require('fs'),vm=require('vm'),assert=require('assert');
const html=fs.readFileSync('index.html','utf8');
class El { constructor(){this.value='';this.children=[];this.dataset={};this.style={};this.events={};this.classList={toggle(){},add(){},remove(){}};this.elements={namedItem:()=>null};} addEventListener(k,fn){this.events[k]=fn;} replaceChildren(...children){this.children=children; if(children[0]?.value)this.value=children[0].value;} append(...kids){this.children.push(...kids);} appendChild(kid){this.children.push(kid);} setAttribute(){} }
const els=new Map([...html.matchAll(/id="([^"]+)"/g)].map(m=>['#'+m[1],new El()]));
const tabs=['plan','tracker','profile'].map(name=>{const e=new El();e.dataset.tab=name;return e;}); const nav=tabs.map(e=>{const n=new El();n.dataset.target=e.dataset.tab;return n;});
const stored=new Map();
const context={document:{querySelector:s=>{assert(els.has(s),'Missing HTML '+s);return els.get(s);},querySelectorAll:s=>s==='.tab-view'?tabs:s==='.nav-item'?nav:[],createElement:()=>new El(),createTextNode:text=>({textContent:text})},localStorage:{getItem:k=>stored.get(k)||null,setItem:(k,v)=>stored.set(k,v)},setTimeout:()=>1,clearTimeout(){},setInterval:()=>1,clearInterval(){},Date,console,FormData:class {get(k){return {name:'Тест <имя>',age:'31',sex:'female',height:'170',weight:'65',goal:'general',level:'beginner',difficulty:'light',sessionMinutes:'30',readiness:'tired'}[k];}}};
vm.createContext(context);vm.runInContext(fs.readFileSync('app.js','utf8'),context);
assert(els.get('#exerciseList').innerHTML.includes('Chest Press')); assert(els.get('#trackerExercise').children.length>6);
els.get('#profileForm').events.submit({preventDefault(){}});
assert(JSON.parse(stored.get('gym-profile')).height===170); assert(els.get('#adaptation').textContent.includes('сниженный')); assert(!els.get('#heroTitle').innerHTML);
const normal=vm.runInContext('getAdjustedExercise(baseWorkoutData.A.exercises[0])',context); assert(normal.sets==='1 × 10–15');
const recovery=vm.runInContext('getAdjustedExercise(baseWorkoutData.recovery.exercises[0])',context);assert(recovery.sets==='30–40 мин');
els.get('#trackerWeight').value='0';els.get('#trackerReps').value='12';els.get('#saveTracker').events.click();assert(JSON.parse(stored.get('gym-tracker')).length===1);assert(els.get('#exerciseList').innerHTML.includes('0 кг × 12'));
els.get('#trackerWeight').value='-5';els.get('#trackerReps').value='2.2';els.get('#saveTracker').events.click();assert(JSON.parse(stored.get('gym-tracker')).length===1);
els.get('#completeDay').events.click();assert(JSON.parse(stored.get('gym-progress')).includes(1));els.get('#completeDay').events.click();assert(JSON.parse(stored.get('gym-progress')).length===0);
vm.runInContext('selectedDay = 30; renderPlan()',context);assert(els.get('#todayLabel').textContent==='ДЕНЬ 30');
els.get('#timerStart').events.click();assert(els.get('#timerValue').textContent==='01:30');els.get('#timerReset').events.click();
console.log('PASS: startup, profile persistence, adaptation, recovery, exercise catalogue, zero-weight logging, invalid input, completion toggle, day 30, timer.');
