export default function Contact() {
  return (
    <div className="min-h-screen pt-40 bg-[#fdf7f2] flex flex-col items-center p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-[#FBD6BC] mb-6 text-center">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow p-6 border border-[#E5E7EB]">
          <h2 className="text-2xl font-semibold text-[#FBD6BC] mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-2">
            <strong>Address:</strong> 123 Fake Street, Terni, Italy
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Phone:</strong> +39 012 345 6789
          </p>
          <p className="text-gray-600 mb-6">
            <strong>Email:</strong> contact@example.com
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-[#E5E7EB] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FBD6BC]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-[#E5E7EB] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FBD6BC]"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="border border-[#E5E7EB] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FBD6BC] resize-none"
            />
            <button
              type="submit"
              className="bg-[#FBD6BC] text-white rounded py-2 hover:bg-[#e0bca3] transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow border border-[#E5E7EB]">
          <iframe
            title="Terni Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.033332538692!2d12.646361215425965!3d42.56361637917367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ec9ec0e92e9d1%3A0x41db49c58d2d4f3c!2sTerni%20TR!5e0!3m2!1sen!2sit!4v1694093579695!5m2!1sen!2sit"
            width="100%"
            height="100%"
            style={{ minHeight: "400px", border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
