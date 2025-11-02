# Tria — Contact List (Frontend Assignment)

This is a small React single-page app implementing a Contact List with search and the ability to add a new contact.

Features

- View a list of contacts
- Search contacts by name, email, or phone (case-insensitive). Phone searches match digits: you can type a substring of the number.
- Add a new contact (name required)

Tech

- React 18
- Vite (dev server / build)

Setup

1. Ensure Node.js (>=16) and npm are installed.
2. In the project root, install dependencies:

```powershell
npm install
```

3. Run the dev server:

```powershell
npm run dev
```

Open the printed localhost URL in your browser.

Build

```powershell
npm run build
npm run preview
```

Assumptions & notes

- Data is mocked locally in `src/app.jsx` (no backend). This was chosen to keep the app self-contained.
- The Add Contact form only requires a name; email/phone are optional but kept for demonstration.
- Accessibility: inputs have labels/aria labels and list items are keyboard-focusable.

Next steps (optional)

- Persist contacts to localStorage or a backend API
- Add edit/delete contact actions
- Add tests and TypeScript conversion
