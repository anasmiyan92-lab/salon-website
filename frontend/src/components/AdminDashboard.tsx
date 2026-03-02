import { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, Scissors, Lock, Shield } from 'lucide-react';
import { useGetAllBookings } from '../hooks/useQueries';
import type { Booking } from '../backend';

const ADMIN_PIN = '1234';

interface AdminDashboardProps {
  onClose: () => void;
}

function formatTimestamp(ts: bigint): string {
  const ms = Number(ts / 1_000_000n);
  return new Date(ms).toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

export default function AdminDashboard({ onClose }: AdminDashboardProps) {
  const [pin, setPin] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [pinError, setPinError] = useState(false);

  const { data: bookings, isLoading, isError, refetch } = useGetAllBookings();

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      setAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
      setPin('');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-md overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        {/* Header */}
        <div className="max-w-6xl mx-auto flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
              <Shield className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-cream">Admin Dashboard</h1>
              <p className="text-cream/40 text-xs">Imagine Unisex Salon — Bookings</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center hover:bg-gold/20 transition-colors"
            aria-label="Close admin dashboard"
          >
            <X className="w-4 h-4 text-cream" />
          </button>
        </div>

        {!authenticated ? (
          /* PIN Gate */
          <div className="max-w-sm mx-auto mt-20">
            <div className="bg-charcoal/80 border border-gold/20 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-gold" />
              </div>
              <h2 className="font-serif text-xl font-bold text-cream mb-2">Admin Access</h2>
              <p className="text-cream/50 text-sm mb-6">Enter your PIN to view all bookings.</p>
              <form onSubmit={handlePinSubmit} className="space-y-4">
                <input
                  type="password"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="Enter PIN"
                  maxLength={8}
                  className="w-full bg-charcoal border border-gold/20 rounded-lg px-4 py-3 text-cream placeholder-cream/30 text-center text-lg tracking-widest focus:outline-none focus:border-gold/60 transition-colors"
                />
                {pinError && (
                  <p className="text-red-400 text-sm">Incorrect PIN. Please try again.</p>
                )}
                <button
                  type="submit"
                  className="w-full py-3 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold/90 transition-colors text-sm tracking-wide uppercase"
                >
                  Access Dashboard
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Bookings Table */
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-serif text-xl font-bold text-cream">All Bookings</h2>
                <p className="text-cream/40 text-sm mt-0.5">
                  {isLoading ? 'Loading...' : `${bookings?.length ?? 0} appointment${(bookings?.length ?? 0) !== 1 ? 's' : ''} total`}
                </p>
              </div>
              <button
                onClick={() => refetch()}
                className="px-4 py-2 border border-gold/30 text-gold text-sm rounded-full hover:bg-gold/10 transition-colors"
              >
                Refresh
              </button>
            </div>

            {isLoading && (
              <div className="flex items-center justify-center py-20">
                <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
              </div>
            )}

            {isError && (
              <div className="text-center py-20">
                <p className="text-red-400 text-sm mb-4">Failed to load bookings. You may not have admin access.</p>
                <button
                  onClick={() => refetch()}
                  className="px-4 py-2 border border-gold/30 text-gold text-sm rounded-full hover:bg-gold/10 transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}

            {!isLoading && !isError && bookings?.length === 0 && (
              <div className="text-center py-20">
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4">
                  <Scissors className="w-6 h-6 text-gold/50" />
                </div>
                <p className="text-cream/40 text-sm">No bookings yet. They'll appear here once submitted.</p>
              </div>
            )}

            {!isLoading && !isError && bookings && bookings.length > 0 && (
              <>
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto rounded-xl border border-gold/20">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gold/10 border-b border-gold/20">
                        <th className="text-left px-4 py-3 text-gold font-medium text-xs uppercase tracking-wide">#</th>
                        <th className="text-left px-4 py-3 text-gold font-medium text-xs uppercase tracking-wide">Client</th>
                        <th className="text-left px-4 py-3 text-gold font-medium text-xs uppercase tracking-wide">Contact</th>
                        <th className="text-left px-4 py-3 text-gold font-medium text-xs uppercase tracking-wide">Service</th>
                        <th className="text-left px-4 py-3 text-gold font-medium text-xs uppercase tracking-wide">Date & Time</th>
                        <th className="text-left px-4 py-3 text-gold font-medium text-xs uppercase tracking-wide">Submitted</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking: Booking, index: number) => (
                        <tr
                          key={index}
                          className="border-b border-gold/10 hover:bg-gold/5 transition-colors"
                        >
                          <td className="px-4 py-3 text-cream/40 text-xs">{index + 1}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                                <User className="w-3.5 h-3.5 text-gold" />
                              </div>
                              <span className="text-cream font-medium">{booking.clientName}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-1.5 text-cream/70">
                                <Mail className="w-3 h-3 text-gold/60" />
                                <span className="text-xs">{booking.email}</span>
                              </div>
                              <div className="flex items-center gap-1.5 text-cream/70">
                                <Phone className="w-3 h-3 text-gold/60" />
                                <span className="text-xs">{booking.phone}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className="px-2.5 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium">
                              {booking.service}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-1.5 text-cream/70">
                                <Calendar className="w-3 h-3 text-gold/60" />
                                <span className="text-xs">{booking.preferredDate}</span>
                              </div>
                              <div className="flex items-center gap-1.5 text-cream/70">
                                <Clock className="w-3 h-3 text-gold/60" />
                                <span className="text-xs">{booking.preferredTime}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-cream/40 text-xs">
                            {formatTimestamp(booking.timestamp)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4">
                  {bookings.map((booking: Booking, index: number) => (
                    <div
                      key={index}
                      className="bg-charcoal/60 border border-gold/20 rounded-xl p-4 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                            <User className="w-4 h-4 text-gold" />
                          </div>
                          <span className="text-cream font-semibold">{booking.clientName}</span>
                        </div>
                        <span className="px-2.5 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium">
                          {booking.service}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center gap-1.5 text-cream/60">
                          <Mail className="w-3 h-3 text-gold/60" />
                          <span className="truncate">{booking.email}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-cream/60">
                          <Phone className="w-3 h-3 text-gold/60" />
                          <span>{booking.phone}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-cream/60">
                          <Calendar className="w-3 h-3 text-gold/60" />
                          <span>{booking.preferredDate}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-cream/60">
                          <Clock className="w-3 h-3 text-gold/60" />
                          <span>{booking.preferredTime}</span>
                        </div>
                      </div>
                      <p className="text-cream/30 text-xs border-t border-gold/10 pt-2">
                        Submitted: {formatTimestamp(booking.timestamp)}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
