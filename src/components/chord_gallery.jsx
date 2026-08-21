import React from 'react';
import youtube from '../images/chord-finder/youtube.jpg';
import songs from '../images/chord-finder/songs.jpg';
import listen from '../images/chord-finder/listen.jpg';
import practice from '../images/chord-finder/practice.jpg';

const items = [
  { image: youtube, label: 'YouTube Analysis', text: 'Create a song project from a YouTube URL and send it to the analysis service.' },
  { image: songs, label: 'Song Library', text: 'Browse saved practice songs and view key information.' },
  { image: listen, label: 'Chord Listening', text: 'Detect a played chord through the microphone with confidence feedback.' },
  { image: practice, label: 'Practice Mode', text: 'Follow timed chord changes using bundled practice arrangements.' },
];

const ChordGallery = () => (
  <section className="mt-12 rounded-2xl border border-[#314142] bg-[#1d2627] p-5 md:p-7">
    <div className="flex flex-wrap items-end justify-between gap-5">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0ef6cc]">Mobile Demo</p>
        <h4 className="mt-2 text-2xl font-bold text-white">AI Chord Finder — App Preview</h4>
        <p className="mt-2 text-sm leading-6 text-[#8fa6a7]">Key screens from the current Flutter prototype.</p>
      </div>
      <a href={process.env.PUBLIC_URL + '/demos/ai-chord-finder-demo.mp4'} target="_blank" rel="noreferrer" className="rounded-lg border border-[#0ef6cc] px-4 py-2.5 text-sm font-bold text-[#0ef6cc] transition hover:bg-[#0ef6cc]/10">Watch Full Demo</a>
    </div>
    <div className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {items.map((item) => (
        <figure key={item.label} className="overflow-hidden rounded-xl border border-[#334647] bg-[#20292a]">
          <div className="overflow-hidden bg-[#151d1e]">
            <img src={item.image} alt={`${item.label} screen from AI Chord Finder`} className="aspect-[9/19] w-full object-cover object-top" />
          </div>
          <figcaption className="p-4">
            <p className="text-sm font-bold text-white">{item.label}</p>
            <p className="mt-2 text-xs leading-5 text-[#9fb2b3]">{item.text}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default ChordGallery;
