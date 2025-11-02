import React, { useEffect, useRef, useState } from "react";

export default function NewContactModal({ onSave, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const overlayRef = useRef(null);
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    previouslyFocused.current = document.activeElement;
    setTimeout(() => firstInputRef.current?.focus(), 0);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e) {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
      if (e.key === "Tab") {
        const focusable = modalRef.current.querySelectorAll(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      try {
        previouslyFocused.current?.focus();
      } catch (err) {}
    };
  }, [onClose]);

  function save() {
    const next = {};
    if (!name.trim()) next.name = "Name is required";
    if (email.trim()) {
      const ok = /^\S+@\S+\.\S+$/.test(email.trim());
      if (!ok) next.email = "Please enter a valid email address";
    }
    if (phone.trim()) {
      if (phone.trim().length < 7)
        next.phone = "Please enter a valid phone number";
    }

    if (Object.keys(next).length) {
      setErrors(next);
      if (next.name) firstInputRef.current?.focus();
      else if (next.email)
        modalRef.current.querySelector('input[type="email"]')?.focus();
      else if (next.phone)
        modalRef.current.querySelector('input[type="tel"]')?.focus();
      return false;
    }

    setErrors({});
    onSave({ name: name.trim(), email: email.trim(), phone: phone.trim() });
    return true;
  }

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      ref={overlayRef}
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        className="modal"
        ref={modalRef}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <h2 className="modal-title">Add new contact</h2>

        <div className="modal-body">
          <label className="field">
            <div className="field-label">Name *</div>
            <input
              ref={firstInputRef}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors((s) => ({ ...s, name: undefined }));
              }}
              placeholder="Full name"
              aria-required="true"
            />
            {errors.name && <div className="field-error">{errors.name}</div>}
          </label>

          <label className="field">
            <div className="field-label">Email</div>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((s) => ({ ...s, email: undefined }));
              }}
              placeholder="email@example.com"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <div className="field-error">{errors.email}</div>}
          </label>

          <label className="field">
            <div className="field-label">Phone</div>
            <input
              type="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => {
                const digits = e.target.value.replace(/\D/g, "");
                setPhone(digits);
                setErrors((s) => ({ ...s, phone: undefined }));
              }}
              placeholder="e.g. 5551234567"
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && <div className="field-error">{errors.phone}</div>}
          </label>
        </div>

        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onClose} type="button">
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              const ok = save();
              if (ok) onClose();
            }}
            type="button"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}