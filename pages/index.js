import React from "react";

export default function HomePage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-10">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Affordable & Personalized Pokémon VGC Coaching</h1>
        <p className="text-lg">Unlock your potential in competitive Pokémon with expert guidance tailored to your needs.</p>
        <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg text-lg">Book Your Session Now</a>
      </section>

      {/* About Me */}
      <section id="about">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          I'm <strong>AiresVGC</strong>, a dedicated Pokémon VGC player from Portugal with over 5 years of experience.
          While regional tournaments are scarce in my area, I've consistently achieved top 100 and top 500 rankings
          on the ladder and Pokémon Showdown. I've also earned Championship Points through Global Challenges. My coaching
          focuses on providing affordable, personalized training to help you excel in the competitive scene.
        </p>
      </section>

      {/* Coaching Services */}
      <section id="services">
        <h2 className="text-2xl font-semibold mb-4">Coaching Services</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">Introduction to VGC</h3>
            <p className="mt-1">Duration: 1 hour</p>
            <p>Price: €15</p>
            <p className="mt-2 text-sm">Ideal for beginners. Learn the basics of team building, game mechanics, and ladder strategies.</p>
          </div>
          <div className="border p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">Team Building & Strategy</h3>
            <p className="mt-1">Duration: 1.5 hours</p>
            <p>Price: €25</p>
            <p className="mt-2 text-sm">Build a team that suits your playstyle and understand the current metagame.</p>
          </div>
          <div className="border p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">Match Analysis & Improvement</h3>
            <p className="mt-1">Duration: 1 hour</p>
            <p>Price: €20</p>
            <p className="mt-2 text-sm">Review your past matches to improve your decision-making in battle.</p>
          </div>
          <div className="border p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">Comprehensive Coaching Package</h3>
            <p className="mt-1">Duration: 4 hours (spread over sessions)</p>
            <p>Price: €60</p>
            <p className="mt-2 text-sm">A complete package covering all aspects of competitive play, tailored to your goals.</p>
          </div>
        </div>
      </section>

<section id="testimonials">
  <h2 className="text-2xl font-semibold mb-4">Student Feedback Coming Soon</h2>
  <p className="text-gray-700">
    This is a new coaching service, so I don't have testimonials yet — but once players start training with me,
    I’ll be excited to share their feedback here!
  </p>
</section>

  
      {/* Contact */}
      <section id="contact">
        <h2 className="text-2xl font-semibold mb-2">Contact & Booking</h2>
        <p>Email: <a href="mailto:dig_air@hotmail.com" className="text-blue-600 underline">dig_air@hotmail.com</a></p>
        <p>Discord: aires.17</p>
        <p className="mt-2">To schedule a session, reach out via email or Discord. A booking form is coming soon!</p>
      </section>

      {/* Why Choose Me */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Why Choose Me?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Affordable Rates:</strong> Competitive pricing to make coaching accessible.</li>
          <li><strong>Personalized Approach:</strong> Sessions tailored to your unique needs.</li>
          <li><strong>Proven Experience:</strong> High rankings and Championship Points earned.</li>
          <li><strong>Passionate Coaching:</strong> Dedicated to helping you achieve your goals.</li>
        </ul>
      </section>
    </div>
  );
}
