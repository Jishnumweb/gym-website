import React from "react";

const FinalCTASection = () => {
  return (
    <section className="relative bg-black text-white py-28 px-4 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.25),transparent_60%)]"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Small Tag */}
        <span className="inline-block mb-4 text-xs uppercase tracking-[0.35em] text-red-500 font-semibold">
          Ready to Transform?
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Your Fitness Journey
          <br />
          <span className="text-red-500">Starts Today</span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Stop waiting for the perfect time. Take the first step toward a
          stronger body, sharper mind, and confident lifestyle with BEFITZONE.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-red-500 font-bold rounded-md hover:bg-red-600 transition">
            Join BEFITZONE Now
          </button>

          <button className="px-8 py-4 border border-white/20 rounded-md font-semibold hover:border-red-500 hover:text-red-500 transition">
            Book Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
