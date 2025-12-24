"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleLines = useRef([]);
  const paragraphs = useRef([]);
  const stats = useRef([]);
  const imageWrap = useRef(null);
  const tagRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // TEXT SHUTTER (vertical reveal)
      gsap.from(titleLines.current, {
        yPercent: 120,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(paragraphs.current, {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });

      // IMAGE SHUTTER (clip-path)
      gsap.fromTo(
        imageWrap.current,
        {
          clipPath: "inset(0 0 100% 0)",
        },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: imageWrap.current,
            start: "top 70%",
          },
        }
      );

      // STATS SNAP
      gsap.from(stats.current, {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stats.current[0],
          start: "top 80%",
        },
      });

      // FLOATING TAG
      gsap.from(tagRef.current, {
        y: 40,
        rotation: -5,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageWrap.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-20 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <span className="inline-block text-xs tracking-[0.3em] text-red-500 font-semibold uppercase overflow-hidden">
            <span
              ref={(el) => (titleLines.current[0] = el)}
              className="inline-block"
            >
              About Befitzone
            </span>
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="block overflow-hidden">
              <span
                ref={(el) => (titleLines.current[1] = el)}
                className="block"
              >
                Not Just a Gym.
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                ref={(el) => (titleLines.current[2] = el)}
                className="block text-red-500"
              >
                A Lifestyle.
              </span>
            </span>
          </h2>

          <p
            ref={(el) => (paragraphs.current[0] = el)}
            className="text-gray-400 leading-relaxed max-w-xl"
          >
            BEFITZONE is built for people who want more than average results. We
            believe fitness is a daily commitment — not a temporary goal.
          </p>

          <p
            ref={(el) => (paragraphs.current[1] = el)}
            className="text-gray-400 leading-relaxed max-w-xl"
          >
            Whether you are starting your fitness journey or pushing your
            limits, BEFITZONE gives you the environment and energy to transform.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 pt-6">
            {["500+ Members", "10+ Trainers", "24/7 Support"].map((item, i) => (
              <div key={i} ref={(el) => (stats.current[i] = el)}>
                <h3 className="text-3xl font-bold text-red-500">
                  {item.split(" ")[0]}
                </h3>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  {item.split(" ").slice(1).join(" ")}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-red-500 font-bold rounded-md hover:bg-red-600 transition">
            Start Your Journey
          </button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          <div className="absolute inset-0 border-2 border-red-500 translate-x-4 translate-y-4"></div>

          <div ref={imageWrap} className="relative overflow-hidden">
            <img
              src="https://images.jdmagicbox.com/v2/comp/alappuzha/d6/0477px477.x477.250825210515.c7d6/catalogue/be-fit-zone-chunakara-alappuzha-gyms-x08o96by4y.jpg"
              alt="Gym Training"
              className="w-full h-[420px] object-cover grayscale hover:grayscale-0 transition duration-500"
            />
          </div>

          <div
            ref={tagRef}
            className="absolute -bottom-6 left-6 bg-red-500 px-5 py-3 font-bold text-sm uppercase"
          >
            Train Hard • Stay Fit
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
