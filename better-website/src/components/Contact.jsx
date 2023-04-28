import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("meqwpvaq");
  const [isOpen, setIsOpen] = useState(false);

  if (state.succeeded && isOpen) {
    return <JoinedPopup setIsOpen={setIsOpen} />;
  }

  return (
    <div id="" className="">
      <h1 id="" className="text-left pl-6 text-3xl font-bold mt-6">
        Contact Me
      </h1>
      <div className="p-4 m-6 mt-2 bg-blue-300 rounded-xl">
        <div className="">
          <h1>Like what you see?</h1>
          <h2>Get in touch with me and let's work something out!</h2>
        </div>
        <div className="">
          <form
            id="contact-form"
            action="https://formspree.io/f/meqwpvaq"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              id="submit-button"
              disabled={state.submitting}
              onClick={() => setIsOpen(true)}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function JoinedPopup({ setIsOpen }) {
  return (
    <div className="">
      <div className="">
        <h1>Your email has been sent!</h1>
        <p>
          <h3>Thank you for your message!</h3>
          <br />I will be in contact within 2 business days.
          <br />
          Please browse my projects!
        </p>
        <button id="" onClick={() => setIsOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Contact;
