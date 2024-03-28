"use client";
import React, { useState } from "react";
import Toast from "../ui/toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [toast, setToast] = useState({ show: false, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showToast = (type, message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 3000); // Hide after 3 seconds
 };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      showToast('success', 'Message sent successfully.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      showToast('info', 'New mail arrived.');
    }

  };

  return (
    <div class="relative overflow-hidden">
      {/* <!-- Gradients --> */}

      {toast.show && (
        <div className={`toast toast-end ${toast.type === 'success' ? 'alert alert-success' : 'alert alert-info'}`}>
          <span>{toast.message}</span>
        </div>
      )}


      <div
        aria-hidden="true"
        class="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        <div class="bg-gradient-to-r from-violet-30/50 to-purple-10 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-90"></div>
        <div class="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
      </div>
      {/* <!-- End Gradients --> */}

      <div class="relative z-10">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div class="max-w-2xl text-center mx-auto">
            <p class="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              Beyond Web Expectations
            </p>

            {/* <!-- Title --> */}
            <div class="mt-5 max-w-2xl">
              <h1 class="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                A Solutions for Business
              </h1>
            </div>
            {/* <!-- End Title --> */}

            <div class="mt-5 max-w-3xl">
              <p class="text-lg text-gray-600 dark:text-gray-400">
                Beyond Web Expectations is a web business that helps other
                businesses improve their online presence, which helps them
                generate more leads
              </p>
            </div>

            {/* <!-- Email --> */}
            <div class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
              <h1 class="text-4xl font-medium">Stay in the loop</h1>
              <p class="text-slate-500">
                Receive a notification when the site launches and get 30% off
                during the first week
              </p>

              <form action="" className="my-10" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-5">
                  <label for="email">
                    <p className="font-medium text-slate-700 pb-2">
                      Email address
                    </p>

                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder="Enter your email address"
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                      />
                    </svg>

                    <span>Notify Me</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
