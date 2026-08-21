import React from 'react';
import WorkItem from './work_item';
import ChordGallery from './chord_gallery';
import chordFinder from '../images/chord-finder/youtube.jpg';
import shop from '../images/shopping.jpg';
import recycle from '../images/recycle-placeholder.svg';

const professionalProjects = [
  {
    title: 'AI Smart Fridge Ecosystem',
    type: 'Professional Project',
    stack: 'Flutter • Dart • GetX • SQLite • REST APIs • WebSocket • Firebase • CodeIgniter • MySQL',
    desc: 'Owned and delivered software features across the smart fridge mobile and Android kiosk ecosystem, working across Flutter, backend APIs, database changes, integrations, debugging, and production support.',
    highlights: [
      'Remote door access and approval workflows, AI refill, product image/dataset upload, and transaction records.',
      'Real-time machine communication, local persistence, payment-related flows, and production troubleshooting.',
      'Dual-mode scanner support using HID keyboard input and serial communication.'
    ],
    proprietary: true,
  },
  {
    title: 'Custom Vending Machine Applications',
    type: 'Professional Project',
    stack: 'Flutter • Dart • REST APIs • Figma • E-Receipt Integration',
    desc: 'Developed application-side features for custom vending projects with a focus on mobile UI, transaction workflows, and service integration. My scope was software development rather than vending hardware.',
    highlights: [
      'Translated approved Figma designs into responsive Flutter interfaces.',
      'Integrated REST services and e-receipt APIs into existing application flows.',
      'Supported application debugging, integration, and delivery across project requirements.'
    ],
    proprietary: true,
  },
];

const personalProjects = [
  {
    title: 'AI Chord Finder',
    type: 'Personal Project',
    backgroundImage: chordFinder,
    stack: 'Flutter • Dart • Python • FFmpeg • yt-dlp • Audio / Chord Analysis',
    desc: 'A Flutter chord-practice prototype that connects to a local Python analysis service. A submitted YouTube URL is processed into audio and analyzed to produce a timed chord sequence for practice.',
    highlights: [
      'YouTube-to-analysis workflow through a Flutter-to-Python API integration.',
      'Microphone-based chord listening with confidence feedback.',
      'Song library and guided practice modes for timed chord changes.'
    ],
    workLink: 'https://github.com/Sicx6/AI-Chord-Finder',
    demoLink: process.env.PUBLIC_URL + '/demos/ai-chord-finder-demo.mp4',
  },
  {
    title: 'Advanced E-Commerce Application',
    type: 'Personal Project',
    backgroundImage: shop,
    stack: 'Flutter • Node.js • MongoDB • Cloudinary',
    desc: 'Mobile shopping application with product browsing, cart and checkout flows, backend integration, media storage, and an admin inventory workflow.',
    workLink: 'https://github.com/Sicx6/Flutter_Shopping_Apps_Shoppers',
  },
  {
    title: 'Re-Cycle Mobile App',
    type: 'Personal Project',
    backgroundImage: recycle,
    stack: 'Flutter • Local Storage • Geolocation',
    desc: 'Green-tech mobile application for tracking recycling milestones and helping users discover nearby recycling or drop-off locations.',
  },
];

const ProjectGroup = ({ title, eyebrow, subtitle, projects }) => (
  <section className="mt-16">
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0ef6cc]">{eyebrow}</p>
    <h3 className="mt-2 text-3xl font-bold text-[#f4fefd]">{title}</h3>
    <p className="mt-3 max-w-[760px] leading-7 text-[#8fa6a7]">{subtitle}</p>
    <div className="mt-7 grid gap-6 md:grid-cols-2">
      {projects.map((project) => <WorkItem key={project.title} {...project} />)}
    </div>
  </section>
);

const Work = () => (
  <div name="works" className="w-full bg-[#1b2223] py-24">
    <div className="mx-auto max-w-[1100px] px-6 md:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0ef6cc]">Selected Work</p>
      <h2 className="mt-2 text-4xl font-bold text-[#f4fefd] md:text-5xl">Projects & Case Studies</h2>
      <p className="mt-5 max-w-[800px] leading-7 text-[#b3c5c5]">
        A mix of production software work and personal projects. Professional projects are intentionally
        presented without screenshots or source code to respect company confidentiality.
      </p>

      <ProjectGroup
        eyebrow="Production Experience"
        title="Professional Projects"
        subtitle="High-level case studies focused on my responsibilities, technical scope, and delivery. No proprietary project media is displayed."
        projects={professionalProjects}
      />

      <ProjectGroup
        eyebrow="Public / Demonstrable Work"
        title="Personal Projects"
        subtitle="Projects where I can share implementation details, source code, screenshots, and demos."
        projects={personalProjects}
      />

      <ChordGallery />
    </div>
  </div>
);

export default Work;
