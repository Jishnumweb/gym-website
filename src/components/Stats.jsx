"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 1200, label: "Happy Members" },
  { value: 15, label: "Expert Trainers" },
  { value: 8, label: "Years Experience" },
  { value: 95, label: "Success Rate %" },
];

const StatsSection = () => {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);

  useEffect(() => {
    numberRefs.current.forEach((el, i) => {
      const counter = { val: 0 };

      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.to(counter, {
        val: stats[i].value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = Math.floor(counter.val) + "+";
        },
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-semibold">
            Our Impact
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
            Numbers That <span className="text-red-500">Matter</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            BEFITZONE is built on consistency, discipline, and real results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((item, i) => (
            <div key={i} className="space-y-3">
              <div
                ref={(el) => (numberRefs.current[i] = el)}
                className="text-4xl md:text-5xl font-extrabold text-red-500"
              >
                0+
              </div>
              <p className="text-sm uppercase tracking-wide text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
