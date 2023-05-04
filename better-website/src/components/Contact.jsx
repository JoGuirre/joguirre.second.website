import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("meqwpvaq");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="contact-container" className="relative mt-12">
      {/* <h1 id="" className="text-left pl-6 text-3xl font-bold mt-6 pb-3">
        Contact Me
      </h1> */}
      <div className="mx-6 mb-32 mt-8">
        <div className="">
          <h1 className="text-2xl font-bold">Like what you see?</h1>
          <h2 className="text-lg font-semibold pt-2">Contact me below!</h2>
        </div>
        <div className="flex flex-row relative flex-wrap mt-8 mx-2 px-6 py-4 justify-center font-semibold bg-textcolor text-bgcolor text-md rounded-xl border-2 border-bordercolor before:border before:border-transparent before:absolute before:w-[95%] before:rounded-lg before:bottom-[-15px] before:bg-accentcolor before:self-center before:h-8 before:z-[-9] after:pointer-events-none">
          <form
            id="contact-form"
            action="https://formspree.io/f/meqwpvaq"
            onSubmit={handleSubmit}
            className="flex flex-wrap"
          >
            <label htmlFor="name" className="mt-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-lg z-10 bg-white border border-black rounded-lg px-2 py-1"
            />

            <label htmlFor="email" className="mt-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-lg z-10 bg-white border border-black rounded-lg after:border after:border-black after:content-[''] after:absolute after:left-[2px] after:right-[2px] after:top-[2px] after:bottom-[2px] after:rounded-md after:bg-transparent px-2 py-1 bg-[#c2f3ff]"
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
              className="w-full rounded-lg z-10 bg-white border border-black rounded-lg after:border after:border-black after:content-[''] after:absolute after:left-[2px] after:right-[2px] after:top-[2px] after:bottom-[2px] after:rounded-md after:bg-transparent px-2 py-1 bg-[#c2f3ff]"
            />

            <label htmlFor="message" className="mt-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Build me a website!"
              required
              className="w-full rounded-lg z-10 bg-white border border-black rounded-lg after:border after:border-black after:content-[''] after:absolute after:left-[2px] after:right-[2px] after:top-[2px] after:bottom-[2px] after:rounded-md after:bg-transparent px-2 py-1 bg-[#c2f3ff] resize-none placeholder:text-gray-400"
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
              className="rounded-xl w-1/3 py-2 px-4 mt-4 ml-8 bg-[#c2f3ff] border border-black rounded-lg"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      {isOpen && state.succeeded ? <JoinedPopup setIsOpen={setIsOpen} /> : null}
    </div>
  );
}
function JoinedPopup({ setIsOpen }) {
  return (
    <div className="sticky bottom-40 w-10/12 left-[8.5%] text-center bg-white text-black p-4 border border-black rounded-lg ">
      <div className="">
        <h1 className="text-2xl font-bold">Your email has been sent!</h1>
        <h3 className="text-lg font-semibold">Thank you for your message!</h3>
        <p>
          <br />I look forward to talking with you! <br />
        </p>
        <button
          id=""
          onClick={() => setIsOpen(false)}
          className="rounded-xl w-1/3 py-2 px-4 mt-4 bg-[#c2f3ff] border border-black rounded-lg after:border after:border-black after:content-[''] after:absolute after:left-[2px] after:right-[2px] after:top-[2px] after:bottom-[2px] after:rounded-md after:bg-transparent"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Contact;
