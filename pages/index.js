import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div
      className="min-h-screen text-white bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-black/70 px-4">
        <Image src="/logo.png" alt="TC Gym Logo" width={140} height={140} className="rounded-full mb-4" />
        <h1 className="text-5xl font-bold text-yellow-500">Top Cut Gym</h1>
        <p className="text-xl text-gray-100 max-w-2xl mt-4">
          Train like a champion. Cut through the competition.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full text-lg transition"
        >
          Book Your Session Now
        </a>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-6xl mx-auto space-y-24 px-4 py-12 bg-black/70 rounded-t-3xl">

        {/* About Me */}
        <section id="about">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-400">About Me</h2>
          <p className="text-gray-200 leading-relaxed">
            I'm <strong>AiresVGC</strong>, the head coach of Top Cut Gym, with over 5 years of experience in competitive Pokémon VGC.
            Based in Portugal, I’ve consistently ranked top 100 and top 500 on ladder and Pokémon Showdown, and have earned Championship Points
            in Global Challenges. My mission is to bring pro-level insights to everyone through affordable and customized coaching.
          </p>
        </section>

        {/* Services */}
        <section id="services">
          <h2 className="text-3xl font-semibold mb-8 text-yellow-400 text-center">Coaching Services</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Introduction to VGC",
                duration: "1 hour",
                price: "€15",
                desc: "Learn the basics of team building, game mechanics, and ladder strategies.",
              },
              {
                title: "Team Building & Strategy",
                duration: "1.5 hours",
                price: "€25",
                desc: "Build a team that suits your playstyle and master the current metagame.",
              },
              {
                title: "Match Analysis & Improvement",
                duration: "1 hour",
                price: "€20",
                desc: "Review past matches to improve decision-making and battle tactics.",
              },
              {
                title: "Comprehensive Coaching Package",
                duration: "4 hours",
                price: "€60",
                desc: "A complete coaching experience, covering all facets of VGC play.",
              },
            ].map(({ title, duration, price, desc }) => (
              <div key={title} className="border border-yellow-500 p-6 rounded-2xl bg-black/80 shadow-md">
                <h3 className="text-xl font-bold text-yellow-300">{title}</h3>
                <p className="text-gray-200 mt-2">Duration: {duration}</p>
                <p className="text-gray-200">Price: {price}</p>
                <p className="text-sm text-gray-400 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-400">Student Feedback Coming Soon</h2>
          <p className="text-gray-200">
            This is a new service — testimonials will be shared here once my students begin climbing the ladder!
          </p>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-400">Contact & Booking</h2>
          <p className="text-gray-200 mb-2">Email: <a href="mailto:dig_air@hotmail.com" className="text-yellow-400 underline">dig_air@hotmail.com</a></p>
          <p className="text-gray-200 mb-4">Discord: aires.17</p>
          <p className="text-gray-300 mb-6">To book a session, use the form below or reach out via email/Discord.</p>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdOxUj04gzne5sRd6cM-zwjbsiTqLcUhGHSLasjujMKyye1Ig/viewform?embedded=true"
              width="100%"
              height="1500"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
            >Loading…</iframe>
          </div>
        </section>

        {/* Why Top Cut Gym */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-yellow-400">Why Train at Top Cut Gym?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
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

  );
}
