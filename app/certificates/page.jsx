"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { events } from "@/data/events";
import logo from "@/assets/logonobg.png";

const CertificatesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Filter only past events
  const pastEvents = events.filter(event => new Date(event.date) < new Date());

  // Filter events based on search term
  const filteredEvents = pastEvents.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group events by certificate status
  const availableEvents = filteredEvents.filter(event => event.certificateStatus === "available");
  const preparingEvents = filteredEvents.filter(event => event.certificateStatus === "preparing");
  const distributedEvents = filteredEvents.filter(event => event.certificateStatus === "distributed");
  const otherEvents = filteredEvents.filter(event => 
    event.certificateStatus !== "available" && event.certificateStatus !== "preparing" && event.certificateStatus !== "distributed"
  );

  const handleDownloadCertificates = (event) => {
    if (event.certificateStatus === "available" && event.certificateLink) {
      window.open(event.certificateLink, '_blank');
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
          text: "Certificates Unavailable",
          color: "text-gray-400",
          icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="currentColor"/>
              <path d="M7 7l10 10M17 7l-10 10" stroke="black" strokeWidth="2" strokeLinecap="round"/>
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
            <Image src={logo} alt="Logo" width={64} height={64} className="rounded-full mr-4" />
            <h1 className="text-4xl font-bold bg-linear-to-r from-[#fe8d32] to-[#f8be19] text-transparent bg-clip-text">
              Event Certificates
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Download your certificates of completed events. Find your event and access your certificates.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for an event..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#fe8d32] pr-10"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Available Certificates Section */}
        {availableEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Available Certificates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {availableEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1a1a1a] rounded-xl p-6 border border-green-500/30 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10"
                >
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">{event.name}</h3>
                    <span className="text-sm text-gray-400">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 text-sm flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Ready
                      </span>
                    </div>
                    
                    <button
                      onClick={() => handleDownloadCertificates(event)}
                      className="px-4 py-2 bg-linear-to-r from-[#fe8d32] to-[#f8be19] rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Preparing Certificates Section */}
        {preparingEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Certificates Being Prepared
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {preparingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1a1a1a] rounded-xl p-6 border border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10"
                >
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">{event.name}</h3>
                    <span className="text-sm text-gray-400">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400 text-sm flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Distributed Certificates Section */}
        {distributedEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="currentColor"/>
                <rect x="6" y="11" width="12" height="2" fill="black"/>
              </svg>
              Certificates Already Distributed
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {distributedEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1a1a1a] rounded-xl p-6 border border-red-500/30 hover:border-red-400 transition-all duration-300 hover:shadow-lg hover:shadow-red-400/10"
                >
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">{event.name}</h3>
                    <span className="text-sm text-gray-400">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-red-400 text-sm flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" fill="currentColor"/>
                          <rect x="6" y="11" width="12" height="2" fill="black"/>
                        </svg>
                        Already Distributed
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Other Events Section */}
        {otherEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-400 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Other Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {otherEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a] hover:border-[#fe8d32] transition-all duration-300 hover:shadow-lg hover:shadow-[#fe8d32]/10"
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
                    
                    {event.certificateStatus === "available" && (
                      <button
                        onClick={() => handleDownloadCertificates(event)}
                        className="px-4 py-2 bg-linear-to-r from-[#fe8d32] to-[#f8be19] rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* No Events Found */}
        {availableEvents.length === 0 && preparingEvents.length === 0 && distributedEvents.length === 0 && otherEvents.length === 0 && (
          searchTerm ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-400 text-xl mb-4">
              No events found matching &quot;{searchTerm}&quot;
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="px-4 py-2 bg-[#fe8d32] rounded-lg text-white hover:opacity-90 transition-opacity"
            >
              Clear Search
            </button>
          </motion.div>
                 ) : (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="text-center py-16"
           >
             <div className="max-w-md mx-auto">
               <svg className="w-24 h-24 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
               </svg>
               <h3 className="text-xl font-semibold text-white mb-2">No Past Events Found</h3>
               <p className="text-gray-400">
                 Past events will appear here once they are completed.
               </p>
             </div>
           </motion.div>
         )
        )}

                 {/* Instructions */}
         {(availableEvents.length > 0 || preparingEvents.length > 0 || distributedEvents.length > 0 || otherEvents.length > 0) && (
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="mt-12 bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]"
           >
             <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
               <svg className="w-5 h-5 text-[#fe8d32]" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
               </svg>
               How to Download Your Certificate
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
               <div className="flex items-start gap-2">
                 <span className="bg-[#fe8d32] text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                 <p className="mt-1">Find the recently completed event above</p>
               </div>
               <div className="flex items-start gap-2">
                 <span className="bg-[#fe8d32] text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                 <p className="-mt-1">Click the &quot;Download&quot; button to open the folder containing your certificates</p>
               </div>
               <div className="flex items-start gap-2">
                 <span className="bg-[#fe8d32] text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                 <p className="mt-1">Look for your certificate by name and store it</p>
               </div>
             </div>
                           <div className="mt-6 p-2 bg-gray-900/20 border border-gray-600/30 rounded-lg">
                <div className="text-white text-center text-base">
                  <p className="font-bold text-xl mb-1">Status Guide:</p>
                  <ul className="text-left list-disc list-inside space-y-2">
                    <li><span className="font-bold text-green-400">Ready</span>: Certificates for that event are available and you can download them right away.</li>
                    <li><span className="font-bold text-yellow-400">Coming Soon</span>: Certificates are still being prepared and will be available soon.</li>
                    <li><span className="font-bold text-red-400">Already Distributed</span>: Certificates have already been handed out and are no longer available for download.</li>
                    <li><span className="font-bold text-gray-400">Other Events</span>: Certificates are either unavailable or not applicable.</li>
                  </ul>
                  <p className="mt-3">Events are grouped by the status of their certificates for your convenience. This way, you can quickly find and download your certificates or check the status of upcoming ones.</p>
                </div>
              </div>
           </motion.div>
         )}
      </div>
    </div>
  );
};

export default CertificatesPage; 