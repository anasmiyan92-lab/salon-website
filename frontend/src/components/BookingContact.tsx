import { useState } from 'react';
import { Phone, MapPin, Clock, CheckCircle, MessageCircle } from 'lucide-react';
import { SiWhatsapp, SiInstagram } from 'react-icons/si';
import AnimatedSection from './AnimatedSection';
import { useSubmitBooking } from '../hooks/useQueries';

const PHONE = '+91 96904 17361';
const PHONE_TEL = 'tel:+919690417361';
const WHATSAPP_BASE = 'https://wa.me/919690417361';
const INSTAGRAM = 'https://www.instagram.com/imagine_unisexsalon';
const ADDRESS = 'Radhe Complex, Kashipur Bypass Rd, Rudrapur, Uttarakhand, India';
const HOURS = 'Mon–Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 6:00 PM';

const SERVICES = [
  'Haircut',
  'Beard Styling',
  'Hair Styling',
  'Facial',
  'Hair Coloring',
  'Keratin Treatment',
  'Makeup',
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}

export default function BookingContact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const submitBooking = useSubmitBooking();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitBooking.mutateAsync({
        clientName: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        preferredDate: form.date,
        preferredTime: form.time,
      });
      setSubmittedData({ ...form });
      setSubmitted(true);
    } catch (err) {
      console.error('Booking failed:', err);
    }
  };

  const buildWhatsAppLink = (data: FormData) => {
    const msg = `Hi, I'd like to book an appointment at Imagine Unisex Salon.\n\nService: ${data.service}\nDate: ${data.date}\nTime: ${data.time}\nName: ${data.name}\nPhone: ${data.phone}`;
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;
  };

  const resetForm = () => {
    setForm({ name: '', email: '', phone: '', service: '', date: '', time: '' });
    setSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">Reserve Your Spot</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-cream mt-2 mb-4">
              Book an Appointment
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gold/60" />
              <div className="w-2 h-2 rounded-full bg-gold" />
              <div className="h-px w-12 bg-gold/60" />
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <AnimatedSection direction="left">
            <div className="bg-charcoal/60 border border-gold/20 rounded-2xl p-6 lg:p-8">
              {submitted && submittedData ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-cream mb-2">Booking Confirmed!</h3>
                  <p className="text-cream/60 mb-6 text-sm">
                    Thank you, <span className="text-gold font-medium">{submittedData.name}</span>! We've received your appointment request for{' '}
                    <span className="text-gold font-medium">{submittedData.service}</span> on{' '}
                    <span className="text-gold font-medium">{submittedData.date}</span> at{' '}
                    <span className="text-gold font-medium">{submittedData.time}</span>.
                  </p>

                  {/* WhatsApp CTA */}
                  <a
                    href={buildWhatsAppLink(submittedData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full transition-colors duration-300 shadow-lg mb-4 w-full justify-center"
                  >
                    <SiWhatsapp className="w-5 h-5" />
                    Confirm via WhatsApp
                  </a>
                  <p className="text-cream/40 text-xs mb-6">
                    Tap above to send your booking details directly on WhatsApp for instant confirmation.
                  </p>

                  <button
                    onClick={resetForm}
                    className="text-gold hover:text-gold/80 text-sm underline underline-offset-4 transition-colors"
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-cream mb-6">Your Details</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-cream/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full bg-charcoal border border-gold/20 rounded-lg px-4 py-2.5 text-cream placeholder-cream/30 text-sm focus:outline-none focus:border-gold/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-cream/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full bg-charcoal border border-gold/20 rounded-lg px-4 py-2.5 text-cream placeholder-cream/30 text-sm focus:outline-none focus:border-gold/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-cream/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-charcoal border border-gold/20 rounded-lg px-4 py-2.5 text-cream placeholder-cream/30 text-sm focus:outline-none focus:border-gold/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-cream/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                        Service *
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-charcoal border border-gold/20 rounded-lg px-4 py-2.5 text-cream text-sm focus:outline-none focus:border-gold/60 transition-colors"
                      >
                        <option value="" className="bg-charcoal">Select a service</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s} className="bg-charcoal">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-cream/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-charcoal border border-gold/20 rounded-lg px-4 py-2.5 text-cream text-sm focus:outline-none focus:border-gold/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-cream/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                        Preferred Time *
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        required
                        className="w-full bg-charcoal border border-gold/20 rounded-lg px-4 py-2.5 text-cream text-sm focus:outline-none focus:border-gold/60 transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitBooking.isPending}
                    className="w-full py-3.5 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold/90 transition-all duration-300 shadow-gold text-sm tracking-wide uppercase disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                  >
                    {submitBooking.isPending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
                        Booking...
                      </>
                    ) : (
                      'Book Appointment'
                    )}
                  </button>

                  {submitBooking.isError && (
                    <p className="text-red-400 text-sm text-center mt-2">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection direction="right">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-cream mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <a
                    href={PHONE_TEL}
                    className="flex items-start gap-4 p-4 rounded-xl border border-gold/20 hover:border-gold/40 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Phone className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-cream/50 text-xs uppercase tracking-wide mb-0.5">Phone / Call</p>
                      <p className="text-cream font-medium">{PHONE}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-xl border border-gold/20">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-cream/50 text-xs uppercase tracking-wide mb-0.5">Address</p>
                      <p className="text-cream text-sm leading-relaxed">{ADDRESS}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl border border-gold/20">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-cream/50 text-xs uppercase tracking-wide mb-0.5">Hours</p>
                      <p className="text-cream text-sm">{HOURS}</p>
                    </div>
                  </div>

                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl border border-gold/20 hover:border-pink-500/40 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/20 transition-colors">
                      <SiInstagram className="w-4 h-4 text-pink-400" />
                    </div>
                    <div>
                      <p className="text-cream/50 text-xs uppercase tracking-wide mb-0.5">Instagram</p>
                      <p className="text-cream text-sm">@imagine_unisexsalon</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Quick WhatsApp */}
              <div className="p-5 rounded-xl bg-green-900/20 border border-green-600/30">
                <div className="flex items-center gap-3 mb-3">
                  <SiWhatsapp className="w-5 h-5 text-green-400" />
                  <h4 className="text-cream font-semibold">Quick WhatsApp Booking</h4>
                </div>
                <p className="text-cream/60 text-sm mb-4">
                  Prefer to book via WhatsApp? Message us directly for instant confirmation.
                </p>
                <a
                  href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi! I'd like to book an appointment at Imagine Unisex Salon.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
