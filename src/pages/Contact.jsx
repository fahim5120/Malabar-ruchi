import React from "react";
import { assets } from "../assets/assets";

function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-12 px-6">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-800 mb-10">
        Contact Us
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <img
          src={assets.contactImg}
          alt="Contact Food"
          className="rounded-2xl shadow-lg"
        />

        {/* Right: Info */}
        <div className="bg-white shadow-xl rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-amber-700 mb-4">Get in Touch</h2>

          {/* Address */}
          <div className="flex items-center gap-3">
            <img src={assets.locationIcon} alt="location" className="w-6 h-6" />
            <p>Kottakkal, Malappuram, Kerala, 676503</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <img src={assets.phoneIcon} alt="phone" className="w-6 h-6" />
            <p>+91 8136905120</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <img src={assets.emailIcon} alt="email" className="w-6 h-6" />
            <p>malabarRuchi@foodapp.com</p>
          </div>

          {/* Working Hours */}
          <div className="flex items-center gap-3">
            <img src={assets.clockIcon} alt="time" className="w-6 h-6" />
            <p>Mon–Fri: 9 AM – 10 PM | Sat–Sun: 10 AM – 11 PM</p>
          </div>

          {/* Contact Form */}
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
            ></textarea>
            <button className="w-full bg-amber-700 text-white py-2 rounded-lg hover:bg-amber-800 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-10">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center space-y-4">
            <img
              src={assets.person1}
              alt="Customer 1"
              className="w-20 h-20 rounded-full mx-auto object-cover"
            />
            <h3 className="font-bold text-lg text-amber-700">Pinnarayi</h3>
            <p className="text-gray-600 text-sm">
              “Best Malabar biriyani I’ve ever had! Authentic taste and very
              friendly service. Highly recommended.”
            </p>
          </div>

          {/* Review 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center space-y-4">
            <img
              src={assets.person2}
              alt="Customer 2"
              className="w-20 h-20 rounded-full mx-auto object-cover"
            />
            <h3 className="font-bold text-lg text-amber-700">Suresh pillai </h3>
            <p className="text-gray-600 text-sm">
              “Perfect spot for family dinner. The seafood curry was
              outstanding, full of flavors of Malabar.”
            </p>
          </div>

          {/* Review 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center space-y-4">
            <img
              src={assets.person3}
              alt="Customer 3"
              className="w-20 h-20 rounded-full mx-auto object-cover"
            />
            <h3 className="font-bold text-lg text-amber-700">Elon musk</h3>
            <p className="text-gray-600 text-sm">
              “Loved the payasam and parotta combo. Excellent hospitality and
              quick delivery service too.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
