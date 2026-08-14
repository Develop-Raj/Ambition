
  :root{
    --bg: #eef1f5;
    --bg-soft: #ffffff;
    --surface: #ffffff;
    --surface-raised: #f2f4f8;
    --surface-hover: #e7ebf1;
    --border: #dbe0e8;
    --border-soft: #e6eaf0;
    --text-primary: #1c2530;
    --text-secondary: #64707e;
    --text-tertiary: #97a1ad;
    --white: #ffffff;
    --slate: #3d4b5e;
    --gold: #3b6fe0;
    --gold-dim: rgba(59,111,224,0.10);
    --gold-glow: rgba(59,111,224,0.30);
    --gold-deep: #1d4ed8;
    --danger: #c0554b;
    --radius-sm: 8px;
    --radius-md: 14px;
    --radius-lg: 20px;
    --shadow-card: 0 1px 0 rgba(255,255,255,0.7) inset, 0 12px 26px -16px rgba(29,45,74,0.16);
  }
  *{box-sizing:border-box;}
  html,body{height:100%;}
  body{
    margin:0;
    background:
      radial-gradient(1200px 600px at 85% -10%, rgba(59,111,224,0.07), transparent 60%),
      radial-gradient(900px 500px at -10% 110%, rgba(61,75,94,0.05), transparent 60%),
      var(--bg);
    color:var(--text-primary);
    font-family:'Manrope',sans-serif;
    -webkit-font-smoothing:antialiased;
  }
  ::selection{ background:var(--gold-dim); color:var(--text-primary); }
  h1,h2,h3,.display{ font-family:'Sora',sans-serif; font-weight:600; letter-spacing:-0.01em; }
  .mono{ font-family:'JetBrains Mono',monospace; }
  a{ color:inherit; text-decoration:none; }
  button{ font-family:inherit; cursor:pointer; }
  ::-webkit-scrollbar{ width:8px; height:8px; }
  ::-webkit-scrollbar-thumb{ background:var(--border); border-radius:8px; }
  ::-webkit-scrollbar-track{ background:transparent; }

  #app{ display:flex; min-height:100vh; }

  /* SIDEBAR */
  .sidebar{
    width:242px; flex-shrink:0;
    border-right:1px solid var(--border-soft);
    display:flex; flex-direction:column;
    padding:28px 18px;
    position:sticky; top:0; height:100vh;
  }
  .brand{ display:flex; align-items:center; gap:10px; padding:0 8px 28px 8px; }
  .brand-mark{ width:30px; height:30px; border-radius:50%; border:1.5px solid var(--gold); display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  .brand-mark::before{ content:''; width:6px; height:6px; border-radius:50%; background:var(--gold); box-shadow:0 0 8px var(--gold-glow); }
  .brand-name{ font-family:'Sora',sans-serif; font-size:19px; letter-spacing:0.02em; font-weight:600; }
  .brand-sub{ font-size:9.5px; letter-spacing:0.16em; color:var(--text-tertiary); text-transform:uppercase; margin-top:1px; }

  nav.primary-nav{ display:flex; flex-direction:column; gap:2px; margin-bottom:22px; }
  .nav-link{
    display:flex; align-items:center; gap:11px;
    padding:10px 10px; border-radius:var(--radius-sm);
    color:var(--text-secondary); font-size:13.5px; font-weight:500;
    transition:background .15s, color .15s;
  }
  .nav-link svg{ width:17px; height:17px; opacity:.85; flex-shrink:0; }
  .nav-link:hover{ background:var(--surface); color:var(--text-primary); }
  .nav-link.active{ background:var(--surface-raised); color:var(--text-primary); box-shadow:inset 0 0 0 1px var(--border); }
  .nav-link.active svg{ opacity:1; stroke:var(--gold); }

  .nav-section-label{ font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:var(--text-tertiary); padding:14px 10px 6px; }
  .cat-nav{ display:flex; flex-direction:column; gap:1px; overflow-y:auto; flex:1; }
  .cat-nav-link{ display:flex; align-items:center; gap:9px; padding:7px 10px; border-radius:var(--radius-sm); font-size:12.5px; color:var(--text-secondary); }
  .cat-nav-link:hover{ background:var(--surface); color:var(--text-primary); }
  .cat-nav-link.active{ color:var(--text-primary); background:var(--surface); }
  .cat-nav-link svg{ width:14px; height:14px; opacity:.75; }
  .cat-dot{ width:5px; height:5px; border-radius:50%; background:var(--border); margin-left:auto; flex-shrink:0; }
  .cat-dot.done{ background:var(--gold); box-shadow:0 0 5px var(--gold-glow); }

  .sidebar-footer{ padding-top:14px; border-top:1px solid var(--border-soft); margin-top:10px; }
  .streak-pill{ display:flex; align-items:center; gap:10px; padding:10px 12px; border-radius:var(--radius-md); background:var(--surface); box-shadow:var(--shadow-card); }
  .streak-flame{ width:30px; height:30px; border-radius:50%; background:linear-gradient(160deg, var(--gold-dim), transparent); display:flex; align-items:center; justify-content:center; flex-shrink:0; box-shadow:inset 0 0 0 1px var(--border); }
  .streak-flame svg{ width:15px; height:15px; stroke:var(--gold); }
  .streak-num{ font-family:'JetBrains Mono',monospace; font-size:17px; font-weight:600; line-height:1; }
  .streak-label{ font-size:10px; color:var(--text-tertiary); letter-spacing:.04em; margin-top:2px; }

  /* MAIN */
  main{ flex:1; padding:34px 42px 80px; max-width:1180px; }
  .page-head{ display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:26px; flex-wrap:wrap; gap:14px; }
  .eyebrow{ font-size:11px; letter-spacing:.16em; text-transform:uppercase; color:var(--gold); margin-bottom:8px; font-weight:600; }
  .page-title{ font-size:32px; margin:0; }
  .page-sub{ color:var(--text-secondary); font-size:13.5px; margin-top:6px; max-width:520px; line-height:1.5; }

  .grid{ display:grid; gap:18px; }
  .grid-2{ grid-template-columns:1.15fr .85fr; }
  .grid-3{ grid-template-columns:repeat(3,1fr); }
  .grid-4{ grid-template-columns:repeat(4,1fr); }
  @media (max-width:960px){ .grid-2,.grid-3,.grid-4{ grid-template-columns:1fr; } }

  .card{
    background:var(--surface);
    border:1px solid var(--border-soft);
    border-radius:var(--radius-lg);
    padding:22px;
    box-shadow:var(--shadow-card);
  }
  .card-head{ display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; }
  .card-title{ font-size:14px; font-weight:600; color:var(--text-primary); display:flex; align-items:center; gap:8px; }
  .card-title .tag{ font-family:'JetBrains Mono',monospace; font-size:10.5px; color:var(--text-tertiary); font-weight:400; }

  /* QUOTE */
  .quote-card{ position:relative; overflow:hidden; }
  .quote-card::before{ content:'“'; position:absolute; top:-22px; right:6px; font-family:'Sora',sans-serif; font-size:120px; color:var(--border-soft); line-height:1; }
  .quote-text{ font-family:'Sora',sans-serif; font-size:19px; font-weight:400; line-height:1.5; font-style:italic; color:var(--text-primary); position:relative; z-index:1; max-width:88%; }
  .quote-author{ margin-top:12px; font-size:11.5px; letter-spacing:.06em; text-transform:uppercase; color:var(--text-tertiary); }

  /* RINGS */
  .ring-wrap{ display:flex; align-items:center; gap:26px; flex-wrap:wrap; }
  .ring-center-label{ text-align:center; }
  .ring-big-num{ font-family:'JetBrains Mono',monospace; font-size:30px; font-weight:600; }
  .ring-legend{ display:flex; flex-direction:column; gap:12px; flex:1; min-width:180px; }
  .legend-row{ display:flex; align-items:center; gap:10px; font-size:12.5px; }
  .legend-dot{ width:9px; height:9px; border-radius:2px; flex-shrink:0; }
  .legend-text{ color:var(--text-secondary); flex:1; }
  .legend-val{ font-family:'JetBrains Mono',monospace; font-size:12.5px; color:var(--text-primary); }

  /* HABIT ROWS */
  .cat-block{ margin-bottom:22px; }
  .cat-block:last-child{ margin-bottom:0; }
  .cat-block-head{ display:flex; align-items:center; gap:10px; margin-bottom:10px; }
  .cat-icon{ width:26px; height:26px; border-radius:8px; background:var(--surface-raised); display:flex; align-items:center; justify-content:center; box-shadow:inset 0 0 0 1px var(--border); flex-shrink:0; }
  .cat-icon svg{ width:14px; height:14px; stroke:var(--text-primary); }
  .cat-block-title{ font-size:13px; font-weight:600; }
  .cat-block-meta{ font-size:11px; color:var(--text-tertiary); margin-left:auto; font-family:'JetBrains Mono',monospace; }

  .habit-row{ display:flex; align-items:center; gap:13px; padding:11px 12px; border-radius:var(--radius-sm); transition:background .15s; }
  .habit-row:hover{ background:var(--surface-raised); }
  .check{
    width:21px; height:21px; border-radius:7px; border:1.5px solid var(--border);
    display:flex; align-items:center; justify-content:center; flex-shrink:0; cursor:pointer;
    background:var(--bg-soft); transition:all .15s;
  }
  .check svg{ width:12px; height:12px; opacity:0; stroke:#ffffff; transition:opacity .1s; }
  .check.checked{ background:var(--gold); border-color:var(--gold); box-shadow:0 0 10px var(--gold-glow); }
  .check.checked svg{ opacity:1; }
  .habit-name{ font-size:13.5px; font-weight:500; }
  .habit-name.checked{ color:var(--text-tertiary); text-decoration:line-through; text-decoration-color:var(--border); }
  .habit-meta{ font-size:11px; color:var(--text-tertiary); margin-top:2px; }
  .habit-info{ flex:1; min-width:0; }
  .habit-streak{ font-family:'JetBrains Mono',monospace; font-size:11.5px; color:var(--gold); display:flex; align-items:center; gap:4px; flex-shrink:0; }
  .habit-streak svg{ width:11px; height:11px; stroke:var(--gold); }
  .habit-actions{ display:flex; gap:6px; flex-shrink:0; }
  .icon-btn{ width:26px; height:26px; border-radius:7px; border:1px solid var(--border-soft); background:transparent; display:flex; align-items:center; justify-content:center; color:var(--text-tertiary); }
  .icon-btn:hover{ background:var(--surface-hover); color:var(--text-primary); }
  .icon-btn svg{ width:13px; height:13px; }

  .empty-note{ font-size:12px; color:var(--text-tertiary); padding:14px 12px; border:1px dashed var(--border); border-radius:var(--radius-sm); }

  /* BADGES */
  .badge{ font-size:10.5px; padding:3px 8px; border-radius:20px; background:var(--surface-raised); color:var(--text-secondary); box-shadow:inset 0 0 0 1px var(--border); font-family:'JetBrains Mono',monospace; white-space:nowrap; }
  .badge.gold{ color:var(--gold); box-shadow:inset 0 0 0 1px var(--gold-dim); background:var(--gold-dim); }

  /* CATEGORY GOAL CHIPS */
  .chip-row{ display:flex; gap:8px; flex-wrap:wrap; }
  .goal-chip{ display:flex; align-items:center; gap:7px; padding:7px 12px; border-radius:20px; background:var(--surface-raised); box-shadow:inset 0 0 0 1px var(--border); font-size:11.5px; color:var(--text-secondary); }
  .goal-chip.done{ box-shadow:inset 0 0 0 1px var(--gold-dim); background:var(--gold-dim); color:var(--gold); }
  .goal-chip svg{ width:12px; height:12px; }

  /* BAR CHARTS */
  .bar-chart{ display:flex; align-items:flex-end; gap:10px; height:150px; padding-top:10px; }
  .bar-col{ flex:1; display:flex; flex-direction:column; align-items:center; height:100%; justify-content:flex-end; gap:8px; }
  .bar-track{ width:100%; flex:1; display:flex; align-items:flex-end; }
  .bar-fill{ width:100%; border-radius:6px 6px 3px 3px; background:linear-gradient(180deg, var(--surface-hover), var(--border)); transition:height .4s ease; min-height:3px; }
  .bar-fill.today{ background:linear-gradient(180deg, var(--gold), var(--gold-deep)); box-shadow:0 0 14px var(--gold-glow); }
  .bar-label{ font-size:10.5px; color:var(--text-tertiary); font-family:'JetBrains Mono',monospace; }
  .bar-val{ font-size:10px; color:var(--text-secondary); font-family:'JetBrains Mono',monospace; }

  .hbar-row{ display:flex; align-items:center; gap:12px; margin-bottom:11px; }
  .hbar-label{ width:88px; flex-shrink:0; font-size:11.5px; color:var(--text-secondary); }
  .hbar-track{ flex:1; height:9px; border-radius:5px; background:var(--surface-raised); overflow:hidden; box-shadow:inset 0 0 0 1px var(--border-soft); }
  .hbar-fill{ height:100%; border-radius:5px; background:linear-gradient(90deg, #c3cddb, var(--gold)); }
  .hbar-val{ width:30px; text-align:right; font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--text-tertiary); flex-shrink:0; }

  /* HEATMAP */
  .heatmap-scroll{ overflow-x:auto; padding-bottom:6px; }
  .heatmap{ display:grid; grid-auto-flow:column; grid-template-rows:repeat(7,11px); gap:3px; width:max-content; }
  .heat-cell{ width:11px; height:11px; border-radius:3px; background:var(--surface-raised); box-shadow:inset 0 0 0 1px var(--border-soft); }
  .heatmap-months{ display:flex; gap:0; font-size:10px; color:var(--text-tertiary); font-family:'JetBrains Mono',monospace; width:max-content; margin-bottom:4px; }
  .heat-legend{ display:flex; align-items:center; gap:5px; margin-top:10px; font-size:10.5px; color:var(--text-tertiary); }
  .heat-legend .heat-cell{ width:10px; height:10px; }

  .stat-strip{ display:flex; gap:0; }
  .stat-box{ flex:1; padding:16px 0; text-align:center; border-right:1px solid var(--border-soft); }
  .stat-box:last-child{ border-right:none; }
  .stat-num{ font-family:'JetBrains Mono',monospace; font-size:22px; font-weight:600; }
  .stat-label{ font-size:10.5px; color:var(--text-tertiary); margin-top:4px; letter-spacing:.03em; }

  /* WEEK SELECTOR */
  .week-nav{ display:flex; align-items:center; gap:10px; }
  .week-nav button{ width:28px; height:28px; border-radius:8px; border:1px solid var(--border); background:var(--surface-raised); color:var(--text-secondary); display:flex; align-items:center; justify-content:center; }
  .week-nav button:hover{ color:var(--text-primary); }
  .week-nav button svg{ width:13px; height:13px; }
  .week-range{ font-size:12.5px; color:var(--text-secondary); font-family:'JetBrains Mono',monospace; }

  /* BUTTONS */
  .btn{ display:inline-flex; align-items:center; gap:7px; padding:10px 16px; border-radius:10px; font-size:13px; font-weight:600; border:1px solid var(--border); background:var(--surface-raised); color:var(--text-primary); }
  .btn:hover{ background:var(--surface-hover); }
  .btn-primary{ background:var(--gold); color:#ffffff; border-color:var(--gold); }
  .btn-primary:hover{ background:var(--gold-deep); }
  .btn-ghost{ background:transparent; border-color:var(--border-soft); color:var(--text-secondary); }
  .btn svg{ width:14px; height:14px; }
  .btn-sm{ padding:7px 12px; font-size:12px; }

  /* HABITS PAGE */
  .cat-manage-card{ cursor:pointer; transition:transform .15s, border-color .15s; }
  .cat-manage-card:hover{ border-color:var(--border); transform:translateY(-2px); }
  .cat-manage-top{ display:flex; align-items:center; gap:12px; margin-bottom:14px; }
  .cat-manage-name{ font-size:15px; font-weight:600; }
  .cat-manage-desc{ font-size:11.5px; color:var(--text-tertiary); margin-top:2px; }
  .cat-manage-stats{ display:flex; justify-content:space-between; align-items:center; margin-top:14px; padding-top:14px; border-top:1px solid var(--border-soft); }

  /* MODAL */
  .modal-backdrop{ position:fixed; inset:0; background:rgba(0,0,0,0.6); backdrop-filter:blur(3px); display:none; align-items:center; justify-content:center; z-index:100; padding:20px; }
  .modal-backdrop.open{ display:flex; }
  .modal{ background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-lg); padding:26px; width:440px; max-width:100%; max-height:88vh; overflow-y:auto; box-shadow:0 30px 60px rgba(0,0,0,0.6); }
  .modal-head{ display:flex; align-items:center; justify-content:space-between; margin-bottom:18px; }
  .modal-title{ font-size:17px; }
  .modal-close{ width:28px; height:28px; border-radius:8px; border:1px solid var(--border-soft); background:transparent; color:var(--text-secondary); display:flex; align-items:center; justify-content:center; }
  .field{ margin-bottom:16px; }
  .field label{ display:block; font-size:11.5px; color:var(--text-secondary); margin-bottom:7px; letter-spacing:.03em; }
  .field input[type=text], .field input[type=date], .field input[type=number], .field select{
    width:100%; padding:10px 12px; border-radius:9px; border:1px solid var(--border); background:var(--bg-soft); color:var(--text-primary); font-size:13px; font-family:inherit;
  }
  .field input:focus, .field select:focus{ outline:none; border-color:var(--gold); }
  .day-picker{ display:flex; gap:6px; }
  .day-chip{ flex:1; padding:8px 0; text-align:center; border-radius:8px; border:1px solid var(--border); background:var(--bg-soft); font-size:11.5px; color:var(--text-secondary); }
  .day-chip.on{ background:var(--gold-dim); border-color:var(--gold); color:var(--gold); }
  .count-row{ display:flex; align-items:center; gap:10px; }
  .count-row input{ width:70px !important; }
  .modal-actions{ display:flex; justify-content:space-between; align-items:center; margin-top:20px; gap:10px; }

  .toast{ position:fixed; bottom:22px; left:50%; transform:translateX(-50%) translateY(20px); background:var(--surface-raised); border:1px solid var(--border); padding:11px 18px; border-radius:10px; font-size:12.5px; box-shadow:0 12px 30px rgba(0,0,0,0.5); opacity:0; pointer-events:none; transition:all .25s; z-index:200; }
  .toast.show{ opacity:1; transform:translateX(-50%) translateY(0); }

  .footer-note{ margin-top:40px; text-align:center; font-size:11px; color:var(--text-tertiary); }

  @media (max-width:820px){
    #app{ flex-direction:column; }
    .sidebar{ position:sticky; top:0; height:auto; width:100%; flex-direction:row; align-items:center; padding:14px 16px; border-right:none; border-bottom:1px solid var(--border-soft); z-index:50; background:var(--bg); overflow-x:auto; }
    .brand{ padding:0 12px 0 0; }
    nav.primary-nav{ flex-direction:row; margin-bottom:0; }
    .nav-link span{ display:none; }
    .cat-nav, .nav-section-label, .sidebar-footer{ display:none; }
    main{ padding:22px 18px 60px; }
    .grid-2, .grid-3, .grid-4{ grid-template-columns:1fr; }
  }
