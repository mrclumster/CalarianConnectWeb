# Barangay Connect

A three-platform digital system for barangay (local government) halls in the Philippines. Modernizes how barangays process citizen requests, complaints, and walk-in transactions.

![Platforms](https://img.shields.io/badge/platforms-Mobile%20%7C%20Web%20%7C%20Kiosk-1B4F72)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6)
![Supabase](https://img.shields.io/badge/Backend-Supabase-3ECF8E)
![License](https://img.shields.io/badge/license-Private-red)

## The Problem

- ~100 walk-in citizens daily wait 5-10 minutes each for manual lookup
- Citizens queue for hours for simple forms like clearances and certificates
- Paper-based tracking loses requests and has no status visibility

## The Solution

| Platform | For | Built With |
|----------|-----|-----------|
| **Mobile App** | Citizens | React Native + Expo, NativeWind, i18n (Tagalog/English) |
| **Web Admin Panel** | Barangay Staff | Next.js 14, Tailwind CSS, shadcn/ui, Supabase Realtime |
| **Facial Recognition Kiosk** | Walk-in ID | Electron + Python, ArcFace/InsightFace, Intel RealSense D435i |

### Key Features

- **Voice-to-Form AI** — Citizens speak in Tagalog, AI fills the form (Whisper + Claude)
- **Face Recognition Kiosk** — Walk-ins identified in 2-3 seconds via IR + depth camera
- **Real-time Queue** — Staff see live request updates via WebSocket
- **Bulk Import** — Barangay profiling data (.xlsx/.csv) imported with column mapping
- **PDF Generation** — Certificates and clearances generated and printed on demand
- **Bilingual** — Full Tagalog (default) and English support across all platforms

## Tech Stack

```
Frontend:    React Native (Expo) · Next.js 14 · Electron · NativeWind · Tailwind CSS · shadcn/ui
Backend:     Supabase (PostgreSQL + pgvector + Auth + Realtime + Edge Functions)
AI:          OpenAI Whisper (Tagalog STT) · Anthropic Claude (form extraction)
Face ID:     ArcFace/InsightFace · Intel RealSense D435i · pgvector cosine similarity
Language:    TypeScript (strict) everywhere
Monorepo:    pnpm workspaces
```

## Project Structure

```
barangay-connect/
├── apps/
│   ├── mobile/          # Expo React Native — citizen app
│   ├── web/             # Next.js 14 — admin panel for staff
│   └── kiosk/           # Electron + Python — facial recognition terminal
├── packages/
│   └── shared/          # Shared types, Zod schemas, constants, utils
├── supabase/
│   ├── migrations/      # PostgreSQL migrations
│   ├── functions/       # Deno Edge Functions
│   └── seed/            # Seed data
└── CLAUDE.md            # Full project context
```

## Getting Started

### Prerequisites

- **Node.js** 20+
- **pnpm** 9+ (`npm install -g pnpm`)
- **Supabase** account with a project created
- **Expo Go** app installed on your phone (for mobile development)

### Step 1: Clone & Install

```bash
git clone https://github.com/your-org/barangay-connect.git
cd barangay-connect
pnpm install
```

### Step 2: Set Up Environment Variables

Create `.env` files with your Supabase credentials:

**Root `.env`** (copy from `.env.example`):
```bash
cp .env.example .env
```

Then fill in your Supabase URL and keys. You can find these in your [Supabase Dashboard](https://supabase.com/dashboard) → Project Settings → API.

**Web panel** — create `apps/web/.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

**Mobile app** — create `apps/mobile/.env`:
```env
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Step 3: Set Up the Database

Push the migrations to your Supabase project:

```bash
# Link to your Supabase project (one-time setup)
npx supabase link --project-ref your-project-ref

# Push all migrations (schema + RLS policies)
npx supabase db push

# Seed with sample data (optional)
npx supabase db push --include-seed
```

### Step 4: Create Auth Users

Create staff accounts via the Supabase Auth Admin API or dashboard. The seed data includes sample profiles that need matching auth accounts.

### Step 5: Run the Apps

Open **separate terminals** for each app:

```bash
# Terminal 1 — Web Admin Panel (staff dashboard)
pnpm dev:web
# → Opens at http://localhost:3000

# Terminal 2 — Mobile App (citizen app)
pnpm dev:mobile
# → Metro bundler starts, scan QR code with Expo Go on your phone
```

### Step 6: Access the Apps

| App | How to Access |
|-----|--------------|
| **Web Admin** | Open `http://localhost:3000` in your browser. Log in with a staff email + password. |
| **Mobile App** | Open Expo Go on your phone → scan the QR code shown in the terminal. Make sure your phone and computer are on the same WiFi network. |

### All Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev:web` | Start the web admin panel (Next.js dev server) |
| `pnpm dev:mobile` | Start the mobile app (Expo/Metro bundler) |
| `pnpm build:web` | Production build of the web panel |
| `pnpm build:shared` | Build the shared package |
| `pnpm typecheck` | Run TypeScript type checking across all packages |
| `pnpm lint` | Lint all packages |
| `pnpm db:migrate` | Push database migrations to Supabase |
| `pnpm db:generate-types` | Generate TypeScript types from database schema |
| `pnpm db:reset` | Reset the database (destructive) |

### Troubleshooting

| Issue | Fix |
|-------|-----|
| `supabaseUrl is required` | Make sure `.env` exists in `apps/mobile/` with `EXPO_PUBLIC_` prefixed variables. Restart Metro with `npx expo start -c`. |
| Web panel shows "Supabase URL required" | Make sure `apps/web/.env.local` exists with `NEXT_PUBLIC_` prefixed variables. Restart the dev server. |
| Mobile app "incompatible with Expo Go" | Check that the Expo SDK version in `apps/mobile/package.json` matches your Expo Go app version. |
| Metro cache issues | Stop Metro, then restart with cache clear: `cd apps/mobile && npx expo start -c` |
| `pnpm install` fails with EPERM | Close all Node processes (`taskkill /f /im node.exe` on Windows), then retry. |
| NativeWind styles not applying | Make sure `babel.config.js`, `metro.config.js`, and `global.css` exist in `apps/mobile/`. Restart Metro with `-c` flag. |

### Environment Variables Reference

| Variable | Used By | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Web | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Web | Supabase anon key (public, safe for client) |
| `EXPO_PUBLIC_SUPABASE_URL` | Mobile | Same Supabase URL |
| `EXPO_PUBLIC_SUPABASE_ANON_KEY` | Mobile | Same anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Server only | Service role key (never expose to client) |
| `OPENAI_API_KEY` | Edge Functions | Whisper API — Supabase secrets only |
| `ANTHROPIC_API_KEY` | Edge Functions | Claude API — Supabase secrets only |

> **Security:** `OPENAI_API_KEY` and `ANTHROPIC_API_KEY` are stored as Supabase Edge Function secrets only — never in client code or `.env` files that ship to the browser/app.

## User Roles

| Role | Platform | Access |
|------|----------|--------|
| Super Admin | Web | System-wide management, all barangays |
| Admin (Captain) | Web | Read-only overview, assigns staff |
| Admin Assistant | Web | Primary operator, can edit citizen profiles |
| Moderator | Web | Processes requests & walk-ins, files complaints |
| Citizen | Mobile | Requests forms, tracks status, voice input |

## Request Flow

```
Citizen submits request (app or walk-in)
    → pending
    → under_review (staff reviewing)
    → approved / rejected
    → ready_for_pickup
    → completed
```

Citizens receive push notifications at each status change in their chosen language.

## Citizen Onboarding

Citizens **do not self-register**. Their profiles are bulk-imported from barangay household profiling data. Citizens "claim" their existing profile by matching their name + birthdate, then verifying via OTP sent to the phone number on file.

## Team

- 1 Senior Developer (Lead) — architecture, iOS builds, code review, cross-platform features
- 4 Interns — assigned to web, mobile, backend, and AI/kiosk areas

---

Built for barangay halls in Zamboanga and beyond.
