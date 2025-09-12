import React from "react";

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Privacy Policy – MalabarRuchi
      </h1>

      <p className="text-gray-600 mb-6">
        At <span className="font-medium">MalabarRuchi</span>, we value your
        privacy and are committed to protecting your personal information. This
        Privacy Policy explains how we collect, use, and safeguard your data
        when you use our website, mobile app, and food ordering services. By
        using our services, you agree to the terms of this Privacy Policy.
      </p>

      {/* Information Collection */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <strong>Personal Information:</strong> Name, phone number, email,
            delivery address, and payment details when placing an order.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> Device details, browser
            type, location data (if enabled), and app/website usage statistics.
          </li>
        </ul>
      </section>

      {/* Usage */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>To process and deliver your food orders</li>
          <li>To send order confirmations, updates, and receipts</li>
          <li>To enhance our menu, features, and customer experience</li>
          <li>To notify you about offers, discounts, and promotions (if opted-in)</li>
        </ul>
      </section>

      {/* Sharing */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">
          3. Sharing of Information
        </h2>
        <p className="text-gray-600">
          We never sell or trade your personal data. However, your information
          may be shared with:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>
            <strong>Delivery Partners:</strong> To deliver your order to your
            specified address.
          </li>
          <li>
            <strong>Payment Gateways:</strong> For secure processing of online
            transactions.
          </li>
          <li>
            <strong>Service Providers:</strong> Trusted vendors who assist us
            with hosting, analytics, or customer support.
          </li>
        </ul>
      </section>

      {/* Security */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">
          4. Data Security
        </h2>
        <p className="text-gray-600">
          We use industry-standard security measures to protect your data.
          However, please note that no method of transmission over the internet
          is 100% secure.
        </p>
      </section>

      {/* User Rights */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">
          5. Your Rights
        </h2>
        <p className="text-gray-600">
          You can request access, correction, or deletion of your personal data
          by contacting us. You may also opt-out of promotional emails at any
          time.
        </p>
      </section>

      {/* Changes */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">
          6. Changes to This Policy
        </h2>
        <p className="text-gray-600">
          We may update this Privacy Policy from time to time. Updates will be
          posted on this page with the latest effective date.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-semibold mb-2 text-gray-700">
          7. Contact Us
        </h2>
        <p className="text-gray-600">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at: <br />
          📧 <span className="font-medium">support@malabarruchi.com</span>
        </p>
      </section>
    </div>
  );
}
