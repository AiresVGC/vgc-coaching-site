import React, { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the hamburger menu on small screens
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen text-white bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/background.png')" }}>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-black/70 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Top Cut Gym Logo" width={40} height={40} className="rounded-full" />
            <span className="text-xl font-bold text-yellow-400">Top Cut Gym</span>
          </div>
          
          {/* Hamburger Menu for Mobile */}
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Menu items (hidden on mobile, visible on desktop) */}
          <div className={`lg:flex space-x-6 text-sm font-medium ${isMenuOpen ? 'block' : 'hidden'}`}>
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#services" className="hover:text-yellow-400">Services</a>
            <a href="#testimonials" className="hover:text-yellow-400">Testimonials</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-32 max-w-7xl mx-auto space-y-16 bg-black/70 p-6 rounded-xl">
        {/* Hero Header */}
        <header className="flex flex-col items-center space-y-4 text-center">
          <Image src="/logo.png" alt="Top Cut Gym Logo" width={100} height={100} className="rounded-full shadow-lg" />
          <h1 className="text-4xl font-bold text-yellow-500">Top Cut Gym</h1>
          <p className="text-lg text-gray-100 max-w-xl">
            Train like a champion. Cut through the competition.
          </p>
          <a href="#contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg text-lg">
            Book Your Session Now
          </a>
        </header>

        {/* About Me */}
        <section id="about" className="pt-24">
          <h2 className="text-2xl font-semibold mb-2 text-yellow-400">About Me</h2>
          <p className="text-gray-200">
            I'm <strong>AiresVGC</strong>, the head coach of Top Cut Gym, with over 5 years of experience in competitive Pokémon VGC. Based in Portugal, I’ve consistently ranked top 100 and top 500 on ladder and Pokémon Showdown, and have earned Championship Points in Global Challenges. My mission is to bring pro-level insights to everyone through affordable and customized coaching.
          </p>
        </section>

        {/* Coaching Services */}
        <section id="services" className="pt-24">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Coaching Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="border border-yellow-500 p-4 rounded-xl shadow-md bg-black/80">
              <h3 className="text-xl font-bold text-yellow-300">Introduction to VGC</h3>
              <p className="mt-1 text-gray-200">Duration: 1 hour</p>
              <p className="text-gray-200">Price: €15</p>
              <p className="mt-2 text-sm text-gray-400">Learn the basics of team building, game mechanics, and ladder strategies.</p>
            </div>
            <div className="border border-yellow-500 p-4 rounded-xl shadow-md bg-black/80">
              <h3 className="text-xl font-bold text-yellow-300">Team Building & Strategy</h3>
              <p className="mt-1 text-gray-200">Duration: 1.5 hours</p>
              <p className="text-gray-200">Price: €25</p>
              <p className="mt-2 text-sm text-gray-400">Build a team that suits your playstyle and master the current metagame.</p>
            </div>
            <div className="border border-yellow-500 p-4 rounded-xl shadow-md bg-black/80">
              <h3 className="text-xl font-bold text-yellow-300">Match Analysis & Improvement</h3>
              <p className="mt-1 text-gray-200">Duration: 1 hour</p>
              <p className="text-gray-200">Price: €20</p>
              <p className="mt-2 text-sm text-gray-400">Review past matches to improve decision-making and battle tactics.</p>
            </div>
            <div className="border border-yellow-500 p-4 rounded-xl shadow-md bg-black/80">
              <h3 className="text-xl font-bold text-yellow-300">Comprehensive Coaching Package</h3>
              <p className="mt-1 text-gray-200">Duration: 4 hours</p>
              <p className="text-gray-200">Price: €60</p>
              <p className="mt-2 text-sm text-gray-400">A complete coaching experience, covering all facets of VGC play.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="pt-24">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Student Feedback Coming Soon</h2>
          <p className="text-gray-200">
            This is a new service — testimonials will be shared here once my students begin climbing the ladder!
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="pt-24">
          <h2 className="text-2xl font-semibold mb-2 text-yellow-400">Contact & Booking</h2>
          <p className="text-gray-200">Email: <a href="mailto:dig_air@hotmail.com" className="text-yellow-400 underline">dig_air@hotmail.com</a></p>
          <p className="text-gray-200">Discord: aires.17</p>
          <p className="mt-2 text-gray-300">To book a session, use the form below or reach out via email/Discord.</p>
          <div className="mt-6 bg-white rounded-xl overflow-hidden">
            {/* Restored Google Form iframe */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdOxUj04gzne5sRd6cM-zwjbsiTqLcUhGHSLasjujMKyye1Ig/viewform?embedded=true"
              width="100%"
              height="1200"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
        </section>

        {/* Why Choose Top Cut Gym */}
        <section className="pt-24">
          <h2 className="text-2xl font-semibold mb-2 text-yellow-400">Why Train at Top Cut Gym?</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            <li><strong>Affordable Rates:</strong> Competitive pricing with no compromise on quality.</li>
            <li><strong>Tailored Coaching:</strong> Every session is customized to your level and goals.</li>
            <li><strong>Expertise:</strong> Years of experience and top ladder rankings.</li>
            <li><strong>Driven by Passion:</strong> Helping others succeed in VGC is my mission.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
