"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CashelTeamPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 sm:px-6 py-12 sm:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/cashel_dirty.png')] bg-cover opacity-20 pointer-events-none"></div>

      {/* Title */}
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-10 sm:mb-16 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 drop-shadow-[0_0_10px_rgba(128,128,128,0.8)]">Cashel Team</h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl mx-auto text-gray-400 italic">“Kekacauan kami adalah rumah kami, tapi tetap bertahan.”</p>
      </motion.div>

      {/* Hero Image */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="flex justify-center mb-10 sm:mb-16 relative z-10">
        <img
          src="/hero7.png"
          alt="Cashel Team"
          className="rounded-2xl shadow-[0_0_40px_rgba(128,128,128,0.6)] 
          w-56 sm:w-72 md:w-96 lg:w-[28rem] object-contain border border-gray-600/30"
        />
      </motion.div>

      <section className="max-w-5xl mx-auto space-y-10 sm:space-y-12 relative z-10">
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-800/70 to-black/60 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-600/30">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-3 sm:mb-4">Profile</h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Cashel Team adalah guild biasa tanpa prestasi. Tempat tinggal mereka kumuh dan berantakan, mereka belum pernah mendapatkan bintang atau pengakuan resmi. Meski begitu, mereka tetap bertahan dengan cara seadanya.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-black/60 to-gray-800/70 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-600/30">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-4 sm:mb-6 text-center">Features Team</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-600/40 rounded-lg overflow-hidden text-sm sm:text-base">
              <thead className="bg-gray-800/70">
                <tr>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-gray-300">Feature</th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-gray-300">Deskripsi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600/20">
                <tr className="hover:bg-gray-700/30 transition">
                  <td className="px-3 sm:px-4 py-2 sm:py-3 font-semibold text-gray-200">Daging besi</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-gray-300">Tubuhmu keras ditempa hidup jalanan. Kamu mendapat +1 AC permanen.</td>
                </tr>
                <tr className="hover:bg-gray-700/30 transition">
                  <td className="px-3 sm:px-4 py-2 sm:py-3 font-semibold text-gray-200">Keras Kepala</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-gray-300">Sekali per long rest, saat HP-mu turun ke 0, kamu tetap bisa berdiri dengan 1 HP (efek sekali saja).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Starting Item */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-900/70 to-black/60 p-5 sm:p-6 rounded-2xl shadow-lg border border-gray-600/40 mt-6 sm:mt-8 max-w-md mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-2 sm:mb-3">Starting Item</h3>
          <p className="text-gray-300 text-sm sm:text-base">
            Setiap anggota baru mendapatkan <span className="font-bold text-gray-400">5 Gold</span> dan bisa memilih <span className="font-bold text-gray-400">Uncommon Item Magic</span>.
          </p>
        </motion.div>

        {/* Back Button */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mt-6 sm:mt-8">
          <Link href="/" className="inline-block bg-gray-500 hover:bg-gray-400 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg transition-all duration-300 text-sm sm:text-base">
            Back to Home
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
