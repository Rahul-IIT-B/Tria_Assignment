# Tria — Contact List (Frontend Assignment)

Deployed on Vercel: https://contactlisttria.vercel.app/

What this app includes

- View a list of contacts
- Search contacts by name, email, or phone (case-insensitive). Phone searches match digits only — you can type any substring of the digits.
- Add a new contact via an accessible modal popup (Name required; email and phone optional). The modal performs client-side validation (email format, phone digits-only) and traps focus while open.
- Sticky search bar (search + New Contact) that remains visible while scrolling.
- Responsive layout using percentage-based widths/heights (container uses a percentage of the viewport).

Tech

- React 18
- Vite (dev server / build)

Quick setup (local)

1. Ensure Node.js (>=16) and npm are installed.
2. From the project root:

```powershell
npm install
```

3. Start the dev server (local only):

```powershell
npm run dev
```

Build & preview (production build)

```powershell
npm run build
npm run preview
```

By default Vite outputs to `dist/` which is suitable to deploy to static hosts.

Accessibility & UX notes

- The Add Contact modal traps focus, closes on Escape, and prevents background scrolling while open.
- Inputs include appropriate types: email field is `type="email"`, phone field restricts to digits (client-side sanitization). Inline error messages are shown for invalid input.
- The search input has clear ARIA labeling and the list items are keyboard-focusable.

Assumptions & implementation details

- Data is in-memory in `src/app.jsx` (mocked). This keeps the project self-contained for the assignment. It's trivial to swap to localStorage or an API.
- New contacts are assigned a simple timestamp-based id (Date.now()).

Files of interest

- `src/app.jsx` — application wiring, mock data, search/filtering
- `src/components/SearchBar.jsx` — controlled search input with New button
- `src/components/NewContactModal.jsx` — modal, validation, focus-trap
- `src/components/ContactList.jsx` / `ContactItem.jsx` — list UI
- `src/styles.css` — responsive percentage-based layout and modal styles
