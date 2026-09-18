const STORAGE_KEYS = {
  profile: 'gym-profile',
  progress: 'gym-progress',
  tracker: 'gym-tracker',
  exercises: 'gym-exercises'
};

const defaultProfile = {
  name: 'Артём',
  age: 26,
  sex: 'male',
  height: 178,
  weight: 56,
  goal: 'strength',
  level: 'intermediate',
  difficulty: 'normal',
  sessionMinutes: 60,
  readiness: 'normal'
};

const baseWorkoutData = {
  A: {
    title: 'Тренировка A — грудь, плечи, трицепс',
    duration: '45–60 мин',
    exercises: [
      { name: 'Chest Press — жим от груди в тренажёре', sets: '3 × 8–12', note: 'Сиденье выставляй так, чтобы рукоятки были примерно на уровне середины груди. Не бросай вес назад.', image: 'https://images.openai.com/static-rsc-4/ONOgQwaS70d4Z-Gs6U2C3wXVimTZiHT2Lt-gy-xIjxrAFUn8JcRVOFtjfI0TfnmcGYhlVZrhQW7VmhE0AGMLobtbCjERZ1UWSIT_8_lwBID9s7e4lgPypNr2YLNatOAjFJ6hNcHjC14y_ExmVzUPP1HAy7ivLJKRJyQHWmz0blM?purpose=inline' },
      { name: 'Incline Dumbbell Press — жим гантелей на наклонной', sets: '3 × 8–12', note: 'Скамья примерно 30°. Это будет одним из основных упражнений для верхней части груди.', image: 'https://images.openai.com/static-rsc-4/x43FdibMUv69GMd2rc-hQoT9nEqLCvmovbl-7BPqDsYpD3Xaq_aJl5bo4AEX2XN90BIAY47z7xYBIvKC3PCsSrnTOZ75cWne5sO7jHUTfqtktfk_dHrQv8QPyZMAprzP0dWWc4WzenB5_o72bojGuwdNgWkTwG3Dw6jkFXeThf0?purpose=inline' },
      { name: 'Pec Deck — «бабочка»', sets: '3 × 10–15', note: 'Главное — сводить руки грудью, а не просто толкать их плечами.', image: 'https://images.openai.com/static-rsc-4/LDvCgenJOJ9s4DXyBCb_37Dm168TR4m7e0a41DIIUCmYphBFknlg0xjoD7aeIz8I8-wxxa9Rvwm6H5PTVW_JtMXEshKS8YsAGBs00NEsCKCxRVD5ko-By7ut7CZ7xfjOXxkbynMGJCMe8b5vteM0tnVzSqAgcPObaBH31kWY82Ip2biJxYMfKQ5kBN9r6vvy?purpose=inline' },
      { name: 'Lateral Raise Machine — разведение на среднюю дельту', sets: '3 × 10–15', note: 'Это упражнение я специально добавляю для визуальной ширины плеч.', image: 'https://images.openai.com/static-rsc-4/TbtvE3-ok5zdEcJsdT6AF9HO2jSj7CdkASYd5MrsKjDrBsoAABawiI-Y5sv624inCoBhRlz59N0gRBNTSn2fnVoin4NXKhbBYzNaXfNlEn9ktwA6cEwujqjqRLVUG1uDYbz-ivgdn9-vvIjX8rC_8QWARNma-lrSdsRhKa6ibTM?purpose=inline' },
      { name: 'Triceps Pushdown — разгибание рук на верхнем блоке', sets: '3 × 10–15', note: 'Локти стараемся держать примерно на одном месте.', image: 'https://images.openai.com/static-rsc-4/yY8gmfuljUHJdjCfcsp5CnvCOxfPgD8SsyerD2D0NwcAxc4gjYiXWcM8g5thkugwueTpv88YzRd_qpJz7f4jbzjfxrBdknpR21-90Zbx8pLjw4A3TbqGRZXlimH3fxVxUiiRz0Ec6ZOqCiRK-Yr0guOYG4sOqqUzuh9tDc-kHN0?purpose=inline' },
      { name: 'Пресс — скручивания в тренажёре', sets: '3 × 10–15', note: 'Не тяни голову руками. Скручивается именно корпус.', image: 'https://images.openai.com/static-rsc-4/LHuW0zczWny1gfu62v3khq6qI8Md28FG818wfNixDL_x6HF-LAoFd5dmd91rkYpZvOnt5GdB9p3ol85TMnBfBqpLQnLdhlFc4b3Mhx3I18TQBA4KWq3D8oHE5VU3XPqNMu7xlG44tXqIZw4Ls-dKUUrBmQjHj12i-48Ui1y3fCE?purpose=inline' }
    ]
  },
  B: {
    title: 'Тренировка B — спина + бицепс',
    duration: '50–65 мин',
    exercises: [
      { name: 'Lat Pulldown — тяга верхнего блока', sets: '3 × 8–12', note: 'Тяни перекладину к верхней части груди, а не за голову.', image: 'https://images.openai.com/static-rsc-4/RL--D9sGJUX3S31AXta13voOkabG6yBhzOt_0d8EWwfMgG9P5dqS8STDTuOSx5t4Vs5nqSuyKG4GhAoxdssBRkEMk4bZfBq-TKTQDNDOh9gysgVYRzi0Y8iFTSPfEFezXvHLZ5ZPSr6YfvrW9PVlCMjgDXZNu1m8vdgOTFGgq3o?purpose=inline' },
      { name: 'Seated Cable Row — горизонтальная тяга блока', sets: '3 × 8–12', note: 'Сначала движение локтями назад, потом возвращаем вес. Не превращай упражнение в раскачивание корпуса.', image: 'https://images.openai.com/static-rsc-4/y_ei7ysy8yF8gJE2_rdlROH2tWhMXKNLjYCk-4_wCXiKj_YbZdVqQ4LogTEVSO9ZszHnGRis0UboiiGozSF1kgQyP42D-ix-4FQxW4se-Imy2Ay94VDc8jru4lYmkGgHecHYiWiMkTvygPVWwhojRPWe2KEoZlndAzVfccuj_94?purpose=inline' },
      { name: 'Chest Supported Row — тяга с упором грудью', sets: '3 × 8–12', note: 'Отличная штука, потому что корпус практически не помогает.', image: 'https://images.openai.com/static-rsc-4/HUSRGOohduL-7vmpyRNh4kiqXygPNQ9eBCwLboY0iXzhPrVQWHLmS6W3akEKuRRE0GwPjB4TnYSr4lXyAQmoFXBFNrVVDs--CC8lFK02F9T9ZqAViiWukLtJ5wvWoq_3PMpH5Uj5hgI7bSDUakZAyfZjMuvtKc1tGr5gDge0C9E?purpose=inline' },
      { name: 'Reverse Pec Deck — обратная бабочка', sets: '3 × 12–15', note: 'Задняя дельта + верх спины.', image: 'https://images.openai.com/static-rsc-4/S2BaFtH9xRSdBIJ9NU06ihAW8vKRKostAbiCMDFUYO70kPJkVFrVJWYK-4HEeScrCbl0j_vuTPvtmKK7ooIzGl2n_gBAEdP9VIYWL3MBWeNMDkSErCMvGjxWkhU61-2aRXUdFCce-yi0-OxKPvbPMIzymtlVKHY8tgDLkJFZL80?purpose=inline' },
      { name: 'Biceps Curl Machine — сгибание рук в тренажёре', sets: '3 × 10–15', note: 'Здесь я бы предпочёл тренажёр обычным подъёмам штанги — проще контролировать движение.', image: 'https://images.openai.com/static-rsc-4/7EM_XVp9i4hAa-R0IItP73JwNdO4iLwhS-7MA5WyUx_B6Dno14vZzrNCnAYKykTKVVHT7Fh7lZDx2kKq7mW6AFMVFi8rLZeRgSphFKxB5rQ1YJigY8-Wgg5e-znuFvh_F6wP0uA7iT93hGoZbJvfX5HzB2e4apt5fkH-Dm9j-Qs?purpose=inline' },
      { name: 'Молотковые сгибания с гантелями', sets: '2 × 10–12', note: 'Сохраняем нейтральный хват и спокойное движение.', image: 'https://images.openai.com/static-rsc-4/irIOUE06yWUXnB6NhtPEeEB52tmDm1HejdNJ8KCb5OyLLOWbHCXRVayRv-5AEJczvInOMs3uB1J3Uxo8Prnp9zfMyH1HFZSIhF52HPa-55hGlGk0JSzDNt0vGpgCOiiZQ6tjaG4mOlg-7HZibnhHKukqlI5pQWy2CixWTPorOsg?purpose=inline' }
    ]
  },
  C: {
    title: 'Тренировка C — ноги + пресс',
    duration: '55–75 мин',
    exercises: [
      { name: 'Leg Press — жим ногами', sets: '4 × 8–12', note: 'Стопы примерно на ширине плеч. Не выпрямляй колени резко до щелчка.', image: 'https://images.openai.com/static-rsc-4/3R6I9LLa15g8cGbFZAtpYFY2HgigmXgTKJk9kn6AOkZRfCWMJEtrV7jRuHBiYIJa2rRxPdUgT6jtaT_Cu_2bfm5mO-pw9Ee-k3kusw7eDXZL6v9dFPGY44pvOaIeks0AmuDSyH2-km7i6ZAOZUW3OI47rwzZ8sOukPOWtJiAdFU?purpose=inline' },
      { name: 'Leg Extension — разгибание ног', sets: '3 × 10–15', note: 'Квадрицепс. Здесь можно работать достаточно контролируемо.', image: 'https://images.openai.com/static-rsc-4/M2Pp-uSkWFGA65rNhNVLXWoCZLR6EBNRxCMHcnw4FsqLumyPDQUWnKBwm2auufimSySNjZcULh_V5eROAklgcsTuHtxbkhObFcAryuTdvpnbQLamZ_3VdkR3ec8FwIwrIubnY6N-t1r414-opyn5V_p-1-v4QegEkYAJdSekoZ0?purpose=inline' },
      { name: 'Leg Curl — сгибание ног', sets: '3 × 10–15', note: 'Задняя поверхность бедра.', image: 'https://images.openai.com/static-rsc-4/MDrsm66-aeZ6J7m-DKQjKSwZJtSfuFaKwjIuyvDulNI6g2nw6GVR-NdxOqTB8IIfaVGueEJxj8GzcWbvbJzHhYUztXygpNKdm2wl-SqVgzs1ZOAtTNPGGUI6rMic9bTJanrOSGVdwd45AAECXlbO1bggFwuJe2We9oONorVU0Vo?purpose=inline' },
      { name: 'Calf Raise — икры', sets: '3 × 12–20', note: 'Спокойно, без лишней амплитуды и рывков.', image: 'https://images.openai.com/static-rsc-4/Pfl1Iy_UWCoxBT6I6FFUeEXYZtONkbLyPVaeH3ZnON70xKY4z0UWil-GWtGzVmq8A4DbaXgA6e2Q9RwBN_l6ZWsRRMaEk_HSbm05ycKdn9sN9Vo040FB4tT6qVX7wuDD7T9hKzctqTQUO8MMnx6E9lSHGeH0ve81gmbgIQAzt5k?purpose=inline' },
      { name: 'Подъём коленей в упоре', sets: '3 × 10–15', note: 'Не просто поднимаем колени, а стараемся подкручивать таз вверх.', image: 'https://images.openai.com/static-rsc-4/uWXFvGgGpMVL3oU2yFK_Mk6Wh7yiMisqs21sNjmQ00nrKNlh9-uPARTb1uC_XjiN-wkk5CrFxCacKQ5loJBE31B92GpsAYOquGqX-Z87LVKcXXcMBvlVyPqkFcGYUNJySgfb8ADlXU6oVSshywX_UAa7UvROdly8gp0BEhoHGCA?purpose=inline' },
      { name: 'Cable Crunch — скручивания на верхнем блоке', sets: '3 × 10–15', note: 'Это второе упражнение на пресс.', image: 'https://images.openai.com/static-rsc-4/LHepSXlZC-YeYcmqxgRC0Z6-tbn6QqI-o6ZAA3QXcLAlmAbyXNi_9NCW-o7eOqFP-GKMekLmLOPLluqEkPc1Eh_Oyda-4hIb_rYp37dk-MP6tVpj4n7kI5__dBtTslul2KWFWssEOhj2SfeEJOR6BUTSecgvoXCf3DIXz6QGRro?purpose=inline' }
    ]
  },
  recovery: {
    title: 'Восстановление / активный отдых',
    duration: '20–40 мин',
    exercises: [
      { name: 'Бассейн или лёгкий бег', sets: '30–40 мин', note: 'Между силовыми, не перед ними. Если восстановление плохое — убери одно из двух.', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  control: {
    title: 'День 29 — контрольная тренировка',
    duration: '45–60 мин',
    exercises: [
      { name: 'Chest Press — 3×8–12', sets: '3 × 8–12', note: 'Сделай и сравни с первой неделей.', image: 'https://images.openai.com/static-rsc-4/ONOgQwaS70d4Z-Gs6U2C3wXVimTZiHT2Lt-gy-xIjxrAFUn8JcRVOFtjfI0TfnmcGYhlVZrhQW7VmhE0AGMLobtbCjERZ1UWSIT_8_lwBID9s7e4lgPypNr2YLNatOAjFJ6hNcHjC14y_ExmVzUPP1HAy7ivLJKRJyQHWmz0blM?purpose=inline' },
      { name: 'Lat Pulldown — 3×8–12', sets: '3 × 8–12', note: 'Сравни с началом месяца.', image: 'https://images.openai.com/static-rsc-4/RL--D9sGJUX3S31AXta13voOkabG6yBhzOt_0d8EWwfMgG9P5dqS8STDTuOSx5t4Vs5nqSuyKG4GhAoxdssBRkEMk4bZfBq-TKTQDNDOh9gysgVYRzi0Y8iFTSPfEFezXvHLZ5ZPSr6YfvrW9PVlCMjgDXZNu1m8vdgOTFGgq3o?purpose=inline' },
      { name: 'Incline Dumbbell Press — 3×8–12', sets: '3 × 8–12', note: 'Проверка средней груди.', image: 'https://images.openai.com/static-rsc-4/x43FdibMUv69GMd2rc-hQoT9nEqLCvmovbl-7BPqDsYpD3Xaq_aJl5bo4AEX2XN90BIAY47z7xYBIvKC3PCsSrnTOZ75cWne5sO7jHUTfqtktfk_dHrQv8QPyZMAprzP0dWWc4WzenB5_o72bojGuwdNgWkTwG3Dw6jkFXeThf0?purpose=inline' },
      { name: 'Seated Row — 3×8–12', sets: '3 × 8–12', note: 'Проверка спины.', image: 'https://images.openai.com/static-rsc-4/y_ei7ysy8yF8gJE2_rdlROH2tWhMXKNLjYCk-4_wCXiKj_YbZdVqQ4LogTEVSO9ZszHnGRis0UboiiGozSF1kgQyP42D-ix-4FQxW4se-Imy2Ay94VDc8jru4lYmkGgHecHYiWiMkTvygPVWwhojRPWe2KEoZlndAzVfccuj_94?purpose=inline' },
      { name: 'Leg Press — 3×10–12', sets: '3 × 10–12', note: 'Ноги должны быть сильнее, чем в начале месяца.', image: 'https://images.openai.com/static-rsc-4/3R6I9LLa15g8cGbFZAtpYFY2HgigmXgTKJk9kn6AOkZRfCWMJEtrV7jRuHBiYIJa2rRxPdUgT6jtaT_Cu_2bfm5mO-pw9Ee-k3kusw7eDXZL6v9dFPGY44pvOaIeks0AmuDSyH2-km7i6ZAOZUW3OI47rwzZ8sOukPOWtJiAdFU?purpose=inline' },
      { name: 'Lateral Raise — 2×12–15', sets: '2 × 12–15', note: 'Оцени ширину плеч.', image: 'https://images.openai.com/static-rsc-4/TbtvE3-ok5zdEcJsdT6AF9HO2jSj7CdkASYd5MrsKjDrBsoAABawiI-Y5sv624inCoBhRlz59N0gRBNTSn2fnVoin4NXKhbBYzNaXfNlEn9ktwA6cEwujqjqRLVUG1uDYbz-ivgdn9-vvIjX8rC_8QWARNma-lrSdsRhKa6ibTM?purpose=inline' }
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
function exerciseId(name) { return name.split(' — ')[0].replace('Seated Row', 'Seated Cable Row'); }
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
  document.querySelector('#profileName').textContent = p.name;
  document.querySelector('#profileGoal').textContent = goalLabels[p.goal];
  document.querySelector('#profileAvatar').textContent = p.name.trim().slice(0,1).toUpperCase();
  document.querySelector('#statAge').textContent = p.age + ' лет';
  document.querySelector('#statWeight').textContent = p.weight + ' кг';
  document.querySelector('#statLevel').textContent = getLevelConfig(p.level).label;
  document.querySelector('#avatar').textContent = p.name.trim().slice(0,1).toUpperCase();
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
    const key = `${selectedDay}-${index}`;
    const done = Boolean(storage.exercises[key]);
    return `
      <article class="exercise-card ${done ? 'is-done' : ''}">
        <span class="exercise-number">${String(index + 1).padStart(2, '0')}</span>
        <div>
          <h3 class="exercise-name">${escapeHtml(exercise.name)}</h3>
          <p class="exercise-meta">${exercise.sets}</p>
          <p class="exercise-note">${escapeHtml(exercise.loadHint)}</p><details><summary>Техника выполнения</summary><p>${escapeHtml(exercise.note)}</p></details>
        </div>
        <button class="check ${done ? 'checked' : ''}" data-key="${key}" aria-pressed="${done}" aria-label="Отметить ${escapeHtml(exercise.name)}">${done ? '✓' : ''}</button>
      </article>
    `;
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
    trackerTable.innerHTML = `<tr><td colspan="5">Пока нет записей. Сохрани первый вес и повторы.</td></tr>`;
    return;
  }

  trackerTable.innerHTML = storage.tracker.slice().reverse().map((row) => `
    <tr>
      <td>${escapeHtml(row.date)}</td>
      <td>${escapeHtml(row.exercise)}</td>
      <td>${row.weight} кг</td>
      <td>${row.reps}</td>
      <td>${row.nextWeight ? `${row.nextWeight} кг` : '—'}</td>
    </tr>
  `).join('');
}

function setActiveTab(tabName) {
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
  const formData = new FormData(profileForm);
  storage.profile = {
    ...storage.profile,
    name: String(formData.get('name') || '').trim() || defaultProfile.name,
    age: Number(formData.get('age')) || defaultProfile.age,
    sex: formData.get('sex') || 'male',
    height: Number(formData.get('height')) || 178,
    weight: Number(formData.get('weight')) || 56,
    goal: formData.get('goal') || 'strength',
    level: formData.get('level') || 'intermediate',
    difficulty: formData.get('difficulty') || 'normal',
    sessionMinutes: Number(formData.get('sessionMinutes')) || 60,
    readiness: formData.get('readiness') || 'normal'
  };
  localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(storage.profile));
  renderProfileSummary();
  renderPlan();
  document.querySelector('#profileSaveStatus').textContent = 'Все изменения сохранены';
  profileForm.classList.remove('has-changes');
  toast('Профиль сохранён. План обновлён');
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

document.querySelector('#saveTracker').addEventListener('click', () => {
  const exercise = trackerExercise.value;
  const weight = Number(trackerWeight.value);
  const reps = Number(trackerReps.value);

  if (!exercise || !Number.isFinite(weight) || weight < 0 || weight > 1000 || !Number.isInteger(reps) || reps < 1 || reps > 100 || trackerWeight.value === '') { toast('Укажи вес от 0 до 1000 кг и 1–100 повторов'); return; }

  storage.tracker.push({
    date: new Date().toLocaleDateString('ru-RU'),
    exercise,
    weight,
    reps,
    nextWeight: null
  });

  localStorage.setItem(STORAGE_KEYS.tracker, JSON.stringify(storage.tracker));
  trackerWeight.value = '';
  trackerReps.value = '';
  renderTracker();
  renderPlan();
  toast('Подход записан');
});

fillProfileForm();
renderProfileSummary();
renderPlan();
renderTracker();
attachTabEvents();
setActiveTab('plan');

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
  document.querySelector('#profileSaveStatus').textContent = 'Все изменения сохранены';
  profileForm.classList.remove('has-changes');
});
