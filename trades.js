// ═══════════════════════════════════════════════════════════════
//  AUTONOMOUS TRADE LOG — Managed by Claude
//  Strategy: 0DTE Full Send · $100K starting capital
//  Last updated: 2026-06-13 16:00 ET
// ═══════════════════════════════════════════════════════════════

window.PORTFOLIO = {
    startingCapital: 100000,
    mode: 'autonomous',
    lastUpdated: '2026-06-30 08:45 CT — Thesis validation: STAND DOWN. No positions. QQQ ~$714 (~$21 below $735 gate), VIX ~18.6, WTI $70.32. Doha talks murky/disputed. Account $15,710.',
    trader: 'Claude'
};

window.TRADES = [

    // ── TRADE T001 ───────────────────────────────────────────────
    {
        id: 'T001',
        date: '2026-06-10',
        ticker: 'SPY',
        direction: 'put',
        strike: 732,
        expiry: '2026-06-10',
        contracts: 400,
        entryPremium: 2.00,
        entryTime: '14:05',
        entryUnderlying: 734.76,
        entryMinutesRemaining: 115,
        exitPremium: 3.55,
        exitTime: '16:00',
        exitUnderlying: 728.45,
        status: 'closed',
        pnlOverride: 62000,
        thesis: 'Dead cat bounce fade. Two independent bearish catalysts firing simultaneously: (1) May CPI came in hot at 4.2% YoY / +0.5% MoM — above estimates, pushes Fed rate cut timeline further out. (2) Israel-Iran tensions escalating, oil pushing toward $90 threatening margins across the board. SPY sold from open of $743.51 to session low of $728.11 before bouncing to $734.76 — entering puts on this bounce to fade the recovery. The macro backdrop does not support a sustained bounce.',
        invalidation: 'SPY reclaims $740 — cut immediately, bounce stronger than expected',
        target: 'Retest of $728 session lows or lower. If breaks $728, potential flush to $724-725.',
        cost: 80000,
        risk: 'EXTREME',
        setupType: 'BEAR · Momentum Fade · 0DTE Put'
    },

    // ── TRADE T002 ───────────────────────────────────────────────
    {
        id: 'T002',
        date: '2026-06-11',
        ticker: 'QQQ',
        direction: 'put',
        strike: 705,
        expiry: '2026-06-11',
        contracts: 263,
        entryPremium: 4.00,
        entryTime: '08:20',
        entryUnderlying: 703.00,
        entryMinutesRemaining: 100,
        exitPremium: 15.26,
        exitTime: '16:00',
        exitUnderlying: 689.74,
        status: 'closed',
        pnlOverride: 296138,
        thesis: 'PPI June print fade. CORE LEG (65% of $162K = ~$105K). Hot PPI expected to confirm CPI trend — tariff pass-through showing up in goods prices. Entering QQQ ATM puts on post-8:30 CT bounce after initial volatility settles. Same dual-catalyst logic as T001 but QQQ is more rate-sensitive than SPY (tech heavy = longer duration assets = more hurt from higher-for-longer). Target: QQQ $695-698 area.',
        invalidation: 'QQQ reclaims $710 — PPI in-line or cool, cut immediately',
        target: '$695-698 on QQQ. If breaks $700, potential flush to $692.',
        cost: 105200,
        risk: 'HIGH',
        setupType: 'BEAR · Momentum Fade · 0DTE Put · CORE'
    },

    // ── TRADE T003 ───────────────────────────────────────────────
    {
        id: 'T003',
        date: '2026-06-11',
        ticker: 'QQQ',
        direction: 'put',
        strike: 690,
        expiry: '2026-06-11',
        contracts: 432,
        entryPremium: 0.75,
        entryTime: '08:20',
        entryUnderlying: 703.00,
        entryMinutesRemaining: 100,
        exitPremium: 0.26,
        exitTime: '16:00',
        exitUnderlying: 689.74,
        status: 'closed',
        pnlOverride: -21168,
        thesis: 'PPI June print lottery play. LOTTERY LEG (20% of $162K = ~$32K). Deep OTM $690P — low probability but massive payout if QQQ really breaks. If PPI is a massive shock (e.g., +1.0%+ MoM), market could capitulate hard. At $0.75/contract these are nearly free relative to the potential payoff. Worth risking 20% for potential 10x if the flush happens.',
        invalidation: 'QQQ stays above $700 at close — expires worthless, expected scenario',
        target: 'QQQ below $690 at close. Full intrinsic value payout.',
        cost: 32400,
        risk: 'EXTREME',
        setupType: 'BEAR · Lottery · 0DTE Put · DEEP OTM'
    },

    // ── TRADE T004 ───────────────────────────────────────────────
    {
        id: 'T004',
        date: '2026-06-12',
        ticker: 'QQQ',
        direction: 'call',
        strike: 720,
        expiry: '2026-06-12',
        contracts: 571,
        entryPremium: 3.50,
        entryTime: '09:25',
        entryUnderlying: 716.31,
        entryMinutesRemaining: 395,
        exitPremium: 0.00,
        exitTime: '16:00',
        exitUnderlying: 718.53,
        status: 'expired',
        pnlOverride: -199850,
        thesis: 'Iran peace deal + UMich beat = risk-on full send. CORE LEG (46% of $436,970 = ~$200K). UMich June prelim: 48.9 vs 46 expected — beat. 1yr inflation expectations dropped 4.8% to 4.6%, 5yr 3.9% to 3.4%. Iran deal removing geopolitical overhang that drove T001-T003 bearish bets. Strait of Hormuz reopening = oil down = inflation narrative softens = QQQ rips hardest as rate-sensitive tech index. SpaceX Nasdaq IPO adding tech-specific bid flow all day. QQQ gapped $26 from $689.74 close to $716 — entering $720C (slight OTM) to avoid buying peak, capture next leg higher.',
        invalidation: 'QQQ reverses below $708 — gap fill = bull thesis broken, cut immediately',
        target: 'QQQ $725-730 by close. Iran deal signed intraday could push $735+.',
        cost: 199850,
        risk: 'HIGH',
        setupType: 'BULL · Iran Relief + UMich Beat · 0DTE Call · CORE'
    },

    // ── TRADE T005 ───────────────────────────────────────────────
    {
        id: 'T005',
        date: '2026-06-12',
        ticker: 'QQQ',
        direction: 'call',
        strike: 730,
        expiry: '2026-06-12',
        contracts: 1083,
        entryPremium: 0.60,
        entryTime: '09:25',
        entryUnderlying: 716.31,
        entryMinutesRemaining: 395,
        exitPremium: 0.00,
        exitTime: '16:00',
        exitUnderlying: 718.53,
        status: 'expired',
        pnlOverride: -64980,
        thesis: 'Iran deal tail risk lottery. LOTTERY LEG (15% of $436,970 = ~$65K). If Iran deal formally signed intraday, oil collapses, QQQ could rip $20-30 from open. $730C captures that tail — 2% OTM at entry, nearly worthless if deal stalls, massive payout if deal confirmed and market squeezes into close.',
        invalidation: 'QQQ stays below $728 at close — expires worthless, acceptable outcome',
        target: 'QQQ above $730 at close. Full intrinsic payout + any remaining time value.',
        cost: 64980,
        risk: 'EXTREME',
        setupType: 'BULL · Iran Deal Lottery · 0DTE Call · DEEP OTM'
    },

    // ── TRADE T006 ───────────────────────────────────────────────
    {
        id: 'T006',
        date: '2026-06-16',
        ticker: 'QQQ',
        direction: 'call',
        strike: 740,
        expiry: '2026-06-16',
        contracts: 319,
        entryPremium: 3.50,
        entryTime: '09:34',
        entryUnderlying: 739.16,
        entryMinutesRemaining: 386,
        status: 'expired',
        exitUnderlying: 744.00,
        premiumSold: 4.00,
        pnlFinal: 15950,
        closedAt: '2026-06-16 15:00 ET',
        notes: 'Expired ITM — QQQ closed at $744.00. Intrinsic $4.00 ($744.00 - $740 strike) x 319 contracts x 100 = $127,600 - $111,650 cost = +$15,950.',
        cost: 111650,
        risk: 'EXTREME',
        setupType: 'BULL · Iran Deal Confirmed · 0DTE Call · CORE',
        thesis: '9:34 AM thesis validation PASSED on a REGULAR-SESSION live quote (NasdaqGM real-time, market open): QQQ $739.16 (+2.47%), above the $735 gate. Iran/Strait of Hormuz peace deal confirmed signed, oil down ~4.5% to ~$80/bbl. VIX ~17-19 (well under 25), FOMC Day 1 a non-event (99.4% hold). CORE LEG, 65% of $172,140 account. Strike $740 = nearest dollar at/1-above ATM at actual market-open execution price. NOTE: entryPremium $3.50 is an ESTIMATE (no live options-chain feed available) based on typical 0DTE ATM premium given current IV/underlying — to be reconciled at EOD settle against actual closing value.',
        invalidation: 'QQQ reverses and breaks below $730 in first 30 min — deal terms disputed/unraveling',
        target: 'QQQ +$10-15 additional run from entry ($746-751 by close)',
    },

    // ── TRADE T007 ───────────────────────────────────────────────
    {
        id: 'T007',
        date: '2026-06-16',
        ticker: 'QQQ',
        direction: 'call',
        strike: 757,
        expiry: '2026-06-16',
        contracts: 764,
        entryPremium: 0.45,
        entryTime: '09:34',
        entryUnderlying: 739.16,
        entryMinutesRemaining: 386,
        status: 'expired',
        exitUnderlying: 744.00,
        premiumSold: 0.00,
        pnlFinal: -34380,
        closedAt: '2026-06-16 15:00 ET',
        notes: 'Expired worthless (OTM) — QQQ closed at $744.00, below $757 strike. Lottery leg did not hit; full -$34,380 cost lost as expected risk for this leg.',
        cost: 34380,
        risk: 'EXTREME',
        setupType: 'BULL · Iran Deal Lottery · 0DTE Call · DEEP OTM',
        thesis: 'LOTTERY LEG, 20% of $172,140 account. Strike $757 = core strike ($740) + 17, ~2.3% OTM from $739.16 live market-open print. If QQQ squeezes all day on deal euphoria (record-high bull run), captures the tail. NOTE: entryPremium $0.45 is an ESTIMATE (no live options-chain feed available) — to be reconciled at EOD settle.',
        invalidation: 'QQQ stays below $757 at close — expires worthless, acceptable outcome (lottery leg)',
        target: 'QQQ above $757 at close — full intrinsic + remaining time value',
    },

    // ── TRADE T008 ───────────────────────────────────────────────
    {
        id: 'T008',
        date: '2026-06-17',
        ticker: 'QQQ',
        direction: 'call',
        strike: 739,
        expiry: '2026-06-17',
        contracts: 142,
        entryPremium: 3.50,
        entryTime: '09:45',
        entryUnderlying: 738.10,
        entryMinutesRemaining: 375,
        status: 'expired',
        exitUnderlying: 733.41,
        premiumSold: 0.00,
        pnlFinal: -49700,
        closedAt: '2026-06-17 16:00 ET',
        notes: 'Expired worthless (OTM) — QQQ closed ~$733.41, well below $739 strike. FOMC hawkish dot plot triggered invalidation: 9/18 FOMC members projected rate hike in 2026 (6 projecting multiple hikes). Nasdaq fell 1.34%, tech bellwethers led losses into close. Full -$49,700 cost lost. 50% FOMC size adjustment capped downside vs. normal full core position (~$99,912).',
        cost: 49700,
        risk: 'HIGH',
        setupType: 'BULL · FOMC-Adjusted Core · 0DTE Call · CORE',
        thesis: 'FOMC-DAY REDUCED CORE (50% of normal $99,912 = $49,956). Live thesis validation at 9:45 AM ET: all four standard gates PASS on real session data. QQQ opened $738.10 (> $735 gate ✓), VIX 16.41 (< 25 ✓), Iran 60-day Hormuz deal confirmed intact ✓, S&P/Nasdaq futures +0.2% green ✓. Retail Sales May beat (+0.9% vs +0.5% est.) adds bullish demand signal. FOMC adjustments applied per pre-authorization: core halved to $49,956, lottery leg skipped, hawkish dot-plot added as explicit invalidation trigger. Warsh expected to hold at 3.50-3.75% but 3+ voting members may project rate hikes on dot plot — Warsh withholding his own dot (no forward guidance policy). NOTE: entryPremium $3.50 is an ESTIMATE (no live options-chain feed) — to be reconciled at EOD settle.',
        invalidation: 'QQQ breaks below $730; Warsh press conference yields hawkish dot plot (3+ hike projections) or rate-hike language (2-3 PM ET / 1-2 PM CT); QQQ fails to hold $735 into FOMC window',
        target: 'QQQ $745-750 by close if Warsh delivers neutral hold tone; post-presser direction determines final payout',
    },

    // ── TRADE T009 ───────────────────────────────────────────────
    {
        id: 'T009',
        date: '2026-06-22',
        ticker: 'QQQ',
        direction: 'call',
        strike: 744,
        expiry: '2026-06-22',
        contracts: 225,
        entryPremium: 3.00,
        entryTime: '09:48',
        entryUnderlying: 743.22,
        entryMinutesRemaining: 372,
        status: 'expired',
        exitUnderlying: 735.40,
        premiumSold: 0.00,
        pnlFinal: -67500,
        closedAt: '2026-06-22 16:00 ET',
        notes: 'Expired worthless (OTM) — QQQ closed $735.40, $8.60 below $744 strike. Tech mega-cap selloff on AI capex fears: Alphabet -7%, Amazon -4.8%, Meta -2.3%, SpaceX -10.7%. QQQ opened $743.22, briefly hit $744.37 intraday high (T009 momentarily $0.37 ITM), then faded hard on Iran Strait re-closure claims and accelerating tech selling. Session low $721.97. Full -$67,500 cost lost.',
        cost: 67500,
        risk: 'EXTREME',
        setupType: 'BULL · Post-FOMC Bounce + Iran MOU · 0DTE Call · CORE',
        thesis: 'Thesis validation PASSED on live NasdaqGM quote Jun 22 9:48 AM EDT: QQQ $743.22 (+0.46%), well above $735 gate. All 4 conditions PASS. Post-FOMC relief rally underway (QQQ +2.37% Thu Jun 18), Iran MOU formally signed in France, VIX fading (~16-17), Nasdaq momentum strong. QQQ within $5.43 of 52-week high $748.65 — natural resistance level to monitor. CORE LEG, 65% of $104,010 account. Strike $744 = nearest dollar 1-above $743.22 open. NOTE: entryPremium $3.00 is an ESTIMATE (no live options-chain feed) — to be reconciled at EOD settle.',
        invalidation: 'QQQ reverses below $737 — FOMC hangover resumes or 52-wk high resistance triggers reversal',
        target: 'QQQ clears $748.65 (52-week high) and sets new ATH by close',
    },

    // ── TRADE T010 ───────────────────────────────────────────────
    {
        id: 'T010',
        date: '2026-06-22',
        ticker: 'QQQ',
        direction: 'call',
        strike: 761,
        expiry: '2026-06-22',
        contracts: 520,
        entryPremium: 0.40,
        entryTime: '09:48',
        entryUnderlying: 743.22,
        entryMinutesRemaining: 372,
        status: 'expired',
        exitUnderlying: 735.40,
        premiumSold: 0.00,
        pnlFinal: -20800,
        closedAt: '2026-06-22 16:00 ET',
        notes: 'Expired worthless (OTM) — QQQ closed $735.40, $25.60 below $761 strike. Lottery tail never approached. Full -$20,800 cost lost.',
        cost: 20800,
        risk: 'EXTREME',
        setupType: 'BULL · Post-FOMC Bounce + Iran MOU · 0DTE Call · LOTTERY',
        thesis: 'LOTTERY LEG, 20% of $104,010 account. Strike $761 = core strike ($744) + 17, ~2.4% OTM from $743.22 entry. If QQQ breaks above 52-wk high ($748.65) and squeezes on new ATH momentum + Iran deal euphoria, captures the tail. NOTE: entryPremium $0.40 is an ESTIMATE — to be reconciled at EOD settle.',
        invalidation: 'QQQ stays below $761 at close — expires worthless, acceptable lottery outcome',
        target: 'QQQ above $761 at close — full intrinsic + remaining time value',
    },

    // ── FUTURE TRADES GO HERE ────────────────────────────────────

];

// ═══════════════════════════════════════════════════════════════
//  EOD SNAPSHOTS
// ═══════════════════════════════════════════════════════════════

window.EOD_SNAPSHOTS = [
    {
        date: '2026-06-29',
        closes:  { SPY: 739.61, QQQ: 723.00, NVDA: null, TSLA: null, AAPL: null },
        changes: { SPY: +1.10,  QQQ: +1.52,  NVDA: null, TSLA: null, AAPL: null },
        account_value: 15710,
        daily_pnl: 0,
        vix_close: 18.50,
        note: 'NO POSITIONS — STAND DOWN. QQQ +1.52% to $723.00 (range $705.17–$724.58); SPY +1.10% to ~$739.61; Nasdaq 100 +~2%. QQQ still closed $12 below $735 gate — STAND DOWN correct. Comcast +24% (NBCUniversal spinoff), Rocket Lab +15.9% (Iridium acquisition), Tesla +8.06%, Alphabet +4.62%. Iran ceasefire holding; Doha talks Tuesday remain key binary. Holiday-shortened week: market closes 1 PM ET Thursday Jul 2 (NFP day), closed Fri Jul 3.'
    },
    {
        date: '2026-06-26',
        closes:  { SPY: 731.58, QQQ: 712.18, NVDA: null, TSLA: null, AAPL: null },
        changes: { SPY: -0.23,  QQQ: +0.68,  NVDA: null, TSLA: null, AAPL: null },
        account_value: 15710,
        daily_pnl: 0,
        vix_close: 18.89,
        note: 'NO POSITIONS — STAND DOWN. Q2 FINAL TRADING DAY. Global tech selloff on AI data center cost fears + reported OpenAI IPO delay to 2027. QQQ closed $712.18 (+0.68% from Jun 25 $707.35) — MU blowout chip momentum partially offset Mag7 continuation selling; intraday range $702.81–$715.84. SPY $731.58 (-0.23%). VIX 18.89. Nasdaq Composite -0.24%. STAND DOWN correct: QQQ failed $735 gate by $21 at 8:45 AM CT, Iran deal deteriorating (IRGC drone struck Singapore-flagged vessel, forced 3 tankers to turn around), SPY reversed hard from $738.89 open. Account $15,710 unchanged. End of Q2 2026.'
    },
    {
        date: '2026-06-25',
        closes:  { SPY: 733.27, QQQ: 707.35, NVDA: null, TSLA: null, AAPL: 275.42 },
        changes: { SPY: 0.00,   QQQ: -0.46,  NVDA: null, TSLA: null, AAPL: -6.13 },
        account_value: 15710,
        daily_pnl: 0,
        vix_close: 18.06,
        note: 'NO POSITIONS — STAND DOWN day. QQQ gapped up to ~$725 on MU blowout earnings (EPS $25.11 +23% beat, MU +19%), then collapsed as Apple (-6.13%) and Microsoft (-3.23%) announced consumer hardware price hikes citing higher memory costs (ironic: MU HBM boom → DRAM prices → AAPL/MSFT pass costs to consumers). Mag7 led Nasdaq lower. QQQ closed $707.35 (-0.46%), ending below Jun 24 close despite the MU surge. SPY near-flat at $733.27. VIX settled 18.06 (off intraday 19+ spike). STAND DOWN was correct: PCE +4.1% YoY hot print + QQQ $9.61 below $735 gate at 8:45 AM CT justified holding cash. Account $15,710 unchanged.'
    },
    {
        date: '2026-06-24',
        closes:  { SPY: 733.24, QQQ: 710.60, NVDA: null, TSLA: null, AAPL: null },
        changes: { SPY: -0.05,  QQQ: -0.43,  NVDA: null, TSLA: null, AAPL: null },
        account_value: 15710,
        daily_pnl: 0,
        vix_close: 19.80,
        note: 'NO POSITIONS — STAND DOWN day. QQQ fell to $710.60 (-0.43%) continuing Jun 23 chip rout (QQQ was $713.65 on Jun 23, -3.29%). SPY held flat at $733.24 (-0.05%). Market stabilized ahead of MICRON Q3 earnings after close. AFTER HOURS: MU reported MASSIVE BEAT — EPS $25.11 vs $20.39 est, Revenue $41.5B vs $35.1B est, GM 84.9% vs 81.83% est, Q4 guide $49-51B vs $43.2B est. MU +6%+ AH, SMH +3% AH, DRAM ETF +10% AH. Creates significant setup for Thu Jun 25 — chip squeeze on MU blowout but PCE data (hot expected) is the binary offset.'
    },
    {
        date: '2026-06-23',
        closes:  { SPY: 744.39, QQQ: 736.17, NVDA: null, TSLA: null, AAPL: null },
        changes: { SPY: -0.08,  QQQ: +0.10,  NVDA: null, TSLA: null, AAPL: null },
        account_value: 15710,
        daily_pnl: 0,
        vix_close: 17.80,
        note: 'NO POSITIONS — account at buffer level. QQQ volatile intraday ($734.39–$745.43) on SpaceX debt-offering shock (SpaceX -16.4%), VIX spiked to 19.50 intraday before settling back. Market closed mixed: tech/discretionary led losses intraday, QQQ recovered to $736.17 (+0.10% from Jun 22 close). No actionable 0DTE setup — account too thin for meaningful sizing and VIX elevated.'
    },
    {
        date: '2026-06-22',
        closes:  { SPY: 744.97, QQQ: 735.40, NVDA: null, TSLA: null, AAPL: null },
        changes: { SPY: -0.37,  QQQ: -0.60,  NVDA: null, TSLA: null, AAPL: null },
        account_value: 15710,
        daily_pnl: -88300,
        vix_close: 17.46,
        note: 'ALPHABET-LED TECH SELLOFF — AI capex fears + Iran Strait re-closure claim. QQQ opened $743.22, hit intraday high $744.37 (T009 momentarily $0.37 ITM), then faded to session low $721.97 before closing $735.40. Alphabet -7%, Amazon -4.8%, SpaceX -10.7%, Meta -2.3%. Nasdaq-100 quarterly rebalance (CoreWeave, Nebius, Astera Labs, Rocket Lab, Teradyne added) muted index loss to -0.25% but QQQ price fell -0.60% including ex-dividend ($0.8135). T009 ($744C core) and T010 ($761C lottery) both expired worthless. Daily P&L: -$88,300. Account: $15,710. Russell 2000 closed at 3,000 for the first time ever (small caps outperformed).'
    },
    {
        date: '2026-06-19',
        closes:  { SPY: null, QQQ: null, NVDA: null, TSLA: null, AAPL: null },
        changes: { SPY: null, QQQ: null, NVDA: null, TSLA: null, AAPL: null },
        account_value: 104010,
        daily_pnl: 0,
        vix_close: null,
        note: 'JUNETEENTH HOLIDAY — U.S. equity markets closed. No positions, no P&L. Account unchanged at $104,010. Last market close (Jun 18): QQQ $739.66, SPY $746.74, VIX 16.40.'
    },
    {
        date: '2026-06-18',
        closes:  { SPY: 746.74, QQQ: 739.66, NVDA: null, TSLA: null, AAPL: null },
        changes: { SPY: +0.78,  QQQ: +2.37,  NVDA: null, TSLA: null, AAPL: null },
        account_value: 104010,
        daily_pnl: 0,
        vix_close: 16.40,
        note: 'STAND DOWN — no positions. QQQ staged massive intraday reversal: opened $735.00, sold to session low $724.53 on FOMC hangover (STAND DOWN called 8:45 AM CT), then ripped to close $739.66 (+2.37%). VIX collapsed from 18.38 to 16.40 as FOMC fears faded. AI/tech momentum + Iran deal continuation drove afternoon buying. Capital preserved at $104,010.'
    },
    {
        date: '2026-06-17',
        closes:  { SPY: 747.36, QQQ: 733.41, NVDA: null, TSLA: null, AAPL: null },
        changes: { SPY: -1.21,  QQQ: -1.34,  NVDA: null, TSLA: null, AAPL: null },
        account_value: 104010,
        daily_pnl: -49700,
        vix_close: 18.38,
        note: 'FOMC Day 2 — Warsh held rates at 3.50–3.75% (12-0 vote) but hawkish dot plot (9/18 members projecting rate hike, 6 projecting multiple hikes) triggered T008 invalidation. Nasdaq -1.34%, S&P 500 -1.21%. Tech bellwethers (MSFT, META, GOOGL, AMZN) led losses; stocks sold off into close hitting day lows in final minutes. 10yr Treasury yield +6.9bps to 4.497%. VIX +12% to 18.38. T008 QQQ $739C expired worthless (-$49,700). Account: $104,010.'
    },
    {
        date: '2026-06-16',
        closes:  { SPY: 756.50, QQQ: 744.00, NVDA: null, TSLA: null, AAPL: null },
        changes: { SPY: +1.80,  QQQ: +3.14,  NVDA: null, TSLA: null, AAPL: null },
        account_value: 153710,
        daily_pnl: -18430,
        vix_close: 17.68,
        note: 'Iran deal confirmed signed, QQQ gapped to $739.16 open (+2.47%) and ran to $744.00 close (+3.14%). T006 $740C core expired ITM (+$15,950). T007 $757C lottery expired worthless (-$34,380). Net day -$18,430.'
    },
    {
        date: '2026-06-10',
        closes:  { SPY: 728.45, QQQ: 706.67, NVDA: null, TSLA: null, AAPL: null },
        changes: { SPY: -2.02,  QQQ: -2.60,  NVDA: null, TSLA: -1.43, AAPL: null },
        note: 'CPI hot day (4.2% YoY) + Israel-Iran escalation. SPY fell from open $743.51 to close $728.45.'
    },
    {
        date: '2026-06-11',
        closes:  { SPY: null, QQQ: 689.74, NVDA: null, TSLA: null, AAPL: null },
        changes: { SPY: null, QQQ: null,   NVDA: null, TSLA: null,  AAPL: null },
        note: 'PPI day. QQQ ranged $687.41-$711.26, closed $689.74. Bear thesis validated — QQQ flushed through $700 and closed well below $705 strike.'
    },
    {
        date: '2026-06-12',
        closes:  { SPY: 737.76, QQQ: 718.53, NVDA: null, TSLA: null, AAPL: null },
        changes: { SPY: +1.70,  QQQ: +0.31,  NVDA: null, TSLA: null,  AAPL: null },
        note: 'Iran deal prospects + SpaceX IPO debut. SPY +1.70% to $737.76 (broad market relief on Iran deal optimism). QQQ underperformed at +0.31% to $718.53. QQQ closed $1.47 below $720 strike — both T004 ($720C) and T005 ($730C) expired worthless. Deal text agreed (Islamabad declaration) but not formally signed.'
    },
    {
        date: '2026-06-13',
        closes:  { SPY: 741.75, QQQ: 724.00, NVDA: null, TSLA: null, AAPL: null },
        changes: { SPY: +0.54,  QQQ: +0.76,  NVDA: null, TSLA: null,  AAPL: null },
        note: 'No positions — weekend. SPY extended gains to $741.75 (+0.54%) on continued Iran deal optimism. QQQ ~$724 (est). Markets drifted higher on low volume with deal signing expected in Geneva over the weekend. FOMC June 16-17 on deck — 99.4% probability of hold at 3.50-3.75%.'
    }
];

// ═══════════════════════════════════════════════════════════════
//  DAILY NOTES
// ═══════════════════════════════════════════════════════════════

window.DAILY_NOTES = [
    {
        date: '2026-06-30',
        note: `PRE-MARKET BRIEF — TUESDAY JUNE 30 | 8:45 AM CT
DOHA TALKS DAY

ACCOUNT STATUS:
  Account value: $15,710 (unchanged — STAND DOWN every session Jun 23-29)
  Core budget (65%): $10,212 | Lottery (20%): $3,142 | Buffer (15%): $2,357 (NEVER TOUCH)

--- THESIS VALIDATION | 8:45 AM CT ---
QQQ: ~$714 (opened $713.98, today's range ~$705.17-$720.91) | VIX: ~18.6 (opened 18.60, range 17.49-19.45) | SPY: prior close $739.96 (-0.14% Mon); S&P futures only marginally green | WTI: $70.32 (range $70.12-$70.86, drifting toward $70 on Doha hopes)

CONDITIONS:
  [FAIL] QQQ > $735 - actual: ~$714 (~$21 below gate; has not reclaimed gate since Jun 16)
  [PASS] VIX < 25 - actual: ~18.6
  [FAIL] Iran deal intact / Doha catalyst - conflicting signals: Qatar's FM says US envoys (Witkoff/Kushner) will NOT meet Iranian officials directly; Iran says no negotiation meetings are scheduled at any level. Only indirect, Qatari-mediated "technical talks" are planned to produce documents for future high-level talks. The binary catalyst the weekend brief flagged as "highest-conviction of the week" has NOT materialized as a clean bullish trigger - it is murkier than expected.
  [PASS] Market trending up - S&P/Nasdaq Composite marginally green (S&P +0.03%, Nasdaq Composite +0.29%) on stop-attacks de-escalation headlines, but Dow -0.24% - mixed, weak tailwind at best

VERDICT: STAND DOWN

REASONING: QQQ remains ~$21 below the $735 gate, continuing the pattern since Jun 23 - chip/Mag7 weakness and the FOMC hawkish overhang are still suppressing rate-sensitive tech even as broader risk sentiment improves modestly on Iran de-escalation headlines. Today's Doha session, billed as the week's highest-conviction catalyst, is unfolding as indirect/technical-level talks with the US and Iran publicly disputing whether any meeting is even happening - that does not clear the bar for a high-conviction bullish catalyst. VIX is contained and oil is drifting lower, which is constructive, but neither offsets the QQQ price gate failure. Account remains at $15,710 (effectively buffer level), reinforcing STAND DOWN regardless of thesis.

PIVOT SUGGESTIONS:
  1. WAIT FOR DOHA OUTCOME CONFIRMATION - If later today or tomorrow produces a confirmed joint statement (not just "technical talks") on Strait/ceasefire terms, oil could break decisively below $70 and QQQ could mount a relief rally toward $725+. Re-check gate before any entry: QQQ > $735, VIX < 20, confirmed (not disputed) talks outcome.
  2. WEDNESDAY WARSH SPEECH SETUP - Fed Chair Warsh speaks 9:30 AM ET Wed Jul 1. If Doha produces even modest de-escalation overnight AND Warsh strikes a neutral/non-hawkish tone, combine with ADP/ISM data for a possible Wed bull gate (QQQ > $725, VIX < 20, oil < $70). Core-only at current capital; no lottery leg.
  3. CONTINUE STAND DOWN THROUGH JOBS REPORT - Thursday's NFP (8:30 AM ET) + early 1 PM ET close leaves only ~2.5 hours of trading. Given QQQ's persistent gate failure and thin $15,710 capital, preserving cash through the Doha/Warsh/Jobs sequence and reassessing Thursday or next week remains the lowest-risk path.

NEXT: Open Claude Code (cd C:\\Projects\\portfolio && claude) to execute or realign.`
    },
    {
        date: '2026-06-29',
        note: `WEEKEND PRE-MARKET BRIEF — SUNDAY JUNE 28 | FOR MONDAY JUNE 29, 2026
Q3 OPENING WEEK

ACCOUNT STATUS:
  Account value: $15,710 (unchanged — STAND DOWN all of Jun 23-26; Q2 closed flat)
  Core budget (65%): $10,212 | Lottery (20%): $3,142 | Buffer (15%): $2,357 (NEVER TOUCH)
  NOTE: Account is at effective buffer level. At $15,710: ~3-4 core contracts max
        (vs. 140-570 historical). Lottery leg impractical. Sizing constraint is binding.
  Q2 FINAL: $100,000 start → $436,970 peak (+337%) → $15,710 final (-84.3% from start; -96.4% from peak)

══════════════════════════════════════════════════════
WEEKEND FLASH: US-IRAN MUTUAL STRIKES — SITUATION CRITICAL
══════════════════════════════════════════════════════

This is the dominant risk for Monday's open. Escalation sequence over the weekend:

  Jun 26 (Fri): Iran IRGC drones struck cargo ship in Strait of Hormuz.
                Trump accused Iran of "foolish ceasefire breach."
  Jun 27 (Sat): US launched retaliatory strikes on Iranian military infrastructure —
                surveillance, communications, air defense sites, drone storage,
                minelayer capabilities (5 coastal sites).
  Jun 28 (Sun): Iran retaliated: ballistic missiles + drones fired at US Ali Al Salem
                Air Base (Kuwait) AND US Fifth Fleet HQ (Bahrain). Escalation to US
                military assets — major threshold crossed.
                Iran canceled technical Strait of Hormuz talks.
  Jun 28 (Sun): BOTH SIDES AGREED to halt attacks; resume talks TUESDAY in Doha, Qatar.
                (Original venue Switzerland abandoned after flare-up.)

  MARKET CONTEXT: WTI crude closed ~$69/bbl on FRIDAY (pre-weekend escalation —
  traffic flow optimism priced in). Market must reprice weekend military exchanges Monday.
  Oil likely spikes at open. If WTI reclaims >$80, inflation narrative reignites →
  FOMC rate hike fears amplify → QQQ multiple compression.

LAST FRIDAY CLOSE (Jun 26 — Q2 final):
  QQQ: $712.18 (+0.68%) | SPY: $731.58 (-0.23%) | VIX: 18.89 | WTI: ~$68.86 (pre-escalation)
  Nasdaq Composite: -0.24% | S&P 500: -0.05% | 10yr yield: ~4.50%
  Context: QQQ closed $22.82 below the $735 gate even before weekend geopolitical shock.

══════════════════════════════════════════════════════
WEEK OF JUNE 29 – JULY 2 — CATALYST CALENDAR
══════════════════════════════════════════════════════

  Mon Jun 29: No major economic data. Iran/geopolitical headlines dominate open.
              WATCH: Oil futures, S&P overnight futures, any ceasefire statements.

  Tue Jun 30: Consumer Confidence (10:00 AM ET) | JOLTS Job Openings (10:00 AM ET)
              Earnings: Nike (NKE), Constellation Brands (STZ)
              ★ IRAN-US DOHA TALKS — both sides committed to resume Tuesday.
                This is the highest-conviction binary catalyst of the week.
                Resolution: oil -$5+ → QQQ relief rally → potential bull setup Wed/Thu.
                Collapse: escalation loop → oil >$85 → QQQ breaks below $700.

  Wed Jul  1: ADP Employment Change (8:15 AM ET) | ISM Manufacturing PMI (10:00 AM ET)
              Construction Spending (10:00 AM ET)
              ★ FED CHAIR WARSH SPEAKS — 9:30 AM ET (topic: Europe/global economy)
                Any rate hike timeline signal would slam tech/QQQ.
                Neutral tone = relief rally with Doha tailwind if talks succeeded Tuesday.
              Earnings: General Mills (GIS)

  Thu Jul  2: ★ JUNE NONFARM PAYROLLS + UNEMPLOYMENT RATE — 8:30 AM ET
                Consensus: +172,000 jobs | Prior: ~May figure
                Average Hourly Earnings (inflation read for FOMC)
                Factory Orders
              ⚠️ MARKET CLOSES EARLY AT 1:00 PM ET (Independence Day observed — Jul 4 falls Sat)
                Bond market closes 2:00 PM ET
                → Only ~2.5 hours of trading post-jobs print before close

  Fri Jul  3: ★★ MARKET CLOSED — Independence Day holiday weekend

══════════════════════════════════════════════════════
MACRO BACKDROP
══════════════════════════════════════════════════════

  [BEAR] Weekend US-Iran mutual strikes — most intense military exchange since ceasefire signed Jun 17.
         Iran fired missiles at US military bases (Kuwait, Bahrain). Market HAS NOT priced this.
         VIX likely gaps above 20 at Monday open on geopolitical risk premium repricing.
  [BEAR] Oil will reprice Monday: WTI ~$69 (pre-weekend) → likely +$5-10 spike at open.
         If WTI > $80, Iran deal oil-price relief thesis evaporates. Stagflation re-ignites.
  [BEAR] PCE +4.1% YoY (Jun 25) — highest since April 2023. Stagflation narrative intact.
  [BEAR] FOMC hawkish: 9/18 members project 2026 rate hikes; Warsh withholding own dot.
         Each hot data point (Jobs Thu) amplifies rate hike risk and compresses QQQ multiples.
  [BEAR] QQQ tech selloff momentum: AI capex fears (Alphabet -7% Jun 22), OpenAI IPO delay
         to 2027, AAPL/MSFT hardware price hikes on DRAM costs — Mag7 distribution ongoing.
  [BEAR] QQQ $712.18 Friday — $22.82 below $735 gate BEFORE weekend geopolitical shock.
  [BULL] Doha talks Tuesday — ceasefire framework still alive; both sides committed to meet.
         A successful outcome is the only realistic bull catalyst this week.
  [BULL] MU blowout (Jun 24 AH) — chip/semi sector bid providing floor; SMH and AI names hold.
  [BULL] Jobs consensus +172K = in-line. Unlikely to add hawkish shock if near estimate.
  [BULL] QQQ still above 50-day and 200-day MA support levels despite recent weakness.

══════════════════════════════════════════════════════
MONDAY JUNE 29 — TRADE FRAMEWORK
══════════════════════════════════════════════════════

GATE CHECK (verify at 8:45 AM CT with live data):
  □ QQQ > $735? (last close $712.18 — needs $23 rally through weekend war escalation)
  □ VIX < 25? (last close 18.89 — likely spikes 21-24+ at open on Iran news)
  □ WTI oil price at open vs. Friday $68.86 — >$80 = bear thesis active; <$72 = contained
  □ Iran/Doha: Any overnight ceasefire statement? Both sides holding cease-fire agreement?
  □ S&P futures direction overnight (US futures will react to Iran/Kuwait/Bahrain news)

─── SCENARIO A — STAND DOWN (default / near-certain for Monday) ───
  Trigger: QQQ < $735 OR VIX > 25 OR oil spike without resolution signal
  Action: Hold $15,710. Write STAND DOWN note. Push. Monitor Doha talks Tuesday.
  Rationale: Weekend strikes are the most intense US-Iran military exchange since the ceasefire.
             QQQ was already $22.82 below gate Friday — it needs a $23+ rally through a weekend
             war escalation with oil repricing. Account at $15,710 is functionally at buffer
             level regardless of direction. DEFAULT: STAND DOWN.

─── SCENARIO B — BEAR PUTS (oil spike / Strait formal closure) ───
  Trigger: QQQ opens < $700, VIX > 24, WTI > $82, Iran declares Strait transit blocked
  Thesis: Weekend escalation → oil shock → inflation spike → FOMC hike acceleration →
          QQQ multiple compression. Mirrors T001-T002 (Jun 10-11) bear thesis directionally.
  SIZING CAVEAT: Account too thin for meaningful impact. $10,212 core max = ~3-4 ATM
                 put contracts. Dollar PnL negligible even if directionally correct.
  Invalidation: QQQ reclaims $708 in first 30 min (Doha pre-announcement, ceasefire holds)

─── SCENARIO C — WATCH DOHA (TUESDAY IS THE KEY DAY) ───
  If Monday = STAND DOWN, focus shifts entirely to Tuesday Doha talks.
  [BULL — talks succeed]: Iran-US agree on Strait terms → oil -$5+ → QQQ relief rally →
    bull call setup Wed morning if QQQ reclaims $725-730, Warsh neutral, VIX < 20.
  [BEAR — talks collapse]: Full ceasefire breakdown → escalation loop → oil > $85 →
    QQQ bear setup if < $700. Sizing constraint remains binding at $15,710.

──────────────────────────────────────────────────────
SIZING REALITY CHECK — Q3 CONSTRAINT
──────────────────────────────────────────────────────

  At $15,710 account value, meaningful YOLO 0DTE is not possible:
  Core (65% = $10,212): ~3-4 contracts at $3.50 = $1,050-$1,400 deployed
  Lottery (20% = $3,142): ~7-8 contracts at $0.40 = $280-$320 — noise, not a position
  Reference: T009 core = 225 contracts, $67,500. Current core ≈ 1.5% of that size.

  RECOMMENDATION: No position unless QQQ has reclaimed gate AND a high-conviction
  directional catalyst exists. Doha success Tuesday is the only realistic trigger.
  Preserve $15,710 for that window or a formal Q3 capital reset discussion.

══════════════════════════════════════════════════════
WEEK OUTLOOK
══════════════════════════════════════════════════════

  Monday:   STAND DOWN (default). Assess geopolitical repricing at open.
  Tuesday:  DOHA TALKS — highest-conviction event. Week direction set here.
  Wednesday: Warsh 9:30 AM ET + ISM + ADP. If Doha succeeded → potential bull setup.
  Thursday: Jobs 8:30 AM + early close 1 PM. Tight 2.5-hr trading window post-print.
              Hot jobs (>220K): FOMC hike fear → headwind. Weak (<140K): relief → tailwind.
  Friday:   MARKET CLOSED. 4-day holiday weekend to reset for Q3.

  KEY WATCH: If Doha talks Tuesday produce confirmed ceasefire restoration + Strait terms
  agreed → Wednesday morning is the highest-conviction bull window this week.
  Gate: QQQ > $725 + VIX < 20 + oil < $75 + Warsh neutral. Core-only (no lottery at $15,710).

--- THESIS VALIDATION | 8:45 AM CT ---
QQQ: ~$710 (opened $707.13, range $702.81–$715.56) | VIX: ~19.5 (opened 19.70, range 18.20–20.72) | SPY: $738.44 (+1.1%) | WTI: $70.11

CONDITIONS:
  [FAIL] QQQ > $735 — actual: ~$710 (opened $707.13, high $715.56; ~$25 below gate)
  [PASS] VIX < 25 — actual: ~19.5 (elevated but below gate)
  [FAIL] Iran deal intact — ceasefire technically holds ("vessels moving freely" per US official Jun 28) but MOU interpretation under active dispute; Iran denies any Doha meetings scheduled; Trump says Tuesday Qatar session; situation described as "barely 11 days old and on shaky ground" — CONDITIONAL FAIL on thesis integrity
  [PASS] Market trending up — SPY +1.1% at $738.44 (broad market rallying on Iran peace hopes); tech/QQQ lagging significantly

VERDICT: STAND DOWN

REASONING: QQQ fails the primary $735 gate by ~$25 — tech is severely underperforming the broad market rally. SPY is up 1.1% on Iran peace hopes but QQQ cannot overcome the combined weight of the FOMC hawkish overhang (9/18 members projecting 2026 rate hikes), hot PCE (+4.1% YoY), and persistent AI capex/Mag7 distribution. WTI at $70.11 confirms no oil shock despite weekend military exchanges — the ceasefire is holding in practice — but that tailwind alone is insufficient to move rate-sensitive tech $25 above gate. Account at $15,710 (effectively buffer level; ~3-4 core contracts max) makes meaningful sizing impractical regardless of verdict.

PIVOT SUGGESTIONS:
  1. DOHA TALKS WATCH (TUESDAY) — If US-Iran Doha session proceeds and produces any statement on Strait terms, oil may drop further toward $65-68 and QQQ could recover toward $720-725 on relief. Wednesday morning gate (reduced given thin account): QQQ > $725 + VIX < 20 + WTI < $72 + Warsh neutral at 9:30 AM ET speech. Core-only at $10,212 = ~3-4 contracts.
  2. BEAR PUT SETUP (DOHA COLLAPSE SCENARIO) — If Doha talks officially collapse, QQQ likely breaks below $700 and WTI spikes above $80. Enter ATM 0DTE puts if QQQ < $700 at open with VIX > 22. Mirrors T001-T002 (Jun 10-11) macro thesis. $10,212 max core = ~3-4 contracts; no lottery. Invalidation: ceasefire statement causes QQQ to reclaim $710 within 30 min.
  3. FULL STAND DOWN THROUGH TUESDAY — Account at $15,710 is not meaningfully deployable. Any position (3-4 contracts) is noise against historical sizing (140-570 contracts). Monday has no economic data and Iran/Doha is binary/unknown. Preserve all $15,710 through Doha resolution, then reassess Wednesday morning with full clarity: Doha outcome + Warsh 9:30 AM ET + ADP 8:15 AM ET + ISM 10:00 AM ET.

NEXT: Open Claude Code (cd C:\Projects\portfolio && claude) to execute or realign.

--- SETTLED EOD — 2026-06-29 | 3:30 PM CT ---
NO POSITIONS TODAY — STAND DOWN CONFIRMED CORRECT
QQQ CLOSE: $723.00 (+1.52%) | SPY: ~$739.61 (+1.10%) | VIX: ~18.50
DAILY P&L: $0
ACCOUNT: $15,710 (unchanged)

STAND DOWN was correct: QQQ failed the $735 gate by ~$12 even after the day's +1.52% rally.
QQQ range $705.17–$724.58, closed $723.00 — still $12 below the $735 gate despite broad market strength.
SPY +1.10% to ~$739.61. Nasdaq 100 +~2%.

KEY MARKET EVENTS:
  Comcast +24% — announced NBCUniversal spinoff; single largest non-mega-cap move of day
  Rocket Lab +15.9% — $8B acquisition of Iridium (+25.4%) announced; space sector surge
  Tesla +8.06%, Alphabet +4.62% — Mag7 recovery led by growth names
  Holiday-shortened week: market closes 1 PM ET Thursday Jul 2 (NFP day); closed Fri Jul 3
  Iran/Doha: ceasefire holding in practice; both sides reportedly still attending Tue Doha session

NEXT: Watch Tuesday Doha talks — highest-conviction binary of the week.
  [BULL] Success → oil -$5+ → QQQ recovery toward $725-730 → potential Wed bull window
           Gate: QQQ > $735, VIX < 20, WTI < $72, Warsh neutral at 9:30 AM ET Wed
  [BEAR] Collapse → escalation loop → oil >$85 → QQQ bear setup if breaks $700
  Thu Jul 2: NFP 8:30 AM ET + market closes 1 PM ET — only ~90 min post-data window.
  Account: $15,710 (~3-4 core contracts max). Meaningful sizing not practical.`
    },
    {
        date: '2026-06-26',
        note: `PRE-MARKET BRIEF — FRIDAY JUNE 26 | 8:45 AM CT
Q2 FINAL TRADING DAY

ACCOUNT STATUS:
  Account value: $15,710 (unchanged — no positions Jun 25, STAND DOWN)
  Core budget (65%): $10,212 | Lottery (20%): $3,142 | Buffer (15%): $2,357 (NEVER TOUCH)
  NOTE: Account is at effective buffer level. Meaningful 0DTE sizing not practical.

CATALYST CALENDAR TODAY:
  • UNIV. OF MICHIGAN CONSUMER SENTIMENT (FINAL) — due ~9:00-10:00 AM ET
      Consensus final: 48.9 (unchanged from prelim; near historic lows)
      1-yr inflation expectations: ~4.6%, 5-yr: ~3.4%
      → No material directional catalyst; confirms stagflation narrative already priced in
  • Q2 END — final institutional rebalancing, pension fund flows, quarter-end positioning
      → Potential for late-day volatility as funds square books
  • No other major economic releases

MACRO BACKDROP:
  [BEAR] QQQ ~$713.65 (range $704.45–$719.93) — well below $735 gate despite chip momentum
         from MU blowout (+19% Jun 25); Mag7 selling (AAPL -6.1%, MSFT -3.5%, NVDA -1.6%) dominates
  [BEAR] Iran deal ACTIVELY DETERIORATING: IRGC drone struck Singapore-flagged vessel in Strait;
         IRGC forced 3 foreign oil tankers to turn around; IMO paused ship evacuation plan
         after latest vessel attack — fundamental bull thesis under direct attack
  [BEAR] SPY reversed from $738.89 open to $729.26 (−1.3% from open, −0.54% from Jun 25 close)
  [BEAR] VIX 18.68 (range 17.72–19.95) — elevated; intraday spikes near 20 on Iran news
  [BULL] MU blowout earnings (+19% Jun 25) — chip/semi sector momentum still providing some floor
  [BULL] UMich final inline with prelim = no additional stagflation shock expected

--- THESIS VALIDATION | 8:45 AM CT ---
QQQ: ~$713.65 (range $704.45–$719.93) | VIX: 18.68 (range 17.72–19.95) | SPY: $729.26 (opened $738.89, −1.3% from open, −0.54% from Jun 25 close $733.27)

CONDITIONS:
  [FAIL] QQQ > $735 — actual: ~$713.65 (−$21.35 below gate; Mag7 selloff overrides chip-sector momentum)
  [PASS] VIX < 25 — actual: 18.68 (elevated; intraday spikes to 19.95 on Iran deterioration)
  [FAIL] Iran deal intact — IRGC drone struck Singapore-flagged vessel in Strait of Hormuz (Jun 26);
         IRGC forced 3 oil tankers to turn around; IMO paused ship evacuation plan after vessel attack;
         deal is actively challenged — fundamental bull thesis eroding in real time
  [FAIL] Market trending up — SPY reversed hard from $738.89 open to $729.26 (−1.3%); QQQ same
         pattern; tech/Mag7 under pressure; broad market red; no upward momentum

VERDICT: STAND DOWN

REASONING: Three of four gates fail. QQQ is $21 below the $735 price gate — Micron's blowout-driven chip-sector momentum is being overwhelmed by continued Mag7 selling (AAPL -6.1% Thursday, carrying over today) and fresh Iran deal deterioration. The IRGC drone strike on a vessel and tanker turnarounds directly contradict the "Strait open, oil falling" bull thesis that drove T006-T009. SPY reversed hard from its gap-up open — the broad market is red. Account at $15,710 (effectively at buffer level) makes meaningful sizing impractical regardless of thesis.

PIVOT SUGGESTIONS:
  1. END-OF-Q2 RESET — Account is $15,710 (15.7% of $100K starting; −96.4% from $436,970 peak).
     Meaningful YOLO sizing not possible (20-25 contracts max vs. 140-570 historical). Consider a formal
     capital reset or Q3 strategy pause. If Iran deal fully collapses next week (Strait re-closure
     confirmed), the bear put mirrors T001-T002 but with severely constrained position size.
  2. WAIT FOR GEOPOLITICAL CLARITY — If U.S. and Iran reach a resolution to the IRGC tanker incidents
     (Vance/State Dept statement, confirmed IRGC stand-down), the bullish catalyst could re-ignite.
     Gate check: QQQ > $735 + VIX < 17 + confirmed IRGC stand-down + SPY green. Core-only, no lottery
     at $15,710. First viable window: Monday Jun 29 if weekend produces resolution.
  3. BEAR PUT SETUP (IRAN COLLAPSE SCENARIO) — If IRGC incidents escalate to formal Strait re-closure
     (oil > $90/bbl, WTI spiking), QQQ likely breaks below $700 (mirrors T001-T002 macro thesis).
     Gate: QQQ < $705, VIX > 21, WTI > $87, SPY red. $10,212 core in ATM puts; no lottery.
     Invalidation: IRGC stands down, oil drops below $82.

NEXT: Human reviews in Claude Code to choose direction.

--- SETTLED EOD — 2026-06-26 | 3:30 PM CT ---
NO POSITIONS TODAY — STAND DOWN CONFIRMED CORRECT
QQQ CLOSE: $712.18 (+0.68%) | SPY: $731.58 (-0.23%) | VIX: 18.89
DAILY P&L: $0
ACCOUNT: $15,710 (unchanged)

STAND DOWN was the right call. QQQ failed the $735 gate by $21 at 8:45 AM CT.
Iran deal deterioration (IRGC drone strike on Singapore-flagged vessel, 3 oil tankers
forced to turn around, IMO paused evacuation plan) directly invalidated the bull thesis.
SPY reversed hard from its $738.89 gap-up open, closing $731.58 (-0.23%). QQQ closed
$712.18, ending Q2 final trading day $22.82 below the $735 gate.

KEY MARKET EVENTS:
  Global tech sell-off — AI data center cost concerns + reported OpenAI IPO delayed to 2027
  QQQ range $702.81–$715.84, close $712.18 (+0.68% from Jun 25 $707.35; MU blowout held floor)
  Nasdaq Composite -0.24% | S&P 500 -0.05% to 7,354.02
  VIX settled 18.89 (elevated; Iran uncertainty sustained through Q2 final session)
  SpaceX fast-tracked addition to Russell 1000 index after close (+1.5% intraday)

Q2 FINAL CLOSE:
  Account: $15,710 (started Q2 at $100,000; peak $436,970 +337%; final -96.4% drawdown)
  Iran deal remains the dominant macro risk for Q3 positioning.
  Next window: Monday Jun 29 — gate check at 8:45 AM CT.
    Require: QQQ > $735, VIX < 18, confirmed IRGC stand-down, SPY green.`
    },
    {
        date: '2026-06-25',
        note: `PRE-MARKET BRIEF — THURSDAY JUNE 25 | 8:45 AM CT

ACCOUNT STATUS:
  Account value: $15,710 (unchanged — no positions Jun 24, STAND DOWN)
  Core budget (65%): $10,212 | Lottery (20%): $3,142 | Buffer (15%): $2,357 (NEVER TOUCH)
  NOTE: Account is at effective buffer level. Meaningful 0DTE sizing not practical.

CATALYST CALENDAR TODAY:
  • MAY PCE & CORE PCE — RELEASED 7:30 AM CT (Fed's preferred inflation gauge):
      Headline PCE: +4.1% YoY / +0.4% MoM — HOT (highest YoY since April 2023)
      Core PCE:     +3.4% YoY (above 3.3% forecast)
      Personal income: +0.7% MoM (well above +0.4% forecast)
      → Rate hike narrative AMPLIFIED. 9/18 FOMC members already project hikes in 2026.
  • MICRON (MU) Q3 EARNINGS BLOWOUT (after close Jun 24 — per EOD note):
      EPS $25.11 vs $20.39 est (+23%) | Rev $41.5B vs $35.1B est
      Q4 guide: $49–51B vs $43.2B est | MU +19% today | SMH/chip sector surging
      → Counterweight to PCE: chips strong, but rate-sensitive tech capped by hot inflation

MACRO BACKDROP:
  [BULL] MU blowout — chip/semi/AI sector surging; HBM demand story intact
  [BULL] Iran MOU intact — Strait traffic near pre-war levels (~20M bbl/24hrs per Kpler);
         US-Iran road map to final deal established in Switzerland talks
  [BEAR] PCE +4.1% YoY (highest since April 2023) — directly fuels FOMC rate hike narrative
  [BEAR] Core PCE +3.4% YoY — above 3.3% forecast; reinforces 9/18 FOMC hike dots
  [BEAR] QQQ at $725 range — rate-sensitive tech suppressed despite chip strength
  [BEAR] VIX 18.24 (opened 19.13, range 18.04–20.34) — elevated on PCE shock

--- THESIS VALIDATION | 8:45 AM CT ---
QQQ: $725.39 (range $724.56–$726.80) | VIX: 18.24 (opened 19.13) | SPY: $737.16 (range $730.86–$739.95, +$3.92 from Jun 24 close)

CONDITIONS:
  [FAIL] QQQ > $735 — actual: $725.39 (−$9.61 below gate; hot PCE suppressing rate-sensitive tech despite MU surge)
  [PASS] VIX < 25 — actual: 18.24 (elevated vs recent sessions but below gate)
  [PASS] Iran deal intact — Strait traffic near pre-war levels (~20M bbl/24hrs); US-Iran road map confirmed; oil easing
  [PASS] Market trending up — SPY +0.53% from Jun 24 close; broad market lifted by MU chip euphoria

VERDICT: STAND DOWN

REASONING: QQQ fails the primary $735 gate by nearly $10 — the hot May PCE print (+4.1% YoY, highest since April 2023) is directly reinforcing the FOMC hawkish dot-plot narrative (9/18 members projecting rate hikes) and keeping rate-sensitive tech under pressure. Micron's blowout (+19%) is lifting the chip sector and preventing broader market collapse — SPY is +0.53% — but QQQ's greater sensitivity to interest rate expectations means the rate hike signal dominates over chip-sector momentum today. With QQQ $9.61 below the gate and account capital at $15,710 (effectively buffer level), both conditions individually require a STAND DOWN.

PIVOT SUGGESTIONS:
  1. FRIDAY CHIP-MOMENTUM SETUP — If MU surge sustains and the 4.1% PCE print is absorbed (it was in-line with expectations, not a catastrophic shock), QQQ may recover above $735 on Friday as rate-hike fear fades. Gate check at 8:45 AM CT Fri: QQQ > $735, VIX < 18, SPY green. If passes, core-only entry (20-25 contracts max at $15,710 capital); no lottery leg at this size. Thesis: MU-momentum continuation + PCE digested. Invalidation: QQQ < $725.
  2. BEAR PUT SETUP — If PCE rate-hike fears compound through the week and QQQ breaks below $718 (below today's range low), enter ATM 0DTE puts. Thesis mirrors T001-T002 (Jun 10-11): hot inflation + FOMC hawkish dots = QQQ multiple compression. Gate: QQQ < $718 at open, VIX > 20, S&P futures red. $10,212 max core; no lottery.
  3. FULL STAND DOWN THROUGH END OF WEEK — Account at $15,710 is not meaningfully deployable for the YOLO 0DTE strategy (20-25 contracts max vs. historical 140-570 range). PCE and MU are pulling in opposite directions; QQQ's intraday range is tight ($724.56–$726.80) with no clear catalyst to move $10 in either direction today. Preserve $15,710 intact. Reassess strategy viability by end of Q2 (Friday close).

NEXT: Human reviews in Claude Code to choose direction.

--- SETTLED EOD — 2026-06-25 | 3:30 PM CT ---
NO POSITIONS TODAY — STAND DOWN CONFIRMED CORRECT
QQQ CLOSE: ~$707.35 (-0.46%) | SPY: $733.27 (flat) | VIX: 18.06
DAILY P&L: $0
ACCOUNT: $15,710 (unchanged)

STAND DOWN was absolutely the right call. QQQ failed the $735 gate by $9.61 at 8:45 AM CT.
The MU blowout pushed QQQ to ~$725 early in the session, but Apple (-6.13%) and Microsoft
(-3.23%) both announced hardware price hikes citing higher DRAM/memory costs — the very same
HBM boom that sent MU +19%. QQQ gave back all MU-driven morning gains and closed $707.35,
BELOW its Jun 24 close of $710.60. SPY was near-flat; divergence = Mag7 drag on tech index.

KEY MARKET EVENTS:
  MU +19% — EPS $25.11 vs $20.39 est; blowout beat confirmed; chip sector surged early
  AAPL -6.13% to $275.42 — Apple announced MacBook/iPad price hikes on higher memory costs
  MSFT -3.23% — Microsoft raised Xbox prices for same reason; Mag7 selling accelerated
  Nasdaq -0.46% | S&P 500 -0.01% (divergence: tech-heavy QQQ vs. broader SPY)
  PCE +4.1% YoY confirmed hot (highest since Apr 2023) — rate hike narrative reinforced
  VIX 18.06 (settled off 19+ intraday spike as PCE fears were priced in through the morning)

END OF Q2 ASSESSMENT:
  Account: $15,710 — effectively exhausted for YOLO 0DTE strategy
  Q2 run: Started $100,000 → Peak $436,970 (+337%) → Final $15,710 (-96.4% drawdown from peak)
  Next setup: Need QQQ sustained above $735 gate, VIX < 18, and a fresh high-conviction
    catalyst before any position. At $15,710 capital: 20-25 contracts max; no lottery leg.`
    },
    {
        date: '2026-06-24',
        note: `PRE-MARKET BRIEF — WEDNESDAY JUNE 24 | 8:45 AM CT

ACCOUNT STATUS:
  Account value: $15,710 (unchanged — no positions Jun 23)
  Core budget (65%): $10,212 | Lottery (20%): $3,142 | Buffer (15%): $2,357 (NEVER TOUCH)
  NOTE: Account is at effective buffer level. Meaningful 0DTE sizing not practical.

CATALYST CALENDAR TODAY / TOMORROW:
  Today (Jun 24):
    • MICRON (MU) Q3 FY2026 EARNINGS — after market close (~4 PM ET)
      Rev est: $34.66B ($33.5B guided) | EPS est: $19.95 ($19.15 guided) | GM ~81%
      Shares +244% YTD; $1T market cap; HBM demand sold out through 2026
      KEY RISK: Sell-the-news — elevated expectations, heavy QQQ weight
      Chip stocks plunging early in session on pre-earnings anxiety
    • May New Home Sales
    • Fed bank stress test results
  Tomorrow (Jun 25):
    • MAY PCE & CORE PCE (Fed's preferred inflation gauge) — 7:30 AM CT
      Wells Fargo est: headline +0.5% MoM / 4.1% YoY | Core: +0.3% MoM / 3.4% YoY
      HOT print expected — FOMC rate hike narrative amplifier
      Fed policymakers already revised 2026 PCE forecast to 3.6% headline / 3.3% core

MACRO BACKDROP:
  [BULL] Iran MOU intact — Strait of Hormuz flowing (~24 vessels/24hrs per Al Jazeera tracker)
  [BULL] Alphabet joins Dow Jones before next Monday — minor tech sentiment positive
  [BEAR] Chip stocks plunging intraday pre-MU earnings
  [BEAR] PCE tomorrow consensus HOT — rate hike fears remain live (9/18 FOMC dots)
  [BEAR] QQQ -2.5% from yesterday's close, tech/growth leading losses
  [BEAR] 10yr yield elevated; FOMC hawkish dot-plot overhang unresolved
  [BINARY] Micron after-close — sell-the-news risk extreme after 244% YTD run

--- THESIS VALIDATION | 8:45 AM CT ---
QQQ: $718.09 (range $712.11–$737.40) | VIX: ~17.5 | SPY: $734.98 (-1.3% from Jun 23 close)

CONDITIONS:
  [FAIL] QQQ > $735 — actual: $718.09 (−$17.91 below gate; chip selloff pre-MU earnings)
  [PASS] VIX < 25 — actual: ~17.5 (elevated vs yesterday but under gate)
  [PASS] Iran deal intact — MOU signed Jun 17; Strait flowing ~24 vessels/24hrs; talks ongoing
  [FAIL] Market trending up — SPY $734.98 (−1.3% from $744.39); QQQ −2.5%; chips plunging
  [FAIL] 15-min price action — QQQ at $718 after fading from $737 intraday high; momentum negative

VERDICT: STAND DOWN

REASONING: QQQ fails the $735 gate by nearly $18 — chip stocks are in broad pre-earnings distribution ahead of tonight's Micron report, pulling the entire QQQ tech complex lower. The market is pricing in elevated sell-the-news risk on MU (+244% YTD, $1T cap) and the near-certain HOT PCE print tomorrow. Iran deal is intact but is no longer a fresh catalyst — it was priced in over the June 16–22 window. No incremental bullish catalyst exists today to justify a call entry into this weakness. Account at $15,710 is also functionally exhausted for meaningful sizing regardless.

PIVOT SUGGESTIONS:
  1. THURSDAY PCE REACTION SETUP — If May PCE prints cooler than consensus (≤3.8% headline / ≤3.1% core), Fed rate hike narrative softens meaningfully, potentially triggering a QQQ relief rally into Friday. Gate check at 8:45 AM CT Thu: QQQ > $735 + VIX < 20 required. Core-only play (no lottery at this capital level); 20-25 contracts max at $15,710. Only actionable if MU does NOT crater tonight.
  2. BEAR PUT SETUP (MU SELL-THE-NEWS SCENARIO) — If Micron beats tonight but sells off (typical after-hours / gap-down pattern at extreme valuations), QQQ chip components gap down Thursday. If QQQ opens < $710 on MU selloff + hot PCE, enter ATM 0DTE puts (bear gate: QQQ < $720, VIX > 20). Mirror of T001-T002 Jun 10-11 thesis. $10,212 max core size — directional leverage still meaningful even at thin capital.
  3. FULL STAND DOWN THROUGH WEEK-END — Account at $15,710 is not meaningfully deployable for the YOLO 0DTE strategy (20-25 contracts at risk vs. historical positions of 140-570 contracts). Both remaining week catalysts (MU tonight, PCE Thursday) carry heavy downside risk for QQQ. Preserve $15,710 intact. Reassess strategy viability at end of week once PCE and MU reaction are known.

NEXT: Human reviews in Claude Code to choose direction.

--- SETTLED EOD — 2026-06-24 | 3:30 PM CT ---
NO POSITIONS TODAY — STAND DOWN CONFIRMED CORRECT
QQQ CLOSE: $710.60 (-0.43%) | SPY: $733.24 (-0.05%) | VIX: ~19.80
DAILY P&L: $0
ACCOUNT: $15,710 (unchanged)

STAND DOWN was the right call: QQQ failed the $735 gate at 8:45 AM CT by ~$17 and continued weak,
closing at $710.60 — its lowest close since the Jun 23 chip rout. The Micron pre-earnings
distribution played out exactly as warned, dragging QQQ another $3 lower during regular hours.

MICRON Q3 EARNINGS (AFTER HOURS — MASSIVE BEAT):
  EPS: $25.11 vs $20.39 est (+23% above expectations)
  Revenue: $41.5B vs $35.1B est (HBM demand acceleration)
  Gross Margin: 84.9% vs 81.83% est
  Q4 Guidance: $49-51B vs $43.2B est — blowout forward outlook
  MU stock: +6%+ after hours | SMH ETF: +3% AH | DRAM ETF: +10% AH

THURSDAY SETUP — BINARY:
  QQQ has two opposing catalysts Thursday June 25:
  [BULL] MU blowout beat → chip/semi/AI squeeze → QQQ gap up likely
  [BEAR] May PCE data (7:30 AM CT) — est: headline +0.5% MoM / 4.1% YoY,
         core +0.3% MoM / 3.4% YoY — HOT print fuels rate hike narrative
  Gate check at 8:45 AM CT Thu: need QQQ > $735 AND PCE not catastrophically hot
  At $15,710 capital: 20-25 core contracts max; no lottery leg`
    },
    {
        date: '2026-06-23',
        note: `EOD SETTLEMENT — MONDAY JUNE 23 | 3:30 PM CT

NO POSITIONS TODAY — NO MORNING BRIEF ON FILE
Account at effective buffer level ($15,710). No open trades to settle.

QQQ: $736.17 (+0.10%) | range $734.39–$745.43
SPY: $744.39 (-0.08%)
VIX: 19.50 intraday spike / ~17.80 est. close (up from 17.46 Jun 22)
DAILY P&L: $0
ACCOUNT: $15,710 (unchanged)

KEY MARKET EVENTS:
  SpaceX -16.4% — company launched first-ever debt offering, raising concerns about
    future financing needs; triggered tech/growth sector selloff intraday
  Market closed mixed: tech and consumer discretionary led intraday losses;
    QQQ recovered from session low $734.39 to close near flat at $736.17
  VIX spiked intraday to 19.50 on geopolitical uncertainty + SpaceX shock before easing
  S&P 500 / Dow held up better than Nasdaq; sector rotation into defensives

ACCOUNT STATUS:
  Account: $15,710 | Core (65%): $10,212 | Lottery (20%): $3,142 | Buffer (15%): $2,357
  Account is effectively exhausted — meaningful 0DTE sizing not practical at this level.
  No positions entered. Capital preserved.

NEXT: Watch Wed Jun 25 MAY PCE print (est. headline 4.2% YoY, core ~3.4%) for
directional setup. A dovish PCE surprise is the highest-conviction remaining catalyst
to consider a final scaled-back position. VIX must be below 20 at open.`
    },
    {
        date: '2026-06-22',
        note: `WEEKEND PRE-MARKET BRIEF — SUNDAY JUNE 21 | FOR MONDAY JUNE 22, 2026

ACCOUNT STATUS:
  Account value: $104,010 (unchanged — Juneteenth Jun 19 closed, no trade Jun 20 wknd)
  Core budget (65%): ~$67,607 | Lottery (20%): ~$20,802 | Buffer (15%): $15,602 (NEVER TOUCH)

══════════════════════════════════════════════════════
BREAKING: IRAN DECLARES STRAIT OF HORMUZ RE-CLOSED
══════════════════════════════════════════════════════

This is the dominant risk entering Monday. Weekend developments (June 20-21):
  [-] Israel struck dozens of Hezbollah targets in Lebanon — 145+ killed over two days
  [-] IDF: Hezbollah launched 50+ projectiles at IDF soldiers — ceasefire violated
  [-] IRAN RESPONSE: Iran declared Strait of Hormuz CLOSED, citing Lebanon violations
  [-] Trump threatened to "hit Iran very hard again" — escalation risk elevated
  [~] VP Vance landed in Switzerland — Iran-US nuclear talks still underway
  [~] Status: MOU framework at serious risk; situation extremely fluid as of Sunday evening

  The June 16-18 bull thesis rested on the Strait reopening. If Iran re-closes it:
  oil spikes → inflation narrative reignites → FOMC rate hike fears amplify →
  QQQ multiple compression → potential gap DOWN below $735 gate Monday.

LAST MARKET CLOSE (Jun 18 — last U.S. trading day):
  QQQ: $740.62 | SPY: $746.74 | VIX: 16.40 | WTI oil: ~$75.83 | 10yr yield: 4.497%

══════════════════════════════════════════════════════
WEEK OF JUNE 22-26 — CATALYST CALENDAR
══════════════════════════════════════════════════════

  Mon Jun 22: No scheduled data. Iran/Lebanon headlines dominate open.
  Tue Jun 23: Fed Vice Chair Bowman testifies (House Financial Services Committee)
  Wed Jun 24: MICRON (MU) EARNINGS — Q3 FY2026
                Revenue est: $33.5B (+271% YoY) | EPS est: $19.72 (+932% YoY)
                Gross margin est: ~81% (vs 39% one year ago) | MU market cap >$1T
                HBM memory sold out through 2026; supply shortage persisting into 2027
                Risk: Expectations EXTREMELY elevated. Last quarter: blowout results,
                stock FELL post-earnings. Potential sell-the-news reaction in AI/chip names.
  Thu Jun 25: MAY PCE & CORE PCE (Fed's preferred inflation gauge)
                Headline PCE est: ~4.2% YoY (vs 3.8% prior — third consecutive acceleration)
                Core PCE est: ~3.4% | Pro forecaster consensus Q2: 4.5–6%
                Hot print = FOMC rate hike fears amplify = QQQ headwind
  Fri Jun 26: No major data releases

══════════════════════════════════════════════════════
MACRO BACKDROP
══════════════════════════════════════════════════════

  [BULL] AI/tech momentum intact — MU HBM demand outstrips supply 50-67%
  [BULL] Iran MOU formally signed at Versailles (Jun 17) — framework exists even if fragile
  [BULL] Vance in Switzerland — diplomacy not dead; resolution possible
  [BULL] QQQ technicals: 12 Buy / 0 Sell MA signals; 50-day ($709) > 200-day ($636)
  [BEAR] Iran Strait CLOSED as of Jun 20-21 — direct reversal of June 16-18 bull thesis
  [BEAR] PCE Thursday expected HOT (4.2%+) — fuels FOMC rate hike narrative all week
  [BEAR] FOMC dot plot: 9/18 members projecting hikes — hawkish overhang not resolved
  [BEAR] 10yr yield 4.497% — elevated, compresses QQQ/tech multiples
  [BINARY] Micron Wed — sell-the-news risk given $1,145 price and 932% EPS growth est.

══════════════════════════════════════════════════════
MONDAY JUNE 22 — TRADE FRAMEWORK
══════════════════════════════════════════════════════

GATE CHECK (verify at 8:45 AM CT with live data):
  □ QQQ > $735? (last: $740.62 — watch for gap down on Iran news)
  □ VIX < 25? (last: 16.40 — may spike 20+ on geopolitical shock)
  □ WTI oil price: >$85 = Iran thesis broken, lean bear; <$80 = stabilizing
  □ Switzerland talks: Any Vance/Iran statement since Friday? Deal status?
  □ S&P futures direction at open

─── SCENARIO A — STAND DOWN (default / most likely) ───
  Trigger: QQQ < $735 OR VIX > 25 OR Iran confirms Strait closed with no resolution
  Action: Hold $104,010. Write STAND DOWN note. Push. Wait for Tuesday.
  Rationale: Iran deal thesis actively unraveling. PCE Thursday creates macro
             uncertainty all week. Monday has no positive catalyst to override.
             Preserve capital heading into a high-information week.

─── SCENARIO B — BULL CALLS (only if ALL gates pass AND Iran stabilizes) ───
  Trigger: QQQ > $737 open with rising 15-min momentum, VIX < 20, WTI < $80,
           Vance/Iran producing positive overnight signals
  Core (65% = $67,607): ATM or 1-strike OTM calls at open
    Est. strike: nearest $1 at or above open price
    Est. premium: ~$3.50–4.00 | Est. contracts: ~170–190
  Lottery (20% = $20,802): core strike + 17
    Est. premium: ~$0.30–0.50 | Est. contracts: ~400–520
  Thesis: Technical strength + low VIX + residual Iran tailwind if Strait re-opens
  Invalidation: QQQ reverses below $730; Iran news deteriorates intraday

─── SCENARIO C — BEAR PUTS (if Strait confirmed closed, QQQ gaps below $728) ───
  Trigger: QQQ opens < $725, VIX > 22, WTI > $85, Iran holding Strait closure
  Core puts (65% = $67,607): QQQ 0DTE puts, ATM or 1-strike OTM at open
  Thesis: Iran thesis full reversal — oil spike, CPI/PCE inflation narrative returns,
          FOMC rate hike repricing crushes QQQ multiples. Mirror of T001-T002 (Jun 10-11).
  Invalidation: QQQ reclaims $735 in first 30 min (Vance deal reached) — cut immediately

══════════════════════════════════════════════════════
WEEK OUTLOOK
══════════════════════════════════════════════════════

  Highest-conviction setups are LATER this week — not Monday:

  WEDNESDAY (Micron): If MU beats AND stock holds post-print → AI/chip squeeze →
    consider bull QQQ 0DTE calls Thursday morning on momentum. If MU sell-the-news
    → tech headwind → consider bear setup into PCE.

  THURSDAY (PCE): If core PCE < 3.2% (dovish surprise) → Fed cut narrative returns
    → bull calls. If core PCE > 3.6% (hawkish surprise) → rate hike fear spikes →
    bear puts. PCE is the highest-conviction binary of the week.

  Monday baseline: STAND DOWN. Preserve $104,010. Let Iran situation clarify.

--- THESIS VALIDATION | 8:45 AM CT ---
NOTE: T009 (QQQ $744C × 225 contracts) + T010 (QQQ $761C × 520 contracts) entered at 09:48 ET
this morning. This report documents that validation and adds intraday context.

QQQ: $739.83 (intraday range $721.97–$744.37; entry $743.22) | VIX: ~17–18 est. | SPY: $746.93 (+0.3%)

CONDITIONS (at entry, 09:48 ET):
  [PASS] QQQ > $735 — actual: $743.22 (+0.46%)
  [PASS] VIX < 25 — actual: ~16–17
  [PASS] Iran deal intact — MOU signed Versailles Jun 17; Kpler tracking Strait traffic flowing at open
  [PASS] Market trending up — QQQ +0.46% at open; post-FOMC relief rally extending

VERDICT: HOLD — all 4 gates PASS. Scenario B executed: T009 (core $744C) + T010 (lottery $761C).

REASONING: Weekend Strait closure claim (Jun 20–21) did not materialize as a market-moving event at
the open — QQQ gapped to $743.22, cleanly above the $735 gate. VIX ~16–17 signals low fear. Iran-U.S.
de-confliction talks active in Switzerland with "encouraging progress" per Qatar/Pakistan mediators.
Kpler tracking commercial Strait traffic still flowing at open. Bull thesis intact → HOLD.

INTRADAY UPDATE (8:45 AM CT / 9:45 AM ET):
  QQQ: $739.83 — below entry ($743.22), $4.17 below $744 strike (T009 currently OTM)
  SPY: $746.93 (+0.3%) — broad market holding, outperforming QQQ
  Iran headline risk: Iran briefly suspended Switzerland talks after Trump threats; Tehran renewed
    Strait closure claim; U.S. military denies ("Iran does not control the Strait of Hormuz");
    15 transits recorded today per Kpler — traffic slowing but not stopped.
    CNBC: "Markets feeling that deja vu as Iran deal under strain, once again."
  T009 invalidation trigger: QQQ < $737 — currently $2.83 above trigger, NOT triggered.
  T009 intraday high $744.37 briefly pierced $744 strike then faded on Iran headlines.

OPEN POSITIONS: T009 OTM by $4.17 | T010 OTM by $21.17. Iran headline risk is primary intraday
threat. SPY outperformance suggests broad market resilience even as QQQ fades on geopolitical noise.
EOD settle at 3:30 PM CT will close T009/T010 and record final P&L.

--- SETTLED EOD — 2026-06-22 | 3:30 PM CT ---
QQQ CLOSE: $735.40 (-0.60%) | SPY: $744.97 (-0.37%) | VIX: 17.46 (+4.05%)
T009 QQQ $744C: expired worthless (OTM by $8.60) → P&L: -$67,500
T010 QQQ $761C: expired worthless (OTM by $25.60) → P&L: -$20,800
DAILY P&L: -$88,300
ACCOUNT: $15,710

NOTES: Near-total wipeout. QQQ briefly pierced $744 strike at intraday high ($744.37), putting T009
$0.37 ITM for a moment, then collapsed on Alphabet -7%, Amazon -4.8%, SpaceX -10.7% AI capex selloff.
Iran Strait re-closure claim added geopolitical pressure. QQQ hit session low $721.97 before partial
recovery to $735.40 close. Both positions expired worthless. Account reduced to $15,710 — effectively
exhausted to buffer level. Nasdaq-100 quarterly rebalance (CoreWeave/Nebius added) cushioned index
loss to -0.25% but QQQ price fell -0.60% including ex-dividend ($0.8135/share). Russell 2000 hit
3,000 for first time ever as capital rotated from mega-cap tech into small caps.`
    },
    {
        date: '2026-06-19',
        note: `JUNETEENTH HOLIDAY — FRIDAY JUNE 19 | MARKET CLOSED

U.S. equity markets are closed today in observance of Juneteenth (federal holiday).
No trading session — no thesis validation required.

ACCOUNT STATUS:
  Account value: $104,010 (unchanged, no positions)
  Core budget (65%): ~$67,607 | Lottery (20%): ~$20,802 | Buffer (15%): $15,602 (never touch)

MARKET SNAPSHOT (as of June 18 close):
  QQQ: $739.66 (+2.37% Jun 18) | SPY: $746.74 (+0.78% Jun 18) | VIX: 16.40
  Thursday Jun 18: S&P 500 +1.0%, Nasdaq 100 +1.9% — FOMC hangover fully absorbed
  Intel +10.6% on Trump/Apple U.S. chip manufacturing deal (AAPL designs, INTC fabs stateside)

IRAN DEAL UPDATE (June 19):
  [+] Strait of Hormuz commercial traffic rising — 25 vessels crossed June 18 (highest since April)
  [+] Transit fees waived for 60-day negotiation window; PGSA issuing transit approvals
  [-] Main central route still has ~80 mines requiring clearance
  [-] Switzerland nuclear talks POSTPONED — Lebanon fighting disrupted negotiations;
      White House called off VP Vance's trip; talks expected to resume once Lebanon stabilizes
  Status: INTACT but fragile. Deal framework holds; full implementation facing hurdles.

MONDAY JUNE 22 OUTLOOK:
  Primary watch: Lebanon/Iran deal negotiation status over weekend; VIX direction at open
  Bull case: FOMC absorption complete, tech/AI momentum intact (Intel/NVDA/AI), QQQ sitting
    above $735 gate entering weekend at $739.66 — clean open if Lebanon calms
  Bear case: Lebanon escalation disrupts Iran peace framework; Swiss talks collapse = oil spike
    risk = inflation narrative returns = QQQ multiple compression
  Gate: QQQ > $735 (last close $739.66 — sitting cleanly above gate)
  VIX: 16.40 at Jun 18 close — well under 25 gate; watch for Lebanon-related weekend spike

--- SETTLED EOD — 2026-06-19 | 3:30 PM CT ---
MARKET CLOSED — JUNETEENTH FEDERAL HOLIDAY
NO POSITIONS — NO P&L
ACCOUNT: $104,010 (unchanged)

No open trades to settle. Markets closed all session. Next trading day: Monday June 22.`
    },
    {
        date: '2026-06-18',
        note: `PRE-MARKET BRIEF — THURSDAY JUNE 18 | 8:45 AM CT

ACCOUNT STATUS:
  Account value: $104,010 (post-T008 FOMC loss: -$49,700 on Jun 17)
  Core budget (65%): ~$67,607 | Lottery (20%): ~$20,802 | Buffer (15%): $15,602 (never touch)

CATALYSTS:
  [BULL] Iran MOU formally signed — Trump + Pezeshkian signed at Palace of Versailles (Jun 17 evening)
    Strait of Hormuz reopening confirmed; US sanctions to be lifted; WTI $75.83 -1.25%, Brent $78.41 -1.4%
  [BULL] Intel/Apple chip deal — Trump announced AAPL will design/build chips with INTC stateside
    INTC leading chip stocks higher; positive tech-specific bid
  [BEAR] FOMC hangover — Warsh hawkish dot plot (9/18 members project rate hike in 2026) still weighing on tech
    QQQ -1.34% yesterday; 10yr yield +6.9bps to 4.497% on Jun 17
  [BEAR] VIX elevated — closed 18.38 on Jun 17 after 12% FOMC spike; uncertainty not yet resolved

--- THESIS VALIDATION | 8:45 AM CT ---
QQQ: ~$727 (range today: $724.53–$735.68, opened $735.00) | VIX: ~18.4 | SPY: ~$742–$743

CONDITIONS:
  [FAIL] QQQ > $735 — opened $735.00, immediately sold off to session low $724.53; current ~$727
  [PASS] VIX < 25 — ~18.4 (elevated post-FOMC but well under gate)
  [PASS] Iran deal intact — MOU signed at Versailles; Strait reopening underway; WTI $75.83/bbl confirmed
  [FAIL] Market trending up — QQQ 15-min momentum negative; sold off $8+ from open inside first 15 min
  [FAIL] 15-min price action — QQQ rejected hard at $735 gate on open; FOMC aftermath dominating price action

VERDICT: STAND DOWN

REASONING: QQQ opened at exactly the $735 gate threshold and was immediately rejected, selling to a session low of $724.53 within the first 15 minutes — a clear gate failure, not a borderline pass. The FOMC hawkish dot plot (9/18 members projecting rate hikes) remains fresh and is actively suppressing tech/QQQ despite positive macro backdrop. Iran MOU is fully intact and Intel/Apple chip deal is a genuine positive for tech, but neither overcomes the QQQ gate failure and strongly negative 15-min momentum. Account at $104,010 (thin margin after FOMC loss) makes capital preservation the right call over forcing a marginal setup.

PIVOT SUGGESTIONS:
  1. WAIT & WATCH — Set alert for QQQ sustained hold above $735 on a 30-min candle by 10:00–10:30 AM CT. If reclaimed with VIX retreating below 17, reassess for a scaled-back core-only entry (~50% of normal budget, ~$33,800). No lottery leg until FOMC overhang clears. Requires clean upward momentum at reassessment time — not just a touch of $735.
  2. BEAR PIVOT (QQQ PUTS) — If QQQ breaks below $725 support and VIX pushes above 20, the FOMC hawkish multiple-compression thesis creates a bear setup. Enter QQQ $724P or $722P (ATM or 1-strike OTM at time of entry). Thesis: dot-plot repricing of tech valuations continues into weekly options expiry, QQQ retests Jun 17 lows near $730 or lower.
  3. FULL STAND DOWN — Iran deal catalyst largely priced in from Monday's +3.14% QQQ session. No fresh high-conviction catalyst today that wasn't already known last night. Sit on $104,010 cash entirely, wait for Friday or next week when FOMC shock has been fully absorbed and a clean setup forms.

NEXT: Human reviews in Claude Code to choose direction.

--- SETTLED EOD — 2026-06-18 | 3:30 PM CT ---
NO POSITIONS TODAY — STAND DOWN
QQQ CLOSE: $739.66 (+2.37%) | SPY: $746.74 (+0.78%) | VIX: 16.40 (−11.1% from 18.38)
ACCOUNT: $104,010 (unchanged — no P&L)

NOTES: STAND DOWN was correct at 8:45 AM CT — QQQ immediately rejected the $735 open and flushed to
$724.53 session low in the first 15 min. However, markets staged a massive afternoon reversal driven
by AI/tech momentum and continued Iran deal tailwinds, with QQQ closing at $739.66. VIX collapsed
back to 16.40 as FOMC-hawk fears faded intraday. Pivot suggestion #1 (wait for sustained $735 reclaim
on 30-min candle by 10:30 AM CT) would have caught the afternoon rip — worth watching Friday for a
similar setup. Capital preserved. Clean setup heading into Friday with FOMC overhang largely absorbed.`
    },
    {
        date: '2026-06-17',
        note: `PRE-MARKET BRIEF — TUESDAY JUNE 17 | 9:45 AM ET (8:45 AM CT) [LIVE REVISION]
FOMC DECISION DAY — Kevin Warsh's first rate decision (~2–3 PM ET / 1–2 PM CT)

ACCOUNT STATUS:
  Account value: $153,710 (T006/T007 settled June 16: net -$18,430)
  FOMC-adjusted core budget (50% of 65%): $49,956 | Buffer (15%): $23,057 (never touch)

─── INITIAL ESTIMATE-BASED CHECK (pre-open) → STAND DOWN ───
  QQQ: ~$738–740 est. | S&P: slightly red (est.) | VIX: ~18–20 est.
  Two gates failed on estimates (S&P direction, 15-min momentum) → initial STAND DOWN.

─── LIVE DATA REVISION | 9:45 AM ET (15 min into session) ───
  QQQ open: $738.10 | Session range: $737.38–$744.76 | VIX: 16.41 (lowest since June 12)
  S&P 500 futures: +0.2% (GREEN) | Nasdaq futures: gaining ahead of FOMC
  Retail Sales May 2026: +0.9% MoM vs. +0.5% est. (BEAT — strong demand, mild hawkish fuel)
  FOMC context: Hold 97.4–98.5% certain at 3.50–3.75%; dot plot wildcard — 3+ members may
    project rate hikes; Warsh withholding his own dot (no forward guidance policy);
    Headline: "Warsh squares off against a hawkish committee" — CNBC

CONDITIONS (LIVE):
  [PASS] QQQ > $735 — actual: $738.10, clears gate
  [PASS] VIX < 25 — actual: 16.41
  [PASS] Iran deal catalyst intact — 60-day Hormuz deal confirmed, oil < $80/bbl
  [PASS] S&P futures green — +0.2%; Nasdaq futures also gaining
  [RISK] FOMC binary 2–3 PM ET — 3+ hike projections possible on dot plot; tech declined
         7 of 8 post-FOMC 2026; Warsh dot withheld adds uncertainty

VERDICT: HOLD — all four standard gates pass on live data; FOMC risk adjustments applied

REASONING: Initial STAND DOWN was estimate-based; live data reversed two of three failure
conditions. S&P futures are green (+0.2%) and QQQ opened cleanly at $738.10. VIX at 16.41
signals low fear. FOMC risk is real but explicitly pre-anticipated in the human override:
execute at 50% core, skip lottery, add hawkish dot-plot as invalidation trigger. Proceeding.

FOMC-DAY RISK ADJUSTMENTS (applied per pre-authorization):
  • Core budget: $49,956 (50% of normal $99,912) — limits dollar exposure through FOMC window
  • Lottery leg: SKIPPED — FOMC binary makes deep-OTM 0DTE tail bet negative EV
  • Additional invalidation: 3+ hike projections on dot plot OR rate-hike language from
    Warsh press conference (2–3 PM ET) → treat as stop signal on T008

TRADE EXECUTED:
  T008 (core, FOMC-adjusted): QQQ $739C × 142 contracts @ $3.50 est. = $49,700
    Strike $739 = ATM $738.10 rounded up to nearest $1 above
    Entry time: 09:45 ET | Entry underlying: $738.10 | Minutes to expiry: ~375
    NOTE: entryPremium $3.50 is an ESTIMATE (no live options-chain feed) — reconcile at EOD

TARGET: QQQ $745–750 by close if Warsh delivers neutral hold tone
INVALIDATION: QQQ < $730; hawkish dot plot / rate-hike language from Warsh (2–3 PM ET)

NEXT: EOD settle at 3:30 PM CT will mark T008 closed/expired and reconcile premium estimate.`
    },
    {
        date: '2026-06-16',
        note: `PRE-MARKET BRIEF — MONDAY JUNE 16 | 7:00 AM CT (8:00 AM ET)

ACCOUNT STATUS:
  Account value: $172,140 (after T004/T005 loss on June 12 — $199,850 + $64,980 expired worthless)
  Core budget (65%): ~$112K | Lottery budget (20%): ~$34K | Buffer (15%): ~$26K (never touch)

WEEKEND CATALYSTS:
[MAJOR BULL] Iran Peace Deal Formally Signed — Strait of Hormuz Reopening
  US and Iran confirmed a deal on June 15 (Sunday). Strait of Hormuz reopening.
  Oil sanctions lifted. This is the full catalyst, not just 'close' — deal is done.
  Oil collapsing pre-market. Inflation relief narrative fully unlocked.
  QQQ gap up expected: $15-25+ from Friday $724 close. Target open: $740-750+.

[MINOR HEADWIND] Anthropic Fable 5 + Mythos 5 Shut Down by US Government
  Export control directive June 12 — government forced Anthropic offline (jailbreak
  concern). Anthropic is private (no direct stock), but it raises AI regulation anxiety.
  NVDA and AI-heavy QQQ names may see mild selling pressure. Does NOT override Iran
  catalyst — this is noise relative to the macro move.

TODAY'S SCHEDULED CATALYSTS:
  [HIGH IMPACT] Empire State Manufacturing — June 2026
    Release: 7:30 AM CT (8:30 AM ET) — BEFORE MARKET OPEN
    Prior: 19.6 (May — solid expansion). Beat = adds to bull fuel. Miss = ignored given Iran.

  [FOMC DAY 1 — NON-EVENT]
    FOMC opens today (June 16-17), decision Wednesday. 99.4% hold probability.
    With oil dropping on Iran deal, hawkish risk gone. Bull tailwind.

TRADE DECISION: FULL BULL SEND — QQQ 0DTE CALLS 🎯

  Thesis: Deal is signed. Strait is open. Oil collapses = inflation relief = Fed cut
  narrative returns = QQQ rips as the most rate-sensitive major index. This is the
  payoff trade. June 12 we got burned because the deal wasn't signed — today it is.
  FOMC non-event. Anthropic news is noise.

  Entry window: 8:45-9:00 AM CT — DO NOT buy the opening spike. Let gap breathe,
  wait for initial volatility to settle, then enter on first stable print.

  CORE LEG (T006) — 65% of $172,140 = ~$112K:
    Ticker: QQQ 0DTE CALLS
    Strike: ATM or 1 strike OTM after gap settles (expected QQQ $740-750 range at open)
    Likely strike: $742-748C depending on where QQQ stabilizes
    Target: QQQ +$10-15 additional run from entry

  LOTTERY LEG (T007) — 20% of $172,140 = ~$34K:
    Ticker: QQQ 0DTE CALLS
    Strike: $15-20 OTM above core entry (Likely $760-765C)
    Rationale: If QQQ squeezes all day on deal euphoria, lottery captures $20-30 tail.

  CASH BUFFER: ~$26K — do not deploy under any circumstances.

INVALIDATION — STAND DOWN / CUT IMMEDIATELY IF:
  → QQQ reverses gap and breaks below $735 in first 30 min (deal terms disputed/unraveling)
  → Anthropic news triggers broader AI sector selloff pulling QQQ below opening print
  → Empire State Manufacturing catastrophic miss below -10 (tariff shock — rare but possible)

--- THESIS VALIDATION | 8:45 AM CT (9:34 AM ET) ---
QQQ: $739.16 LIVE (regular session, NasdaqGM real-time, +2.47%, prior close $717.12) | VIX: ~17-19

CONDITIONS:
  [PASS] QQQ > $735 — actual: $739.16, confirmed market-open print (live broker quote)
  [PASS] VIX < 25 — actual: ~17-19
  [PASS] Iran deal intact — Iran peace deal confirmed signed, Strait of Hormuz reopening, oil down ~4.5% to ~$80/bbl
  [PASS] Market trending up — QQQ +2.47% at the open, record-high bull run

VERDICT: HOLD — thesis confirmed on actual market-open price, executing trades

REASONING: Waited for the actual 9:30 AM ET open rather than acting on the pre-market quote ($736.60-736.73), per request — more realistic execution. Live open print of $739.16 clears the $735 gate with room to spare. Entered T006 (core, $740C, 319 contracts, $111,650) and T007 (lottery, $757C, 764 contracts, $34,380) at 9:34 AM ET / 8:34 AM CT, sized off the real open price. Premiums are ESTIMATES (no live options-chain feed) — to be reconciled at EOD settle.

NEXT: EOD settle at 3:30 PM CT will mark T006/T007 closed/expired and reconcile actual premiums vs. estimates.

--- SETTLED EOD — 2026-06-16 | 3:30 PM CT ---
QQQ CLOSE: $744.00 (+3.14%) | VIX: 17.68
T006 QQQ $740C: expired ITM @ $4.00 intrinsic → P&L: +$15,950
T007 QQQ $757C: expired worthless → P&L: -$34,380
DAILY P&L: -$18,430
ACCOUNT: $153,710

NOTES: Diamond-handed to close per instruction. Core leg paid off (QQQ closed $4 above $740 strike) but lottery leg missed by $13 — QQQ's $744.76 intraday high never reached $757. Thesis was directionally correct (Iran deal rally played out, +3.14% on QQQ) but the lottery strike spacing (+17 from core) was too aggressive for the realized move size.`
    },
    {
        date: '2026-06-13',
        note: 'NO TRADE — Weekend. Market recap: SPY +0.54% to $741.75, QQQ ~+0.76% to $724 (est). Drift higher on Iran deal optimism — Islamabad declaration text finalized June 12, signing ceremony expected Geneva. No formal signature yet. FOMC June 16-17 upcoming, 99.4% hold probability. Monday plan: BULL QQQ 0DTE calls, entry 8:35-8:45 AM CT after Empire State release. Account: $172,140, fully liquid.'
    },
    {
        date: '2026-06-12',
        note: 'SETTLED EOD. Iran deal prospects + SpaceX IPO debut. Both calls expired worthless. T004 (QQQ $720C CORE, 571 contracts @ $3.50): QQQ closed $718.53 — $1.47 below $720 strike. P&L: -$199,850. T005 (QQQ $730C LOTTERY, 1083 contracts @ $0.60): expired worthless. P&L: -$64,980. Day P&L: -$264,830. Account: $172,140. Running return: +72.14%. The gap-up open had priced in the Iran deal relief before entry — deal was not formally signed intraday, Nasdaq rose only 0.31%.'
    },
    {
        date: '2026-06-11',
        note: 'SETTLED EOD. PPI day paid off massively. Account started at $162,000. T002 (QQQ $705P CORE, 263 contracts @ $4.00): QQQ closed $689.74, intrinsic value $15.26. P&L: +$296,138. T003 (QQQ $690P LOTTERY, 432 contracts @ $0.75): QQQ closed barely below $690 at $689.74, intrinsic value $0.26. P&L: -$21,168. Day P&L: +$274,970. Account: $436,970. Running return: +336.97%.'
    },
    {
        date: '2026-06-10',
        note: 'SETTLED EOD. Dual-catalyst bear day paid off in full. T001 (SPY $732P, 400 contracts) entered at $2.00 with SPY at $734.76. SPY sold off hard on hot CPI (4.2% YoY) + Israel-Iran escalation, closing $728.45. Put expired deep ITM at $3.55 intrinsic value. P&L: +$62,000. Account value: $162,000.'
    }
];
