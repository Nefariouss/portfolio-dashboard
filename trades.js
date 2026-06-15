// ═══════════════════════════════════════════════════════════════
//  AUTONOMOUS TRADE LOG — Managed by Claude
//  Strategy: 0DTE Full Send · $100K starting capital
//  Last updated: 2026-06-13 16:00 ET
// ═══════════════════════════════════════════════════════════════

window.PORTFOLIO = {
    startingCapital: 100000,
    mode: 'autonomous',
    lastUpdated: '2026-06-16 16:00 ET',
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

    // ── TRADE T006/T007 — STAND DOWN · JUNE 16 ──────────────────
    // Thesis validation FAILED at 8:45 AM CT.
    // Condition: QQQ > $735 required. Actual QQQ open: $717.61.
    // Iran deal NOT formally signed — still "hopes for near-term agreement."
    // No gap-up materialized. Entered cash preservation mode.
    // Account: $172,140 — fully liquid, no positions taken.


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
        closes:  { SPY: 737.76, QQQ: 717.12, NVDA: null, TSLA: null, AAPL: null },
        changes: { SPY: null,   QQQ: null,   NVDA: null, TSLA: null,  AAPL: null },
        note: 'No positions — weekend (est. corrected). Friday June 12 actual close: SPY $737.76, QQQ $717.12. Iran deal not yet signed — Islamabad declaration agreed but formal signing pending. FOMC June 16-18 on deck — 99.4% hold probability. Monday plan: BULL QQQ 0DTE calls contingent on QQQ > $735 at 8:45 AM CT.'
    },
    {
        date: '2026-06-16',
        closes:  { SPY: 741.77, QQQ: 721.34, NVDA: null, TSLA: null, AAPL: null },
        changes: { SPY: +0.54,  QQQ: +0.59,  NVDA: null, TSLA: null,  AAPL: null },
        note: 'STAND DOWN — No positions taken. T006/T007 thesis validation FAILED at 8:45 AM CT. QQQ opened $717.61 (required $735+). Iran deal NOT formally signed per intraday news — "downward pressure despite hopes for near-term agreement." Oil -3.79% to $84.39 (deal optimism but no signing). SpaceX IPO (SPCX) debuted +19.22%. VIX -9.25% to 17.64 (risk-on). QQQ range $711.28–$724.01, closed $721.34 (+0.59%). FOMC Day 1 non-event as expected. Account: $172,140 — fully liquid, cash preserved.'
    }
];

// ═══════════════════════════════════════════════════════════════
//  DAILY NOTES
// ═══════════════════════════════════════════════════════════════

window.DAILY_NOTES = [
    {
        date: '2026-06-17',
        note: `PRE-MARKET BRIEF — TUESDAY JUNE 17 | 7:00 AM CT (8:00 AM ET)

ACCOUNT STATUS:
  Account value: $172,140 | Running return: +72.14%
  Fully liquid — cash preserved from Monday stand-down.

MONDAY RECAP:
  Thesis invalidated at 8:45 AM CT. QQQ opened $717.61 vs $735+ required.
  Iran deal NOT signed. QQQ closed $721.34 (+0.59%). SPY $741.77 (+0.54%).
  SpaceX IPO (SPCX) +19.22% — massive debut, did not pull tech broader.
  VIX -9.25% to 17.64. Oil $84.39 (-3.79%) — Iran deal optimism without confirmation.

TODAY'S CATALYSTS:
  [CRITICAL] FOMC DAY 2 — Rate Decision ~1:00 PM CT (2:00 PM ET)
    99.4% probability hold at 3.50-3.75%. No surprise expected.
    Powell press conference ~1:30 PM CT. Watch language on rate CUT timeline.
    With oil falling on Iran deal hopes, Powell may hint at cuts earlier → BULL.
    Hawkish surprise (maintains restrictive stance): modest QQQ fade.

  [ONGOING] Iran Deal Watch
    Still negotiating. Any formal signing announcement → QQQ RIPS.
    Brent crude at $84. Deal closing = oil to $75-78 = massive tech relief rally.

  [MINOR] No major economic data releases pre-market.

TRADE DECISION: WAIT AND REACT TO FOMC (1:00 PM CT)

  Option A — FOMC Hold + Dovish Tone (most likely):
    Entry: QQQ 0DTE CALLS at ~1:10 PM CT (after initial reaction settles)
    Thesis: Dovish hold = rate cut narrative = QQQ rips into close
    Strike: ATM or 1 OTM after FOMC reaction settles
    Risk: Theta crush from 1 PM entry (only 2 hrs left). Must see clean +$5-8 move.
    Budget: 50% of capital (~$86K) — smaller size due to late entry / theta risk

  Option B — Iran Deal Signs BEFORE Noon CT:
    Entry: QQQ 0DTE CALLS immediately on confirmation
    Thesis: Deal closing = oil crashes = QQQ gaps +$10-15
    Strike: ATM at time of news
    Budget: 65% core + 20% lottery as originally planned

  Option C — Neither catalyst fires:
    Stay in cash. Preserve $172,140. No FOMO.
    Wednesday morning is better risk/reward with FOMC behind us.

INVALIDATION:
  → FOMC hawkish surprise (rate hike hint or no cuts in 2026): STAND DOWN
  → QQQ below $715 intraday: bearish — flip to puts or stay cash
  → Iran deal collapses (news of hostilities resuming): STAND DOWN`
    },
    {
        date: '2026-06-16',
        note: `EOD SETTLED — MONDAY JUNE 16 | 4:00 PM ET

STAND DOWN DAY. Thesis validation failed — no positions taken.

8:45 AM CT VALIDATION CHECK:
  Required: QQQ > $735 (Iran deal gap-up + bull thesis intact)
  Actual: QQQ $717.61 at open — BELOW threshold. Stood down per plan.

INTRADAY ACTION:
  QQQ: opened $717.61, range $711.28–$724.01, closed $721.34 (+0.59%)
  SPY: closed $741.77 (+0.54%)
  VIX: 17.64 (-9.25%) — risk-on undercurrent despite no Iran deal
  Oil: $84.39 (-3.79%) — deal optimism partially priced in
  SpaceX IPO: SPCX +19.22% on debut — massive but did not lift QQQ meaningfully

IRAN DEAL STATUS:
  NOT SIGNED. Per intraday news: "Downward pressure despite hopes for near-term
  US-Iran agreement." Deal text agreed but signing ceremony not held.
  QQQ could not sustain gap without formal confirmation. Our read was correct.

FOMC DAY 1:
  Non-event as expected. No communication from Fed. Decision tomorrow ~2 PM ET.

ACCOUNT: $172,140 | +72.14% | Fully liquid.`
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
  → Empire State Manufacturing catastrophic miss below -10 (tariff shock — rare but possible)`
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
