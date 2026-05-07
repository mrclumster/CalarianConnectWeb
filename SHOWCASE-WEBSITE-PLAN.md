# Calarian Connect — Showcase Website Master Plan

## Objective

Build a simple, high-impact, single-page static website to pitch and demonstrate the "Calarian Connect" system. This acts as an interactive alternative to a PowerPoint presentation and is designed to be built in a single day without any complex frameworks.

## Target Audience (The "Dual-Audience" Approach)

1. **Non-Techy (Barangay Officials / Stakeholders):** Care about efficiency, cost, stopping paper queues, and helping citizens.
2. **Techy (Developers / Investors):** Care about system architecture, AI integration, hardware (kiosks), and security.

_Strategy:_ Use "Plain English first, Tech Details second." Explain the real-world benefit clearly, then attach a sleek "Under the Hood" badge for the technical details.

---

## Tech Stack for the Showcase Website

- **Framework:** None! Vanilla HTML5, CSS3, and JavaScript.
- **Styling & UI:** Bootstrap 5 (via CDN) or Tailwind CSS (via CDN) for quick, professional, open-library components (Cards, Buttons, Badges).
- **Animations:** AOS (Animate On Scroll) CSS library (simple script drop-in for scroll reveals).
- **Hosting:** GitHub Pages or Vercel (Free, instant static deployment).

---

## Website Structure (Section by Section)

### Section 1: The Hero (The Hook)

- **Headline:** "Barangay Services, Modernized."
- **Sub-headline:** "No more paper queues. No more waiting. Calarian Connect is a complete digital system that brings barangay services to your phone and automates the rest."
- **Visual:** A clean, friendly 3D mockup or image showing a phone (Citizen App), laptop (Admin Panel), and Kiosk screen.
- **Call to Actions:** "See How It Works" (Scrolls down) | "View Tech Stack" (Scrolls to tech section)

### Section 2: The Everyday Impact (Before & After)

- **Layout:** Simple comparison cards or table.
- **Before (The Old Way):** Hours of waiting, manual logbooks, hand-filled forms, and lost paper requests.
- **After (The Calarian Way):** Requests take minutes, documents print automatically, and citizens get instant push notifications.

### Section 3: The 3 Platforms (Bridging the Gap)

_Each platform gets a spotlight card with a benefit and a tech tag._

1. **The Citizen App (Mobile)**
   - _Benefit:_ "Can't type? Just speak. Residents can request documents by talking naturally in Chavacano, Tagalog, Bisaya, or English."
   - _⚙️ Under the Hood:_ React Native + Expo. Powered by OpenAI Whisper (Speech-to-Text) and Anthropic Claude for AI form extraction.

2. **The Staff Web Panel (Computer)**
   - _Benefit:_ "A live dashboard for staff. When a resident requests a document, it pops up instantly. Click 'Approve', and the PDF is ready to print."
   - _⚙️ Under the Hood:_ Next.js Dashboard. Uses Supabase Realtime (WebSockets) for instant queue updates without refreshing the page.

3. **The Face ID Kiosk (Entrance)**
   - _Benefit:_ "Walk-ins are identified in 2-3 seconds just by looking at a screen at the entrance. No ID card needed."
   - _⚙️ Under the Hood:_ Python & ArcFace integration. Uses an Intel RealSense D435i camera (Infrared + Depth sensing) to prevent spoofing.

### Section 4: Privacy & Security

- **Benefit:** "Your data is safe. We don't save pictures of your face, and only authorized staff can update your records."
- **⚙️ Under the Hood:** Compliant with the Data Privacy Act (RA 10173). Faces are stored as 512-dimension mathematical vectors in PostgreSQL (`pgvector`), making reverse-engineering impossible. Database-level Row Level Security (RLS) ensures citizens only see their own data.

### Section 5: Analytics & Dashboards

- **Visual:** A beautiful screenshot of the Admin Panel's charts.
- **Content:** "Helping the Barangay Captain make data-driven decisions: Track peak hours, most requested documents, and average processing times."

### Section 6: The Team

- **Shoutout:** "Built for Barangay Calarian and beyond by a dedicated team of a Lead Developer and 4 Interns."

---

## Hosting & Deployment Plan (Going Live)

To make this website live so stakeholders can view it on their own devices, we will use **GitHub Pages** (or Vercel) for simple static hosting.

1. **Version Control:** Create a new GitHub repository and push your `index.html` and assets.
2. **Deployment (GitHub Pages):**
   - Go to your repository settings on GitHub.
   - Navigate to the "Pages" section and select your `main` branch to save.
3. **Live URL:** GitHub will immediately provide a live link (e.g., `https://your-username.github.io/calarian-showcase`).

---

## Implementation Steps (Next Actions)

1. **Step 1:** Create an `index.html` file and link the Bootstrap/Tailwind CDN and AOS animation scripts.
2. **Step 2:** Build the Global Layout (Navbar & Footer) using pre-built library components.
3. **Step 3:** Build Section 1 (Hero) and Section 2 (Before/After).
4. **Step 4:** Build Section 3 (The Platforms Cards).
5. **Step 5:** Build Sections 4, 5, & 6.
6. **Step 6:** Push to GitHub and enable GitHub Pages.
