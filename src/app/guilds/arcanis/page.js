"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ArkanisPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white px-4 sm:px-6 py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/arcane_bg.png')] bg-cover opacity-30 pointer-events-none"></div>

      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-10 sm:mb-16 relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">Arkanis</h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl mx-auto text-gray-400 italic">“Kekuatan sihir kami adalah jalan, dan ilmu kami adalah pedang.”</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="flex justify-center mb-10 sm:mb-16 relative z-10">
        <img src="/hero6.png" alt="Arkanis Guild" className="rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.6)] w-60 sm:w-72 md:w-96 lg:w-[28rem] object-contain border border-cyan-500/30" />
      </motion.div>

      <section className="max-w-5xl mx-auto space-y-10 sm:space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-900/70 to-black/60 p-6 sm:p-8 rounded-2xl shadow-lg border border-cyan-500/30">
          <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-300 mb-3 sm:mb-4">Profile</h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Arkanis adalah guild ahli sihir yang fokus pada manipulasi energi arcane. Mereka dikenal karena penelitian sihir, pembuatan artefak, dan penggunaan mantra kuat untuk kontrol medan perang dan perlindungan sekutu.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-black/60 to-blue-900/70 p-6 sm:p-8 rounded-2xl shadow-lg border border-cyan-500/30">
          <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-300 mb-4 sm:mb-6 text-center">Features Guild</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-cyan-500/40 rounded-lg overflow-hidden text-sm sm:text-base">
              <thead className="bg-blue-900/70">
                <tr>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-cyan-300">Feature</th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-cyan-300">Deskripsi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cyan-500/20">
                <tr className="hover:bg-blue-800/40 transition">
                  <td className="px-3 sm:px-4 py-2 sm:py-3 font-semibold text-cyan-200">Arcane Strike</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-gray-300">Sekali per short rest, saat seranganmu kena (weapon atau spell), tambahkan +1d8 force damage. Naik jadi 2d8 di level 10, dan +3d8 di level 15.</td>
                </tr>
                <tr className="hover:bg-blue-800/40 transition">
                  <td className="px-3 sm:px-4 py-2 sm:py-3 font-semibold text-cyan-200">Mana Focus</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-gray-300">Sekali per long rest, aktifkan Mana Focus selama 1 menit. Selama aktif, setiap serangan spell/weapon milikmu mendapat +2 damage.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-900/70 to-black/60 p-5 sm:p-6 rounded-2xl shadow-lg border border-cyan-500/40 mt-8 max-w-sm mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-cyan-300 mb-2 sm:mb-3">Starting Item</h3>
          <p className="text-gray-300 text-sm sm:text-base">
            Setiap anggota baru mendapatkan <span className="font-bold text-cyan-400">5 Gold</span> dan <span className="font-bold text-cyan-400">Arcane Tome</span> sebagai perlengkapan awal.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mt-6 sm:mt-8">
          <Link href="/" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2 sm:py-3 px-5 sm:px-6 rounded-lg shadow-lg transition-all duration-300 text-sm sm:text-base">
            Back to Home
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
