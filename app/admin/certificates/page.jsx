"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ParticlesBackground } from "../../components/ParticlesBackground";
import { events } from "@/data/events";
import logo from "@/assets/logonobg.png";

const CertificateManager = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [certificateLink, setCertificateLink] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Filter only past events
  const pastEvents = events.filter(event => new Date(event.date) < new Date());

  const handleAddCertificate = (event) => {
    setSelectedEvent(event);
    setCertificateLink(event.certificateLink || "");
    setCertificateStatus(event.certificateStatus || "preparing");
    setShowForm(true);
  };

  const [certificateStatus, setCertificateStatus] = useState("preparing");

  const handleSaveCertificate = () => {
    if (selectedEvent && certificateLink.trim() && certificateStatus) {
      // In a real application, you would save this to a database
      // For now, we'll just show an alert with the information
      alert(`Certificate status for "${selectedEvent.name}" has been updated to:\nStatus: ${certificateStatus}\nLink: ${certificateLink}\n\nNote: In a real application, this would be saved to a database.`);
      setShowForm(false);
      setSelectedEvent(null);
      setCertificateLink("");
      setCertificateStatus("preparing");
    }
  };

  const getCertificateStatusDisplay = (event) => {
    switch (event.certificateStatus) {
      case "available":
        return {
          text: "Certificates Available",
          color: "text-green-400",
          icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )
        };
      case "preparing":
        return {
          text: "Certificates Being Prepared",
          color: "text-yellow-400",
          icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          )
        };
      case "distributed":
        return {
          text: "Certificates Already Distributed",
          color: "text-red-400",
          icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="currentColor"/>
              <rect x="6" y="11" width="12" height="2" fill="black"/>
            </svg>
          )
        };
      default:
        return {
          text: "No Certificate Status",
          color: "text-gray-400",
          icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          )
        };
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative">
      <ParticlesBackground />
      <div className="container mx-auto px-4 py-16 pt-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <img src={logo.src} alt="Logo" className="w-16 h-16 rounded-full mr-4" />
            <h1 className="text-4xl font-bold bg-linear-to-r from-[#fe8d32] to-[#f8be19] text-transparent bg-clip-text">
              Certificate Management
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Manage certificate links for completed events. Add Google Drive links so participants can download their certificates.
          </p>
        </motion.div>

        {/* Certificate Form Modal */}
        {showForm && selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#1a1a1a] rounded-xl p-6 w-full max-w-md"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Add Certificate Link
              </h3>
              <p className="text-gray-400 mb-4">
                Event: <span className="text-white font-semibold">{selectedEvent.name}</span>
              </p>
              
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Certificate Status
                </label>
                <select
                  value={certificateStatus}
                  onChange={(e) => setCertificateStatus(e.target.value)}
                  className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#fe8d32]"
                >
                  <option value="preparing">🟡 Being Prepared</option>
                  <option value="available">🟢 Available for Download</option>
                  <option value="distributed">🔴 Already Distributed</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Google Drive Link (only needed for "Available" status)
                </label>
                <input
                  type="url"
                  value={certificateLink}
                  onChange={(e) => setCertificateLink(e.target.value)}
                  placeholder="https://drive.google.com/..."
                  className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#fe8d32]"
                />
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={handleSaveCertificate}
                  className="flex-1 px-4 py-2 bg-linear-to-r from-[#fe8d32] to-[#f8be19] rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Save Link
                </button>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setSelectedEvent(null);
                    setCertificateLink("");
                  }}
                  className="px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Events List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a] hover:border-[#fe8d32] transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-xl font-bold text-white">{event.name}</h3>
                <span className="text-sm text-gray-400">{event.date}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {(() => {
                    const status = getCertificateStatusDisplay(event);
                    return (
                      <span className={`${status.color} text-sm flex items-center gap-1`}>
                        {status.icon}
                        {status.text}
                      </span>
                    );
                  })()}
                </div>
                
                <button
                  onClick={() => handleAddCertificate(event)}
                  className="px-4 py-2 bg-linear-to-r from-[#fe8d32] to-[#f8be19] rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Update Status
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {pastEvents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">
              No past events found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateManager; 