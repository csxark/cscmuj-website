import errorImage from "../assets/events/error.jpg";
import battleImage from "../assets/events/battle.jpg";
import aihumanImage from "../assets/events/aihuman.jpg";
import buildfestImage from "../assets/events/build.jpg";
import bountyImage from "../assets/events/bounty.jpg";
import aliceImage from "../assets/events/alice.jpg";
import captureflagImage from "../assets/events/captureflag.jpg";
import builddeploy2Image from "../assets/events/builddep2.png"
import hacknearnImage from "../assets/events/hackearn2.png";
import playtopiaImage from "../assets/events/playtopia.png";
import modularImage from "../assets/events/Mnexus.png";
import awarenessImage from '../assets/events/cac.png';
import rewindImage from '../assets/events/rewindnrecode.png';

export const events = [
  {
    id: 1,
    name: "Rewind & Recode",
    image: rewindImage,
    description: "Get ready for 24 hours of non-stop coding and creativity! 🚀 Teaming up with IIIT-B for an exciting Hackathon where brilliant minds come together to solve real-world challenges, build innovative solutions, and push the limits of technology. It’s more than just a competition; it’s a celebration of ideas, teamwork, and unstoppable energy!",
    date: "October 10, 2025",
    location: "Manipal University, AB1",
    registrationLink: "https://forms.gle/J1kyzVu5mi8AUc6EA",
    certificateStatus: "preparing",                                                                                   // "available", "preparing", or "distributed"
    certificateLink: "https://drive.google.com/drive/folders/1PYcBG_cwbpi4fChKLmibeVrISZLlzU38?usp=share_link",          // Google Drive link (only needed when status is "available")
    tags: ["D3-Tech Fest", "code for change", "innovation unleashed"],
    organizer: "Cyber Space Club",
  },
  {
    id: 2,
    name: "Cyber Awareness Camp",
    image: awarenessImage,
    description:
      "An awareness camp aimed at educating school children about safe and responsible use of the internet 🌐. As part of this initiative, we will be visiting different schools 🏫 to introduce students to the basics of cybersecurity 🔐, including online safety, protection of personal information, prevention of cyberbullying, and the importance of strong digital habits. This will empower young learners with essential knowledge and practices that help them navigate the digital world securely and confidently, fostering a culture of cyber safety from an early age 🌱",
    date: "October 7, 2025",
    location: "Jaipur",
    registrationLink: "https://forms.gle/nkCMbajshYxp8ZDb9",
    certificateStatus: "",                                                                                   // "available", "preparing", or "distributed"
    certificateLink: "https://drive.google.com/drive/folders/1PYcBG_cwbpi4fChKLmibeVrISZLlzU38?usp=share_link",          // Google Drive link (only needed when status is "available")
    tags: ["digital wellness", "online safety", "responsible internet surfing"],
    organizer: "Cyber Space Club",
  },
  {
    id: 3,
    name: "Modular Nexus",
    image: modularImage,
    description:
      "The ultimate IoT gamified challenge where learning meets competition! Kick off with a fun IoT crash course, then dive into a live quiz with scoreboard & anchoring to earn points 💰. Use your points to buy topics & lifelines, build creative block diagrams, and finally pitch your big idea on stage. With multiple chances to win 🏆 and recognition at every stage, A pure knowledge + energy + masti, and yes, no prior IoT expertise needed! ",
    date: "August 24, 2025",
    location: "Manipal University, AB1",
    registrationLink: "https://forms.gle/nkCMbajshYxp8ZDb9",
    certificateStatus: "distributed",                                                                                   // "available", "preparing", or "distributed"
    certificateLink: "https://drive.google.com/drive/folders/1PYcBG_cwbpi4fChKLmibeVrISZLlzU38?usp=share_link",          // Google Drive link (only needed when status is "available")
    tags: ["IoT challenge", "score and shine", "gamified learning"],
    organizer: "Cyber Space Club",
  },
  {
    id: 4,
    name: "PlayTopia",
    image: playtopiaImage,
    description:
      "A high-energy, multi-round showdown where teamwork, strategy, and fun collide. From bluffing mind games to blind mazes, each round brings a new twist to challenge skill, trust, and creativity. With teams battling across unique games, only the sharpest and most synchronized will rise to the top and claim ultimate glory!",
    date: "August 23, 2025",
    location: "Manipal University, AB1",
    registrationLink: "https://forms.gle/nkCMbajshYxp8ZDb9",
    certificateStatus: "",                                                                                   // "available", "preparing", or "distributed"
    certificateLink: "",          // Google Drive link (only needed when status is "available")
    tags: ["teamwork wins", "battle of brains", "outsmart outplay"],
    organizer: "Cyber Space Club",
  },
  {
    id: 5,
    name: "Hack n' Earn 2.0",
    image: hacknearnImage,
    description:
      "Open to coders of all experience levels, this event offers a chance to take on fun and intellectually stimulating coding challenges, connect with a like-minded developer community, and sharpen your problem-solving skills. Whether you're looking to learn, collaborate, or simply enjoy the thrill of coding; the perfect place to start of something impactful and energizing.",
    date: "July 14, 2025",
    location: "Hacker Earth",
    registrationLink: "https://forms.gle/vk7VD91A5xf9jSYp7",
    certificateStatus: "distributed",                                                                                   // "available", "preparing", or "distributed"
    certificateLink: "https://drive.google.com/drive/folders/1_bfrdrTvUyLIiEu5jy1RHRtYjxGO28Nd?usp=sharing",          // Google Drive link (only needed when status is "available")
    tags: ["skillshot", "precision", "bitwise", "stacktrace"],
    organizer: "Cyber Space Club",
  },
  {
    id: 6,
    name: "Build & Deploy 2.0",
    image: builddeploy2Image,
    description:
      "A web-dev bootcamp perfect for beginners who want to actually build something cool! If you’ve been meaning to level up your portfolio, start real projects, or just explore how websites are made, this is for you! Explore the evolution of AI and how it’s transforming the way websites are built from design to deployment. With hands-on sessions, experienced mentors, and real-time project building, you'll get to create something truly your own.",
    date: "June 21, 2025",
    location: "Microsoft Teams",
    registrationLink: "https://forms.gle/1DWt2ES3UYns3z6b9",
    certificateStatus: "distributed",                                                                                   // "available", "preparing", or "distributed"
    certificateLink: "",                                                                                             // Google Drive link (only needed when status is "available")
    tags: ["mentorship", "hands on", "beginner-friendly"],
    organizer: "Cyber Space Club",
  },
  {
    id: 7,
    name: "Capture the Flag",
    image: captureflagImage,
    description:
      "Unleash your inner hacker in a pulse pounding Capture the Flag event. Crack codes, exploit systems, and race to uncover hidden flags in this cybersecurity face-off. Whether you're a one man army or a power-packed team, it's time to prove your skills.",
    date: "April 14, 2025",
    location: "Manipal University, AB2 1st Floor",
    registrationLink: "https://tinyurl.com/Novus-CTF",
    certificateStatus: "",                                                                                   // "available", "preparing", or "distributed"
    certificateLink: "",                                                                                               // Google Drive link (only needed when status is "available")
    tags: ["cyber security", "logic warfare", "informative"],
    organizer: "Cyber Space Club",
  },
  {
    id: 8,
    name: "Alice in Borderland",
    image: aliceImage,
    description:
      "Enter a high-stakes arena and partake in a mind-bending game of survival, where wit, coordination, and tactics are your only way out. With every round, the difficulty rises, and only the sharpest teams will collect the cards that edge them closer to victory. Face the unexpected, outsmart your rivals, and brace yourself for the final face-off.",
    date: "April 13, 2025",
    location: "Manipal University, AB1 Café",
    registrationLink: "https://tinyurl.com/Novus-AliceinBorderLands",
    certificateStatus: "distributed",                                                                                   // "available", "preparing", or "distributed"
    certificateLink: "",                                                                                               // Google Drive link (only needed when status is "available")
    tags: ["high stakes", "survival games", "adreneline fueled"],
    organizer: "Cyber Space Club",
  },
  {
    id: 9,
    name: "Bounty Bonanza 2.0",
    image: bountyImage,
    description:
      "Descend into the world of the Upside Down in this spline-chilling Stranger Things based treasure hunt. Solve cryptic clues, tackle rapid action mini-games, and navigate eerie challenges that test your reflexes, logic and teamwork. Push your limits and claim the bounty!",
    date: "April 12, 2025",
    location: "Manipal University, Old Mess",
    registrationLink: "https://tinyurl.com/Novus-BountyBonanza",
    certificateStatus: "distributed",                                                                                   // "available", "preparing", or "distributed"
    certificateLink: "",                                                                                               // Google Drive link (only needed when status is "available")
    tags: ["mystery driven", "fast paced", "brain teasing", "thrilling"],
    organizer: "Cyber Space Club",
  },
  {
    id: 10,
    name: "Build Fest",
    image: buildfestImage,
    description:
      "Charge into a high-voltage overnight hackathon where ideas ignite and innovation takes flight. Build powerful prototypes, code through the night, and take on real-world challenges with fellow tech enthusiasts. Whether you're a full-stack pro or just getting started, this is your moment to shine, collaborate, and prove what you’re made of.",
    date: "April 11, 2025",
    location: "Manipal University, Sharda Pai Auditorium",
    registrationLink: "https://tinyurl.com/Novus-BuildFest",
    certificateStatus: "distributed",                                                                                   // "available", "preparing", or "distributed"
    certificateLink: "",                                                                                               // Google Drive link (only needed when status is "available")
    tags: ["creative", "technological", "real world impact"],
    organizer: "Cyber Space Club",
  },
  {
    id: 11,
    name: "Battle Blitz 2.0",
    image: battleImage,
    description:
      "Get ready for an action-packed day of interactive challenges and social games! Join us for exciting activities, team competitions, and memorable experiences with fellow tech enthusiasts.",
    date: "February 21, 2025",
    location: "Manipal University, AB3, 1st Floor",
    registrationLink: "https://forms.gle/KLW59s17Wm68uuuZ7",
    certificateStatus: "",                                                                                   // "available", "preparing", or "distributed"
    certificateLink: "",                                                                                               // Google Drive link (only needed when status is "available")
    tags: ["social games", "activities", "challenges", "fun"],
    organizer: "Cyber Space Club",
  },
  {
    id: 12,
    name: "Error Odyssey 2.0",
    image: errorImage,
    description:
      "Join this C programming competition to test your debugging skills! Through three exciting rounds, showcase your ability to find and fix code errors. Perfect for both beginners and experienced programmers.",
    date: "February 18, 2025",
    location: "Manipal University, AB1, 3rd Floor",
    registrationLink: "https://forms.gle/DgX3gtmogmJwwtFY8",
    certificateStatus: "distributed",                                                                                   // "available", "preparing", or "distributed"
    certificateLink: "",                                                                                               // Google Drive link (only needed when status is "available")
    tags: ["competition", "coding", "debugging", "C"],
    organizer: "Cyber Space Club",
  },
  {
    id: 13,
    name: "AI vs Human Debate",
    image: aihumanImage,
    description:
      "Step into a high-energy debate on whether Artificial Intelligence or Human Intelligence will shape our future in healthcare, education, cybersecurity, and more! Team up and take a stand to prove which side has the edge. 💥👥",
    date: "November 15, 2024",
    location: "Manipal University, AB3, 1st Floor",
    registrationLink: "https://tinyurl.com/3uv5fyaj",
    certificateStatus: "distributed",                                                                                   // "available", "preparing", or "distributed"
    certificateLink: "",                                                                                               // Google Drive link (only needed when status is "available")
    tags: ["future", "intelligence", "imagination", "machine-vs-mind"],
    organizer: "Cyber Space Club",
  },
];