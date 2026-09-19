// Additional exercises. Equipment photos show examples, not exercise demonstrations.
const extraExerciseData = [
 {id:'db-squat',name:'Приседания с гантелью у груди',group:'dumbbells',muscles:'Ноги · ягодицы',sets:'3 × 10–12',note:'Держи гантель у груди. Опускайся в удобную глубину, колени направляй по линии стоп.',image:'assets/equipment/dumbbells.jpg',equipment:'Гантели'},
 {id:'db-rdl',name:'Румынская тяга с гантелями',group:'dumbbells',muscles:'Задняя поверхность бедра · ягодицы',sets:'3 × 8–12',note:'Отводи таз назад, держи гантели близко к ногам. Не округляй спину; глубина зависит от подвижности.',image:'assets/equipment/dumbbells.jpg',equipment:'Гантели'},
 {id:'db-lunge',name:'Обратные выпады с гантелями',group:'dumbbells',muscles:'Ноги · ягодицы',sets:'3 × 8–12',note:'Сделай шаг назад и опустись без удара коленом о пол. Повторы указаны на каждую ногу.',image:'assets/equipment/dumbbells.jpg',equipment:'Гантели'},
 {id:'db-row',name:'Тяга гантели с опорой на скамью',group:'dumbbells',muscles:'Спина',sets:'3 × 10–12',note:'Опирайся на скамью, не разворачивай корпус. Веди локоть к тазу. Повторы — на каждую сторону.',image:'assets/equipment/incline-bench.jpg',equipment:'Скамья для тяги с гантелью'},
 {id:'db-shoulder',name:'Жим гантелей сидя',group:'dumbbells',muscles:'Плечи · трицепс',sets:'3 × 8–12',note:'Настрой спинку скамьи близко к вертикали. Не прогибай поясницу; двигайся в комфортной амплитуде.',image:'assets/equipment/incline-bench.jpg',equipment:'Регулируемая скамья'},
 {id:'db-lateral',name:'Разведения гантелей в стороны',group:'dumbbells',muscles:'Плечи',sets:'3 × 10–15',note:'Слегка согни локти. Поднимай руки примерно до уровня плеч, без рывков.',image:'assets/equipment/dumbbells.jpg',equipment:'Гантели'},
 {id:'db-curl',name:'Сгибания рук с гантелями',group:'dumbbells',muscles:'Бицепс',sets:'3 × 10–15',note:'Держи локти возле корпуса. Опускай гантели плавно, не раскачивайся.',image:'assets/equipment/dumbbells.jpg',equipment:'Гантели'},
 {id:'db-triceps',name:'Разгибание рук с гантелью над головой',group:'dumbbells',muscles:'Трицепс',sets:'2 × 10–15',note:'Держи гантель двумя руками. Не переразгибай поясницу, выбирай комфортную амплитуду.',image:'assets/equipment/dumbbells.jpg',equipment:'Гантель'},
 {id:'db-floor-press',name:'Жим гантелей лёжа на полу',group:'dumbbells',muscles:'Грудь · трицепс',sets:'3 × 8–12',note:'Опускай локти до мягкого касания пола и выжимай гантели без удара друг о друга.',image:'assets/equipment/dumbbells.jpg',equipment:'Гантели'},
 {id:'db-split-squat',name:'Сплит-присед с гантелями',group:'dumbbells',muscles:'Ноги · ягодицы',sets:'2 × 8–12',note:'Стопы остаются на месте в разножке. Опускайся вертикально и держи равновесие. Повторы — на каждую ногу.',image:'assets/equipment/dumbbells.jpg',equipment:'Гантели'},
 {id:'db-calf',name:'Подъёмы на носки с гантелями',group:'dumbbells',muscles:'Икры',sets:'3 × 12–20',note:'При необходимости держись за устойчивую опору. Поднимайся и опускайся плавно.',image:'assets/equipment/dumbbells.jpg',equipment:'Гантели'},
 {id:'db-rear',name:'Разведения гантелей в наклоне',group:'dumbbells',muscles:'Задняя дельта · верх спины',sets:'2 × 10–15',note:'Наклонись с нейтральной спиной. Разводи руки без раскачивания и пожимания плечами.',image:'assets/equipment/dumbbells.jpg',equipment:'Гантели'},
 {id:'treadmill-walk',name:'Ходьба на беговой дорожке',group:'cardio',muscles:'Умеренное кардио',kind:'cardio',minutes:25,sets:'25 мин',note:'Начни с 5 минут спокойной ходьбы. Выбери темп, при котором можешь говорить фразами, и закончи 3–5 минутами заминки.',image:'assets/equipment/treadmill.jpg',equipment:'Беговая дорожка'},
 {id:'treadmill-incline',name:'Ходьба с наклоном на дорожке',group:'cardio',muscles:'Кардио · ноги',kind:'cardio',minutes:20,sets:'20 мин',note:'Добавляй наклон только если обычная ходьба комфортна. Не висни на поручнях; снижай наклон или скорость при усталости.',image:'assets/equipment/treadmill.jpg',equipment:'Беговая дорожка с наклоном'},
 {id:'treadmill-jog',name:'Лёгкий бег на дорожке',group:'cardio',muscles:'Кардио',kind:'cardio',minutes:20,sets:'20 мин',note:'Начни и закончи ходьбой. Выбирай комфортный бег; если он пока труден, чередуй короткие отрезки бега и ходьбы.',image:'assets/equipment/treadmill.jpg',equipment:'Беговая дорожка'},
 {id:'treadmill-alternate',name:'Чередование ходьбы и лёгкого бега',group:'cardio',muscles:'Кардио',kind:'cardio',minutes:20,sets:'20 мин',note:'После разминки чередуй 1 минуту комфортного бега и 2 минуты ходьбы. Можно оставить только ходьбу.',image:'assets/equipment/treadmill.jpg',equipment:'Беговая дорожка'},
 {id:'bike',name:'Велотренажёр — ровный темп',group:'cardio',muscles:'Кардио · ноги',kind:'cardio',minutes:25,sets:'25 мин',note:'Настрой высоту сиденья и умеренное сопротивление. Держи ровный темп, при котором можешь говорить фразами.',image:'assets/equipment/exercise-bike.jpg',equipment:'Велотренажёр'},
 {id:'elliptical',name:'Эллиптический тренажёр',group:'cardio',muscles:'Кардио · всё тело',kind:'cardio',minutes:20,sets:'20 мин',note:'Начни с лёгкого сопротивления. Держи корпус устойчивым, не делай резких движений.',image:'assets/equipment/elliptical.jpg',equipment:'Эллиптический тренажёр'}
, {"id":"db-fly","name":"Разведения гантелей лёжа","group":"dumbbells","muscles":"Грудь","sets":"2 × 10–15","note":"Используй небольшой вес и слегка согни локти. Не опускай плечи глубоко ниже корпуса.","image":"assets/equipment/incline-bench.jpg","equipment":"Скамья и гантели"},
{"id":"db-crunch","name":"Скручивания с лёгкой гантелью","group":"dumbbells","muscles":"Пресс","sets":"2 × 10–15","note":"Ляг на пол и держи лёгкую гантель у груди. Приподнимай лопатки, без рывков шеей. Можно выполнять без гантели.","image":"assets/equipment/dumbbells.jpg","equipment":"Лёгкая гантель"},
{"id":"db-bent-row","name":"Тяга двух гантелей в наклоне","group":"dumbbells","muscles":"Спина","sets":"3 × 8–12","note":"Отведи таз назад, сохраняй устойчивую спину. Подтягивай локти к корпусу без раскачивания.","image":"assets/equipment/dumbbells.jpg","equipment":"Гантели"},
{"id":"db-supported-row","name":"Тяга гантелей с упором грудью","group":"dumbbells","muscles":"Спина","sets":"3 × 8–12","note":"Ляг грудью на наклонную скамью. Веди локти назад без подъёма корпуса.","image":"assets/equipment/incline-bench.jpg","equipment":"Наклонная скамья и гантели"}
];

﻿const STORAGE_KEYS = {
  profile: 'gym-profile',
  draft: 'gym-profile-draft',
  progress: 'gym-progress',
  tracker: 'gym-tracker',
  exercises: 'gym-exercises',
  program: 'gym-program',
  programProgress: 'gym-program-progress',
  bodyWeight: 'gym-body-weight',
  activeWorkout: 'gym-active-workout'
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
  readiness: 'normal',
  equipment: 'machines'
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
function readStored(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
const storage = {
  profile: { ...defaultProfile, ...readStored(STORAGE_KEYS.profile, {}), ...readStored(STORAGE_KEYS.draft, {}) },
  progress: readStored(STORAGE_KEYS.progress, []),
  tracker: readStored(STORAGE_KEYS.tracker, []),
  exercises: readStored(STORAGE_KEYS.exercises, {}),
  program: readStored(STORAGE_KEYS.program, 'strength'),
  programProgress: readStored(STORAGE_KEYS.programProgress, {weightloss: []}),
  bodyWeight: readStored(STORAGE_KEYS.bodyWeight, []),
  activeWorkout: readStored(STORAGE_KEYS.activeWorkout, null)
};

storage.profile.sessionMinutes = Number(storage.profile.sessionMinutes) || 60;
storage.profile.name = typeof storage.profile.name === 'string' ? storage.profile.name : '';
for (const key of ['progress','tracker','bodyWeight']) if (!Array.isArray(storage[key])) storage[key] = [];
storage.progress = storage.progress.filter(day => Number.isInteger(day) && day >= 1 && day <= 30);
storage.tracker = storage.tracker.filter(row => row && typeof row.exercise === 'string' && (row.kind === 'cardio' ? Number.isFinite(Number(row.minutes)) : Number.isFinite(Number(row.weight)) && Number.isFinite(Number(row.reps))));
storage.bodyWeight = storage.bodyWeight.filter(row => row && Number.isFinite(Number(row.weight)) && Number(row.weight) >= 30 && Number(row.weight) <= 200);
for (const key of ['exercises','programProgress']) if (!storage[key] || typeof storage[key] !== 'object' || Array.isArray(storage[key])) storage[key] = {};
for (const [key, choices] of Object.entries({goal:['strength','mass','weightloss','tone','general'],level:['beginner','intermediate','advanced'],difficulty:['light','normal','hard'],equipment:['machines','mixed','dumbbells'],readiness:['good','normal','tired'],sessionMinutes:[30,45,60,75]})) {
 if (!choices.includes(storage.profile[key])) storage.profile[key] = defaultProfile[key];
}
if (!Array.isArray(storage.programProgress.weightloss)) storage.programProgress.weightloss = [];
const exerciseLibrary = [
  ...Object.entries(baseWorkoutData).filter(([key]) => ['A','B','C'].includes(key)).flatMap(([key, workout]) => workout.exercises.map((exercise, index) => ({...exercise, id:'base-' + key + '-' + index, group:/Dumbbell|гантел/.test(exercise.name) ? 'dumbbells' : 'machines', muscles:key === 'A' ? 'Грудь · плечи · трицепс' : key === 'B' ? 'Спина · бицепс' : 'Ноги · пресс'}))),
  ...extraExerciseData
];
function libraryItem(id) { return exerciseLibrary.find(exercise => exercise.id === id); }
function planItem(id, changes = {}) { return {...libraryItem(id), ...changes}; }
const lossWorkouts = {
 WL_A:{title:'Всё тело A · сила + ходьба',exercises:[planItem('db-squat'),planItem('base-A-0'),planItem('base-B-0'),planItem('db-rdl'),planItem('treadmill-walk',{minutes:10})]},
 WL_B:{title:'Всё тело B · гантели + кардио',exercises:[planItem('base-C-0',{sets:'3 × 10–12'}),planItem('db-row'),planItem('db-floor-press'),planItem('base-C-2'),planItem('bike',{minutes:10})]},
 WL_C:{title:'Всё тело C · техника и тонус',exercises:[planItem('db-split-squat'),planItem('base-B-1'),planItem('db-shoulder'),planItem('base-C-1'),planItem('treadmill-walk',{minutes:10})]},
 cardio:{title:'Кардио · комфортный темп',exercises:[planItem('treadmill-walk',{minutes:30})]},
 easy:{title:'Восстановление · лёгкая ходьба',exercises:[planItem('treadmill-walk',{minutes:20})]},
 rest:{title:'День отдыха',duration:'Отдых',exercises:[]}
};
const lossSchedule = [...Array.from({length:4},()=>['WL_A','cardio','WL_B','easy','WL_C','cardio','rest']).flat(),'cardio','rest'];
const programs = {
 strength:{name:'Силовая база',label:'01 / СИЛОВАЯ БАЗА',description:'Твоя исходная программа на 30 дней. Силовые тренировки и активное восстановление.',schedule,workouts:baseWorkoutData},
 weightloss:{name:'Снижение веса',label:'02 / СИЛА + КАРДИО',description:'3 силовых на всё тело, 2 занятия кардио, лёгкая ходьба и отдых каждую неделю. Снижение веса зависит также от питания и регулярности.',schedule:lossSchedule,workouts:lossWorkouts}
};
storage.program = storage.profile.goal === 'weightloss' ? 'weightloss' : 'strength';
function currentProgress() { return storage.program === 'strength' ? storage.progress : (storage.programProgress.weightloss ||= []); }
function saveCurrentProgress() { localStorage.setItem(storage.program === 'strength' ? STORAGE_KEYS.progress : STORAGE_KEYS.programProgress, JSON.stringify(storage.program === 'strength' ? storage.progress : storage.programProgress)); }
function exerciseKey(index) {
  const prefix = storage.program === 'strength' ? '' : storage.program + '-';
  const exercise = getCurrentWorkout().exercises[index];
  const variant = '-movement-' + exerciseId(exercise?.name || '');
  return prefix + selectedDay + '-' + index + variant;
}
let selectedDay = 1;
function hasCompleteProfile(profile) {
  return Boolean(profile && typeof profile.name === 'string' && profile.name.trim() &&
    Number(profile.age) >= 16 && Number(profile.age) <= 80 &&
    ['male', 'female'].includes(profile.sex) &&
    Number(profile.height) >= 140 && Number(profile.height) <= 220 &&
    Number(profile.weight) >= 30 && Number(profile.weight) <= 200);
}
// Recover a complete draft even if the page was refreshed before autosave's debounce finished.
if (hasCompleteProfile(storage.profile) && readStored(STORAGE_KEYS.draft, null)) {
 try { localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(storage.profile)); localStorage.removeItem(STORAGE_KEYS.draft); } catch {}
}
let needsOnboarding = !hasCompleteProfile(storage.profile);
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

function chooseVariant(exercise) {
  const equipment = storage.profile.equipment;
  if (exercise.kind === 'cardio' && equipment === 'dumbbells') return {...exercise, name:'Ходьба на улице', image:null, equipment:null, note:'Выбери спокойный маршрут и комфортный темп, при котором можешь говорить фразами. Начни и закончи медленной ходьбой.'};
  if (equipment === 'machines' || exercise.kind === 'cardio') return exercise;
  const alternatives = {
    'Chest Press':'db-floor-press','Pec Deck':'db-fly','Lateral Raise Machine':'db-lateral',
    'Triceps Pushdown':'db-triceps','Пресс':'db-crunch','Lat Pulldown':'db-row',
    'Seated Cable Row':'db-bent-row','Chest Supported Row':'db-supported-row',
    'Reverse Pec Deck':'db-rear','Biceps Curl Machine':'db-curl','Leg Press':'db-squat',
    'Leg Extension':'db-lunge','Leg Curl':'db-rdl','Calf Raise':'db-calf',
    'Подъём коленей в упоре':'db-crunch','Cable Crunch':'db-crunch'
  };
  const id = alternatives[exerciseId(exercise.name)];
  if (!id) return exercise;
  const week = Math.floor((selectedDay - 1) / 7);
  if (equipment === 'mixed' && (week + getProgramExerciseIndex(exercise.name)) % 2 === 0) return exercise;
  const replacement = libraryItem(id);
  return replacement ? {...replacement, sets:exercise.sets} : exercise;
}
function getProgramExerciseIndex(name) { return exerciseLibrary.findIndex(ex => exerciseId(ex.name) === exerciseId(name)); }
// Deterministic movement-based selection. No random changes on refresh.
function buildWorkout(profile, day) {
  const p = profile, goal = p.goal, full = ['weightloss','tone','general'].includes(goal);
  const type = programs[goal === 'weightloss' ? 'weightloss' : 'strength'].schedule[day - 1];
  const week = Math.floor((day - 1) / 7), session = Number(p.sessionMinutes) || 60;
  const tired = p.readiness === 'tired', simple = p.level === 'beginner' || tired;
  const used = new Set();
  const pools = {
    squat:['base-C-0','db-squat','db-split-squat','db-lunge'],
    hinge:['base-C-2','db-rdl'], push:['base-A-0','db-floor-press','base-A-1'],
    pull:['base-B-0','base-B-1','base-B-2','db-row','db-supported-row','db-bent-row'],
    shoulder:['base-A-3','db-lateral','db-shoulder'], chest:['base-A-2','db-fly'],
    triceps:['base-A-4','db-triceps'], biceps:['base-B-4','db-curl','base-B-5'],
    rear:['base-B-3','db-rear'], quad:['base-C-1','db-lunge','db-split-squat'],
    calf:['base-C-3','db-calf'], core:['base-A-5','db-crunch','base-C-4','base-C-5']
  };
  function pick(pattern) {
    let candidates = pools[pattern].map(libraryItem).filter(Boolean).filter(ex => !used.has(ex.id));
    candidates = candidates.filter(ex => p.equipment === 'mixed' || (p.equipment === 'dumbbells' ? ex.group === 'dumbbells' : ex.group === 'machines'));
    candidates.sort((a,b) => score(b) - score(a) || a.id.localeCompare(b.id));
    function score(ex) {
      const complex = ['db-rdl','db-lunge','db-split-squat','db-bent-row','db-shoulder','db-fly'].includes(ex.id);
      let value = simple ? (ex.group === 'machines' ? 8 : 0) - (complex ? 6 : 0) : (ex.group === 'dumbbells' ? 5 : 0);
      if (goal === 'strength') value += ['base-C-0','base-A-0','base-B-0','db-rdl','base-A-1','db-shoulder'].includes(ex.id) ? 5 : 0;
      if (goal === 'mass') value += ['base-A-1','base-B-2','db-rdl','db-supported-row'].includes(ex.id) ? 7 : 0;
      if (goal === 'general') value += ['base-B-1','db-floor-press','db-squat'].includes(ex.id) ? 5 : 0;
      // Stable weekly alternation only for sufficiently experienced trainees.
      if (!simple && !['strength','mass'].includes(goal)) value += (exerciseLibrary.indexOf(ex) + week + day) % 3;
      return value;
    }
    const ex = candidates[0]; if (ex) { used.add(ex.id); return {...ex}; } return null;
  }
  function cardio(minutes, easy = false) {
    if (p.equipment === 'dumbbells') return {name:'Ходьба на улице', kind:'cardio',minutes,sets:minutes+' мин',note:'Комфортный темп, при котором можешь говорить фразами.',image:null,equipment:null};
    const id = easy || simple || goal === 'general' ? 'treadmill-walk' : goal === 'tone' ? 'elliptical' : ['bike','treadmill-incline'][week % 2];
    return {...libraryItem(id),minutes,sets:minutes+' мин'};
  }
  if (type === 'rest') return {title:'День отдыха',exercises:[]};
  if (['cardio','easy','recovery'].includes(type)) return {title:type === 'cardio' ? 'Кардио · комфортный темп' : 'Активное восстановление',exercises:[cardio(Math.min(session - 7, tired ? 15 : type === 'cardio' ? 30 : 20),type !== 'cardio')]};
  let patterns;
  if (full) {
    const index = type === 'WL_B' || type === 'B' ? 1 : type === 'WL_C' || type === 'C' ? 2 : 0;
    patterns = [['squat','push','pull','hinge','core'],['hinge','pull','push','squat','core'],['squat','pull','shoulder','hinge','core']][index];
    if (goal === 'general') patterns = ['squat','pull','push','core'];
    if (goal === 'tone') patterns.push('shoulder');
  } else if (type === 'control') patterns = ['push','pull','squat','hinge','shoulder'];
  else patterns = {A:['push','chest','shoulder','triceps','core'],B:['pull','rear','biceps','core'],C:['squat','hinge','quad','calf','core']}[type];
  if (goal === 'strength' && type === 'A') patterns = ['push','shoulder','triceps','core'];
  if (p.level === 'advanced' && !tired && session >= 60 && goal === 'strength' && type === 'B') patterns.splice(1,0,'pull');
  if (goal === 'mass' && !tired && session >= 60) patterns.splice(1,0,type === 'A' ? 'push' : type === 'B' ? 'pull' : 'squat');
  const includeCardio = full;
  const count = tired || p.difficulty === 'light' ? 3 : session <= 30 ? 3 : session <= 45 ? 4 : simple ? 5 : 6;
  // At least two useful sets per movement; remove accessories before squeezing all sets to one.
  const cap = Math.max(2,Math.floor((session - 7 - (includeCardio ? 5 : 0)) / 6));
  const exercises = patterns.slice(0,Math.min(count,cap)).map(pick).filter(Boolean);
  if (includeCardio) exercises.push(cardio(session <= 30 ? 5 : goal === 'weightloss' ? 12 : 8));
  return {title:full ? (goalLabels[goal] + ' · всё тело ' + (type.replace('WL_',''))) : baseWorkoutData[type].title,exercises};
}
function getCurrentWorkout() { return buildWorkout(storage.profile, selectedDay); }
function estimateMinutes(exercises) {
  if (!exercises.length) return 0;
  return exercises.reduce((sum, ex) => sum + (ex.kind === 'cardio' ? ex.minutes : ex.sets.includes('×') ? parseSetText(ex.sets).sets * 3 : 30), 7);
}
function getAdjustedPlan(workout) {
  const adjusted = workout.exercises.map(getAdjustedExercise);
  const budget = Number(storage.profile.sessionMinutes) || 60;
  let changed = true;
  while (estimateMinutes(adjusted) > budget && changed) {
    changed = false;
    for (let index = adjusted.length - 1; index >= 0 && estimateMinutes(adjusted) > budget; index--) {
      const ex = adjusted[index];
      if (ex.kind === 'cardio' && ex.minutes > 5) { ex.minutes--; ex.sets = ex.minutes + ' мин'; changed = true; }
      else if (ex.sets.includes('×')) { const parsed = parseSetText(ex.sets); if (parsed.sets > 1) { ex.sets = (parsed.sets - 1) + ' × ' + parsed.min + '–' + parsed.max; changed = true; } }
    }
  }
  return adjusted;
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
  if (exercise.kind === 'cardio') { const minutes = Math.max(5, Math.min(Number(storage.profile.sessionMinutes) || 60, Math.round(exercise.minutes * (storage.profile.readiness === 'tired' ? 0.7 : 1)))); return {...exercise, minutes, sets:minutes + ' мин', loadHint:'Умеренный темп · скорость выбирай по самочувствию'}; }
  if (!exercise.sets.includes('×')) return { ...exercise, loadHint: 'Комфортный темп • без гонки за результатом' };
  const base = parseSetText(exercise.sets);
  const diff = getDifficultyConfig(storage.profile.difficulty);
  const level = getLevelConfig(storage.profile.level);
  const reduction = (Number(storage.profile.sessionMinutes) <= 30 ? 1 : 0) + (storage.profile.readiness === 'tired' ? 1 : 0);
  const sets = Math.min(5, Math.max(1, base.sets + diff.setsDelta + level.setsDelta - reduction));
  let min = base.min, max = base.max;
  if (storage.profile.goal === 'strength' && base.min <= 8) { min = 6; max = 10; }
  if (['tone','general','weightloss'].includes(storage.profile.goal)) { min = 10; max = 15; }
  const previous = storage.tracker.filter(row => row.kind !== 'cardio' && exerciseId(row.exercise) === exerciseId(exercise.name)).slice(-1)[0];
  const loadHint = previous ? 'Последний подход: ' + previous.weight + ' кг × ' + previous.reps + ' • начни с знакомой нагрузки' : 'Подбери вес с запасом 2–3 повтора';
  return { ...exercise, sets: sets + ' × ' + min + '–' + max, loadHint };
}

function saveProfile() {
  localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(storage.profile));
  renderProfileSummary();
  renderPlan();
}

const goalLabels = {weightloss:'Снижение веса',mass:'Набор массы',strength:'Сила и мышцы',tone:'Рельеф и тонус',general:'Общее здоровье'};
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

function roundGymWeight(value) { return Math.max(0, Math.round(value / 2.5) * 2.5); }
function recommendNextWeight(exercise, weight, reps, effort) {
 const plan = getAdjustedExercise(exercise), range = parseSetText(plan.sets), current = Number(weight);
 if (!Number.isFinite(current) || current === 0) return current || 0;
 if (effort === 'hard') return Math.max(0, Math.min(current - 2.5, roundGymWeight(current * 0.95)));
 if (effort === 'easy' || (effort === 'normal' && Number(reps) >= range.max)) return Math.max(current + 2.5, roundGymWeight(current * 1.05));
 return current;
}
function previousSetFor(name) { return storage.tracker.filter(row => row.kind !== 'cardio' && exerciseId(row.exercise) === exerciseId(name)).slice(-1)[0]; }
function recommendationText(exercise) {
 const last = previousSetFor(exercise.name); if (!last) return 'Начни с комфортного веса и оставь запас 2–3 повтора';
 const next = Number.isFinite(Number(last.nextWeight)) ? Number(last.nextWeight) : Number(last.weight);
 const reason = last.effort === 'easy' ? 'прошлый подход был лёгким' : last.effort === 'hard' ? 'прошлый подход был тяжёлым' : next > Number(last.weight) ? 'выполнен верх диапазона' : 'сохраняем рабочий вес';
 return 'Рекомендация: ' + next + ' кг · ' + reason;
}

function renderPlan() {
  const workout = getCurrentWorkout();
  const adjusted = getAdjustedPlan(workout);
  const list = document.querySelector('#exerciseList');

  list.innerHTML = adjusted.map((exercise, index) => {
    const key = exerciseKey(index);
    const done = Boolean(storage.exercises[key]);
    const logged = storage.tracker.filter(row => row.exerciseKey === key && exerciseId(row.exercise) === exerciseId(exercise.name)).length;
    const previous = previousSetFor(exercise.name);
    const strength = exercise.sets.includes('×');
    const image = exercise.image ? '<button class="equipment-photo" type="button" data-photo="' + escapeHtml(exercise.image) + '" data-equipment="' + escapeHtml(exercise.equipment) + '" aria-label="Увеличить фото: ' + escapeHtml(exercise.equipment) + '"><img src="' + escapeHtml(exercise.image) + '" alt="' + escapeHtml(exercise.equipment) + '" loading="lazy" width="640" height="640"><span>Фото оборудования · увеличить</span></button>' : '';
    return '<article class="exercise-card ' + (done ? 'is-done' : '') + '">' + image +
      '<div class="exercise-content"><div class="exercise-title-row"><div><span class="exercise-number">' + String(index + 1).padStart(2, '0') + '</span><h3 class="exercise-name">' + escapeHtml(exercise.name) + '</h3></div>' +
      '<button type="button" class="check ' + (done ? 'checked' : '') + '" data-key="' + key + '" aria-pressed="' + done + '" aria-label="Отметить ' + escapeHtml(exercise.name) + '">' + (done ? '✓' : '') + '</button></div>' +
      '<div class="exercise-plan-row"><p class="exercise-meta">' + exercise.sets + '</p>' + (strength ? '<span class="logged-sets">Записано: ' + logged + ' / ' + parseSetText(exercise.sets).sets + '</span>' : exercise.kind === 'cardio' ? '<span class="logged-sets">Записей: ' + logged + '</span>' : '') + '</div>' +
      '<p class="exercise-note">' + escapeHtml(strength ? recommendationText(exercise) : exercise.loadHint) + '</p><details><summary>Техника выполнения</summary><p>' + escapeHtml(exercise.note) + '</p></details>' +
      (strength ? '<details class="set-entry"><summary>Записать подход</summary><form class="quick-set-form" data-index="' + index + '"><div class="tracker-inline"><label>Вес, кг<input name="weight" type="number" min="0" max="1000" step="0.1" inputmode="decimal" required value="' + (previous ? escapeHtml(previous.weight) : '') + '" placeholder="Вес"></label><label>Повторы<input name="reps" type="number" min="1" max="100" step="1" inputmode="numeric" required placeholder="' + parseSetText(exercise.sets).min + '"></label></div><fieldset class="effort-choice"><legend>Как дался подход?</legend><label><input type="radio" name="effort" value="easy"><span>Легко</span></label><label><input type="radio" name="effort" value="normal" checked><span>Нормально</span></label><label><input type="radio" name="effort" value="hard"><span>Тяжело</span></label></fieldset><button type="submit" class="save-button">Сохранить подход</button></form></details>' : exercise.kind === 'cardio' ? '<details class="set-entry"><summary>Записать кардио</summary><form class="quick-cardio-form" data-index="' + index + '"><div class="tracker-inline"><label>Время, мин<input name="minutes" type="number" min="1" max="300" step="1" required value="' + exercise.minutes + '"></label><label>Скорость, км/ч · необязательно<input name="speed" type="number" min="0" max="30" step="0.1" inputmode="decimal" placeholder="Например, 5"></label></div><label>Наклон, % · необязательно<input name="incline" type="number" min="0" max="30" step="0.5" inputmode="decimal" placeholder="Например, 2"></label><button class="save-button" type="submit">Сохранить кардио</button></form></details>' : '') + '</div></article>';
  }).join('');

  document.querySelector('#todayLabel').textContent = `ДЕНЬ ${selectedDay}`;
  document.querySelector('#workoutTitle').textContent = workout.title;
  document.querySelector('#durationBadge').textContent = adjusted.length ? '≈ ' + estimateMinutes(adjusted) + ' мин' : 'Отдых';
  document.querySelector('#programGoalBadge').textContent = goalLabels[storage.profile.goal] + ' · персональный план';
  document.querySelector('#programLabel').textContent = programs[storage.program].label;
  document.querySelector('#programIntro').textContent = storage.program === 'weightloss' ? 'Больше движения. Устойчивый ритм.' : '30 дней, чтобы стать сильнее.';
  document.querySelector('#programDescription').textContent = programs[storage.program].description;
  document.querySelector('#weeklyBalance').textContent = storage.program === 'weightloss' ? '3 силовых · 2 кардио · 1 лёгкая ходьба · 1 отдых' : 'Твоя исходная силовая программа на 30 дней';
  if (!adjusted.length) list.innerHTML = '<div class="empty-state">Сегодня восстановление. Дай себе отдохнуть — завтра продолжим.</div>';
  if (estimateMinutes(adjusted) > Number(storage.profile.sessionMinutes)) document.querySelector('#durationBadge').textContent += ' · больше выбранного времени';
  document.querySelector('#exerciseCount').textContent = `${adjusted.length} ${adjusted.length === 1 ? 'упражнение' : 'упражнений'}`;
  document.querySelector('#tipText').textContent = (storage.program === 'weightloss' ? 'Держи комфортный темп. Постепенно увеличивай регулярность, без гонки за калориями. ' : getDifficultyConfig(storage.profile.difficulty).note + ' ') + 'Разминка 5–7 минут. Не увеличивай вес, пока все подходы не даются уверенно.';

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
    btn.className = `day ${day === selectedDay ? 'selected' : ''} ${currentProgress().includes(day) ? 'done' : ''}`;
    btn.innerHTML = `<small>ДЕНЬ</small>${day}<span class="day-type">${({A:'A',B:'B',C:'C',WL_A:'Сила A',WL_B:'Сила B',WL_C:'Сила C',cardio:'Кардио',easy:'Ходьба',rest:'Отдых',recovery:'Отдых',control:'Тест'})[programs[storage.program].schedule[day - 1]]}</span>`; btn.setAttribute('aria-pressed', day === selectedDay); 
    btn.addEventListener('click', () => {
      selectedDay = day;
      renderPlan();
    });
    days.appendChild(btn);
  }
}

function renderProgress() {
  const total = 30;
  const done = currentProgress().length;
  document.querySelector('#completeDay').textContent = currentProgress().includes(selectedDay) ? 'День завершён ✓ · отменить' : 'Завершить день';
  document.querySelector('#progressText').textContent = `${done} / ${total}`;
  const percent = Math.min((done / total) * 100, 100);
  document.querySelector('#progressBar').style.width = `${percent}%`;
}

function renderTracker() {
  document.querySelector('#trackerSummary').textContent = storage.tracker.length + ' подходов записано · ' + (storage.progress.length + (storage.programProgress.weightloss || []).length) + ' дней завершено';
  if (!storage.tracker.length) {
    trackerTable.innerHTML = `<tr><td colspan="5">Здесь появятся подходы, записанные в плане тренировки. Отдельно отмечать их не нужно.</td></tr>`;
    return;
  }

  trackerTable.innerHTML = storage.tracker.slice().reverse().map((row) => `
    <tr>
      <td>${escapeHtml(row.date)}</td>
      <td>${escapeHtml(row.exercise)}</td>
      <td>${row.kind === 'cardio' ? (row.speed != null ? escapeHtml(row.speed) + ' км/ч' : 'Кардио') + (row.incline != null ? ' · ' + escapeHtml(row.incline) + '%' : '') : escapeHtml(row.weight) + ' кг'}</td>
      <td>${row.kind === 'cardio' ? escapeHtml(row.minutes) + ' мин' : escapeHtml(row.reps) + ' повт.'}</td>
      <td>${row.day ? 'День ' + escapeHtml(row.day) + ' · ' + escapeHtml(programs[row.program || 'strength']?.name || '') : 'Вручную'}</td>
    </tr>
  `).join('');
}

function setActiveTab(tabName) {
  if (needsOnboarding) tabName = 'profile';
  document.querySelectorAll('.tab-view').forEach((tab) => { tab.classList.toggle('active', tab.dataset.tab === tabName); tab.hidden = tab.dataset.tab !== tabName; });
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
    readiness: data.get('readiness') || 'normal',
    equipment: data.get('equipment') || 'machines'
  };
  if (!hasCompleteProfile(profile) || !Number.isInteger(profile.age) || !Number.isInteger(profile.height)) {
    toast('Заполни имя, пол, возраст, рост и вес'); return;
  }
  try { localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile)); localStorage.removeItem(STORAGE_KEYS.draft); }
  catch { toast('Не удалось сохранить профиль. Проверь доступ к хранилищу браузера'); return; }
  const firstSave = needsOnboarding;
  storage.profile = profile;
  needsOnboarding = false;
  const nextProgram = profile.goal === 'weightloss' ? 'weightloss' : 'strength';
  if (nextProgram !== storage.program) selectedDay = 1;
  storage.program = nextProgram;
  renderOnboarding(); renderProfileSummary(); renderPlan(); renderBodyWeight(); renderTimer();
  document.querySelector('#profileSaveStatus').textContent = 'Все изменения сохранены';
  profileForm.classList.remove('has-changes');
  if (firstSave) setActiveTab('plan');
  toast(firstSave ? 'Профиль готов. Начнём тренировку!' : 'Профиль сохранён. План обновлён');
});

document.querySelector('#completeDay').addEventListener('click', () => {
  const progress = currentProgress();
  const index = progress.indexOf(selectedDay);
  if (index >= 0) {
    progress.splice(index, 1);
  } else {
    progress.push(selectedDay);
  }
  saveCurrentProgress();
  renderDays();
  renderProgress();
  renderTracker();
  document.querySelector('#planWeightStatus').textContent = progress.includes(selectedDay) ? 'День завершён. Если хочешь, запиши вес тела ниже.' : '';
});

document.querySelector('#prevDay').addEventListener('click', () => {
  selectedDay = Math.max(1, selectedDay - 1);
  renderPlan();
});

document.querySelector('#nextDay').addEventListener('click', () => {
  selectedDay = Math.min(30, selectedDay + 1);
  renderPlan();
});

function saveSet(exercise, weightValue, repsValue, index = null, effort = 'normal') {
  if (needsOnboarding) { setActiveTab('profile'); return false; }
  const weight = Number(weightValue), reps = Number(repsValue);
  if (!exercise || String(weightValue).trim() === '' || !Number.isFinite(weight) || weight < 0 || weight > 1000 || !Number.isInteger(reps) || reps < 1 || reps > 100) {
    toast('Укажи вес от 0 до 1000 кг и 1–100 повторов'); return false;
  }
  const source = getCurrentWorkout().exercises.find(item => exerciseId(item.name) === exerciseId(exercise));
  const safeEffort = ['easy','normal','hard'].includes(effort) ? effort : 'normal';
  const row = { date: new Date().toLocaleDateString('ru-RU'), timestamp: new Date().toISOString(), program:storage.program, exercise, weight, reps, effort:safeEffort, nextWeight:source ? recommendNextWeight(source,weight,reps,safeEffort) : weight };
  if (index !== null) { row.day = selectedDay; row.exerciseKey = exerciseKey(index); }
  const updated = [...storage.tracker, row];
  try { localStorage.setItem(STORAGE_KEYS.tracker, JSON.stringify(updated)); }
  catch { toast('Не удалось сохранить подход'); return false; }
  storage.tracker = updated;
  renderTracker(); renderPlan(); startRestTimer(); toast('Подход сохранён · отдых начался'); return true;
}
document.querySelector('#exerciseList').addEventListener('submit', event => {
  const form = event.target;
  if (form.classList.contains('quick-cardio-form')) { event.preventDefault(); const index = Number(form.dataset.index); const exercise = getCurrentWorkout().exercises[index]; if (!exercise || exercise.kind !== 'cardio') return; const data = new FormData(form); saveCardio(exercise.name, data.get('minutes'), data.get('speed'), data.get('incline'), index); return; }
  if (!form.classList.contains('quick-set-form')) return;
  event.preventDefault();
  const index = Number(form.dataset.index);
  const exercise = getCurrentWorkout().exercises[index];
  if (!exercise || !exercise.sets.includes('×')) return;
  const data = new FormData(form);
  saveSet(exercise.name, data.get('weight'), data.get('reps'), index, data.get('effort')); 
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

attachTabEvents();
renderOnboarding();
setActiveTab(needsOnboarding ? 'profile' : 'plan');
fillProfileForm();
renderProfileSummary();
renderPlan();
renderTracker();
renderBodyWeight();
renderOnboarding();
setActiveTab(needsOnboarding ? 'profile' : 'plan');

function toast(message) { const el = document.querySelector('#toast'); el.textContent = message; el.classList.add('visible'); clearTimeout(toast.timeout); toast.timeout = setTimeout(() => el.classList.remove('visible'), 3500); }
document.querySelector('#openProfile').addEventListener('click', () => setActiveTab('profile'));
function currentRestSeconds() { return storage.profile.goal === 'strength' ? 120 : 90; }
let timerEnd = 0, timerInterval;
function renderTimer() { const seconds = timerEnd ? Math.max(0, Math.ceil((timerEnd - Date.now()) / 1000)) : currentRestSeconds(); document.querySelector('#timerValue').textContent = String(Math.floor(seconds / 60)).padStart(2,'0') + ':' + String(seconds % 60).padStart(2,'0'); const sessionRest = document.querySelector('#sessionRest'); if (sessionRest) sessionRest.textContent = timerEnd ? 'Отдых ' + String(Math.floor(seconds / 60)).padStart(2,'0') + ':' + String(seconds % 60).padStart(2,'0') : 'Готов к подходу'; if (timerEnd && seconds === 0) { clearInterval(timerInterval); timerEnd = 0; document.querySelector('#timerStart').textContent = 'Ещё раз'; toast('Отдых завершён — следующий подход'); } }
function startRestTimer() { clearInterval(timerInterval); timerEnd = Date.now() + currentRestSeconds() * 1000; renderTimer(); timerInterval = setInterval(renderTimer, 250); document.querySelector('#timerStart').textContent = 'Начать заново'; }
document.querySelector('#timerStart').addEventListener('click', startRestTimer);
document.querySelector('#timerReset').addEventListener('click', () => { clearInterval(timerInterval); timerEnd = 0; renderTimer(); document.querySelector('#timerStart').textContent = 'Начать отдых'; });

function markProfileChanged() {
  document.querySelector('#profileSaveStatus').textContent = 'Есть несохранённые изменения';
  profileForm.classList.add('has-changes');
}
let profileSaveDelay;
function persistProfileEdits() {
 markProfileChanged();
 const draft = Object.fromEntries(new FormData(profileForm));
 try { localStorage.setItem(STORAGE_KEYS.draft, JSON.stringify(draft)); } catch { toast('Браузер не разрешает сохранять данные сайта'); }
 clearTimeout(profileSaveDelay);
 profileSaveDelay = setTimeout(() => { if (profileForm.checkValidity()) profileForm.requestSubmit(); }, 700);
}
profileForm.addEventListener('input', persistProfileEdits);
profileForm.addEventListener('change', persistProfileEdits);
profileForm.addEventListener('reset', event => {
  event.preventDefault(); clearTimeout(profileSaveDelay); localStorage.removeItem(STORAGE_KEYS.draft); fillProfileForm();
  document.querySelector('#profileSaveStatus').textContent = needsOnboarding ? 'Заполни свои данные, чтобы начать' : 'Все изменения сохранены';
  profileForm.classList.remove('has-changes');
});
function saveCardio(exercise, minutesValue, speedValue = '', inclineValue = '', index = null) {
  if (needsOnboarding) { setActiveTab('profile'); return false; }
  const minutes = Number(minutesValue);
  const speed = speedValue === '' || speedValue == null ? null : Number(speedValue);
  const incline = inclineValue === '' || inclineValue == null ? null : Number(inclineValue);
  if (!exercise || !Number.isInteger(minutes) || minutes < 1 || minutes > 300 || (speed != null && (!Number.isFinite(speed) || speed < 0 || speed > 30)) || (incline != null && (!Number.isFinite(incline) || incline < 0 || incline > 30))) {
    toast('Укажи 1–300 минут; скорость и наклон можно оставить пустыми'); return false;
  }
  const row = {date:new Date().toLocaleDateString('ru-RU'), timestamp:new Date().toISOString(), program:storage.program, kind:'cardio', exercise, minutes, speed, incline};
  if (index !== null) { row.day = selectedDay; row.exerciseKey = exerciseKey(index); }
  const updated = [...storage.tracker, row];
  try { localStorage.setItem(STORAGE_KEYS.tracker, JSON.stringify(updated)); }
  catch { toast('Не удалось сохранить кардио'); return false; }
  storage.tracker = updated; renderTracker(); renderPlan(); toast('Кардио записано в журнал'); return true;
}
function saveBodyWeight(value, context = 'after') {
  if (needsOnboarding) { setActiveTab('profile'); return false; }
  const weight = Number(String(value).replace(',', '.'));
  if (String(value ?? '').trim() === '' || !Number.isFinite(weight) || weight < 30 || weight > 200 || !['after','morning','other'].includes(context)) {
    toast('Укажи вес тела от 30 до 200 кг'); return false;
  }
  const row = {weight, context, date:new Date().toLocaleDateString('ru-RU'), timestamp:new Date().toISOString(), day:selectedDay, program:storage.program, beforeWeight:Number(storage.profile.weight)};
  const updated = [...storage.bodyWeight, row];
  const profile = {...storage.profile, weight};
  try {
    localStorage.setItem(STORAGE_KEYS.bodyWeight, JSON.stringify(updated));
    const draft = readStored(STORAGE_KEYS.draft, null); if (draft) localStorage.setItem(STORAGE_KEYS.draft, JSON.stringify({...draft, weight}));
    localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile));
  } catch { toast('Не удалось сохранить вес тела'); return false; }
  storage.bodyWeight = updated; storage.profile = profile;
  const field = profileForm.elements.namedItem('weight'); if (field) field.value = weight;
  renderProfileSummary(); renderBodyWeight();
  toast('Вес тела сохранён'); return true;
}
function renderBodyWeight() {
  const rows = storage.bodyWeight;
  const last = rows.slice(-1)[0];
  const initial = Number(rows[0]?.beforeWeight) || Number(rows[0]?.weight) || Number(last?.weight);
  const delta = last ? Math.round((last.weight - initial) * 10) / 10 : 0;
  document.querySelector('#bodyWeightSummary').innerHTML = '<div class="weight-metric"><span>Последний замер</span><strong>' + (last ? escapeHtml(last.weight) : '—') + '<small> кг</small></strong><p>' + (last ? escapeHtml(last.date) : 'Добавь первый замер') + '</p></div><div class="weight-metric"><span>От первого веса</span><strong>' + (last ? (delta > 0 ? '+' : '') + delta : '—') + '<small> кг</small></strong><p>' + rows.length + ' замеров в истории</p></div>';
  const labels = {after:'После тренировки',morning:'Утром',other:'Другой замер'};
  document.querySelector('#bodyWeightTable').innerHTML = rows.length ? rows.slice().reverse().map(row => '<tr><td>' + escapeHtml(row.date) + '</td><td>' + escapeHtml(row.weight) + ' кг</td><td>' + escapeHtml(labels[row.context] || 'Другой замер') + '</td></tr>').join('') : '<tr><td colspan="3">История веса тела появится здесь.</td></tr>';
  document.querySelector('#planWeightStatus').textContent = last ? 'Последний замер: ' + last.weight + ' кг · ' + last.date : '';
}
const weightDialog = document.querySelector('#weightDialog');
let weightTrigger = null;
function closeWeightDialog() { if (typeof weightDialog.close === 'function') weightDialog.close(); else weightDialog.removeAttribute('open'); weightTrigger?.focus(); }
document.querySelectorAll('[data-open-weight]').forEach(button => button.addEventListener('click', () => {
 weightTrigger = button; const field = document.querySelector('#bodyWeightInput'); field.value = storage.profile.weight || '';
 if (typeof weightDialog.showModal === 'function') weightDialog.showModal(); else weightDialog.setAttribute('open','');
 field.focus(); field.select();
}));
document.querySelector('#closeWeightDialog').addEventListener('click',closeWeightDialog);
document.querySelector('#planBodyWeightForm').addEventListener('submit', event => {
 event.preventDefault(); const data = new FormData(event.target);
 if (saveBodyWeight(data.get('bodyWeight'), data.get('context') || 'after')) {event.target.reset(); closeWeightDialog();}
});
document.querySelector('#editTrainingGoal').addEventListener('click', () => setActiveTab('profile'));

const workoutDialog = document.querySelector('#workoutDialog');
let sessionClock;
function saveActiveWorkout() { try { localStorage.setItem(STORAGE_KEYS.activeWorkout,JSON.stringify(storage.activeWorkout)); } catch {} }
function openWorkout() {
 if (needsOnboarding) { setActiveTab('profile'); return; }
 const exercises=getAdjustedPlan(getCurrentWorkout()); if (!exercises.length) { toast('Сегодня день восстановления'); return; }
 const current=storage.activeWorkout;
 if (!current || current.day!==selectedDay || current.program!==storage.program) storage.activeWorkout={day:selectedDay,program:storage.program,index:0,startedAt:Date.now()};
 saveActiveWorkout(); renderWorkoutMode();
 if (typeof workoutDialog.showModal==='function') workoutDialog.showModal(); else workoutDialog.setAttribute('open','');
 clearInterval(sessionClock);sessionClock=setInterval(renderSessionElapsed,1000);renderSessionElapsed();
}
function closeWorkout() { clearInterval(sessionClock); if(typeof workoutDialog.close==='function')workoutDialog.close();else workoutDialog.removeAttribute('open'); }
function sessionExercises(){return getAdjustedPlan(getCurrentWorkout());}
function renderSessionElapsed(){const el=document.querySelector('#sessionElapsed');if(!el||!storage.activeWorkout)return;const sec=Math.max(0,Math.floor((Date.now()-storage.activeWorkout.startedAt)/1000));el.textContent=String(Math.floor(sec/60)).padStart(2,'0')+':'+String(sec%60).padStart(2,'0');}
function finishWorkout(){const elapsed=Math.max(1,Math.round((Date.now()-storage.activeWorkout.startedAt)/60000));const rows=storage.tracker.filter(r=>r.day===selectedDay&&r.program===storage.program);if(!currentProgress().includes(selectedDay)){currentProgress().push(selectedDay);saveCurrentProgress();}storage.activeWorkout=null;localStorage.removeItem(STORAGE_KEYS.activeWorkout);renderDays();renderProgress();renderTracker();document.querySelector('#sessionContent').innerHTML='<section class="session-finish"><span>✓</span><p class="eyebrow">ТРЕНИРОВКА ЗАВЕРШЕНА</p><h2>Отличная работа</h2><div><strong>'+elapsed+' мин</strong><small>время</small></div><div><strong>'+rows.length+'</strong><small>подходов и записей</small></div><button class="save-button" type="button" id="finishClose">Готово</button></section>';document.querySelector('#sessionStep').textContent='ИТОГ';document.querySelector('#sessionProgressBar').style.width='100%';document.querySelector('.session-footer').hidden=true;document.querySelector('#finishClose').addEventListener('click',closeWorkout);}
function renderWorkoutMode(){const list=sessionExercises(), state=storage.activeWorkout;if(!state)return;if(state.index>=list.length){finishWorkout();return;}const ex=list[state.index],cardio=ex.kind==='cardio',prev=previousSetFor(ex.name),key=exerciseKey(state.index),logged=storage.tracker.filter(r=>r.exerciseKey===key).length,target=cardio?1:parseSetText(ex.sets).sets;document.querySelector('.session-footer').hidden=false;document.querySelector('#sessionStep').textContent='УПРАЖНЕНИЕ '+(state.index+1)+' ИЗ '+list.length;document.querySelector('#sessionProgressBar').style.width=((state.index+logged/Math.max(1,target))/list.length*100)+'%';document.querySelector('#sessionPrev').disabled=state.index===0;document.querySelector('#sessionNext').textContent=state.index===list.length-1?'Завершить':'Следующее';const photo=ex.image?'<img class="session-photo" src="'+escapeHtml(ex.image)+'" alt="'+escapeHtml(ex.equipment||ex.name)+'">':'';const entry=cardio?'<form id="sessionEntry"><div class="session-fields"><label>Время, мин<input name="minutes" type="number" min="1" max="300" required value="'+ex.minutes+'"></label></div><button class="save-button" type="submit">Сохранить кардио</button></form>':'<form id="sessionEntry"><p class="session-set-count">Подход '+Math.min(logged+1,target)+' из '+target+'</p><div class="session-fields"><label>Вес, кг<input name="weight" type="number" min="0" max="1000" step="0.1" inputmode="decimal" required value="'+escapeHtml(prev?.nextWeight??prev?.weight??'')+'" placeholder="0"></label><label>Повторы<input name="reps" type="number" min="1" max="100" required value="'+parseSetText(ex.sets).min+'"></label></div><fieldset class="effort-choice"><legend>Как дался подход?</legend><label><input type="radio" name="effort" value="easy"><span>Легко</span></label><label><input type="radio" name="effort" value="normal" checked><span>Нормально</span></label><label><input type="radio" name="effort" value="hard"><span>Тяжело</span></label></fieldset><button class="save-button" type="submit">Подход выполнен</button></form>';document.querySelector('#sessionContent').innerHTML=photo+'<div class="session-exercise"><div class="session-rest" id="sessionRest">'+(timerEnd?'Идёт отдых':'Готов к подходу')+'</div><h2 id="sessionExerciseName">'+escapeHtml(ex.name)+'</h2><p class="session-prescription">'+escapeHtml(ex.sets)+'</p><p class="session-recommendation">'+escapeHtml(cardio?ex.loadHint:recommendationText(ex))+'</p><details><summary>Техника выполнения</summary><p>'+escapeHtml(ex.note)+'</p></details>'+entry+'</div>';document.querySelector('#sessionEntry').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.target);if(cardio){if(saveCardio(ex.name,d.get('minutes'),'','',state.index)){state.index++;saveActiveWorkout();renderWorkoutMode();}}else if(saveSet(ex.name,d.get('weight'),d.get('reps'),state.index,d.get('effort'))){const count=storage.tracker.filter(r=>r.exerciseKey===key).length;if(count>=target)state.index++;saveActiveWorkout();renderWorkoutMode();}});renderTimer();}
document.querySelector('#startWorkout').addEventListener('click',openWorkout);document.querySelector('#closeWorkout').addEventListener('click',closeWorkout);document.querySelector('#sessionPrev').addEventListener('click',()=>{if(storage.activeWorkout){storage.activeWorkout.index=Math.max(0,storage.activeWorkout.index-1);saveActiveWorkout();renderWorkoutMode();}});document.querySelector('#sessionNext').addEventListener('click',()=>{if(!storage.activeWorkout)return;storage.activeWorkout.index++;saveActiveWorkout();renderWorkoutMode();});workoutDialog.addEventListener('cancel',()=>clearInterval(sessionClock));
if ('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
renderTimer();
