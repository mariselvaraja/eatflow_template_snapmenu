import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Calendar, Clock, Users, UtensilsCrossed, MapPin, Phone } from 'lucide-react';
import siteContent from '../data/siteContent.json';

export function Reservation() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2');
  const [occasion, setOccasion] = useState('');

  const occasions = [
    "Birthday",
    "Anniversary",
    "Business Dinner",
    "Date Night",
    "Family Gathering",
    "Other"
  ];

  const availableTimes = [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
            alt="Reservation background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <Navigation />

        <div className="relative z-10 container mx-auto px-6 h-[calc(50vh-120px)] flex items-center justify-center text-center">
          <div>
            <div className="flex justify-center mb-6">
              <UtensilsCrossed className="w-16 h-16 text-green-400" />
            </div>
            <h1 className="text-7xl font-bold text-white mb-8">
              {siteContent.reservation.header.title}
            </h1>
            <p className="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {siteContent.reservation.header.description}
            </p>
          </div>
        </div>
      </div>

      {/* Reservation Form Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Date Selection */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-5 h-5 mr-2 text-green-600" />
                        <span>{siteContent.reservation.form.labels.date}</span>
                      </div>
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      <div className="flex items-center mb-2">
                        <Clock className="w-5 h-5 mr-2 text-green-600" />
                        <span>{siteContent.reservation.form.labels.time}</span>
                      </div>
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select a time</option>
                      {availableTimes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      <div className="flex items-center mb-2">
                        <Users className="w-5 h-5 mr-2 text-green-600" />
                        <span>{siteContent.reservation.form.labels.guests}</span>
                      </div>
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                      <option value="more">More than 10 guests</option>
                    </select>
                  </div>

                  {/* Occasion */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-5 h-5 mr-2 text-green-600" />
                        <span>Special Occasion</span>
                      </div>
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select occasion (optional)</option>
                      {occasions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">{siteContent.reservation.form.labels.name}</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder={siteContent.reservation.form.placeholders.name}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">{siteContent.reservation.form.labels.email}</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder={siteContent.reservation.form.placeholders.email}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">{siteContent.reservation.form.labels.phone}</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder={siteContent.reservation.form.placeholders.phone}
                      />
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">{siteContent.reservation.form.labels.specialRequests}</label>
                  <textarea
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    rows={4}
                    placeholder={siteContent.reservation.form.placeholders.specialRequests}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-4 rounded-lg hover:bg-green-600 transition text-lg font-medium"
                >
                  Confirm Reservation
                </button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                <p className="text-gray-600">
                  {siteContent.reservation.info.hours.weekdays.label}: {siteContent.reservation.info.hours.weekdays.time}<br />
                  {siteContent.reservation.info.hours.weekends.label}: {siteContent.reservation.info.hours.weekends.time}<br />
                  {siteContent.reservation.info.hours.sunday.label}: {siteContent.reservation.info.hours.sunday.time}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-600">
                  {siteContent.reservation.info.location.street}<br />
                  {siteContent.reservation.info.location.city}, {siteContent.reservation.info.location.state} {siteContent.reservation.info.location.zip}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <p className="text-gray-600">
                  Phone: {siteContent.reservation.info.contact.phone}<br />
                  <span className="text-sm">{siteContent.reservation.info.note}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
