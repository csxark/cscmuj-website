"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { problemStatements } from "@/data/problemStatements";
import logo from "@/assets/logonobg.png";

const ProblemStatementModal = ({ problem, onClose }) => {
  if (!problem) return null;

  const getDifficultyColor = (difficulty) => {
    switch ((difficulty || "").toLowerCase()) {
      case "easy":
        return "text-green-400 bg-green-400/20";
      case "medium":
        return "text-yellow-400 bg-yellow-400/20";
      case "hard":
        return "text-red-400 bg-red-400/20";
      default:
        return "text-gray-400 bg-gray-400/20";
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      "IoT & Security": "bg-blue-500/20 text-blue-400",
      "AI/ML & IoT": "bg-cyan-500/20 text-cyan-400",
      Blockchain: "bg-purple-500/20 text-purple-400",
      "AI/ML": "bg-green-500/20 text-green-400",
      Software: "bg-teal-500/20 text-teal-400",
      Hardware: "bg-orange-500/20 text-orange-400",
      "Enterprise Software": "bg-indigo-500/20 text-indigo-400",
      "Green Tech": "bg-emerald-500/20 text-emerald-400",
      "AR/VR": "bg-pink-500/20 text-pink-400",
      Cybersecurity: "bg-red-500/20 text-red-400",
    };
    return colors[category] || "bg-gray-500/20 text-gray-400";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-2 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#1a1a1a]/80 rounded-xl w-full max-w-4xl overflow-hidden my-2 sm:my-4 shadow-2xl relative max-h-screen overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4 z-30">
          <Image src={logo} alt="Logo" width={50} height={50} className="rounded-full shadow-lg" />
        </div>

        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {problem.category && (
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(problem.category)}`}>
                  {problem.category}
                </span>
              )}
              {problem.difficulty && (
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(problem.difficulty)}`}>
                  {problem.difficulty}
                </span>
              )}
              {problem.duration && (
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#fe8d32]/20 text-[#fe8d32]">
                  {problem.duration}
                </span>
              )}
              {problem.prize && (
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-400">
                  Prize: {problem.prize}
                </span>
              )}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{problem.title}</h2>
            {problem.description && (
              <p className="text-gray-300 text-lg leading-relaxed">{problem.description}</p>
            )}
          </div>

          {problem.goal ? (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#fe8d32] mb-3">Goal</h3>
              <p className="text-gray-300">{problem.goal}</p>
            </div>
          ) : null}

          {problem.possibleFeatures ? (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#fe8d32] mb-3">
                {problem.id === 3 ? "Key Deliverables" : "Possible Features"}
              </h3>
              <ul className="space-y-2">
                {problem.possibleFeatures.map((feature, index) => {
                  // Check if this is a subheading (File Management System, Inventory Management, etc.)
                  const isSubheading = feature === "File Management System" || feature === "Inventory Management";
                  
                  if (isSubheading) {
                    return (
                      <li key={index} className="mt-4 mb-2">
                        <h4 className="text-lg font-semibold text-white">{feature}</h4>
                      </li>
                    );
                  }
                  
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#fe8d32] mt-1">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}

          {problem.requirements ? (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#fe8d32] mb-3">Requirements</h3>
              <ul className="space-y-2">
                {problem.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#fe8d32] mt-1">•</span>
                    <span className="text-gray-300">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {problem.note ? (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#fe8d32] mb-3">Note</h3>
              <p className="text-gray-300">{problem.note}</p>
            </div>
          ) : null}

          {/* Technologies section intentionally removed */}

          <div className="flex flex-col sm:flex-row gap-3">
            {problem.contactEmail && (
              <button
                onClick={() => window.open(`mailto:${problem.contactEmail}?subject=Question about ${problem.title}`, "_blank")}
                className="flex-1 px-6 py-3 bg-linear-to-r from-[#fe8d32] to-[#f8be19] rounded-lg text-white font-semibold hover:opacity-90 transition-opacity text-center"
              >
                Contact Organizers
              </button>
            )}
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProblemCard = ({ problem, index, onClick }) => {
  const getDifficultyColor = (difficulty) => {
    switch ((difficulty || "").toLowerCase()) {
      case "easy":
        return "text-green-400 bg-green-400/20 border-green-400/30";
      case "medium":
        return "text-yellow-400 bg-yellow-400/20 border-yellow-400/30";
      case "hard":
        return "text-red-400 bg-red-400/20 border-red-400/30";
      default:
        return "text-gray-400 bg-gray-400/20 border-gray-400/30";
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      "IoT & Security": "bg-blue-500/20 text-blue-400 border-blue-400/30",
      "AI/ML & IoT": "bg-cyan-500/20 text-cyan-400 border-cyan-400/30",
      Blockchain: "bg-purple-500/20 text-purple-400 border-purple-400/30",
      "AI/ML": "bg-green-500/20 text-green-400 border-green-400/30",
      Software: "bg-teal-500/20 text-teal-400 border-teal-400/30",
      Hardware: "bg-orange-500/20 text-orange-400 border-orange-400/30",
      "Enterprise Software": "bg-indigo-500/20 text-indigo-400 border-indigo-400/30",
      "Green Tech": "bg-emerald-500/20 text-emerald-400 border-emerald-400/30",
      "AR/VR": "bg-pink-500/20 text-pink-400 border-pink-400/30",
      Cybersecurity: "bg-red-500/20 text-red-400 border-red-400/30",
    };
    return colors[category] || "bg-gray-500/20 text-gray-400 border-gray-400/30";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-8 cursor-pointer group hover:from-[#232323] hover:to-[#1a1a1a] transition-all duration-500 border border-gray-800/50 hover:border-[#fe8d32]/50 hover:shadow-2xl hover:shadow-[#fe8d32]/20 backdrop-blur-sm"
      onClick={onClick}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fe8d32]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-wrap gap-3 mb-6">
          {problem.category && (
            <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getCategoryColor(problem.category)} backdrop-blur-sm`}>
              {problem.category}
            </span>
          )}
          {problem.difficulty && (
            <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getDifficultyColor(problem.difficulty)} backdrop-blur-sm`}>
              {problem.difficulty}
            </span>
          )}
          {problem.duration && (
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[#fe8d32]/20 to-[#f8be19]/20 text-[#fe8d32] border border-[#fe8d32]/30 backdrop-blur-sm">
              {problem.duration}
            </span>
          )}
        </div>

        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#fe8d32] group-hover:to-[#f8be19] group-hover:bg-clip-text transition-all duration-500 leading-tight">
          {problem.title}
        </h3>

        {problem.description && (
          <p className="text-gray-300 text-base mb-6 line-clamp-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {problem.description}
          </p>
        )}

        {(problem.prize || problem.status) ? (
          <div className="flex justify-between items-center pt-4 border-t border-gray-800/50 group-hover:border-[#fe8d32]/20 transition-colors duration-300">
            {problem.prize && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-[#fe8d32] to-[#f8be19] rounded-full animate-pulse"></div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#fe8d32] to-[#f8be19] text-transparent bg-clip-text">
                  {problem.prize}
                </span>
              </div>
            )}
            {problem.status && (
              <span className="text-sm text-green-400 bg-green-400/20 px-3 py-1 rounded-full border border-green-400/30 backdrop-blur-sm">
                {problem.status}
              </span>
            )}
          </div>
        ) : null}

        {/* Click indicator */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 bg-gradient-to-r from-[#fe8d32] to-[#f8be19] rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProblemStatements = () => {
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProblem = () => {
    setCurrentIndex((prev) => (prev + 1) % problemStatements.length);
  };

  const prevProblem = () => {
    setCurrentIndex((prev) => (prev - 1 + problemStatements.length) % problemStatements.length);
  };

  const goToProblem = (index) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        prevProblem();
      } else if (e.key === 'ArrowRight') {
        nextProblem();
      } else if (e.key === 'Escape') {
        setSelectedProblem(null);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative">
      <ParticlesBackground />
      <div className="container mx-auto px-4 py-16 pt-24 relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-[#fe8d32] to-[#f8be19] text-transparent bg-clip-text">Problem Statements</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore challenging problem statements from our hackathons. Pick a problem that interests you and start building innovative solutions.
          </p>
        </motion.div>

        {problemStatements.length > 0 ? (
          <div className="max-w-5xl mx-auto">
            {/* Navigation Controls */}
            <div className="flex justify-between items-center mb-12">
              <motion.button
                onClick={prevProblem}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] border border-gray-700/50 rounded-xl text-gray-300 hover:from-[#232323] hover:to-[#1a1a1a] hover:border-[#fe8d32]/50 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                disabled={problemStatements.length <= 1}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-[#fe8d32]/20 to-[#f8be19]/20 rounded-full flex items-center justify-center group-hover:from-[#fe8d32]/30 group-hover:to-[#f8be19]/30 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
                <span className="font-semibold">Previous</span>
              </motion.button>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] border border-gray-700/50 rounded-xl px-6 py-3 backdrop-blur-sm">
                  <span className="text-gray-300 text-lg font-semibold">
                    {currentIndex + 1} of {problemStatements.length}
                  </span>
                  <div className="text-xs text-gray-500 mt-1"></div>
                </div>
              </div>
              
              <motion.button
                onClick={nextProblem}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] border border-gray-700/50 rounded-xl text-gray-300 hover:from-[#232323] hover:to-[#1a1a1a] hover:border-[#fe8d32]/50 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                disabled={problemStatements.length <= 1}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-semibold">Next</span>
                <div className="w-8 h-8 bg-gradient-to-r from-[#fe8d32]/20 to-[#f8be19]/20 rounded-full flex items-center justify-center group-hover:from-[#fe8d32]/30 group-hover:to-[#f8be19]/30 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            </div>

            {/* Current Problem Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <ProblemCard 
                problem={problemStatements[currentIndex]} 
                index={currentIndex} 
                onClick={() => setSelectedProblem(problemStatements[currentIndex])} 
              />
            </motion.div>

            {/* Enhanced Pagination Dots */}
            {problemStatements.length > 1 && (
              <div className="flex justify-center gap-3 mb-8">
                {problemStatements.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToProblem(index)}
                    className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-gradient-to-r from-[#fe8d32] to-[#f8be19]' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {index === currentIndex && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#fe8d32] to-[#f8be19]"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    <div className={`absolute inset-0 rounded-full ${
                      index === currentIndex 
                        ? 'bg-gradient-to-r from-[#fe8d32] to-[#f8be19] animate-pulse' 
                        : ''
                    }`} />
                  </motion.button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">No problem statements available.</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProblem && (
          <ProblemStatementModal problem={selectedProblem} onClose={() => setSelectedProblem(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProblemStatements;





