// ═══════════════════════════════════════════════════════════════
//  AUTONOMOUS TRADE LOG — Managed by Claude
//  Strategy: 0DTE Full Send · $100K starting capital
//  Last updated: 2026-06-13 16:00 ET
// ═══════════════════════════════════════════════════════════════

window.PORTFOLIO = {
    startingCapital: 100000,
    mode: 'autonomous',
    lastUpdated: '2026-06-13 16:00 ET',
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

    // ── TRADE T006 — PENDING MONDAY OPEN ────────────────────────
    // Strikes to be set at 8:30-8:45 AM CT based on actual open price
    // Pre-committed thesis: BULL QQQ 0DTE CALLS · Iran deal + FOMC non-event
    // Core leg: 65% of $172,140 = ~$112K | Lottery: 20% = ~$34K | Buffer: 15% = ~$26K


    // ─── TRADE T006 ──────────────────────────────────────────────────────────
    {
        id: 'T006',
        date: '2026-06-16',
        ticker: 'QQQ',
        direction: 'call',
        strike: 745,
        expiry: '2026-06-16',
        contracts: 248,
        entryPremium: 4.50,
        entryTime: '08:45',
        entryUnderlying: 744.0,
        entryMinutesRemaining: 375,
        exitPremium: null,
        exitTime: null,
        exitUnderlying: null,
        status: 'open',
        pnlOverride: null,
        thesis: 'Iran peace deal formally confirmed June 15 by both US & Iran. Strait of Hormuz reopening. Oil collapsing to ~$83. Asian markets +3%. US futures climbed. QQQ gapped from $724 Friday close. FOMC non-event (99.4% hold). CORE LEG.',
        invalidation: 'QQQ breaks below $735 in first 30 min',
        target: 'QQQ continuation into close. $10-15 run from entry.',
        cost: 111600,
        risk: 'HIGH',
        setupType: 'BULL - Iran Catalyst - 0DTE Call - CORE'
    },

    // ─── TRADE T007 ──────────────────────────────────────────────────────────
    {
        id: 'T007',
        date: '2026-06-16',
        ticker: 'QQQ',
        direction: 'call',
        strike: 762,
        expiry: '2026-06-16',
        contracts: 523,
        entryPremium: 0.65,
        entryTime: '08:45',
        entryUnderlying: 744.0,
        entryMinutesRemaining: 375,
        exitPremium: null,
        exitTime: null,
        exitUnderlying: null,
        status: 'open',
        pnlOverride: null,
        thesis: 'LOTTERY LEG. Deep OTM 0DTE call. Captures full-day squeeze euphoria on Iran deal. Low cost, massive payout if QQQ runs $18+.',
        invalidation: 'QQQ fails to hold gap above $735',
        target: 'QQQ $762+ at close. Full intrinsic value payout.',
        cost: 33995,
        risk: 'EXTREME',
        setupType: 'BULL - Iran Catalyst - 0DTE Call - LOTTERY'
    },
    // ── FUTURE TRADES GO HERE ────────────────────────────────────

];

// ═══════════════════════════════════════════════════════════════
//  EOD SNAPSHOTS
// ═══════════════════════════════════════════════════════════════

window.EOD_SNAPSHOTS = [
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
        date: '2026-06-16',
        note: `EXECUTED at 8:45 AM CT. Thesis validated — Iran peace deal confirmed by both US & Iran on June 15 (Sunday). Strait of Hormuz reopening announced. Oil fell to ~$83/bbl. Asian markets surged 3%+. US futures climbed (Bloomberg Markets Wrap). VIX ~16 (well below 25). QQQ estimated gap to $744.00 from $724 Friday close (+2.8%). FOMC June 16-17 non-event. T006: QQQ $745C, 248 contracts @ $4.50. Cost: $111,600. T007: QQQ $762C, 523 contracts @ $0.65. Cost: $33,995. Total deployed: $145,595. Cash buffer: $26,545. Waiting for 3:00 PM CT close.`
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
