import React from "react";

export default function ContactItem({ contact }) {
  return (
    <li className="contact-item" tabIndex={0}>
      <div className="contact-main">
        <div className="avatar" aria-hidden>
          {contact.name.charAt(0)}
        </div>
        <div className="contact-info">
          <div className="name">{contact.name}</div>
          <div className="meta">
            <span className="meta-group contact-phone">
              <span className="phone-icon" role="img" aria-label="mobile phone">
                📱
              </span>
              <span className="phone-text">{contact.phone}</span>
            </span>

            <span className="meta-group contact-email">
              <span className="email-icon" role="img" aria-label="email">
                ✉️
              </span>
              <span className="email-text">{contact.email}</span>
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
