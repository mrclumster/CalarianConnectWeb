# Calarian Connect — Complete User Documentation
*Plain-language guide for citizens, barangay staff, and officials*

---

## Overview

**Calarian Connect** is the official digital system of **Barangay Calarian**. It brings together a mobile phone app for residents, a computer panel for barangay staff, and a face-recognition kiosk at the barangay entrance — all connected to the same live database.

**The goal is simple:** Residents spend less time waiting. Staff spend less time on manual paperwork. Every request is tracked, every document is generated automatically, and nothing gets lost.

| What it replaces | What it provides |
|------------------|-----------------|
| Paper log books and manual queues | Real-time digital request queue |
| Hand-filled forms | Automatic PDF document generation |
| Manual identity lookup | 2–3 second face scan at the entrance |
| Phone or in-person follow-ups | Instant push notifications on status changes |
| Excel spreadsheets | Searchable, secure resident database |

**Three connected platforms:**

| Platform | Who Uses It | How It Helps |
|----------|-------------|--------------|
| **Calarian Connect App** (phone) | Residents | Submit requests, track status, speak in Chavacano/Tagalog/Bisaya |
| **Staff Web Panel** (computer) | Barangay staff | Process requests, manage residents, print documents |
| **Kiosk Terminal** (touchscreen at entrance) | Walk-in residents | Get identified by face scan in 2–3 seconds |

**Languages supported:** Chavacano, Tagalog, Bisaya, and English — throughout the app and staff panel.

---

## What Is Calarian Connect?

Calarian Connect is a digital system built specifically for Barangay Calarian. It replaces the old paper-based way of requesting documents and handling walk-in residents.

**The old way:** A resident walks in, waits in line, a staff member manually searches through paper records or a spreadsheet, fills out a form by hand, and the resident waits again. On a busy day, this can take hours.

**The Calarian Connect way:** Residents can request documents through a phone app — or walk up to a screen at the barangay entrance that recognizes their face. Staff see all requests in real time on a computer screen. Documents are printed automatically. The whole process takes minutes.

The system has three parts that work together:

| Part | Who Uses It | What It Does |
|------|-------------|--------------|
| **Mobile App** | Residents (citizens) | Request documents, track status, speak in Chavacano/Tagalog |
| **Web Admin Panel** | Barangay staff | Process requests, manage residents, handle walk-ins |
| **Kiosk Terminal** | Walk-in residents | Self-identification by face scan at the barangay entrance |

---

## Part 1: The Mobile App (For Residents)

### Who Can Use It?

Any resident whose information is already on file at Barangay Calarian. The barangay imports its resident records (from existing Excel or CSV files), and residents then "claim" their profile using their phone.

**Residents who are NOT yet in the barangay records cannot self-register.** They must visit the barangay hall first so staff can add them.

---

### How a Resident Sets Up the App

This is a one-time process:

1. **Download the app** from the App Store (iPhone) or Google Play (Android).
2. **Open the app** — you'll see an account claiming screen.
3. **Enter your details:** Last name, first name, birthday, and the contact number the barangay has on file for you.
4. **The system searches** for a matching record in Barangay Calarian's database.
5. **If found:** A one-time passcode (OTP) is sent to your registered contact number. Enter it to verify.
6. **Done.** Your profile is now linked to your phone. You can now use the app.
7. **If not found:** The app will direct you to visit the barangay hall so staff can check your records.

---

### What Residents Can Do in the App

#### Requesting a Document

1. Tap **"New Request"** on the home screen.
2. Choose the type of document you need (e.g., Barangay Clearance, Certificate of Residency, Indigency Certificate, etc.).
3. **Fill in the required details.** Each document type has its own set of fields.
4. **Voice input option:** On any field, tap the microphone icon and speak naturally in Chavacano, Tagalog, Bisaya, or English. The app will convert your speech to text and fill in the form automatically.
5. Review what you filled in and tap **Submit**.
6. You'll receive a **reference number** (e.g., `BRY-2025-00142`). Save this — you'll use it to track your request.

#### Tracking a Request

- Tap **"My Requests"** to see all your submitted requests and their current status.
- Each request shows one of the following statuses:

| Status | What It Means |
|--------|---------------|
| **Naghihintay** (Pending) | Your request was received and is waiting for a staff member to review it. |
| **Sinusuri** (Under Review) | A staff member is currently reviewing your request. |
| **Aprubado** (Approved) | Your request is approved and your document is being prepared. |
| **Pwede nang Kunin** (Ready for Pickup) | Your document is ready. Come to the barangay hall to pick it up. |
| **Nakumpleto** (Completed) | You have received your document. |
| **Tinanggihan** (Rejected) | Your request was not approved. You'll receive a reason. |
| **Kinansela** (Cancelled) | The request was cancelled (by you or by staff). |

#### Notifications

- You will receive a push notification on your phone every time your request status changes.
- Notifications appear in Tagalog by default. You can switch to English in Settings.

#### Your Profile

- Tap **"Profile"** to see your personal information on file at the barangay.
- **You cannot edit your own profile.** Only authorized barangay staff (Admin Assistant) can change your information. This protects your records from unauthorized changes.
- You can change your preferred language (Tagalog or English) and notification preferences in Settings.

---

### The Voice-to-Form Feature

This is one of the most helpful features for residents who find it difficult to type on a phone.

**How it works:**
1. On any form field, tap the microphone icon.
2. A recording screen appears. Tap the record button and speak naturally.
3. You can speak in **Chavacano, Tagalog, Bisaya, or English**.
4. When done, tap stop. The system:
   - Converts your speech to text (using AI)
   - Understands what you said and fills in the appropriate form fields automatically
5. Review the filled-in fields. If anything is wrong, you can edit it before submitting.

**Example:** If you say *"Para sa certificate of residency, namumuyo ako sa Calarian, Zamboanga City, pati rin dalawampu't limang taon na ako"*, the system will automatically fill in the address field and age field.

---

## Part 2: The Web Admin Panel (For Barangay Staff)

This is the computer system that staff members use at the barangay hall. It runs in a web browser and updates in real time — meaning when a resident submits a request on their phone, it appears on the staff screen within seconds.

---

### Staff Roles and What They Can Do

There are four staff roles. Each has different permissions:

#### Barangay Captain (Admin)
- Views a read-only overview of everything happening in the barangay
- Cannot process requests or edit records directly
- Can assign staff roles (who becomes an assistant, who becomes a moderator)
- Has access to all reports and analytics

#### Admin Assistant
- The main operator of the system
- Can do everything a Moderator can do, plus:
- **The only role that can edit resident profile information** (name, address, contact number, etc.)
- Every profile change is automatically logged — what was changed, who changed it, the old value, the new value, and the reason given
- Can manage staff accounts (create, assign roles)
- Can upload bulk resident data from Excel/CSV files

#### Moderator (Front-Line Staff)
- The primary day-to-day user at the service counter
- Accepts and processes resident requests
- Handles walk-in transactions
- Files complaints on behalf of residents
- Cannot edit resident profile data

#### Super Admin (System Owner)
- For the developers/company that manages the system
- Has access to all barangays in the system
- Used for system-wide maintenance and oversight

---

### The Main Queue (Real-Time Request Board)

The heart of the admin panel. This screen shows **all pending and in-progress requests** from both the mobile app and walk-in counter.

- The list updates live — new requests appear automatically without refreshing the page.
- Staff can click any request to open a detail panel on the right side.
- From the detail panel, staff can:
  - Change the request status (Approve, Reject, Mark as Ready for Pickup, etc.)
  - Add notes to the request
  - View all the information the resident submitted
  - Generate and print the PDF document

---

### Processing a Request (Step by Step)

1. A request appears in the queue (from the app or walk-in counter).
2. Moderator clicks the request to open its details.
3. Reviews the information. If more info is needed, the status can be set to "Under Review" with a note.
4. If everything is correct, click **Approve**.
5. The system automatically generates a PDF document with the barangay header, resident's information, a QR code for verification, and the reference number.
6. Print the document from the browser.
7. Set the status to **"Ready for Pickup"** — the resident receives a notification on their phone immediately.
8. When the resident comes to pick up, set the status to **"Completed"**.

---

### Walk-In Entry

For residents who come to the barangay hall without using the app:

1. Moderator clicks **"Walk-In Entry"** in the sidebar.
2. Searches for the resident by name or ID number.
3. Selects the resident and the document type they need.
4. Fills in any additional details.
5. Submits — this creates a request in the same queue as app-based requests.
6. The rest of the process is the same as above.

---

### Filing a Complaint

Staff can file and manage complaints on behalf of residents:

1. Click **"Complaints"** in the sidebar.
2. Click **"New Complaint"**.
3. Fill in the complainant's information, the type of complaint, and a description.
4. Submit — the complaint is logged and assigned a case number.
5. Staff can update the complaint status as it progresses toward resolution.

---

### Managing Residents (Citizens)

Click **"Citizens"** in the sidebar to access the resident database.

- **Search and filter** residents by name, address, status, or other criteria.
- **View a resident's full profile**: personal info, address, household data, request history.
- **Admin Assistant only**: Edit any field in a resident's profile. Every change is logged automatically.

---

### Bulk Importing Residents

This is how the barangay's existing resident records are loaded into the system. This is done once at setup, and again whenever new resident data needs to be added.

1. Click **"Import"** in the sidebar.
2. Upload an Excel (.xlsx) or CSV (.csv) file with resident data.
3. A **column mapping** screen appears. The system asks you to match your file's column headers (which might be in Filipino, like "PANGALAN", "EDAD", "TIRAHAN") to the system's fields.
4. Preview how the data will look before importing.
5. Click **"Confirm Import"**.
6. The system imports all records as unclaimed profiles. Residents can then claim their profiles through the app.

---

### Managing Form Types

The barangay can configure which documents it offers and what information each requires.

- Click **"Forms"** in the sidebar to see all available document types.
- Each form type has a name in Tagalog and English, and a list of required fields.
- New form types can be added; existing ones can be updated.

---

### Kiosk Management

Click **"Kiosk"** in the sidebar to manage the facial recognition terminal.

- View all residents who have been enrolled (face registered) at the kiosk.
- See a log of recent identification sessions (who walked in, when, what confidence level).
- Delete a resident's face data if they request it.

---

### Analytics and Reports

Click **"Analytics"** in the sidebar for visual reports:

- Total requests processed (by day, week, or month)
- Most requested document types
- Average processing time per request type
- Peak hours (when the barangay is busiest)
- Complaint statistics

These charts help the Barangay Captain and Admin understand workload patterns and plan staffing.

---

### Audit Log

Click **"Audit"** to see a complete history of every action taken in the system:

- Who approved which request, and when
- Who edited which resident profile, what field was changed, and why
- Who created or deleted staff accounts
- Who enrolled or deleted a face encoding

This log cannot be edited or deleted. It is a permanent, tamper-proof record.

---

### Staff Management

Admin Assistants and above can create new staff accounts:

1. Click **"Staff"** in the sidebar.
2. Click **"Invite Staff"**.
3. Enter the staff member's email address and assign their role.
4. The staff member receives an email invitation with login instructions.
5. They log in using their email and a password they set.

---

## Part 3: The Kiosk Terminal (At the Barangay Entrance)

The kiosk is a large touchscreen placed at the entrance of the barangay hall. It uses a special camera to identify residents by their face.

---

### How a Resident Uses the Kiosk

**First Visit (Face Enrollment):**
1. Resident walks up to the kiosk.
2. The kiosk shows an idle screen: *"Lumapit sa camera"* (Step up to the camera).
3. If the system does not recognize the person, it shows: *"Hindi kita nakilala — mangyaring makipag-ugnayan sa kawani"* (You're not recognized — please see staff).
4. A staff member assists the resident. They confirm the resident's identity and register their face at the kiosk.
5. The face registration takes a photo with the special camera and stores a mathematical representation of the face (not the photo itself).

**Return Visits:**
1. Resident walks up to the kiosk.
2. The camera scans their face (takes 2–3 seconds).
3. Screen shows: *"Maligayang pagdating, [Name]! Ano ang kailangan mo?"* (Welcome, [Name]! What do you need?)
4. Resident taps what they need (e.g., Request a Document, Check Status, File a Complaint).
5. A queue number is generated (e.g., Q-042).
6. The moderator's computer screen at the service counter automatically shows that this specific resident is coming and what they need — before the resident even reaches the counter.

---

### The Special Camera

The kiosk uses a camera called the Intel RealSense D435i. This is not an ordinary webcam. It has three capabilities:

- **Color camera** — Standard visible-light image
- **Infrared (IR) camera** — Works in complete darkness, no flash needed
- **Depth sensor** — Measures how far away different parts of the face are

The infrared and depth sensors are what make it almost impossible to fool the system with a printed photo or a phone screen. A flat photo has no depth and does not emit infrared light the way real skin does. The system will reject it.

---

### Face Data Privacy

Calarian Connect complies with the **Data Privacy Act of the Philippines (RA 10173)**:

- **No face photos are stored.** The camera takes a photo, converts it into a 512-number mathematical code, and immediately discards the photo. The code cannot be used to reconstruct a face image.
- **Data is barangay-scoped.** A resident's face data from Barangay Calarian cannot be matched against records from other barangays.
- **Residents can opt out.** Any resident can request that their face data be deleted. Staff can do this from the Kiosk Management screen in the admin panel.

---

## Notifications

### How They Work

The system automatically sends notifications to residents when:

- A request changes status (e.g., "Your Barangay Clearance has been approved")
- A document is ready for pickup
- A request is rejected (with a reason)

Notifications are sent in **both Tagalog and English** — residents receive them in their preferred language as set in the app.

### Notification History

Residents can tap the bell icon in the app to see all past notifications. Staff can also view and manage notifications from the admin panel.

---

## Security and Privacy

### Who Can See What

The system uses strict database-level rules that cannot be bypassed by the app or website:

- **Citizens can only see their own requests and profile.** They cannot see other residents' data.
- **Moderators can only see data within Barangay Calarian.** They cannot access data from other barangays.
- **Profile editing is logged every time.** If a staff member changes a resident's contact number, the system records: who changed it, when, what the old number was, what the new number is, and the reason given.

### Requests Cannot Be Permanently Deleted

Once a request is submitted, it stays in the system permanently. Staff can only change the status (e.g., to "Cancelled"). This ensures a complete audit trail and prevents records from being tampered with.

### AI Features Are Secured

The system uses AI for voice transcription (converting speech to text) and form extraction (understanding what was said and filling in form fields). These AI services are called from secure server functions only — **the AI service keys are never stored in the app or website**. They cannot be stolen from a resident's phone.

---

## Common Questions

**Q: I downloaded the app but it says my name was not found. What do I do?**
A: Your information may not yet be in the barangay's records, or the name/birthdate you entered might not match exactly. Visit the barangay hall and ask the Admin Assistant to check your record.

**Q: Can I change my address in the app?**
A: No. For security and accuracy, only the Admin Assistant at the barangay hall can update your profile. Visit the barangay hall with a valid ID.

**Q: I submitted a request on the app — how long will it take?**
A: Processing time depends on the document type and how busy the barangay is. You will receive a notification the moment your request status changes.

**Q: The kiosk did not recognize me. What do I do?**
A: Approach the nearest staff member at the counter. They can process your request manually and re-enroll your face if needed.

**Q: I don't want my face stored in the system. Can I opt out?**
A: Yes. Ask any staff member to delete your face data from the system. They can do this from the Kiosk Management screen. You can still use the mobile app and walk-in counter.

**Q: Can I use the app in English?**
A: Yes. In the app, go to Profile → Settings → Language, and switch to English. All labels, status messages, and notifications will switch to English.

**Q: I lost my reference number. How do I find my request?**
A: Open the app and go to "My Requests." All your requests are listed there with their reference numbers.

**Q: Can staff see my messages or conversations?**
A: Staff can only see the information you submitted in your requests (form data, document type, contact details). There is no messaging feature in the system.

---

## Glossary

| Term | Plain-Language Meaning |
|------|------------------------|
| **Profile** | Your personal record in the barangay database (name, address, birthday, etc.) |
| **Claiming a profile** | The one-time process of linking your phone to your barangay record |
| **Reference number** | A unique code assigned to each request (e.g., BRY-2025-00142) that lets you track it |
| **OTP** | One-Time Password — a short code sent to your phone to verify it's really you |
| **Queue** | The list of requests waiting to be processed by staff |
| **Walk-in** | A resident who visits the barangay hall in person instead of using the app |
| **Face enrollment** | The one-time process of registering your face at the kiosk |
| **Face encoding** | A mathematical description of your face (512 numbers) — not a photo |
| **Audit log** | A permanent record of every action taken in the system |
| **Push notification** | An alert sent to your phone even when the app is closed |
