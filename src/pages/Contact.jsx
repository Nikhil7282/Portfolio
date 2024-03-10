import React from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const Contact = () => {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const USER_ID = import.meta.env.VITE_USER_ID;

  const sendEmail = async (e) => {
    e.preventDefault();
    toast.loading("Sending Email...", { id: "email" });
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        toast.success("Email sent successfully", { id: "email" });
        e.target.reset();
      },
      (error) => {
        toast.error("Email sent failed", { id: "email" });
        console.log(error.text);
      }
    );
  };

  return (
    <div
      name="contact"
      className="w-full h-max bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 mt-28">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="user_name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="user_email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 mt-3 py-3 mx-auto flex items-center"
          type="submit"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
