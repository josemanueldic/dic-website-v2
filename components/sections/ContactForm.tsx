"use client";

import { useState } from "react";

const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "company", label: "Company", type: "text", required: false },
  { name: "phone", label: "Phone", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "projectType", label: "Project Type", type: "text", required: false },
] as const;

// contact.form, full variant (spec section 4).
// Not yet wired to a backend — spec section 10 calls for enquiries to be
// emailed and stored, which needs a server endpoint. This only prevents a
// blank-page reload and tells the visitor submission isn't live yet.
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h2 className="text-2xl font-bold text-primary">Request a Quote</h2>
        {submitted ? (
          <p className="mt-6 rounded-lg border border-border bg-muted p-4 text-sm text-muted-foreground">
            Thanks — form submission isn&apos;t connected to a backend yet, so
            nothing was sent. Wire this up before launch.
          </p>
        ) : (
          <form
            className="mt-8 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            {fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="text-sm font-medium text-primary">
                  {field.label}
                  {field.required ? " *" : ""}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  className="mt-1 w-full rounded border border-border px-3 py-2 text-sm"
                />
              </div>
            ))}
            <div>
              <label htmlFor="scope" className="text-sm font-medium text-primary">
                Scope
              </label>
              <textarea
                id="scope"
                name="scope"
                rows={4}
                className="mt-1 w-full rounded border border-border px-3 py-2 text-sm"
              />
            </div>
            <button
              type="submit"
              className="rounded bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
            >
              Send Enquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
