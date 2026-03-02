const pricingCategories = [
  {
    category: 'Haircuts',
    items: [
      { name: "Women's Cut & Style" },
      { name: "Men's Cut & Style" },
      { name: "Children's Cut (under 12)" },
      { name: 'Bang Trim' },
    ],
  },
  {
    category: 'Color & Highlights',
    items: [
      { name: 'Single Process Color' },
      { name: 'Partial Highlights' },
      { name: 'Full Highlights' },
      { name: 'Balayage / Ombré' },
      { name: 'Color Correction' },
    ],
  },
  {
    category: 'Styling',
    items: [
      { name: 'Blowout' },
      { name: 'Updo / Special Occasion' },
      { name: 'Bridal Style' },
      { name: 'Curling / Straightening' },
    ],
  },
  {
    category: 'Treatments',
    items: [
      { name: 'Keratin Smoothing' },
      { name: 'Deep Conditioning' },
      { name: 'Scalp Treatment' },
      { name: 'Olaplex Treatment' },
    ],
  },
  {
    category: 'Nails',
    items: [
      { name: 'Classic Manicure' },
      { name: 'Gel Manicure' },
      { name: 'Classic Pedicure' },
      { name: 'Gel Pedicure' },
      { name: 'Nail Art' },
    ],
  },
  {
    category: 'Spa & Wellness',
    items: [
      { name: 'Express Facial (30 min)' },
      { name: 'Signature Facial (60 min)' },
      { name: 'Swedish Massage (60 min)' },
      { name: 'Hot Stone Massage' },
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        backgroundImage: `url('/assets/generated/section-bg.dim_1200x600.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/88" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-gold text-xs tracking-[0.35em] uppercase mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-cream text-4xl md:text-5xl font-medium mb-5">
            Service Menu
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-12 bg-gold/50" />
          </div>
          <p className="font-sans text-cream/60 text-base max-w-xl mx-auto leading-relaxed">
            Please visit us or get in touch for personalized pricing on any of our services.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-sm p-7 hover:border-gold/30 transition-colors duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-cream/10">
                <div className="w-1 h-6 bg-gold rounded-full" />
                <h3 className="font-serif text-cream text-xl font-medium">
                  {cat.category}
                </h3>
              </div>

              {/* Items */}
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
                    <span className="font-sans text-cream/70 text-sm leading-snug">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center font-sans text-cream/40 text-xs mt-10 tracking-wide">
          * Please contact us for a personalized consultation and pricing details.
        </p>
      </div>
    </section>
  );
}
