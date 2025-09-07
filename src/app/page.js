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
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth text-white">
      <section className="h-screen flex flex-col items-center justify-center snap-start bg-black">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideVariants} className="text-center">
          <h1 className="text-5xl font-bold glitch">Grimoire Realms</h1>
          <p className="mt-4 glitch text-lg max-w-xl text-center">Grimoire Realms: buku sihir yang membuka pintu ke dunia baru.</p>
        </motion.div>
      </section>

      <section className="h-screen flex flex-col items-center justify-center snap-start bg-cover bg-center relative" style={{ backgroundImage: "url('/maps.jpeg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideVariants} className="relative z-10 text-center px-6 max-w-2xl">
          <div className="bg-black/60 p-6 rounded-lg">
            <h2 className="text-4xl font-semibold mb-4 text-white drop-shadow-lg">Grimoire Realms</h2>
            <p className="text-lg leading-relaxed text-white drop-shadow-md">
              Grimoire Realms adalah sebuah homebrew DnD adaptasi dari black clover yang membawa pemain ke dalam dunia magis penuh rahasia dan kekuatan kuno. Setiap pemain dapat memilih grimoire unik yang menyimpan kemampuan ajaib, dan menjelajahi
              petualangan berbahaya yang menuntut keberanian dan kecerdikan. Di dunia ini, legenda lama hidup kembali, dan keputusanmu menentukan nasib semesta.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="h-screen flex items-center justify-center snap-start bg-cover bg-center relative" style={{ backgroundImage: "url('/slide3.jpg')" }}>
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideVariants} className="relative z-10 text-center px-6 max-w-2xl">
          <div className="bg-black/60 p-6 rounded-lg">
            <h2 className="text-4xl font-semibold mb-4 text-white drop-shadow-lg">Latar Belakang</h2>
            <p className="text-lg leading-relaxed text-white drop-shadow-md">
              Dunia pernah berada dalam keseimbangan, dijaga oleh para Penjaga Runes. Namun, kekuatan kuno mulai bangkit kembali, memecah harmoni antar-ras. Desas-desus tentang Artefak Grimoire menyebar, konon mampu membuka gerbang ke dimensi
              terlarang.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="h-screen flex flex-col items-center justify-center snap-start bg-black relative px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Choose Your Guild</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              src: "/hero1.png",
              name: "Aetherion",
              desc: "Guild sihir bintang Bangsawan paling di segani.",
              link: "/guilds/aetherion",
            },
            {
              src: "/hero2.png",
              name: "Pyrelash",
              desc: "Guild sihir api terkenal barbar ",
              link: "/guilds/pyrelash",
            },
            {
              src: "/hero3.png",
              name: "Tideborn",
              desc: "Guild sihir air  bangsawan terkenal dengan kesombongan",
              link: "/guilds/tideborn",
            },
            {
              src: "/hero4.png",
              name: "Terravale",
              desc: "Guild sihir alam bangsawan terkenal dengan ketenangan nya",
              link: "/guilds/terravale",
            },
            {
              src: "/hero5.png",
              name: "Umbra Noctis",
              desc: "Guild sihir bayangan penuh dengan tipu muslihat .",
              link: "/guilds/umbra",
            },
            {
              src: "/hero6.png",
              name: "Arcanis",
              desc: "Guild sihir cahaya sederhana.",
              link: "/guilds/arcanis",
            },
            {
              src: "/hero7.png",
              name: "Cashel team",
              desc: "Guild sihir yang belum pernah mendapatkan bintang",
              link: "/guilds/cashel",
            },
          ].map((char, index) => {
            const rotateDegree = index % 2 === 0 ? 5 : -5;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative w-36 md:w-48 lg:w-56 h-56 rounded-xl overflow-hidden shadow-lg group"
                style={{ transform: `rotate(${rotateDegree}deg)` }}>
                <div className="absolute inset-0 rounded-xl bg-gray-700 group-hover:bg-red-700 transition-colors duration-300 z-0"></div>

                <img src={char.src} alt={char.name} className="relative w-full h-full object-contain z-10" />

                <div
                  className="absolute bottom-0 w-full bg-black/70 text-white text-center p-3 z-20 
                          opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                          transition-all duration-500 ease-out">
                  <h3 className="text-sm font-bold">{char.name}</h3>
                  <p className="text-xs mb-2">{char.desc}</p>
                  <a href={char.link} className="inline-block text-xs px-3 py-1 bg-red-600 rounded-lg hover:bg-red-800 transition">
                    Read More
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Slide 5 - Semua Grimoire */}
      {/* Slide 5 - Grimoire Collection (Nama Saja) */}
      <section className="h-screen flex flex-col items-center justify-start snap-start bg-black relative px-6 py-10 overflow-y-auto">
        {/* Judul besar */}
        <h1 className="text-5xl font-bold text-white mb-4 text-center glitch">Grimoire Collection</h1>

        {/* Aturan Gacha */}
        <p className="text-lg text-gray-300 max-w-3xl text-center mb-8">
          Aturan Gacha: Setiap karakter memanggil grimoire dengan melempar <span className="font-bold">1d25</span>. Angka yang keluar akan menentukan grimoire yang didapat sesuai daftar:
        </p>

        {/* Grid semua grimoire */}
        <div className="flex flex-wrap justify-center gap-4">
          {grimoireList.map((grimoire, index) => {
            return (
              <div key={index} className="relative w-40 md:w-48 lg:w-52 h-20 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-red-700 transition-colors duration-300 shadow-lg">
                {/* Nomor grimoire */}
                <div className="absolute top-1 left-2 bg-red-600 text-white font-bold text-xs px-2 py-1 rounded z-20">#{index + 1}</div>

                {/* Nama grimoire */}
                <h3 className="text-white font-semibold text-center z-10">{grimoire}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
