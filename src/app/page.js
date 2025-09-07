"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const grimoireList = [
    "Grimoire Asta",
    "Grimoire Yami",
    "Grimoire Noelle",
    "Grimoire Jack the Ripper",
    "Grimoire Shekke",
    "Grimoire Ringard",
    "Grimoire Mimosa",
    "Grimoire William",
    "Grimoire Solid",
    "Grimoire Gueldre Poizot",
    "Grimoire Revchi",
    "Grimoire Xerx",
    "Grimoire Doroty",
    "Grimoire Kirsch Vermilion",
    "Grimoire Roland",
    "Grimoire Chaelote",
    "Grimoire Sol Maron",
    "Grimoire Selena",
    "Grimoire Fuegoleon",
    "Grimoire Mereleona",
    "Grimoire Leopold",
    "Grimoire Rill",
    "Grimoire Nozel",
    "Grimoire Nebra",
    "Grimoire Yuno",
  ];

  const [result, setResult] = useState(null);

  const summonGrimoire = () => {
    const random = Math.floor(Math.random() * grimoireList.length);
    setResult(grimoireList[random]);
  };

  return (
    <main className="min-h-screen w-full text-white overflow-y-auto scroll-smooth">
      {/* Slide 1 */}
      <section className="min-h-screen flex flex-col items-center justify-center snap-start bg-black px-4 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideVariants} className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold glitch">Grimoire Realms</h1>
          <p className="mt-4 glitch text-base md:text-lg max-w-xl mx-auto">Grimoire Realms: buku sihir yang membuka pintu ke dunia baru.</p>
        </motion.div>
      </section>

      {/* Slide 2 */}
      <section className="min-h-screen flex flex-col items-center justify-center snap-start bg-cover bg-center relative px-6" style={{ backgroundImage: "url('/maps.jpeg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideVariants} className="relative z-10 text-center px-6 max-w-3xl">
          <div className="bg-black/60 p-6 md:p-8 rounded-lg">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-white">Grimoire Realms</h2>
            <p className="text-sm md:text-lg leading-relaxed text-white">Grimoire Realms adalah sebuah homebrew DnD adaptasi dari Black Clover...</p>
          </div>
        </motion.div>
      </section>

      {/* Slide 3 */}
      <section className="min-h-screen flex items-center justify-center snap-start bg-cover bg-center relative px-6" style={{ backgroundImage: "url('/slide3.jpg')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideVariants} className="relative z-10 text-center px-6 max-w-3xl">
          <div className="bg-black/60 p-6 md:p-8 rounded-lg">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">Latar Belakang</h2>
            <p className="text-sm md:text-lg leading-relaxed">Dunia pernah berada dalam keseimbangan, dijaga oleh para Penjaga Runes...</p>
          </div>
        </motion.div>
      </section>

      {/* Slide 4 - Guild */}
      <section className="min-h-screen flex flex-col items-center justify-center snap-start bg-black relative px-4 py-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Choose Your Guild</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { src: "/hero1.png", name: "Aetherion", desc: "Guild sihir bangsawan...", link: "/guilds/aetherion" },
            { src: "/hero2.png", name: "Pyrelash", desc: "Guild sihir api barbar...", link: "/guilds/pyrelash" },
            { src: "/hero3.png", name: "Tideborn", desc: "Guild sihir air sombong...", link: "/guilds/tideborn" },
            { src: "/hero4.png", name: "Terravale", desc: "Guild sihir alam tenang...", link: "/guilds/terravale" },
            { src: "/hero5.png", name: "Umbra Noctis", desc: "Guild sihir bayangan licik.", link: "/guilds/umbra" },
            { src: "/hero6.png", name: "Arcanis", desc: "Guild sihir cahaya sederhana.", link: "/guilds/arcanis" },
            { src: "/hero7.png", name: "Cashel Team", desc: "Guild miskin tanpa bintang.", link: "/guilds/cashel" },
          ].map((char, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 rounded-xl bg-gray-700 group-hover:bg-red-700 transition-colors duration-300 z-0"></div>
              <img src={char.src} alt={char.name} className="relative w-full h-full object-contain z-10" />
              <div className="absolute bottom-0 w-full bg-black/70 text-white text-center p-2 z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <h3 className="text-sm font-bold">{char.name}</h3>
                <p className="text-xs mb-2">{char.desc}</p>
                <a href={char.link} className="inline-block text-xs px-3 py-1 bg-red-600 rounded-lg hover:bg-red-800 transition">
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Slide 5 - Grimoire Collection */}
      <section className="min-h-screen flex flex-col items-center justify-start snap-start bg-black relative px-4 py-10 overflow-y-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center glitch">Grimoire Collection</h1>
        <p className="text-sm md:text-lg text-gray-300 max-w-3xl text-center mb-8">
          Aturan Gacha: Setiap karakter melempar <span className="font-bold">1d25</span> untuk menentukan grimoire.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-5xl">
          {grimoireList.map((grimoire, index) => (
            <div key={index} className="relative flex items-center justify-center h-20 rounded-xl bg-gray-800 hover:bg-red-700 transition-colors duration-300 shadow-lg">
              <div className="absolute top-1 left-2 bg-red-600 text-white font-bold text-xs px-2 py-1 rounded">#{index + 1}</div>
              <h3 className="text-xs md:text-sm font-semibold text-center">{grimoire}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
