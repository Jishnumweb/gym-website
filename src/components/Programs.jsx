"use client";

import Image from "next/image";

export default function ProgramsPage() {
  const programs = [
    {
      title: "Strength Training",
      desc: "Build muscle, gain power, and sculpt a strong physique.",
      image: "/images/1.webp",
      tag: "Muscle",
    },
    {
      title: "Weight Loss",
      desc: "High-intensity fat-burning programs for fast results.",
      image: "/images/2.webp",
      tag: "Fat Burn",
    },
    {
      title: "Cardio Fitness",
      desc: "Boost endurance, stamina, and heart health.",
      image: "/images/3.webp",
      tag: "Endurance",
    },
    {
      title: "Personal Training",
      desc: "One-on-one coaching designed for your goals.",
      image: "/images/4.webp",
      tag: "1-on-1",
    },
    {
      title: "Functional Training",
      desc: "Train real-life strength, balance, and mobility.",
      image: "/images/5.webp",
      tag: "Mobility",
    },
    {
      title: "Beginner Programs",
      desc: "Safe & guided workouts to start your fitness journey.",
      image: "/images/6.webp",
      tag: "Starter",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs tracking-[0.35em] uppercase text-red-500 font-semibold">
            Our Programs
          </span>
          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight">
            Train With <span className="text-red-500">Intensity</span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg">
            World-class training programs designed to transform your body and
            mindset.
          </p>
        </div>

        {/* PROGRAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d]"
            >
              {/* IMAGE */}
              <div className="relative h-[320px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i < 2}
                  className="object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <span className="inline-block mb-2 text-xs font-semibold uppercase tracking-wide text-red-500">
                  {item.tag}
                </span>

                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* LINE INDICATOR */}
                <div className="h-[2px] w-10 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
