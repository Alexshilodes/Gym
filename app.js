const STORAGE_KEYS = {
  profile: 'gym-profile',
  progress: 'gym-progress',
  tracker: 'gym-tracker',
  exercises: 'gym-exercises'
};

const defaultProfile = {
  name: '',
  age: '',
  sex: '',
  height: '',
  weight: '',
  goal: 'strength',
  level: 'beginner',
  difficulty: 'normal',
  sessionMinutes: 60,
  readiness: 'normal'
};

const baseWorkoutData = {
  A: {
    title: 'Тренировка A — грудь, плечи, трицепс',
    duration: '45–60 мин',
    exercises: [
      { name: 'Chest Press — жим от груди в тренажёре', sets: '3 × 8–12', note: 'Сиденье выставляй так, чтобы рукоятки были примерно на уровне середины груди. Не бросай вес назад.', image: 'assets/equipment/chest-press.jpg', equipment: "Series 2 Chest Press Machine" },
      { name: 'Incline Dumbbell Press — жим гантелей на наклонной', sets: '3 × 8–12', note: 'Скамья примерно 30°. Это будет одним из основных упражнений для верхней части груди.', image: 'assets/equipment/incline-bench.jpg', equipment: "Body-Solid Heavy Duty Flat-Incline-Decline Bench" },
      { name: 'Pec Deck — «бабочка»', sets: '3 × 10–15', note: 'Главное — сводить руки грудью, а не просто толкать их плечами.', image: 'assets/equipment/pec-deck.jpg', equipment: "Series 2 Pec Fly Machine" },
      { name: 'Lateral Raise Machine — разведение на среднюю дельту', sets: '3 × 10–15', note: 'Это упражнение я специально добавляю для визуальной ширины плеч.', image: 'assets/equipment/lateral-raise.png', equipment: "Life Fitness Insignia Lateral Raise" },
      { name: 'Triceps Pushdown — разгибание рук на верхнем блоке', sets: '3 × 10–15', note: 'Локти стараемся держать примерно на одном месте.', image: 'assets/equipment/cable-column.jpg', equipment: "Series 2 Cable Column Machine" },
      { name: 'Пресс — скручивания в тренажёре', sets: '3 × 10–15', note: 'Не тяни голову руками. Скручивается именно корпус.', image: 'assets/equipment/ab-crunch.png', equipment: "Body-Solid CAM Ab and Back Machine" }
    ]
  },
  B: {
    title: 'Тренировка B — спина + бицепс',
    duration: '50–65 мин',
    exercises: [
      { name: 'Lat Pulldown — тяга верхнего блока', sets: '3 × 8–12', note: 'Тяни перекладину к верхней части груди, а не за голову.', image: 'assets/equipment/lat-row.jpg', equipment: "Body-Solid S2LAT: верхняя и горизонтальная тяга" },
      { name: 'Seated Cable Row — горизонтальная тяга блока', sets: '3 × 8–12', note: 'Сначала движение локтями назад, потом возвращаем вес. Не превращай упражнение в раскачивание корпуса.', image: 'assets/equipment/lat-row.jpg', equipment: "Body-Solid S2LAT: верхняя и горизонтальная тяга" },
      { name: 'Chest Supported Row — тяга с упором грудью', sets: '3 × 8–12', note: 'Отличная штука, потому что корпус практически не помогает.', image: 'assets/equipment/chest-supported-row.png', equipment: "Body-Solid Seated Row Machine, GSRM40B - now with Black Paint" },
      { name: 'Reverse Pec Deck — обратная бабочка', sets: '3 × 12–15', note: 'Задняя дельта + верх спины.', image: 'assets/equipment/pec-deck.jpg', equipment: "Series 2 Pec Fly Machine" },
      { name: 'Biceps Curl Machine — сгибание рук в тренажёре', sets: '3 × 10–15', note: 'Здесь я бы предпочёл тренажёр обычным подъёмам штанги — проще контролировать движение.', image: 'assets/equipment/biceps-curl.jpg', equipment: "Series 2 Arm Curl Machine" },
      { name: 'Молотковые сгибания с гантелями', sets: '2 × 10–12', note: 'Сохраняем нейтральный хват и спокойное движение.', image: 'assets/equipment/dumbbells.jpg', equipment: "Body-Solid Tools Rubber Coat Iron Hex Dumbbells SDR" }
    ]
  },
  C: {
    title: 'Тренировка C — ноги + пресс',
    duration: '55–75 мин',
    exercises: [
      { name: 'Leg Press — жим ногами', sets: '4 × 8–12', note: 'Стопы примерно на ширине плеч. Не выпрямляй колени резко до щелчка.', image: 'assets/equipment/leg-press.png', equipment: "Pro ClubLine Linear Bearing Commercial Leg Press" },
      { name: 'Leg Extension — разгибание ног', sets: '3 × 10–15', note: 'Квадрицепс. Здесь можно работать достаточно контролируемо.', image: 'assets/equipment/leg-extension.jpg', equipment: "Pro ClubLine Leg Extension" },
      { name: 'Leg Curl — сгибание ног', sets: '3 × 10–15', note: 'Задняя поверхность бедра.', image: 'assets/equipment/leg-curl.jpg', equipment: "Pro ClubLine Leg Curl" },
      { name: 'Calf Raise — икры', sets: '3 × 12–20', note: 'Спокойно, без лишней амплитуды и рывков.', image: 'assets/equipment/calf-raise.png', equipment: "Body-Solid Seated Calf Raise Machine" },
      { name: 'Подъём коленей в упоре', sets: '3 × 10–15', note: 'Не просто поднимаем колени, а стараемся подкручивать таз вверх.', image: 'assets/equipment/knee-raise.jpg', equipment: "Body-Solid Vertical Knee Raise" },
      { name: 'Cable Crunch — скручивания на верхнем блоке', sets: '3 × 10–15', note: 'Это второе упражнение на пресс.', image: 'assets/equipment/cable-column.jpg', equipment: "Series 2 Cable Column Machine" }
    ]
  },
  recovery: {
    title: 'Восстановление / активный отдых',
    duration: '20–40 мин',
    exercises: [
      { name: 'Бассейн или лёгкий бег', sets: '30–40 мин', note: 'Между силовыми, не перед ними. Если восстановление плохое — убери одно из двух.' }
    ]
  },
  control: {
    title: 'День 29 — контрольная тренировка',
    duration: '45–60 мин',
    exercises: [
      { name: 'Chest Press — 3×8–12', sets: '3 × 8–12', note: 'Сделай и сравни с первой неделей.', image: 'assets/equipment/chest-press.jpg', equipment: "Series 2 Chest Press Machine" },
      { name: 'Lat Pulldown — 3×8–12', sets: '3 × 8–12', note: 'Сравни с началом месяца.', image: 'assets/equipment/lat-row.jpg', equipment: "Body-Solid S2LAT: верхняя и горизонтальная тяга" },
      { name: 'Incline Dumbbell Press — 3×8–12', sets: '3 × 8–12', note: 'Проверка средней груди.', image: 'assets/equipment/incline-bench.jpg', equipment: "Body-Solid Heavy Duty Flat-Incline-Decline Bench" },
      { name: 'Seated Row — 3×8–12', sets: '3 × 8–12', note: 'Проверка спины.', image: 'assets/equipment/lat-row.jpg', equipment: "Body-Solid S2LAT: верхняя и горизонтальная тяга" },
      { name: 'Leg Press — 3×10–12', sets: '3 × 10–12', note: 'Ноги должны быть сильнее, чем в начале месяца.', image: 'assets/equipment/leg-press.png', equipment: "Pro ClubLine Linear Bearing Commercial Leg Press" },
      { name: 'Lateral Raise — 2×12–15', sets: '2 × 12–15', note: 'Оцени ширину плеч.', image: 'assets/equipment/lateral-raise.png', equipment: "Life Fitness Insignia Lateral Raise" }
    ]
  }
};

const schedule = ['A', 'B', 'C', 'A', 'B', 'C', 'recovery', 'A', 'B', 'C', 'A', 'B', 'C', 'recovery', 'A', 'B', 'C', 'A', 'B', 'C', 'recovery', 'A', 'B', 'C', 'A', 'B', 'C', 'recovery', 'control', 'recovery'];

const profileForm = document.querySelector('#profileForm');
const trackerTable = document.querySelector('#trackerTable');
const trackerExercise = document.querySelector('#trackerExercise');
const trackerWeight = document.querySelector('#trackerWeight');
const trackerReps = document.querySelector('#trackerReps');
function readStored(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
const storage = {
  profile: { ...defaultProfile, ...readStored(STORAGE_KEYS.profile, {}) },
  progress: readStored(STORAGE_KEYS.progress, []),
  tracker: readStored(STORAGE_KEYS.tracker, []),
  exercises: readStored(STORAGE_KEYS.exercises, {})
};

let selectedDay = 1;
function hasCompleteProfile(profile) {
  return Boolean(profile && typeof profile.name === 'string' && profile.name.trim() &&
    Number(profile.age) >= 16 && Number(profile.age) <= 80 &&
    ['male', 'female'].includes(profile.sex) &&
    Number(profile.height) >= 140 && Number(profile.height) <= 220 &&
    Number(profile.weight) >= 30 && Number(profile.weight) <= 200);
}
let needsOnboarding = !hasCompleteProfile(readStored(STORAGE_KEYS.profile, null));
function renderOnboarding() {
  document.body.classList.toggle('is-onboarding', needsOnboarding);
  document.querySelector('#profileTitle').textContent = needsOnboarding ? 'Давай познакомимся' : 'Твой профиль';
  document.querySelector('#profileSaveButton').textContent = needsOnboarding ? 'Сохранить и начать' : 'Сохранить изменения';
  if (needsOnboarding) document.querySelector('#profileSaveStatus').textContent = 'Заполни свои данные, чтобы начать';
}


function getDifficultyConfig(difficulty) {
  const config = {
    light: { setsDelta: -1, repDelta: 2, load: 0.85, label: 'Лайт', note: 'Небольшой объём и мягкая нагрузка.' },
    normal: { setsDelta: 0, repDelta: 0, load: 1, label: 'Норм', note: 'Средний темп, база, без лишнего стресса.' },
    hard: { setsDelta: 1, repDelta: -2, load: 1.12, label: 'Хард', note: 'Больше рабочих сетов и весов, но без тупого «до отказа».' }
  };
  return config[difficulty] || config.normal;
}

function getLevelConfig(level) {
  const config = {
    beginner: { setsDelta: -1, repDelta: 2, label: 'Новичок' },
    intermediate: { setsDelta: 0, repDelta: 0, label: 'Средний' },
    advanced: { setsDelta: 1, repDelta: -1, label: 'Продвинутый' }
  };
  return config[level] || config.intermediate;
}

function getCurrentWorkout() {
  const type = schedule[selectedDay - 1] || 'recovery';
  return baseWorkoutData[type] || baseWorkoutData.recovery;
}

function parseSetText(text) {
  const setMatch = text.match(/(\d+)\s*×\s*(\d+)\s*[–-]\s*(\d+)/);
  const simpleMatch = text.match(/(\d+)\s*×\s*(\d+)/);
  if (setMatch) return { sets: Number(setMatch[1]), min: Number(setMatch[2]), max: Number(setMatch[3]) };
  if (simpleMatch) return { sets: Number(simpleMatch[1]), min: Number(simpleMatch[2]), max: Number(simpleMatch[2]) };
  return { sets: 3, min: 8, max: 12 };
}

function escapeHtml(value) { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function exerciseId(name) { return name.split(' — ')[0].replace('Seated Row', 'Seated Cable Row').replace(/^Lateral Raise$/, 'Lateral Raise Machine'); }
function getAdjustedExercise(exercise) {
  if (!exercise.sets.includes('×')) return { ...exercise, loadHint: 'Комфортный темп • без гонки за результатом' };
  const base = parseSetText(exercise.sets);
  const diff = getDifficultyConfig(storage.profile.difficulty);
  const level = getLevelConfig(storage.profile.level);
  const reduction = (Number(storage.profile.sessionMinutes) <= 30 ? 1 : 0) + (storage.profile.readiness === 'tired' ? 1 : 0);
  const sets = Math.min(5, Math.max(1, base.sets + diff.setsDelta + level.setsDelta - reduction));
  let min = base.min, max = base.max;
  if (storage.profile.goal === 'strength' && base.min <= 8) { min = 6; max = 10; }
  if (['tone','general'].includes(storage.profile.goal)) { min = 10; max = 15; }
  const previous = storage.tracker.filter(row => exerciseId(row.exercise) === exerciseId(exercise.name)).at(-1);
  const loadHint = previous ? 'Последний подход: ' + previous.weight + ' кг × ' + previous.reps + ' • начни с знакомой нагрузки' : 'Подбери вес с запасом 2–3 повтора';
  return { ...exercise, sets: sets + ' × ' + min + '–' + max, loadHint };
}

function saveProfile() {
  localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(storage.profile));
  renderProfileSummary();
  renderPlan();
}

const goalLabels = {mass:'Набор массы',strength:'Сила и мышцы',tone:'Рельеф и тонус',general:'Общее здоровье'};
function renderProfileSummary() {
  const p = storage.profile;
  const title = document.querySelector('#heroTitle');
  title.replaceChildren(document.createTextNode('Стань сильнее'), document.createElement('br'));
  const em = document.createElement('em'); em.textContent = 'в своём ритме.'; title.append(em);
  document.querySelector('#heroSubtitle').textContent = 'Маленькие шаги. Сильная версия тебя. Твой персональный план уже здесь.';
  document.querySelector('#profileName').textContent = p.name || 'Твой профиль';
  document.querySelector('#profileGoal').textContent = goalLabels[p.goal];
  document.querySelector('#profileAvatar').textContent = p.name.trim().slice(0,1).toUpperCase() || 'Я';
  document.querySelector('#statAge').textContent = p.age ? p.age + ' лет' : '—';
  document.querySelector('#statWeight').textContent = p.weight ? p.weight + ' кг' : '—';
  document.querySelector('#statLevel').textContent = getLevelConfig(p.level).label;
  document.querySelector('#avatar').textContent = p.name.trim().slice(0,1).toUpperCase() || 'Я';
  document.querySelector('#adaptation').textContent = goalLabels[p.goal] + ' · ' + getDifficultyConfig(p.difficulty).label + ' · до ' + p.sessionMinutes + ' мин' + (p.readiness === 'tired' ? ' · сниженный объём' : '');
}

function fillProfileForm() {
  const form = document.querySelector('#profileForm');
  Object.entries(storage.profile).forEach(([key, value]) => {
    const field = form.elements.namedItem(key);
    if (field) field.value = value;
  });
}

function renderPlan() {
  const workout = getCurrentWorkout();
  const adjusted = workout.exercises.map(getAdjustedExercise);
  if (workout.exercises[0]?.sets.includes('×')) {
    const budget = Math.max(adjusted.length, Math.floor((Number(storage.profile.sessionMinutes) - 7) / 3));
    let total = adjusted.reduce((sum, ex) => sum + parseSetText(ex.sets).sets, 0);
    while (total > budget) {
      let changed = false;
      for (let i = adjusted.length - 1; i >= 0 && total > budget; i--) {
        const parsed = parseSetText(adjusted[i].sets);
        if (parsed.sets > 1) { adjusted[i].sets = (parsed.sets - 1) + ' × ' + parsed.min + '–' + parsed.max; total--; changed = true; }
      }
      if (!changed) break;
    }
  }
  const list = document.querySelector('#exerciseList');

  list.innerHTML = adjusted.map((exercise, index) => {
    const key = selectedDay + '-' + index;
    const done = Boolean(storage.exercises[key]);
    const logged = storage.tracker.filter(row => row.exerciseKey === key).length;
    const previous = storage.tracker.filter(row => exerciseId(row.exercise) === exerciseId(exercise.name)).at(-1);
    const strength = exercise.sets.includes('×');
    const image = exercise.image ? '<button class="equipment-photo" type="button" data-photo="' + escapeHtml(exercise.image) + '" data-equipment="' + escapeHtml(exercise.equipment) + '" aria-label="Увеличить фото: ' + escapeHtml(exercise.equipment) + '"><img src="' + escapeHtml(exercise.image) + '" alt="' + escapeHtml(exercise.equipment) + '" loading="lazy" width="640" height="640"><span>Фото оборудования · увеличить</span></button>' : '';
    return '<article class="exercise-card ' + (done ? 'is-done' : '') + '">' + image +
      '<div class="exercise-content"><div class="exercise-title-row"><div><span class="exercise-number">' + String(index + 1).padStart(2, '0') + '</span><h3 class="exercise-name">' + escapeHtml(exercise.name) + '</h3></div>' +
      '<button type="button" class="check ' + (done ? 'checked' : '') + '" data-key="' + key + '" aria-pressed="' + done + '" aria-label="Отметить ' + escapeHtml(exercise.name) + '">' + (done ? '✓' : '') + '</button></div>' +
      '<div class="exercise-plan-row"><p class="exercise-meta">' + exercise.sets + '</p>' + (strength ? '<span class="logged-sets">Записано: ' + logged + ' / ' + parseSetText(exercise.sets).sets + '</span>' : '') + '</div>' +
      '<p class="exercise-note">' + escapeHtml(exercise.loadHint) + '</p><details><summary>Техника выполнения</summary><p>' + escapeHtml(exercise.note) + '</p></details>' +
      (strength ? '<details class="set-entry"><summary>Записать подход</summary><form class="quick-set-form" data-index="' + index + '"><div class="tracker-inline"><label>Вес, кг<input name="weight" type="number" min="0" max="1000" step="0.1" inputmode="decimal" required value="' + (previous ? escapeHtml(previous.weight) : '') + '" placeholder="Вес"></label><label>Повторы<input name="reps" type="number" min="1" max="100" step="1" inputmode="numeric" required placeholder="' + parseSetText(exercise.sets).min + '"></label></div><button type="submit" class="save-button">Сохранить подход</button></form></details>' : '') + '</div></article>';
  }).join('');

  document.querySelector('#todayLabel').textContent = `ДЕНЬ ${selectedDay}`;
  document.querySelector('#workoutTitle').textContent = workout.title;
  document.querySelector('#durationBadge').textContent = workout.exercises[0]?.sets.includes('×') ? Math.min(Number(storage.profile.sessionMinutes), adjusted.reduce((sum, ex) => sum + parseSetText(ex.sets).sets * 3, 7)) + ' мин ≈' : workout.duration;
  document.querySelector('#exerciseCount').textContent = `${adjusted.length} ${adjusted.length === 1 ? 'упражнение' : 'упражнений'}`;
  document.querySelector('#tipText').textContent = getDifficultyConfig(storage.profile.difficulty).note + ' Разминка 5–7 минут. Не увеличивай вес, пока все подходы не даются уверенно.';

  document.querySelectorAll('.check').forEach((button) => {
    button.addEventListener('click', () => {
      const key = button.dataset.key;
      storage.exercises[key] = !storage.exercises[key];
      localStorage.setItem(STORAGE_KEYS.exercises, JSON.stringify(storage.exercises));
      renderPlan();
    });
  });

  renderDays();
  renderProgress();
}

function renderDays() {
  const days = document.querySelector('#days');
  days.innerHTML = '';
  let start = Math.max(1, selectedDay - 2);
  if (selectedDay > 26) start = 26;
  const end = Math.min(30, start + 4);
  for (let day = start; day <= end; day += 1) {
    const btn = document.createElement('button');
    btn.className = `day ${day === selectedDay ? 'selected' : ''} ${storage.progress.includes(day) ? 'done' : ''}`;
    btn.innerHTML = `<small>ДЕНЬ</small>${day}<span class="day-type">${['A','B','C'].includes(schedule[day - 1]) ? schedule[day - 1] : schedule[day - 1] === 'control' ? 'Тест' : 'Отдых'}</span>`; btn.setAttribute('aria-pressed', day === selectedDay); 
    btn.addEventListener('click', () => {
      selectedDay = day;
      renderPlan();
    });
    days.appendChild(btn);
  }
}

function renderProgress() {
  const total = 30;
  const done = storage.progress.length;
  document.querySelector('#completeDay').textContent = storage.progress.includes(selectedDay) ? 'День завершён ✓ · отменить' : 'Завершить день';
  document.querySelector('#progressText').textContent = `${done} / ${total}`;
  const percent = Math.min((done / total) * 100, 100);
  document.querySelector('#progressBar').style.width = `${percent}%`;
}

function renderTracker() {
  document.querySelector('#trackerSummary').textContent = storage.tracker.length + ' подходов записано · ' + storage.progress.length + ' дней завершено';
  if (!storage.tracker.length) {
    trackerTable.innerHTML = `<tr><td colspan="5">Здесь появятся подходы, записанные в плане тренировки. Отдельно отмечать их не нужно.</td></tr>`;
    return;
  }

  trackerTable.innerHTML = storage.tracker.slice().reverse().map((row) => `
    <tr>
      <td>${escapeHtml(row.date)}</td>
      <td>${escapeHtml(row.exercise)}</td>
      <td>${row.weight} кг</td>
      <td>${row.reps}</td>
      <td>${row.day ? 'День ' + escapeHtml(row.day) : 'Вручную'}</td>
    </tr>
  `).join('');
}

function setActiveTab(tabName) {
  if (needsOnboarding) tabName = 'profile';
  document.querySelectorAll('.tab-view').forEach((tab) => tab.classList.toggle('active', tab.dataset.tab === tabName));
  document.querySelectorAll('.nav-item').forEach((btn) => { btn.classList.toggle('active', btn.dataset.target === tabName); btn.setAttribute('aria-current', btn.dataset.target === tabName ? 'page' : 'false'); });
}

function attachTabEvents() {
  document.querySelectorAll('.nav-item').forEach((button) => {
    button.addEventListener('click', () => setActiveTab(button.dataset.target));
  });
}

profileForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(profileForm);
  const profile = {
    ...storage.profile,
    name: String(data.get('name') || '').trim(),
    age: Number(data.get('age')),
    sex: data.get('sex'),
    height: Number(data.get('height')),
    weight: Number(data.get('weight')),
    goal: data.get('goal') || 'strength',
    level: data.get('level') || 'beginner',
    difficulty: data.get('difficulty') || 'normal',
    sessionMinutes: Number(data.get('sessionMinutes')) || 60,
    readiness: data.get('readiness') || 'normal'
  };
  if (!hasCompleteProfile(profile) || !Number.isInteger(profile.age) || !Number.isInteger(profile.height)) {
    toast('Заполни имя, пол, возраст, рост и вес'); return;
  }
  try { localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile)); }
  catch { toast('Не удалось сохранить профиль. Проверь доступ к хранилищу браузера'); return; }
  const firstSave = needsOnboarding;
  storage.profile = profile;
  needsOnboarding = false;
  renderOnboarding(); renderProfileSummary(); renderPlan();
  document.querySelector('#profileSaveStatus').textContent = 'Все изменения сохранены';
  profileForm.classList.remove('has-changes');
  if (firstSave) setActiveTab('plan');
  toast(firstSave ? 'Профиль готов. Начнём тренировку!' : 'Профиль сохранён. План обновлён');
});

document.querySelector('#completeDay').addEventListener('click', () => {
  const index = storage.progress.indexOf(selectedDay);
  if (index >= 0) {
    storage.progress.splice(index, 1);
  } else {
    storage.progress.push(selectedDay);
  }
  localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(storage.progress));
  renderDays();
  renderProgress();
  renderTracker();
});

document.querySelector('#prevDay').addEventListener('click', () => {
  selectedDay = Math.max(1, selectedDay - 1);
  renderPlan();
});

document.querySelector('#nextDay').addEventListener('click', () => {
  selectedDay = Math.min(30, selectedDay + 1);
  renderPlan();
});

function saveSet(exercise, weightValue, repsValue, index = null) {
  if (needsOnboarding) { setActiveTab('profile'); return false; }
  const weight = Number(weightValue), reps = Number(repsValue);
  if (!exercise || String(weightValue).trim() === '' || !Number.isFinite(weight) || weight < 0 || weight > 1000 || !Number.isInteger(reps) || reps < 1 || reps > 100) {
    toast('Укажи вес от 0 до 1000 кг и 1–100 повторов'); return false;
  }
  const row = { date: new Date().toLocaleDateString('ru-RU'), timestamp: new Date().toISOString(), exercise, weight, reps };
  if (index !== null) { row.day = selectedDay; row.exerciseKey = selectedDay + '-' + index; }
  const updated = [...storage.tracker, row];
  try { localStorage.setItem(STORAGE_KEYS.tracker, JSON.stringify(updated)); }
  catch { toast('Не удалось сохранить подход'); return false; }
  storage.tracker = updated;
  renderTracker(); renderPlan(); toast('Подход записан — он уже в журнале'); return true;
}
document.querySelector('#saveTracker').addEventListener('click', () => {
  if (saveSet(trackerExercise.value, trackerWeight.value, trackerReps.value)) { trackerWeight.value = ''; trackerReps.value = ''; }
});
document.querySelector('#exerciseList').addEventListener('submit', event => {
  const form = event.target;
  if (!form.classList.contains('quick-set-form')) return;
  event.preventDefault();
  const index = Number(form.dataset.index);
  const exercise = getCurrentWorkout().exercises[index];
  if (!exercise || !exercise.sets.includes('×')) return;
  const data = new FormData(form);
  saveSet(exercise.name, data.get('weight'), data.get('reps'), index);
});
const photoDialog = document.querySelector('#equipmentDialog');
document.querySelector('#exerciseList').addEventListener('click', event => {
  const button = event.target.closest('[data-photo]');
  if (!button) return;
  document.querySelector('#equipmentDialogImage').src = button.dataset.photo;
  document.querySelector('#equipmentDialogImage').alt = button.dataset.equipment;
  document.querySelector('#equipmentDialogTitle').textContent = button.dataset.equipment;
  photoDialog.showModal();
});
document.querySelector('#closeEquipmentDialog').addEventListener('click', () => photoDialog.close());
photoDialog.addEventListener('click', event => { if (event.target === photoDialog) photoDialog.close(); });

fillProfileForm();
renderProfileSummary();
renderPlan();
renderTracker();
attachTabEvents();
renderOnboarding();
setActiveTab(needsOnboarding ? 'profile' : 'plan');

function toast(message) { const el = document.querySelector('#toast'); el.textContent = message; el.classList.add('visible'); clearTimeout(toast.timeout); toast.timeout = setTimeout(() => el.classList.remove('visible'), 3500); }
document.querySelector('#openProfile').addEventListener('click', () => setActiveTab('profile'));
const options = [...new Map(Object.values(baseWorkoutData).flatMap(w => w.exercises).filter(ex => ex.sets.includes('×')).map(ex => [exerciseId(ex.name), ex.name])).values()];
trackerExercise.replaceChildren(...options.map(name => { const option = document.createElement('option'); option.value = name; option.textContent = name; return option; }));
let timerEnd = 0, timerInterval;
function renderTimer() { const seconds = timerEnd ? Math.max(0, Math.ceil((timerEnd - Date.now()) / 1000)) : 90; document.querySelector('#timerValue').textContent = String(Math.floor(seconds / 60)).padStart(2,'0') + ':' + String(seconds % 60).padStart(2,'0'); if (timerEnd && seconds === 0) { clearInterval(timerInterval); timerEnd = 0; document.querySelector('#timerStart').textContent = 'Ещё раз'; toast('Отдых завершён — следующий подход'); } }
document.querySelector('#timerStart').addEventListener('click', () => { clearInterval(timerInterval); timerEnd = Date.now() + 90000; renderTimer(); timerInterval = setInterval(renderTimer, 250); document.querySelector('#timerStart').textContent = 'Начать заново'; });
document.querySelector('#timerReset').addEventListener('click', () => { clearInterval(timerInterval); timerEnd = 0; renderTimer(); document.querySelector('#timerStart').textContent = 'Начать отдых'; });

function markProfileChanged() {
  document.querySelector('#profileSaveStatus').textContent = 'Есть несохранённые изменения';
  profileForm.classList.add('has-changes');
}
profileForm.addEventListener('input', markProfileChanged);
profileForm.addEventListener('change', markProfileChanged);
profileForm.addEventListener('reset', event => {
  event.preventDefault(); fillProfileForm();
  document.querySelector('#profileSaveStatus').textContent = needsOnboarding ? 'Заполни свои данные, чтобы начать' : 'Все изменения сохранены';
  profileForm.classList.remove('has-changes');
});
