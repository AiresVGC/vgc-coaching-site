import React, { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center text-center bg-black/70"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover", // Default for larger screens
          backgroundPosition: "center", // Ensures the image is centered
          backgroundAttachment: "fixed", // Keeps the background fixed while scrolling
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 px-6 py-8 max-w-7xl">
          <Image src="/logo.png" alt="Top Cut Gym Logo" width={100} height={100} className="rounded-full shadow-lg mx-auto" />
          <h1 className="text-5xl font-bold text-yellow-500 leading-tight sm:text-4xl md:text-5xl lg:text-6xl">Top Cut Gym</h1>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto mt-4">
            Train like a champion. Cut through the competition.
          </p>
          <a href="#contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg text-lg mt-6">
            Book Your Session Now
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8">
        {/* About Section */}
        <section id="about" className="pt-16">
          <div className="bg-black/80 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-400">About Me</h2>
            <p className="text-gray-200">
              I'm <strong>AiresVGC</strong>, the head coach of Top Cut Gym, with over 5 years of experience in competitive Pokémon VGC.
              Based in Portugal, I’ve consistently ranked top 100 and top 500 on ladder and Pokémon Showdown, and have earned Championship Points
              in Global Challenges. My mission is to bring pro-level insights to everyone through affordable and customized coaching.
            </p>
          </div>
        </section>

        {/* Why Train at Top Cut Gym Section */}
        <section className="pt-16 pb-8">
          <div className="bg-black/80 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-400">Why Train at Top Cut Gym?</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              <li><strong>Affordable Rates:</strong> Competitive pricing with no compromise on quality.</li>
              <li><strong>Tailored Coaching:</strong> Every session is customized to your level and goals.</li>
              <li><strong>Expertise:</strong> Years of experience and top ladder rankings.</li>
              <li><strong>Driven by Passion:</strong> Helping others succeed in VGC is my mission.</li>
            </ul>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="pt-8 pb-16">
          <div className="bg-black/80 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Coaching Services</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {/* Cards */}
              {[ 
                { title: "Introduction to VGC", duration: "1 hour", price: "€15", desc: "Learn the basics of team building, game mechanics, and ladder strategies." },
                { title: "Team Building & Strategy", duration: "1.5 hours", price: "€25", desc: "Build a team that suits your playstyle and master the current metagame." },
                { title: "Match Analysis & Improvement", duration: "1 hour", price: "€20", desc: "Review past matches to improve decision-making and battle tactics." },
                { title: "Comprehensive Coaching Package", duration: "4 hours", price: "€60", desc: "A complete coaching experience, covering all facets of VGC play." }
              ].map(({ title, duration, price, desc }) => (
                <div key={title} className="border border-yellow-500 p-4 rounded-xl shadow-md bg-black/90">
                  <h3 className="text-xl font-bold text-yellow-300">{title}</h3>
                  <p className="mt-1 text-gray-200">Duration: {duration}</p>
                  <p className="text-gray-200">Price: {price}</p>
                  <p className="mt-2 text-sm text-gray-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Styling for Hero Section */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero {
            background-size: contain !important;  // Ensures the image fits without zooming
            background-position: center center !important;  // Keeps the image centered
            background-attachment: scroll !important;  // Prevents fixed background on mobile, which can cause issues
          }
        }
      `}</style>
    </div>
  );
}
