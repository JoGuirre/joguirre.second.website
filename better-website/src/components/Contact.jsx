import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("meqwpvaq");
  const [isOpen, setIsOpen] = useState(false);

  if (state.succeeded && isOpen) {
    return <JoinedPopup setIsOpen={setIsOpen} />;
  }

  return (
    <div id="contact-container" className="">
      {/* <h1 id="" className="text-left pl-6 text-3xl font-bold mt-6 pb-3">
        Contact Me
      </h1> */}
      <div className="p-4 m-6 mt-2 rounded-xl">
        <div className="">
          <h1 className="text-2xl font-bold">Like what you see?</h1>
          <h2 className="text-lg font-semibold pt-2">
            Get in touch with me and we'll get you what you need!
          </h2>
        </div>
        <div className=" bg-blue-300 rounded-lg p-4 mt-2">
          <form
            id="contact-form"
            action="https://formspree.io/f/meqwpvaq"
            onSubmit={handleSubmit}
            className="flex flex-wrap text-black"
          >
            <label htmlFor="name" className="mt-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-lg"
            />

            <label htmlFor="email" className="mt-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-lg"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label htmlFor="subject" className="mt-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full rounded-lg"
            />

            <label htmlFor="message" className="mt-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full rounded-lg"
            ></textarea>
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
              className="rounded-xl bg-blue-800 py-2 px-4 mt-4 ml-8 text-white"
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
