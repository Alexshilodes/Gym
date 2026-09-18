const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const html = fs.readFileSync('index.html', 'utf8');
const code = fs.readFileSync('app.js', 'utf8');
class Element {
  constructor() {
    this.value = ''; this.children = []; this.dataset = {}; this.style = {}; this.events = {}; this.attributes = {};
    const classes = new Set();
    this.classList = { contains: c => classes.has(c), add: c => classes.add(c), remove: c => classes.delete(c), toggle: (c, on) => on ? classes.add(c) : classes.delete(c) };
    this.fields = new Map(); this.elements = { namedItem: key => this.fields.get(key) || null };
  }
  addEventListener(key, fn) { this.events[key] = fn; }
  replaceChildren(...children) { this.children = children; if (children[0]?.value) this.value = children[0].value; }
  append(...children) { this.children.push(...children); }
  appendChild(child) { this.children.push(child); }
  setAttribute(key, value) { this.attributes[key] = value; }
  showModal() { this.open = true; }
  close() { this.open = false; }
}
function boot(stored = new Map()) {
  const elements = new Map([...html.matchAll(/id="([^"]+)"/g)].map(match => ['#' + match[1], new Element()]));
  const form = elements.get('#profileForm');
  for (const match of html.matchAll(/name="([^"]+)"/g)) if (!form.fields.has(match[1])) form.fields.set(match[1], new Element());
  const tabs = ['plan', 'tracker', 'profile'].map(name => { const element = new Element(); element.dataset.tab = name; return element; });
  const nav = tabs.map(tab => { const element = new Element(); element.dataset.target = tab.dataset.tab; return element; });
  const body = new Element();
  const context = {
    document: { body, querySelector: selector => { assert(elements.has(selector), 'Missing HTML: ' + selector); return elements.get(selector); }, querySelectorAll: selector => selector === '.tab-view' ? tabs : selector === '.nav-item' ? nav : [], createElement: () => new Element(), createTextNode: text => ({textContent: text}) },
    localStorage: { getItem: key => stored.get(key) || null, setItem: (key, value) => stored.set(key, value) },
    FormData: class { constructor(form) { this.form = form; } get(key) { return this.form.fields.get(key)?.value ?? null; } },
    setTimeout: () => 1, clearTimeout() {}, setInterval: () => 1, clearInterval() {}, Date, console
  };
  vm.createContext(context); vm.runInContext(code, context);
  return { context, elements, stored, form, tabs, nav, body, run: expression => vm.runInContext(expression, context) };
}
const app = boot();
assert(app.body.classList.contains('is-onboarding'));
assert(app.tabs[2].classList.contains('active'));
assert(app.form.fields.get('name').value === '');
assert(app.form.fields.get('age').value === '');
assert(app.form.fields.get('sex').value === '');
assert(!app.run("saveSet('Chest Press', '10', '12', 0)"));
assert(!app.stored.has('gym-tracker'));
app.form.events.submit({preventDefault() {}});
assert(!app.stored.has('gym-profile'), 'Incomplete profile must not be saved');
const profile = {name:'Тест <имя>', age:'31', sex:'female', height:'170', weight:'65', goal:'general', level:'beginner', difficulty:'light', sessionMinutes:'30', readiness:'tired'};
for (const [key, value] of Object.entries(profile)) app.form.fields.get(key).value = value;
app.form.events.submit({preventDefault() {}});
assert(!app.body.classList.contains('is-onboarding'));
assert(app.tabs[0].classList.contains('active'));
assert(JSON.parse(app.stored.get('gym-profile')).height === 170);
assert(app.elements.get('#profileName').textContent === 'Тест <имя>');
assert(app.elements.get('#adaptation').textContent.includes('сниженный'));
assert(app.run('getAdjustedExercise(baseWorkoutData.A.exercises[0]).sets') === '1 × 10–15');
assert(app.run('getAdjustedExercise(baseWorkoutData.recovery.exercises[0]).sets') === '30–40 мин');
assert(app.elements.get('#trackerExercise').children.length > 6);
const quickForm = new Element(); quickForm.classList.add('quick-set-form'); quickForm.dataset.index = '0';
for (const [key, value] of Object.entries({weight:'0', reps:'12'})) { const field = new Element(); field.value = value; quickForm.fields.set(key, field); }
app.elements.get('#exerciseList').events.submit({target:quickForm, preventDefault() {}});
let rows = JSON.parse(app.stored.get('gym-tracker'));
assert(rows.length === 1 && rows[0].weight === 0 && rows[0].day === 1 && rows[0].exerciseKey === '1-0');
assert(app.elements.get('#trackerTable').innerHTML.includes('Chest Press'));
assert(app.elements.get('#exerciseList').innerHTML.includes('0 кг × 12'));
assert(!app.run("saveSet('Chest Press', '-5', '2.2', 0)"));
assert(!app.run("saveSet('Chest Press', '', '12', 0)"));
assert(JSON.parse(app.stored.get('gym-tracker')).length === 1);
assert(app.run("saveSet('Chest Press — жим от груди в тренажёре', '20', '10', 0)"));
assert(app.elements.get('#exerciseList').innerHTML.includes('Записано: 2 / 1'));
app.elements.get('#completeDay').events.click();
assert(JSON.parse(app.stored.get('gym-progress')).includes(1));
app.elements.get('#completeDay').events.click();
assert(JSON.parse(app.stored.get('gym-progress')).length === 0);
app.run('selectedDay = 30; renderPlan()');
assert(app.elements.get('#todayLabel').textContent === 'ДЕНЬ 30');
app.elements.get('#timerStart').events.click();
assert(app.elements.get('#timerValue').textContent === '01:30');
app.elements.get('#timerReset').events.click();
const photoButton = {dataset:{photo:'assets/equipment/chest-press.jpg',equipment:'Chest Press'}};
app.elements.get('#exerciseList').events.click({target:{closest:()=>photoButton}});
assert(app.elements.get('#equipmentDialog').open);
assert(app.elements.get('#equipmentDialogImage').src === photoButton.dataset.photo);
app.elements.get('#closeEquipmentDialog').events.click();
assert(!app.elements.get('#equipmentDialog').open);
const reopened = boot(app.stored);
assert(!reopened.body.classList.contains('is-onboarding'));
assert(reopened.tabs[0].classList.contains('active'));
assert(reopened.form.fields.get('name').value === 'Тест <имя>');
assert(reopened.run('storage.tracker.length') === 2);
reopened.form.fields.get('name').value = 'Другой';
reopened.form.events.input();
assert(reopened.elements.get('#profileSaveStatus').textContent.includes('несохранённые'));
reopened.form.events.reset({preventDefault() {}});
assert(reopened.form.fields.get('name').value === 'Тест <имя>');
assert(boot(new Map([['gym-profile', '{bad-json']])).body.classList.contains('is-onboarding'));
assert(boot(new Map([['gym-profile', JSON.stringify({name:'Имя'})]])).body.classList.contains('is-onboarding'));
const legacy = boot(new Map([['gym-profile', JSON.stringify({...profile, name:'Свой профиль'})]]));
assert(!legacy.body.classList.contains('is-onboarding'), 'Existing complete profiles must be retained');
const strengthExercises = app.run("Object.values(baseWorkoutData).flatMap(workout => workout.exercises).filter(exercise => exercise.sets.includes('×'))");
for (const exercise of strengthExercises) {
  assert(exercise.image.startsWith('assets/equipment/'));
  assert(fs.existsSync(exercise.image), 'Missing equipment photo: ' + exercise.name);
  const signature = fs.readFileSync(exercise.image).subarray(0, 4).toString('hex');
  assert(signature.startsWith('ffd8') || signature === '89504e47', 'Not a JPEG/PNG: ' + exercise.image);
}
console.log('PASS: first launch, empty fields, required profile, gated logging, profile save/reopen, legacy profile, adaptation, quick-set submission, journal persistence, invalid input, day completion, timer, photo viewer, cancel changes, malformed storage, all equipment photos.');
