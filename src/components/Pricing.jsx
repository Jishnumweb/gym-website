import React from "react";

const MembershipSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹999",
      duration: "per month",
      features: [
        "Gym Access",
        "Cardio Equipment",
        "Locker Facility",
        "Free Consultation",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "₹1,999",
      duration: "per month",
      features: [
        "All Basic Features",
        "Personal Trainer Support",
        "Customized Workout Plan",
        "Diet Guidance",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "₹3,499",
      duration: "per month",
      features: [
        "All Pro Features",
        "1-on-1 Personal Training",
        "Body Composition Tracking",
        "Priority Support",
      ],
      popular: false,
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-semibold">
            Membership Plans
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            Choose Your <span className="text-red-500">Fitness Plan</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Flexible pricing designed for beginners, regulars, and serious
            athletes.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-xl border p-8 transition ${
                plan.popular
                  ? "border-red-500 scale-105"
                  : "border-white/10 hover:border-red-500"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 px-4 py-1 text-xs font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-extrabold mb-2">{plan.name}</h3>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-red-500">
                  {plan.price}
                </span>
                <span className="text-sm text-gray-400 ml-2">
                  {plan.duration}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 font-bold rounded-md transition ${
                  plan.popular
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-white/10 hover:bg-red-500"
                }`}
              >
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
