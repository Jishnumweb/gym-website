"use client";

import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

const GymNavbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const overlayRef = useRef(null);

  // ---------------- SCROLL EFFECT ----------------
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ---------------- NAVBAR ENTER ANIMATION ----------------
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" }
    );
  }, []);

  // ---------------- MOBILE MENU ANIMATION ----------------
  useEffect(() => {
    if (open) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        visibility: "visible",
        duration: 0.3,
      });

      gsap.fromTo(
        mobileMenuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.5, ease: "power4.out" }
      );
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        visibility: "hidden",
        duration: 0.3,
      });

      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power4.in",
      });
    }
  }, [open]);

  return (
    <>
      {/* HEADER */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between h-16">
            {/* LOGO */}
            <div className="flex items-center gap-2">
              <img src="/images/logo.webp" alt="Befitzone" className="h-10" />
            </div>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide">
              {["Home", "Programs", "Trainers", "Pricing", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="relative text-gray-300 hover:text-white transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item}
                  </a>
                )
              )}

              {/* CTA */}
              <a
                href="#"
                className="ml-4 px-5 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition"
              >
                Join Now
              </a>
            </nav>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        ref={overlayRef}
        onClick={() => setOpen(false)}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm opacity-0 invisible z-40"
      />

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-[75%] max-w-sm bg-black text-white z-50 translate-x-full"
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
          <img src="/images/logo.webp" alt="Befitzone" className="h-10" />
          <button onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-8 gap-6 text-lg font-semibold">
          {["Home", "Programs", "Trainers", "Pricing", "Contact"].map(
            (item) => (
              <a
                key={item}
                href="#"
                onClick={() => setOpen(false)}
                className="border-b border-white/10 pb-2 hover:text-red-500 transition"
              >
                {item}
              </a>
            )
          )}

          <a
            href="#"
            className="mt-6 text-center py-3 bg-red-500 rounded-md font-bold hover:bg-red-600 transition"
          >
            Join Now
          </a>
        </nav>
      </div>
    </>
  );
};

export default GymNavbar;
