"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TrainersSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef([]);
  const cardsRef = useRef([]);

  const trainers = [
    {
      name: "Arjun Raj",
      role: "Strength Coach",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
    },
    {
      name: "Rahul Menon",
      role: "Personal Trainer",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
    },
    {
      name: "Neha Sharma",
      role: "Fitness & Cardio Expert",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    },
    {
      name: "Vishnu Krishnan",
      role: "Functional Trainer",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ---------------- INITIAL STATES ----------------
      gsap.set(headingRef.current, {
        y: 60,
        skewY: 5,
        opacity: 0,
      });

      gsap.set(cardsRef.current, {
        y: 80,
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        opacity: 1,
      });

      // ---------------- TIMELINE ----------------
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        defaults: { ease: "power4.out" },
      });

      // HEADER SHUTTER
      tl.to(headingRef.current, {
        y: 0,
        skewY: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
      })

        // CARDS SHUTTER REVEAL
        .to(
          cardsRef.current,
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            y: 0,
            stagger: 0.15,
            duration: 1,
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-24 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-16 max-w-2xl">
          <span
            ref={(el) => (headingRef.current[0] = el)}
            className="text-xs uppercase tracking-[0.3em] text-red-500 font-semibold block"
          >
            Our Trainers
          </span>

          <h2
            ref={(el) => (headingRef.current[1] = el)}
            className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Meet the <span className="text-red-500">Experts</span>
          </h2>

          <p
            ref={(el) => (headingRef.current[2] = el)}
            className="mt-4 text-gray-400"
          >
            Our certified trainers are here to guide, motivate, and push you
            towards your best version.
          </p>
        </div>

        {/* TRAINERS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {trainers.map((trainer, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative overflow-hidden rounded-xl border border-white/10"
            >
              {/* IMAGE */}
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-[380px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-extrabold mb-1">{trainer.name}</h3>
                <p className="text-sm text-gray-300">{trainer.role}</p>

                {/* ACCENT LINE */}
                <div className="mt-4 h-[2px] w-0 bg-red-500 group-hover:w-full transition-all duration-300"></div>
              </div>

              {/* CORNER LABEL */}
              <div className="absolute top-4 left-4 bg-red-500 text-xs font-bold px-3 py-1 uppercase tracking-wide">
                Coach
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
