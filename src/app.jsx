import React, { useMemo, useState } from "react";
import ContactList from "./components/ContactList";
import SearchBar from "./components/SearchBar";
import NewContactModal from "./components/NewContactModal";

const initialContacts = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "8732936988",
  },
  { id: 2, name: "Bob Smith", email: "bob@example.com", phone: "9742837978" },
  {
    id: 3,
    name: "Charlie Lee",
    email: "charlie@example.com",
    phone: "9876548479",
  },
];

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return contacts;

    const qDigits = q.replace(/\D/g, "");

    return contacts.filter((c) => {
      const name = (c.name || "").toLowerCase();
      const email = (c.email || "").toLowerCase();
      const phone = (c.phone || "").toLowerCase();
      const phoneDigits = phone.replace(/\D/g, "");

      const matchName = name.includes(q);
      const matchEmail = email.includes(q);
      const matchPhone = qDigits ? phoneDigits.includes(qDigits) : false;

      return matchName || matchEmail || matchPhone;
    });
  }, [contacts, query]);

  function handleAdd(contact) {
    setContacts((prev) => [{ ...contact, id: Date.now() }, ...prev]);
  }

  const [showModal, setShowModal] = React.useState(false);

  return (
    <main
      className="container"
      aria-hidden={showModal ? "true" : undefined}
      inert={showModal ? true : undefined}
    >
      <header className="header">
        <h1>Contact List</h1>
      </header>

      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search by name, email or phone..."
        onNew={() => setShowModal(true)}
      />

      <ContactList contacts={filtered} />

      {showModal && (
        <NewContactModal
          onSave={(c) => handleAdd(c)}
          onClose={() => setShowModal(false)}
        />
      )}
    </main>
  );
}
