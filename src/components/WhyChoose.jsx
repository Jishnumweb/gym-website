"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef([]);
  const reasonsRef = useRef([]);
  const ctaRef = useRef(null);

  const reasons = [
    {
      title: "Result-Oriented Training",
      desc: "Every workout is designed to deliver visible and measurable results.",
    },
    {
      title: "Certified Expert Trainers",
      desc: "Professional coaches who guide, motivate, and correct every move.",
    },
    {
      title: "Modern Equipment",
      desc: "High-quality machines and free weights for safe, effective training.",
    },
    {
      title: "Motivating Environment",
      desc: "Train in a space built for focus, discipline, and progress.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ---------------- INITIAL STATES ----------------
      gsap.set(imageRef.current, {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        scale: 1.15,
        opacity: 1,
      });

      gsap.set(badgeRef.current, {
        y: -30,
        opacity: 0,
      });

      gsap.set(headingRef.current, {
        y: 80,
        skewY: 6,
        opacity: 0,
      });

      gsap.set(reasonsRef.current, {
        x: -50,
        opacity: 0,
        rotateY: 15,
      });

      gsap.set(ctaRef.current, {
        scale: 0.85,
        opacity: 0,
      });

      // ---------------- MASTER TIMELINE ----------------
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
        defaults: { ease: "power4.out" },
      });

      // IMAGE SHUTTER REVEAL
      tl.to(imageRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        scale: 1,
        duration: 1.3,
      })

        // BADGE DROP
        .to(
          badgeRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
          },
          "-=0.7"
        )

        // HEADING SHUTTER TEXT
        .to(
          headingRef.current,
          {
            y: 0,
            skewY: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.7,
          },
          "-=0.4"
        )

        // REASONS SLIDE-IN
        .to(
          reasonsRef.current,
          {
            x: 0,
            rotateY: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.5,
          },
          "-=0.2"
        )

        // CTA PUNCH
        .to(
          ctaRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(1.8)",
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-24 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="absolute inset-0 border-2 border-red-500 translate-x-4 translate-y-4"></div>

          <img
            ref={imageRef}
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f"
            alt="Gym Training"
            className="relative w-full h-[480px] object-cover grayscale hover:grayscale-0 transition duration-500"
          />

          <div
            ref={badgeRef}
            className="absolute top-6 left-6 bg-red-500 px-4 py-2 text-xs font-bold tracking-widest uppercase"
          >
            Why Befitzone
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-8">
          <div>
            <span
              ref={(el) => (headingRef.current[0] = el)}
              className="block text-xs uppercase tracking-[0.3em] text-red-500 font-semibold"
            >
              Our Advantage
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
              <span
                ref={(el) => (headingRef.current[1] = el)}
                className="block"
              >
                Built for
              </span>
              <span
                ref={(el) => (headingRef.current[2] = el)}
                className="block text-red-500"
              >
                Real Transformation
              </span>
            </h2>

            <p
              ref={(el) => (headingRef.current[3] = el)}
              className="mt-4 text-gray-400 max-w-xl"
            >
              BEFITZONE is more than equipment and workouts. It’s a system
              designed to help you stay consistent and confident.
            </p>
          </div>

          {/* REASONS */}
          <div className="space-y-6">
            {reasons.map((item, i) => (
              <div
                key={i}
                ref={(el) => (reasonsRef.current[i] = el)}
                className="flex gap-4 items-start"
              >
                <div className="text-red-500 text-lg font-extrabold">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            ref={ctaRef}
            className="mt-6 inline-flex items-center gap-2 px-7 py-3 bg-red-500 font-bold rounded-md hover:bg-red-600 transition"
          >
            Join Befitzone Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
