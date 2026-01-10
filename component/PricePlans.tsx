export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹9,999",
      description: "Perfect for individuals and small projects",
      features: [
        "Static website",
        "Responsive design",
        "Basic SEO setup",
        "Email support",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "₹24,999",
      description: "Best for growing businesses and startups",
      features: [
        "Multi-page website",
        "Custom UI/UX design",
        "Performance optimization",
        "SEO & analytics setup",
        "Priority support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large-scale needs",
      features: [
        "Fully custom architecture",
        "Advanced integrations",
        "Security & scalability",
        "Dedicated support",
        "Ongoing maintenance",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="pt-8 pb-12 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            Pricing Plans Built for Every Stage
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl mx-auto text-base">
            Transparent plans crafted for startups, businesses, and enterprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl border border-black p-8
              transform transition-all duration-300 ease-out
              ${
                plan.highlighted
                  ? "scale-105 shadow-xl hover:scale-110"
                  : "hover:scale-105 hover:shadow-xl"
              }
            `}
            >
              {plan.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-semibold text-gray-900">
                {plan.name}
              </h3>

              <p className="mt-2 text-gray-600">{plan.description}</p>

              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-gray-500"> / project</span>
                )}
              </div>

              <ul className="mt-8 space-y-3 text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-black" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full py-3 rounded-lg font-medium transition ${
                  plan.highlighted
                    ? "bg-black text-white hover:bg-gray-900"
                    : "border text-black border-gray-500 hover:border-black hover:cursor-pointer hover:bg-black hover:text-white"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
