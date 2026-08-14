
/* ============================= DATA ============================= */

const CATEGORIES = [
  { id:'mind', name:'Mind', desc:'Reading, learning, growing your thinking', icon:'mind' },
  { id:'body', name:'Body', desc:'Exercise, running, walking, staying fit', icon:'body' },
  { id:'voice', name:'Voice', desc:'How you speak, listen, and connect', icon:'voice' },
  { id:'hygiene', name:'Hygiene', desc:'Bathing, grooming, keeping clean', icon:'hygiene' },
  { id:'rest', name:'Rest', desc:'Sleep quality and wind-down rituals', icon:'rest' },
  { id:'fuel', name:'Fuel', desc:'Nutrition, hydration, what you eat', icon:'fuel' },
  { id:'focus', name:'Focus', desc:'Deep work, attention, distraction control', icon:'focus' },
  { id:'craft', name:'Craft', desc:'Creative practice and skill-building', icon:'craft' },
];

const ICONS = {
  mind:  '<path d="M4 5c0 0 4-1 8 1 4-2 8-1 8-1v13c0 0-4-1-8 1-4-2-8-1-8-1V5z"/><path d="M12 6v13"/>',
  body:  '<circle cx="15.5" cy="5" r="1.8"/><path d="M9 21l2-6-3-4 3-3 4 2 3-2M11 15l5 2 -1 4"/>',
  voice: '<path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 4v-4H6a2 2 0 0 1-2-2V6z"/>',
  hygiene:'<path d="M12 3c0 0-6 8-6 12a6 6 0 0 0 12 0c0-4-6-12-6-12z"/>',
  rest:  '<path d="M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z"/>',
  fuel:  '<path d="M5 20C5 10 13 4 20 4c0 7-6 16-15 16z"/><path d="M5 20l8-8"/>',
  focus: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/>',
  craft: '<path d="M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2z"/>',
  flame: '<path d="M12 2C12 2 6 9 6 14a6 6 0 0 0 12 0c0-2-1-3.5-2-4.5.2 1.5-.5 2.5-1.5 2.5C13 12 13.5 9.5 12 2z"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  sun:   '<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8"/>',
  bars:  '<line x1="5" y1="20" x2="5" y2="11"/><line x1="12" y1="20" x2="12" y2="5"/><line x1="19" y1="20" x2="19" y2="14"/>',
  grid:  '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  list:  '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="4" cy="6" r="1.2" fill="currentColor"/><circle cx="4" cy="12" r="1.2" fill="currentColor"/><circle cx="4" cy="18" r="1.2" fill="currentColor"/>',
  plus:  '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  chevL: '<polyline points="15 18 9 12 15 6"/>',
  chevR: '<polyline points="9 18 15 12 9 6"/>',
  edit:  '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>',
  trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>',
  x:     '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  back:  '<polyline points="15 18 9 12 15 6"/>',
};
function svgIcon(name, extra){
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" ${extra||''}>${ICONS[name]||''}</svg>`;
}

const QUOTES = [
  ["Discipline is the bridge between goals and accomplishment.","Jim Rohn"],
  ["We are what we repeatedly do. Excellence, then, is not an act but a habit.","Aristotle"],
  ["The chains of habit are too weak to be felt until they are too strong to be broken.","Samuel Johnson"],
  ["Small daily improvements are the key to staggering long-term results.","Robin Sharma"],
  ["Motivation gets you going, but discipline keeps you growing.","John C. Maxwell"],
  ["You will never change your life until you change something you do daily.","Mike Murdock"],
  ["The successful warrior is the average man, with laser-like focus.","Bruce Lee"],
  ["Every action you take is a vote for the type of person you wish to become.","James Clear"],
  ["It is not that we have a short time to live, but that we waste a lot of it.","Seneca"],
  ["He who has a why to live can bear almost any how.","Friedrich Nietzsche"],
  ["The pain of discipline weighs ounces; the pain of regret weighs tons.","Jim Rohn"],
  ["First we form habits, then they form us.","Rob Gilbert"],
  ["A river cuts through rock not because of its power, but its persistence.","Jim Watkins"],
  ["What you do every day matters more than what you do once in a while.","Gretchen Rubin"],
  ["Ambition is the path to success. Persistence is the vehicle you arrive in.","Bill Bradley"],
  ["Do the hard jobs first. The easy jobs will take care of themselves.","Dale Carnegie"],
  ["Never mistake motion for action.","Ernest Hemingway"],
  ["Your future is created by what you do today, not tomorrow.","Robert Kiyosaki"],
  ["The height of your success is determined by the depth of your commitment.","Ifeanyi Onuoha"],
  ["Consistency is what transforms average into excellence.","Anonymous"],
  ["Slow progress is still progress.","Anonymous"],
  ["Fall seven times, stand up eight.","Japanese Proverb"],
  ["Great works are performed not by strength but by perseverance.","Samuel Johnson"],
  ["Well begun is half done.","Aristotle"],
  ["Losing an hour in the morning can chase you all day.","Richard Whately"],
  ["Whatever you do, do it well.","Walt Disney"],
  ["The secret of getting ahead is getting started.","Mark Twain"],
  ["Energy and persistence conquer all things.","Benjamin Franklin"],
  ["Don't watch the clock; do what it does. Keep going.","Sam Levenson"],
  ["Nothing will work unless you do.","Maya Angelou"],
  ["Amateurs sit and wait for inspiration. The rest of us just get up and go to work.","Stephen King"],
  ["A year from now you may wish you had started today.","Karen Lamb"],
  ["Discipline equals freedom.","Jocko Willink"],
  ["Habits are the compound interest of self-improvement.","James Clear"],
  ["Winners are not people who never fail, but people who never quit.","Anonymous"],
  ["You don't have to be great to start, but you have to start to be great.","Zig Ziglar"],
];

/* ============================= STATE ============================= */

let STATE = null;
let ROUTE = { page:'today', param:null };
let weekOffset = 0; // for weekly page
let yearOffset = 0; // for annual page

function uid(){ return 'h_' + Math.random().toString(36).slice(2,10) + Date.now().toString(36).slice(-4); }

function defaultState(){
  return {
    habits: [],
    completions: {}, // habitId -> [dateStr,...]
    createdAt: todayStr(),
  };
}

async function loadState(){
  try{
    const res = await window.storage.get('ambition-data', false);
    if(res && res.value){
      STATE = JSON.parse(res.value);
      if(!STATE.habits) STATE.habits = [];
      if(!STATE.completions) STATE.completions = {};
    } else {
      STATE = defaultState();
      await saveState();
    }
  } catch(e){
    STATE = defaultState();
    try{ await saveState(); }catch(e2){}
  }
}
let saveTimer=null;
function saveState(){
  return new Promise((resolve)=>{
    clearTimeout(saveTimer);
    saveTimer = setTimeout(async ()=>{
      try{ await window.storage.set('ambition-data', JSON.stringify(STATE), false); }
      catch(e){ console.error('save failed', e); }
      resolve();
    }, 120);
  });
}

/* ============================= DATE UTILS ============================= */

function pad(n){ return n<10 ? '0'+n : ''+n; }
function todayStr(d){ d = d || new Date(); return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; }
function parseDate(s){ const [y,m,d] = s.split('-').map(Number); return new Date(y, m-1, d); }
function dowOf(dateStr){ return parseDate(dateStr).getDay(); } // 0 Sun .. 6 Sat
function addDays(dateStr, n){ const d = parseDate(dateStr); d.setDate(d.getDate()+n); return todayStr(d); }
function startOfWeek(dateStr){ // Monday
  const d = parseDate(dateStr);
  const day = d.getDay();
  const diff = (day===0? -6 : 1-day);
  d.setDate(d.getDate()+diff);
  return todayStr(d);
}
function weekDates(startStr){
  const arr=[]; for(let i=0;i<7;i++) arr.push(addDays(startStr,i)); return arr;
}
function monthKey(dateStr){ return dateStr.slice(0,7); }
function yearKey(dateStr){ return dateStr.slice(0,4); }
function isoWeekKey(dateStr){
  const d = parseDate(dateStr);
  const target = new Date(d.valueOf());
  const dayNr = (d.getDay()+6)%7;
  target.setDate(target.getDate()-dayNr+3);
  const firstThursday = new Date(target.getFullYear(),0,4);
  const diff = target - firstThursday;
  const week = 1 + Math.round((diff/86400000 - 3 + ((firstThursday.getDay()+6)%7))/7);
  return `${target.getFullYear()}-W${pad(week)}`;
}
const DOW_LABELS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const DOW_SHORT = ['S','M','T','W','T','F','S'];
const MONTH_LABELS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

/* ============================= DOMAIN LOGIC ============================= */

function habitsByCategory(catId){ return STATE.habits.filter(h=>h.category===catId && !h.archived); }
function isDone(habitId, dateStr){
  const arr = STATE.completions[habitId];
  return !!(arr && arr.includes(dateStr));
}
function toggleCompletion(habitId, dateStr){
  if(!STATE.completions[habitId]) STATE.completions[habitId] = [];
  const arr = STATE.completions[habitId];
  const idx = arr.indexOf(dateStr);
  if(idx>=0) arr.splice(idx,1); else arr.push(dateStr);
  saveState();
}

function isDueOn(habit, dateStr){
  const f = habit.frequency;
  if(f.type==='daily') return true;
  if(f.type==='once') return f.date===dateStr;
  if(f.type==='weekdays') return (f.days||[]).includes(dowOf(dateStr));
  if(f.type==='weekly_count' || f.type==='monthly_count' || f.type==='yearly_count') return true;
  return true;
}

function freqLabel(f){
  if(f.type==='daily') return 'Every day';
  if(f.type==='once') return 'Once · ' + f.date;
  if(f.type==='weekdays') return (f.days||[]).map(d=>DOW_SHORT[d]).join(' ');
  if(f.type==='weekly_count') return f.count+'x / week';
  if(f.type==='monthly_count') return f.count+'x / month';
  if(f.type==='yearly_count') return f.count+'x / year';
  return '';
}

function periodTarget(habit){
  const f=habit.frequency;
  if(f.type==='weekly_count') return {n:f.count, key:isoWeekKey};
  if(f.type==='monthly_count') return {n:f.count, key:monthKey};
  if(f.type==='yearly_count') return {n:f.count, key:yearKey};
  return null;
}
function periodProgress(habit, dateStr){
  const pt = periodTarget(habit); if(!pt) return null;
  const key = pt.key(dateStr);
  const arr = STATE.completions[habit.id] || [];
  const count = arr.filter(d => pt.key(d)===key).length;
  return { count, target: pt.n };
}

// Consecutive-day / consecutive-scheduled-day / consecutive-period streak
function habitStreak(habit){
  const f = habit.frequency;
  const arr = STATE.completions[habit.id] || [];
  const doneSet = new Set(arr);
  const today = todayStr();

  if(f.type==='once'){ return doneSet.has(f.date) ? 1 : 0; }

  if(f.type==='daily' || f.type==='weekdays'){
    let streak=0;
    let cursor = today;
    // if today is scheduled but not done, start from yesterday
    const dueToday = isDueOn(habit, today);
    if(dueToday && !doneSet.has(today)) cursor = addDays(today,-1);
    let guard=0;
    while(guard<3660){
      guard++;
      if(isDueOn(habit,cursor)){
        if(doneSet.has(cursor)){ streak++; cursor = addDays(cursor,-1); }
        else break;
      } else {
        cursor = addDays(cursor,-1);
      }
    }
    return streak;
  }

  if(f.type==='weekly_count' || f.type==='monthly_count' || f.type==='yearly_count'){
    const pt = periodTarget(habit);
    // group completions by period
    const counts = {};
    arr.forEach(d=>{ const k=pt.key(d); counts[k]=(counts[k]||0)+1; });
    const curKey = pt.key(today);
    let streak=0;
    let cursor = today;
    let step = f.type==='weekly_count' ? -7 : (f.type==='monthly_count' ? 'month' : 'year');
    // if current period not yet met, skip it and start counting from previous period
    let periodsBack = 0;
    let started = (counts[curKey]||0) >= pt.n;
    if(!started){ periodsBack = 1; }
    let guard=0;
    while(guard<600){
      guard++;
      const d = shiftPeriod(today, f.type, -periodsBack);
      const k = pt.key(d);
      if((counts[k]||0) >= pt.n){ streak++; periodsBack++; }
      else break;
    }
    return streak;
  }
  return 0;
}
function shiftPeriod(dateStr, type, n){
  const d = parseDate(dateStr);
  if(type==='weekly_count') d.setDate(d.getDate()+n*7);
  else if(type==='monthly_count') d.setMonth(d.getMonth()+n);
  else if(type==='yearly_count') d.setFullYear(d.getFullYear()+n);
  return todayStr(d);
}

function categoriesTouchedOn(dateStr){
  const set = new Set();
  STATE.habits.forEach(h=>{ if(!h.archived && isDone(h.id, dateStr)) set.add(h.category); });
  return set;
}
function dayRuleMet(dateStr){ return categoriesTouchedOn(dateStr).size >= 3; }

function categoriesTouchedInRange(startStr, endStr){
  const set = new Set();
  STATE.habits.forEach(h=>{
    if(h.archived) return;
    const arr = STATE.completions[h.id]||[];
    if(arr.some(d=> d>=startStr && d<=endStr)) set.add(h.category);
  });
  return set;
}

function computeOverallStreak(){
  const today = todayStr();
  let cursor = today;
  if(!dayRuleMet(today)) cursor = addDays(today,-1);
  let streak=0, guard=0;
  while(guard<3660){
    guard++;
    if(dayRuleMet(cursor)){ streak++; cursor=addDays(cursor,-1); } else break;
  }
  return streak;
}

function totalCompletionsOn(dateStr){
  let n=0;
  STATE.habits.forEach(h=>{ if(isDone(h.id,dateStr)) n++; });
  return n;
}
function totalDueOn(dateStr){
  let n=0;
  STATE.habits.forEach(h=>{ if(!h.archived && (isDueOn(h,dateStr))) n++; });
  return n;
}

/* ============================= RENDER: SHELL ============================= */

function renderShell(){
  const nav = document.getElementById('primary-nav');
  const pages = [
    {id:'today', label:'Today', icon:'sun'},
    {id:'weekly', label:'Weekly', icon:'bars'},
    {id:'annual', label:'Annual', icon:'grid'},
    {id:'habits', label:'Habits', icon:'list'},
  ];
  nav.innerHTML = pages.map(p=>`
    <a href="#/${p.id}" class="nav-link ${ROUTE.page===p.id?'active':''}">${svgIcon(p.icon)}<span>${p.label}</span></a>
  `).join('');

  const catNav = document.getElementById('cat-nav');
  catNav.innerHTML = CATEGORIES.map(c=>{
    const weekTouched = categoriesTouchedInRange(startOfWeek(todayStr()), addDays(startOfWeek(todayStr()),6)).has(c.id);
    const active = ROUTE.page==='category' && ROUTE.param===c.id;
    return `<a href="#/category/${c.id}" class="cat-nav-link ${active?'active':''}">${svgIcon(c.icon)}<span>${c.name}</span><span class="cat-dot ${weekTouched?'done':''}"></span></a>`;
  }).join('');

  document.getElementById('sidebar-streak').textContent = computeOverallStreak();
}

/* ============================= RENDER: TODAY ============================= */

function ringSvg(rings, size){
  size = size || 168;
  const c = size/2;
  let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`;
  rings.forEach((r,i)=>{
    const radius = c - 10 - i*20;
    const circ = 2*Math.PI*radius;
    const pct = Math.max(0, Math.min(1, r.pct));
    const dash = circ*pct;
    svg += `<circle cx="${c}" cy="${c}" r="${radius}" fill="none" stroke="var(--border-soft)" stroke-width="10"/>`;
    svg += `<circle cx="${c}" cy="${c}" r="${radius}" fill="none" stroke="${r.color}" stroke-width="10" stroke-linecap="round"
      stroke-dasharray="${dash} ${circ}" transform="rotate(-90 ${c} ${c})" style="transition:stroke-dasharray .6s ease; filter:${r.glow? 'drop-shadow(0 0 5px '+r.color+'55)':'none'}"/>`;
  });
  svg += `</svg>`;
  return svg;
}

function renderToday(){
  const today = todayStr();
  const catsTouched = categoriesTouchedOn(today);
  const weekStart = startOfWeek(today);
  const weekEnd = addDays(weekStart,6);
  const catsWeek = categoriesTouchedInRange(weekStart, weekEnd);
  const dueToday = STATE.habits.filter(h=>!h.archived && isDueOn(h,today));
  const doneToday = dueToday.filter(h=>isDone(h.id,today));
  const dayPct = dueToday.length ? doneToday.length/dueToday.length : 0;
  const catPct = Math.min(1, catsTouched.size/3);
  const weekPct = catsWeek.size/8;

  const quoteIdx = dayOfYear(new Date()) % QUOTES.length;
  const [qText,qAuthor] = QUOTES[quoteIdx];

  const rings = ringSvg([
    {pct:dayPct, color:'var(--slate)'},
    {pct:catPct, color:'var(--gold)', glow:true},
    {pct:weekPct, color:'#aab4c2'},
  ]);

  let html = `
  <div class="page-head">
    <div>
      <div class="eyebrow">${new Date().toLocaleDateString('en-US',{weekday:'long'})}</div>
      <h1 class="page-title">Today's Ambition</h1>
      <div class="page-sub">${new Date().toLocaleDateString('en-US',{month:'long', day:'numeric', year:'numeric'})} — complete habits in at least <strong>3 categories</strong> to keep your streak alive.</div>
    </div>
    <button class="btn btn-primary" onclick="openHabitModal()">${svgIcon('plus')} New habit</button>
  </div>

  <div class="grid grid-2" style="margin-bottom:18px;">
    <div class="card">
      <div class="card-head"><div class="card-title">Today's momentum</div><span class="tag mono">${doneToday.length}/${dueToday.length} done</span></div>
      <div class="ring-wrap">
        ${rings}
        <div class="ring-legend">
          <div class="legend-row"><span class="legend-dot" style="background:var(--slate)"></span><span class="legend-text">Habits completed today</span><span class="legend-val">${Math.round(dayPct*100)}%</span></div>
          <div class="legend-row"><span class="legend-dot" style="background:var(--gold)"></span><span class="legend-text">Categories touched (goal: 3)</span><span class="legend-val">${catsTouched.size}/3</span></div>
          <div class="legend-row"><span class="legend-dot" style="background:#aab4c2"></span><span class="legend-text">Categories this week (goal: 8)</span><span class="legend-val">${catsWeek.size}/8</span></div>
        </div>
      </div>
      <div class="chip-row" style="margin-top:18px;">
        ${CATEGORIES.map(c=>{
          const done = catsTouched.has(c.id);
          return `<span class="goal-chip ${done?'done':''}">${done?svgIcon('check'):svgIcon(c.icon)}${c.name}</span>`;
        }).join('')}
      </div>
    </div>

    <div class="card quote-card" style="display:flex; flex-direction:column; justify-content:center;">
      <div class="card-title" style="margin-bottom:14px;">Today's quote</div>
      <div class="quote-text">${qText}</div>
      <div class="quote-author">— ${qAuthor}</div>
    </div>
  </div>

  <div class="card" style="margin-bottom:18px;">
    <div class="card-head"><div class="card-title">Streak <span class="tag">consecutive days meeting the 3-category goal</span></div></div>
    <div class="stat-strip">
      <div class="stat-box"><div class="stat-num mono">${computeOverallStreak()}</div><div class="stat-label">Current streak</div></div>
      <div class="stat-box"><div class="stat-num mono">${longestStreak()}</div><div class="stat-label">Longest streak</div></div>
      <div class="stat-box"><div class="stat-num mono">${totalCompletionsAllTime()}</div><div class="stat-label">Total completions</div></div>
      <div class="stat-box"><div class="stat-num mono">${STATE.habits.filter(h=>!h.archived).length}</div><div class="stat-label">Active habits</div></div>
    </div>
  </div>

  <div id="today-habit-list"></div>
  `;
  document.getElementById('main').innerHTML = html;
  renderTodayHabitList();
}

function renderTodayHabitList(){
  const today = todayStr();
  let html = `<div class="card"><div class="card-head"><div class="card-title">Habits due today</div></div>`;
  let any=false;
  CATEGORIES.forEach(cat=>{
    const habits = habitsByCategory(cat.id).filter(h=>isDueOn(h,today));
    if(!habits.length) return;
    any=true;
    const doneCount = habits.filter(h=>isDone(h.id,today)).length;
    html += `<div class="cat-block">
      <div class="cat-block-head">
        <div class="cat-icon">${svgIcon(cat.icon)}</div>
        <div class="cat-block-title">${cat.name}</div>
        <div class="cat-block-meta">${doneCount}/${habits.length}</div>
      </div>`;
    habits.forEach(h=>{
      const done = isDone(h.id, today);
      const streak = habitStreak(h);
      const pp = periodProgress(h, today);
      html += `<div class="habit-row">
        <div class="check ${done?'checked':''}" onclick="handleToggle('${h.id}')">${svgIcon('check')}</div>
        <div class="habit-info">
          <div class="habit-name ${done?'checked':''}">${escapeHtml(h.name)}</div>
          <div class="habit-meta">${freqLabel(h.frequency)}${pp? ' · '+pp.count+'/'+pp.target+' this period':''}</div>
        </div>
        ${streak>0?`<div class="habit-streak">${svgIcon('flame')}${streak}</div>`:''}
        <div class="habit-actions">
          <button class="icon-btn" onclick="openHabitModal('${h.id}')">${svgIcon('edit')}</button>
          <button class="icon-btn" onclick="deleteHabit('${h.id}')">${svgIcon('trash')}</button>
        </div>
      </div>`;
    });
    html += `</div>`;
  });
  if(!any) html += `<div class="empty-note">No habits yet. <a href="#" onclick="openHabitModal();return false;" style="color:var(--gold);font-weight:600;">Add your first habit</a> to get started.</div>`;
  html += `</div>`;
  document.getElementById('today-habit-list').innerHTML = html;
}

function handleToggle(habitId){
  toggleCompletion(habitId, todayStr());
  renderShell();
  if(ROUTE.page==='today') renderToday();
  else if(ROUTE.page==='category') renderCategory(ROUTE.param);
}

function longestStreak(){
  // scan all days from earliest completion to today for longest dayRuleMet run
  let earliest = todayStr();
  Object.values(STATE.completions).forEach(arr=>arr.forEach(d=>{ if(d<earliest) earliest=d; }));
  let cursor = earliest;
  let best=0, cur=0;
  const end = todayStr();
  let guard=0;
  while(cursor<=end && guard<4000){
    guard++;
    if(dayRuleMet(cursor)){ cur++; best=Math.max(best,cur); } else cur=0;
    cursor = addDays(cursor,1);
  }
  return best;
}
function totalCompletionsAllTime(){
  let n=0; Object.values(STATE.completions).forEach(arr=>n+=arr.length); return n;
}
function dayOfYear(d){
  const start = new Date(d.getFullYear(),0,0);
  const diff = d - start;
  return Math.floor(diff/86400000);
}
function escapeHtml(s){ return (s||'').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

/* ============================= RENDER: WEEKLY ============================= */

function renderWeekly(){
  const base = addDays(startOfWeek(todayStr()), weekOffset*7);
  const dates = weekDates(base);
  const catsWeek = categoriesTouchedInRange(dates[0], dates[6]);
  const maxCount = Math.max(1, ...dates.map(d=>totalCompletionsOn(d)));

  let html = `
  <div class="page-head">
    <div>
      <div class="eyebrow">This week</div>
      <h1 class="page-title">Weekly Progress</h1>
      <div class="page-sub">Each category should be touched at least once every week.</div>
    </div>
    <div class="week-nav">
      <button onclick="weekOffset--;renderWeekly()">${svgIcon('chevL')}</button>
      <span class="week-range">${fmtShort(dates[0])} – ${fmtShort(dates[6])}</span>
      <button onclick="weekOffset++;renderWeekly()" ${weekOffset>=0?'disabled style="opacity:.3;pointer-events:none;"':''}>${svgIcon('chevR')}</button>
    </div>
  </div>

  <div class="grid grid-2" style="margin-bottom:18px;">
    <div class="card">
      <div class="card-head"><div class="card-title">Completions per day</div></div>
      <div class="bar-chart">
        ${dates.map(d=>{
          const n = totalCompletionsOn(d);
          const h = Math.round((n/maxCount)*100);
          const isToday = d===todayStr();
          return `<div class="bar-col">
            <div class="bar-val">${n||''}</div>
            <div class="bar-track"><div class="bar-fill ${isToday?'today':''}" style="height:${n?Math.max(h,4):2}%"></div></div>
            <div class="bar-label">${DOW_SHORT[dowOf(d)]}</div>
          </div>`;
        }).join('')}
      </div>
    </div>
    <div class="card">
      <div class="card-head"><div class="card-title">Category coverage <span class="tag">${catsWeek.size}/8</span></div></div>
      <div class="chip-row">
        ${CATEGORIES.map(c=>{
          const done = catsWeek.has(c.id);
          return `<span class="goal-chip ${done?'done':''}">${done?svgIcon('check'):svgIcon(c.icon)}${c.name}</span>`;
        }).join('')}
      </div>
      <div style="margin-top:18px;">
        ${CATEGORIES.map(c=>{
          const habits = habitsByCategory(c.id);
          let done=0, due=0;
          habits.forEach(h=>{ dates.forEach(d=>{ if(isDueOn(h,d)){ due++; if(isDone(h.id,d)) done++; } }); });
          const pct = due? Math.round(done/due*100):0;
          return `<div class="hbar-row"><div class="hbar-label">${c.name}</div><div class="hbar-track"><div class="hbar-fill" style="width:${pct}%"></div></div><div class="hbar-val">${pct}%</div></div>`;
        }).join('')}
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-head"><div class="card-title">Day-by-day rule check <span class="tag">3-category goal met?</span></div></div>
    <div class="chip-row">
      ${dates.map(d=>{
        const met = dayRuleMet(d);
        const future = d>todayStr();
        return `<span class="goal-chip ${met?'done':''}" style="${future?'opacity:.35':''}">${met?svgIcon('check'):svgIcon('sun')}${DOW_LABELS[dowOf(d)].slice(0,3)} ${d.slice(8,10)}</span>`;
      }).join('')}
    </div>
  </div>
  `;
  document.getElementById('main').innerHTML = html;
}
function fmtShort(d){ const dt=parseDate(d); return dt.toLocaleDateString('en-US',{month:'short', day:'numeric'}); }

/* ============================= RENDER: ANNUAL ============================= */

function renderAnnual(){
  const year = new Date().getFullYear() + yearOffset;
  const jan1 = `${year}-01-01`;
  const dec31 = `${year}-12-31`;

  // monthly totals
  const monthTotals = new Array(12).fill(0);
  STATE.habits.forEach(h=>{
    (STATE.completions[h.id]||[]).forEach(d=>{
      if(d.slice(0,4)===''+year){ monthTotals[parseInt(d.slice(5,7),10)-1]++; }
    });
  });
  const maxMonth = Math.max(1, ...monthTotals);

  // category distribution
  const catTotals = CATEGORIES.map(c=>{
    let n=0;
    habitsByCategory(c.id).forEach(h=>{ (STATE.completions[h.id]||[]).forEach(d=>{ if(d.slice(0,4)===''+year) n++; }); });
    return {cat:c, n};
  });
  const maxCat = Math.max(1, ...catTotals.map(c=>c.n));

  // heatmap: build weeks columns starting from first Sunday on/before Jan1
  const cells = [];
  let cursor = jan1;
  const startDow = dowOf(jan1);
  cursor = addDays(jan1, -startDow);
  for(let w=0; w<54; w++){
    const col = [];
    for(let d=0; d<7; d++){
      const ds = addDays(cursor, w*7+d);
      const inYear = ds.slice(0,4)===''+year;
      const count = inYear ? totalCompletionsOn(ds) : -1;
      col.push({date:ds, count, inYear});
    }
    cells.push(col);
  }
  function shade(count){
    if(count<0) return 'transparent';
    if(count===0) return 'var(--surface-raised)';
    if(count<=2) return '#c7d3e6';
    if(count<=4) return '#8ea6d9';
    if(count<=6) return 'var(--gold)';
    return 'var(--gold-deep)';
  }
  // month label positions
  let monthLabelsHtml = '';
  let lastMonth=-1;
  cells.forEach((col,i)=>{
    const first = col.find(c=>c.inYear);
    if(first){
      const m = parseInt(first.date.slice(5,7),10)-1;
      if(m!==lastMonth){ monthLabelsHtml += `<span style="display:inline-block;width:14px;">${MONTH_LABELS[m]}</span>`; lastMonth=m; }
      else monthLabelsHtml += `<span style="display:inline-block;width:14px;"></span>`;
    } else {
      monthLabelsHtml += `<span style="display:inline-block;width:14px;"></span>`;
    }
  });

  const totalYear = monthTotals.reduce((a,b)=>a+b,0);
  const activeDays = (()=>{ let n=0; let c=jan1; for(let i=0;i<366;i++){ if(c>dec31) break; if(totalCompletionsOn(c)>0) n++; c=addDays(c,1);} return n; })();

  let html = `
  <div class="page-head">
    <div>
      <div class="eyebrow">${year}</div>
      <h1 class="page-title">Annual Progress</h1>
      <div class="page-sub">The full year of ambition, at a glance.</div>
    </div>
    <div class="week-nav">
      <button onclick="yearOffset--;renderAnnual()">${svgIcon('chevL')}</button>
      <span class="week-range">${year}</span>
      <button onclick="yearOffset++;renderAnnual()" ${yearOffset>=0?'disabled style="opacity:.3;pointer-events:none;"':''}>${svgIcon('chevR')}</button>
    </div>
  </div>

  <div class="card" style="margin-bottom:18px;">
    <div class="stat-strip">
      <div class="stat-box"><div class="stat-num mono">${totalYear}</div><div class="stat-label">Completions this year</div></div>
      <div class="stat-box"><div class="stat-num mono">${activeDays}</div><div class="stat-label">Active days</div></div>
      <div class="stat-box"><div class="stat-num mono">${longestStreak()}</div><div class="stat-label">Longest streak</div></div>
      <div class="stat-box"><div class="stat-num mono">${STATE.habits.filter(h=>!h.archived).length}</div><div class="stat-label">Active habits</div></div>
    </div>
  </div>

  <div class="card" style="margin-bottom:18px;">
    <div class="card-head"><div class="card-title">Year in activity</div></div>
    <div class="heatmap-scroll">
      <div class="heatmap-months">${monthLabelsHtml}</div>
      <div class="heatmap">
        ${cells.map(col=>col.map(c=>`<div class="heat-cell" style="background:${shade(c.count)}" title="${c.inYear? c.date+' · '+c.count+' done':''}"></div>`).join('')).join('')}
      </div>
    </div>
    <div class="heat-legend">Less
      <div class="heat-cell" style="background:var(--surface-raised)"></div>
      <div class="heat-cell" style="background:#c7d3e6"></div>
      <div class="heat-cell" style="background:#8ea6d9"></div>
      <div class="heat-cell" style="background:var(--gold)"></div>
      <div class="heat-cell" style="background:var(--gold-deep)"></div>
      More
    </div>
  </div>

  <div class="grid grid-2">
    <div class="card">
      <div class="card-head"><div class="card-title">Monthly totals</div></div>
      <div class="bar-chart">
        ${monthTotals.map((n,i)=>{
          const h = Math.round((n/maxMonth)*100);
          const isCur = i===new Date().getMonth() && yearOffset===0;
          return `<div class="bar-col"><div class="bar-val">${n||''}</div><div class="bar-track"><div class="bar-fill ${isCur?'today':''}" style="height:${n?Math.max(h,4):2}%"></div></div><div class="bar-label">${MONTH_LABELS[i][0]}</div></div>`;
        }).join('')}
      </div>
    </div>
    <div class="card">
      <div class="card-head"><div class="card-title">By category</div></div>
      ${catTotals.sort((a,b)=>b.n-a.n).map(c=>{
        const pct = Math.round(c.n/maxCat*100);
        return `<div class="hbar-row"><div class="hbar-label">${c.cat.name}</div><div class="hbar-track"><div class="hbar-fill" style="width:${pct}%"></div></div><div class="hbar-val">${c.n}</div></div>`;
      }).join('')}
    </div>
  </div>
  `;
  document.getElementById('main').innerHTML = html;
}

/* ============================= RENDER: HABITS (manage) ============================= */

function renderHabits(){
  let html = `
  <div class="page-head">
    <div>
      <div class="eyebrow">Manage</div>
      <h1 class="page-title">Your Habits</h1>
      <div class="page-sub">Eight categories. Touch at least three today, and every category once a week.</div>
    </div>
    <button class="btn btn-primary" onclick="openHabitModal()">${svgIcon('plus')} New habit</button>
  </div>
  <div class="grid grid-4">
  `;
  CATEGORIES.forEach(c=>{
    const habits = habitsByCategory(c.id);
    const touchedWeek = categoriesTouchedInRange(startOfWeek(todayStr()), addDays(startOfWeek(todayStr()),6)).has(c.id);
    html += `<div class="card cat-manage-card" onclick="location.hash='#/category/${c.id}'">
      <div class="cat-manage-top">
        <div class="cat-icon" style="width:34px;height:34px;">${svgIcon(c.icon)}</div>
        <div>
          <div class="cat-manage-name">${c.name}</div>
        </div>
      </div>
      <div class="cat-manage-desc">${c.desc}</div>
      <div class="cat-manage-stats">
        <span class="badge">${habits.length} habit${habits.length!==1?'s':''}</span>
        <span class="badge ${touchedWeek?'gold':''}">${touchedWeek?'✓ this week':'not yet this week'}</span>
      </div>
    </div>`;
  });
  html += `</div>`;

  html += `<div class="footer-note">Data is stored privately in your browser session for Ambition. Use Reset to start fresh.
    <div style="margin-top:10px;"><button class="btn btn-ghost btn-sm" onclick="resetAll()">${svgIcon('trash')} Reset all data</button></div>
  </div>`;

  document.getElementById('main').innerHTML = html;
}

async function resetAll(){
  if(!confirm('This will delete all habits and progress. Continue?')) return;
  STATE = defaultState();
  await saveState();
  renderShell();
  renderHabits();
  showToast('All data reset');
}

/* ============================= RENDER: CATEGORY ============================= */

function renderCategory(catId){
  const cat = CATEGORIES.find(c=>c.id===catId);
  if(!cat){ location.hash = '#/habits'; return; }
  const habits = habitsByCategory(catId);
  const today = todayStr();
  const weekStart = startOfWeek(today);
  const touchedWeek = categoriesTouchedInRange(weekStart, addDays(weekStart,6)).has(catId);
  let totalAll=0; habits.forEach(h=>totalAll += (STATE.completions[h.id]||[]).length);

  let html = `
  <a href="#/habits" style="display:inline-flex;align-items:center;gap:6px;color:var(--text-tertiary);font-size:12.5px;margin-bottom:16px;">${svgIcon('back')} All categories</a>
  <div class="page-head">
    <div>
      <div class="eyebrow" style="display:flex;align-items:center;gap:8px;"><span class="cat-icon" style="width:20px;height:20px;">${svgIcon(cat.icon)}</span>${cat.name.toUpperCase()}</div>
      <h1 class="page-title">${cat.name}</h1>
      <div class="page-sub">${cat.desc}</div>
    </div>
    <button class="btn btn-primary" onclick="openHabitModal(null,'${catId}')">${svgIcon('plus')} Add habit to ${cat.name}</button>
  </div>

  <div class="card" style="margin-bottom:18px;">
    <div class="stat-strip">
      <div class="stat-box"><div class="stat-num mono">${habits.length}</div><div class="stat-label">Habits</div></div>
      <div class="stat-box"><div class="stat-num mono">${totalAll}</div><div class="stat-label">All-time completions</div></div>
      <div class="stat-box"><div class="stat-num mono">${touchedWeek?'Yes':'No'}</div><div class="stat-label">Touched this week</div></div>
    </div>
  </div>

  <div class="card">
    <div class="card-head"><div class="card-title">Habits</div></div>
  `;
  if(!habits.length){
    html += `<div class="empty-note">No habits in this category yet. Add one to get started.</div>`;
  } else {
    habits.forEach(h=>{
      const done = isDone(h.id, today);
      const streak = habitStreak(h);
      const pp = periodProgress(h, today);
      const dueTodayFlag = isDueOn(h,today);
      html += `<div class="habit-row">
        ${dueTodayFlag ? `<div class="check ${done?'checked':''}" onclick="handleToggle('${h.id}')">${svgIcon('check')}</div>` : `<div class="check" style="opacity:.25;pointer-events:none;">${svgIcon('check')}</div>`}
        <div class="habit-info">
          <div class="habit-name ${done?'checked':''}">${escapeHtml(h.name)}</div>
          <div class="habit-meta">${freqLabel(h.frequency)}${pp? ' · '+pp.count+'/'+pp.target+' this period':''}</div>
        </div>
        ${streak>0?`<div class="habit-streak">${svgIcon('flame')}${streak}</div>`:''}
        <div class="habit-actions">
          <button class="icon-btn" onclick="openHabitModal('${h.id}')">${svgIcon('edit')}</button>
          <button class="icon-btn" onclick="deleteHabit('${h.id}')">${svgIcon('trash')}</button>
        </div>
      </div>`;
    });
  }
  html += `</div>`;
  document.getElementById('main').innerHTML = html;
}

async function deleteHabit(id){
  if(!confirm('Delete this habit? This cannot be undone.')) return;
  STATE.habits = STATE.habits.filter(h=>h.id!==id);
  delete STATE.completions[id];
  await saveState();
  renderShell();
  router();
  showToast('Habit deleted');
}

/* ============================= MODAL: ADD/EDIT HABIT ============================= */

function openHabitModal(habitId, presetCat){
  const editing = habitId ? STATE.habits.find(h=>h.id===habitId) : null;
  const cat = editing ? editing.category : (presetCat || CATEGORIES[0].id);
  const freq = editing ? editing.frequency : {type:'daily'};

  const body = document.getElementById('modal-body');
  body.innerHTML = `
    <div class="modal-head">
      <div class="modal-title display">${editing? 'Edit habit' : 'New habit'}</div>
      <button class="modal-close" onclick="closeModal()">${svgIcon('x')}</button>
    </div>
    <div class="field">
      <label>Habit name</label>
      <input type="text" id="f-name" placeholder="e.g. Read 20 pages" value="${editing?escapeHtml(editing.name):''}">
    </div>
    <div class="field">
      <label>Category</label>
      <select id="f-cat">
        ${CATEGORIES.map(c=>`<option value="${c.id}" ${c.id===cat?'selected':''}>${c.name}</option>`).join('')}
      </select>
    </div>
    <div class="field">
      <label>Frequency</label>
      <select id="f-freq-type" onchange="renderFreqFields()">
        <option value="daily" ${freq.type==='daily'?'selected':''}>Every day</option>
        <option value="weekdays" ${freq.type==='weekdays'?'selected':''}>Specific days of the week</option>
        <option value="once" ${freq.type==='once'?'selected':''}>Only one day</option>
        <option value="weekly_count" ${freq.type==='weekly_count'?'selected':''}>A few times a week</option>
        <option value="monthly_count" ${freq.type==='monthly_count'?'selected':''}>A few times a month</option>
        <option value="yearly_count" ${freq.type==='yearly_count'?'selected':''}>A few times a year</option>
      </select>
    </div>
    <div id="freq-fields"></div>
    <div class="modal-actions">
      <div>${editing? `<button class="btn btn-ghost btn-sm" onclick="deleteHabit('${editing.id}');closeModal();">${svgIcon('trash')} Delete</button>` : ''}</div>
      <div style="display:flex;gap:8px;">
        <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="saveHabitForm('${editing?editing.id:''}')">${editing?'Save changes':'Add habit'}</button>
      </div>
    </div>
  `;
  window.__editingFreq = freq;
  document.getElementById('modal-backdrop').classList.add('open');
  renderFreqFields();
}
function renderFreqFields(){
  const type = document.getElementById('f-freq-type').value;
  const freq = window.__editingFreq && window.__editingFreq.type===type ? window.__editingFreq : {};
  const wrap = document.getElementById('freq-fields');
  if(type==='weekdays'){
    const days = freq.days || [1,2,3,4,5];
    wrap.innerHTML = `<div class="field"><label>Which days</label><div class="day-picker" id="day-picker">
      ${DOW_SHORT.map((d,i)=>`<div class="day-chip ${days.includes(i)?'on':''}" data-day="${i}" onclick="this.classList.toggle('on')">${d}</div>`).join('')}
    </div></div>`;
  } else if(type==='once'){
    wrap.innerHTML = `<div class="field"><label>Date</label><input type="date" id="f-once-date" value="${freq.date||todayStr()}"></div>`;
  } else if(type==='weekly_count' || type==='monthly_count' || type==='yearly_count'){
    const period = type==='weekly_count'?'week':(type==='monthly_count'?'month':'year');
    wrap.innerHTML = `<div class="field"><label>How many times per ${period}</label><div class="count-row"><input type="number" min="1" max="365" id="f-count" value="${freq.count||3}"><span style="color:var(--text-tertiary);font-size:12.5px;">times / ${period}</span></div></div>`;
  } else {
    wrap.innerHTML = '';
  }
}
function closeModal(){ document.getElementById('modal-backdrop').classList.remove('open'); }

async function saveHabitForm(existingId){
  const name = document.getElementById('f-name').value.trim();
  if(!name){ showToast('Give the habit a name'); return; }
  const cat = document.getElementById('f-cat').value;
  const type = document.getElementById('f-freq-type').value;
  let frequency = {type};
  if(type==='weekdays'){
    const days = Array.from(document.querySelectorAll('#day-picker .day-chip.on')).map(el=>parseInt(el.dataset.day,10));
    if(!days.length){ showToast('Pick at least one day'); return; }
    frequency.days = days;
  } else if(type==='once'){
    frequency.date = document.getElementById('f-once-date').value || todayStr();
  } else if(type==='weekly_count' || type==='monthly_count' || type==='yearly_count'){
    frequency.count = Math.max(1, parseInt(document.getElementById('f-count').value,10) || 1);
  }

  if(existingId){
    const h = STATE.habits.find(x=>x.id===existingId);
    h.name=name; h.category=cat; h.frequency=frequency;
    showToast('Habit updated');
  } else {
    STATE.habits.push({ id:uid(), name, category:cat, frequency, createdAt:todayStr(), archived:false });
    showToast('Habit added');
  }
  await saveState();
  closeModal();
  renderShell();
  router();
}

function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=>t.classList.remove('show'), 2200);
}

/* ============================= ROUTER ============================= */

function router(){
  const hash = location.hash.replace(/^#\//,'') || 'today';
  const parts = hash.split('/');
  ROUTE = { page: parts[0]||'today', param: parts[1]||null };
  weekOffset = ROUTE.page==='weekly' ? weekOffset : 0;
  yearOffset = ROUTE.page==='annual' ? yearOffset : 0;
  renderShell();
  if(ROUTE.page==='today') renderToday();
  else if(ROUTE.page==='weekly') renderWeekly();
  else if(ROUTE.page==='annual') renderAnnual();
  else if(ROUTE.page==='habits') renderHabits();
  else if(ROUTE.page==='category') renderCategory(ROUTE.param);
  else renderToday();
  window.scrollTo(0,0);
}

document.getElementById('modal-backdrop').addEventListener('click', (e)=>{
  if(e.target.id==='modal-backdrop') closeModal();
});

/* ============================= INIT ============================= */

(async function init(){
  document.getElementById('main').innerHTML = `<div style="padding:60px;color:var(--text-tertiary);font-size:13px;">Loading Ambition…</div>`;
  await loadState();
  window.addEventListener('hashchange', router);
  router();
})();
