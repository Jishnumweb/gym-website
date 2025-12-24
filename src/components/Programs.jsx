"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProgramsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const programs = [
    {
      title: "Strength Training",
      desc: "Build muscle, increase power, and push beyond your limits.",
      image:
        "https://i.pinimg.com/1200x/17/95/fc/1795fcd4500681fee233c929031cb55b.jpg",
      tag: "Muscle",
    },
    {
      title: "Weight Loss",
      desc: "High-intensity workouts designed to burn fat effectively.",
      image:
        "https://i.pinimg.com/736x/7b/94/95/7b94953807060007f001c6a44da4336e.jpg",
      tag: "Fat Burn",
    },
    {
      title: "Cardio Fitness",
      desc: "Boost stamina, endurance, and heart health.",
      image:
        "https://i.pinimg.com/1200x/88/fd/47/88fd47d3342bb07c07d20dc3947f3234.jpg",
      tag: "Endurance",
    },
    {
      title: "Personal Training",
      desc: "One-on-one coaching customized for your goals.",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
      tag: "1-on-1",
    },
    {
      title: "Functional Training",
      desc: "Train your body for real-life strength and mobility.",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
      tag: "Mobility",
    },
    {
      title: "Beginner Programs",
      desc: "Safe, guided workouts for those just starting out.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
      tag: "Starter",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // INITIAL STATE (important for performance)
      gsap.set(cardsRef.current, {
        y: 60,
        opacity: 0,
        willChange: "transform, opacity",
      });

      // SINGLE ScrollTrigger (key fix)
      gsap.to(cardsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true, // 🔥 prevents re-trigger & lag
        },
      });

      // IMAGE SHUTTER (GPU SAFE)
      cardsRef.current.forEach((card) => {
        const shutter = card.querySelector(".image-shutter");

        gsap.fromTo(
          shutter,
          { scaleY: 1 },
          {
            scaleY: 0,
            transformOrigin: "top",
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-20 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-semibold">
            Our Programs
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
            Train With <span className="text-red-500">Purpose</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Choose a program that matches your goals and transform your body.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative overflow-hidden rounded-xl border border-white/10"
            >
              {/* IMAGE WRAP */}
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* SHUTTER LAYER */}
                <div className="image-shutter absolute inset-0 bg-black z-10"></div>
              </div>

              {/* CONTENT */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-black/70">
                <span className="mb-3 text-xs font-bold uppercase text-red-500">
                  {item.tag}
                </span>
                <h3 className="text-xl font-extrabold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
                <div className="mt-4 h-[2px] w-0 bg-red-500 group-hover:w-full transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
