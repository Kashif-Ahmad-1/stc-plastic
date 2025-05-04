import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-900 text-white">
      <div className="hymid-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-hymid-teal">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Contact our team to discuss how we can help
            you bring your ideas to life.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="w-full lg:w-1/2 reveal-on-scroll">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6 text-gray-400">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-hymid-teal/10 p-3 rounded-full mr-4">
                    <Phone size={20} className="text-hymid-teal" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <p>+91 (0) 9876 543210</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-hymid-teal/10 p-3 rounded-full mr-4">
                    <Mail size={20} className="text-hymid-teal" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p>info@stc-plastics.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-hymid-teal/10 p-3 rounded-full mr-4">
                    <MapPin size={20} className="text-hymid-teal" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Address</h4>
                    <p>
                      STC Plastic Manufacturing
                      <br />
                      Industrial Area, Phase II
                      <br />
                      New Delhi, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Embed Placeholder */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-lg font-medium text-white mb-4">
                  Find us on map
                </h4>
                <div className="h-64 bg-gray-700 rounded-md overflow-hidden flex items-center justify-center">
                  <iframe
                    title="STC Plastics Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.506720062353!2d77.2370115150832!3d28.61417998242071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b0e0c2efb3%3A0xddd4fc4a2a0a73b3!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    className="border-0 w-full h-full"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 reveal-on-scroll">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>

              <form className="space-y-6 text-gray-400">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-hymid-teal"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-hymid-teal"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white font-medium mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-hymid-teal"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project"
                    className="block text-white font-medium mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="project"
                    className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-hymid-teal"
                  >
                    <option value="" disabled>
                      Select project type
                    </option>
                    <option value="custom">Custom Product Development</option>
                    <option value="mould">Mould Design & Manufacturing</option>
                    <option value="production">Plastic Goods Production</option>
                    <option value="prototyping">Prototyping & Testing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-hymid-teal"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r bg-hymid-teal  text-white rounded-md hover:opacity-90 shadow-md transition-all duration-300"
                >
                  Send Message <Send size={16} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
