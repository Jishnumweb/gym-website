"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef([]);
  const cardsRef = useRef([]);

  const testimonials = [
    {
      name: "Rahul Menon",
      role: "Weight Loss Transformation",
      message:
        "Joining BEFITZONE changed my mindset completely. I lost weight, gained confidence, and built discipline.",
    },
    {
      name: "Anjali Krishnan",
      role: "Fitness Training Member",
      message:
        "The trainers here genuinely care about results. Every workout feels purposeful and motivating.",
    },
    {
      name: "Arjun Raj",
      role: "Strength Training Member",
      message:
        "This is not just a gym. BEFITZONE pushed me beyond my limits and made fitness a lifestyle.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // -------- INITIAL STATES --------
      gsap.set(headingRef.current, {
        y: 60,
        skewY: 5,
        opacity: 0,
      });

      gsap.set(cardsRef.current, {
        y: 80,
        scale: 0.95,
        opacity: 0,
      });

      // -------- TIMELINE --------
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

        // TESTIMONIAL CARDS
        .to(
          cardsRef.current,
          {
            y: 0,
            scale: 1,
            opacity: 1,
            stagger: 0.2,
            duration: 0.6,
          },
          "-=0.3"
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
            Testimonials
          </span>

          <h2
            ref={(el) => (headingRef.current[1] = el)}
            className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Real People. <span className="text-red-500">Real Results.</span>
          </h2>

          <p
            ref={(el) => (headingRef.current[2] = el)}
            className="mt-4 text-gray-400"
          >
            Hear directly from our members who transformed their bodies and
            mindset with BEFITZONE.
          </p>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="relative border border-white/10 rounded-xl p-8 bg-black hover:border-red-500 transition"
            >
              {/* QUOTE ICON */}
              <div className="absolute -top-4 left-6 text-red-500 text-6xl font-extrabold leading-none">
                “
              </div>

              <p className="text-gray-300 leading-relaxed mb-8 pt-6">
                {item.message}
              </p>

              <div className="h-[1px] w-12 bg-red-500 mb-4"></div>

              <h4 className="font-bold">{item.name}</h4>
              <p className="text-sm text-gray-400">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
