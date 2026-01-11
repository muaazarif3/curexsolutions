import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import frame from '../../assets/contact.png';


export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your EmailJS service ID, template ID, and public key
    const SERVICE_ID = "service_olsg2qf";
    const TEMPLATE_ID = "template_bugy8kw";
    const PUBLIC_KEY = "BptxaZySGTSKV01_O";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setLoading(false);
          formRef.current.reset();
          alert("We will contact you shortly")
        },
        (error) => {
          console.error(error.text);
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  return (
    <>
      <div className="@container">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 text-center"
          style={{
            backgroundImage:
              `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(${frame})`,
          }}
        >
            <div className="flex flex-col gap-2 max-w-3xl">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
            Get in Touch
            </h1>
            <h2 className="text-white text-sm @[480px]:text-base">
            We'd love to hear from you. Please fill out the form below or use our contact details to reach us.
             </h2>
          </div>
        </div>

      </div>
      <div className="w-full relative bg-gray-50 py-16 px-4 md:px-10 lg:px-20">

        <div className="max-w-6xl mx-auto">


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-24">
            {/* Left Side: Contact Info */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4 text-gray-700">
               
                <div>
                  <p className="font-medium">Phone</p>
                  <p>+1 (716) 214 5530</p>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p>info@curex.solutions</p>
                </div>
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
              <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>

              <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      className="w-full mt-1 p-3 border rounded-lg text-sm"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full mt-1 p-3 border rounded-lg text-sm"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    className="w-full mt-1 p-3 border rounded-lg text-sm"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600">Reason for Inquiry</label>
                  <select name="reason" className="w-full mt-1 p-3 border rounded-lg text-sm">
                    <option>General Inquiry</option>
                    <option>Appointment</option>
                    <option>Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-600">Message</label>
                  <textarea
                    name="message"
                    className="w-full mt-1 p-3 border rounded-lg text-sm h-28"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" required />
                  <p className="text-sm text-gray-600">
                    I agree to the <span className="text-green-600">Privacy Policy</span>.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {success === true && <p className="text-green-600 mt-2">Message sent successfully!</p>}
                {success === false && <p className="text-red-600 mt-2">Failed to send message. Try again.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
