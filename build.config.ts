/**
 * build.config.ts — BUILD 005 · Revenue Cycle & Reconciliation
 * ─────────────────────────────────────────────────────────────
 * Repo: ias-build-005-rev-cycle
 * URL:  rev-cycle.elwoodberry.com
 * Sector: Banking, Finance, FinTech & Insurance
 *
 * THE ONLY FILE EDITED FOR THIS BUILD.
 *
 * Governance (Article IX): no fabricated data. Every unknown
 * value stays as an explicit "TODO:" string — the page renders
 * TODO values in a visible warning style so they cannot ship
 * silently.
 * ─────────────────────────────────────────────────────────────
 */

import type { BuildConfig } from "./lib/types";

export const buildConfig: BuildConfig = {
  // ── Identity ─────────────────────────────────────────────
  buildNumber: "005",
  name: "Revenue Cycle & Reconciliation",
  sector: "Banking, Finance, FinTech & Insurance",

  // Verbatim from projects.csv (primary_description) —
  // site + CSV + repo never drift.
  tagline:
    "Integrates billing data across CRM, legacy ledger software, and accounting systems to eliminate manual reconciliation entry.",

  // ── Status (honest, always) ──────────────────────────────
  // Upgrade path: "planned" → "preview" → "prototype" → "live"
  // as the deep-build ships. One word, push to main, auto-deploys.
  status: "planned",

  // ── What it does ─────────────────────────────────────────
  // One string per paragraph — the page renders each as its
  // own <p>. Problem / pipeline / traceability.
  whatItDoes: [
    "Billing data lives in three places — CRM, legacy ledger, and accounting — and someone re-keys it between them every reconciliation cycle.",
    "This pipeline syncs records across all three systems via n8n, detects mismatches automatically, and eliminates the manual entry entirely.",
    "Deliberately no LLM in the loop: reconciliation logic is deterministic, so every match and mismatch is fully explainable.",
  ],

  // ── Stack ────────────────────────────────────────────────
  stack: ["n8n", "Next.js", "Vercel"],

  // ── Architecture ─────────────────────────────────────────
  architecture: {
    // Real diagrams only. Stays null until one is drawn —
    // the page renders the system-map table alone.
    diagramSrc: null,
    diagramAlt: "TODO: describe the diagram for screen readers",

    layers: [
      {
        layer: "Presentation",
        technology: "Next.js on Vercel",
        responsibility:
          "Build page, reconciliation run view, mismatch and payload rendering",
      },
      {
        layer: "Orchestration",
        // Demos run on n8n Cloud. The identical workflows deploy
        // self-hosted or in a client's VPC for regulated
        // production — the /workflows export is the portable
        // artifact. Never state "self-hosted" as current fact.
        technology: "n8n (cloud-hosted)",
        responsibility:
          "Multi-system record sync, deterministic mismatch detection, exception routing",
      },
      {
        layer: "Data",
        // Storage + queue selection pending deep-build.
        // Stated uncertainty beats invented detail.
        technology: "TODO: CRM/ledger/accounting connector set pending deep-build",
        responsibility:
          "TODO: billing records, reconciliation runs, mismatch log, audit trail",
      },
      {
        layer: "AI",
        technology: "None — deterministic pipeline",
        responsibility:
          "Deliberately no LLM in the loop — reconciliation is rule-based, explainable, and auditable",
      },
    ],

    // One string per step — numbered on render because order
    // carries meaning: this is the sequence a record travels.
    flow: [
      "Reconciliation cycle triggered",
      "billing records pulled from CRM, legacy ledger, and accounting",
      "normalized to shared schema",
      "records matched deterministically",
      "mismatches flagged and routed to exception queue",
      "clean records synced back",
      "run logged with full match evidence",
    ],
  },

  // ── Sample payload ───────────────────────────────────────
  // Real production schema, mock values, labeled as mock.
  payload: {
    caption: "// mock data — representative of production schema",
    input: {
      event: "recon.cycle.triggered",
      submitted_at: "2026-07-05T14:41:00Z",
      source: "rev-cycle.elwoodberry.com",
      fields: {
        systems: ["crm","ledger","accounting"], records: 4812, cycle_ref: "MOCK-2026-Q2-0006"
      },
    },
    output: {
      status: "reconciled",
      confidence: null,
      routed_to: "queue:exceptions",
      audit_id: "ias-demo-005-0001",
    },
  },

  // ── Live demo slot ───────────────────────────────────────
  // Renders only when a real demo exists. Demo Mode (cached
  // representative responses) is the default for public
  // traffic — protects demo reliability and n8n Cloud
  // execution quota.
  demo: {
    embedUrl: null,
    videoUrl: null,
    note: "Demo Mode serves cached representative responses to public traffic; live mode is enabled per session.",
  },

  // ── Links ────────────────────────────────────────────────
  links: {
    github: "https://github.com/elwoodberry3/ias-build-005-rev-cycle",
    // Decision pending: master CSV stores the build's own deploy
    // URL here; the page needs a route BACK to the portfolio
    // index. Root used until the portfolio index URL is final.
    portfolio: "https://elwoodberry.com", // TODO: confirm portfolio index URL
    // TODO: confirm /contact is the persona-routed booking page,
    // not a generic contact form, before deep-build ships.
    booking: "https://elwoodberry.com/contact",
  },
};
