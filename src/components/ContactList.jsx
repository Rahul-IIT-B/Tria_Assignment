import React from "react";
import ContactItem from "./ContactItem";

export default function ContactList({ contacts }) {
  if (!contacts.length) return <p className="empty">No contacts found.</p>;

  return (
    <ul className="contact-list" role="list">
      {contacts.map((c) => (
        <ContactItem key={c.id} contact={c} />
      ))}
    </ul>
  );
}
