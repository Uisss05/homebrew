"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TerravalePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-green-950 to-black text-white px-6 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/stars.png')] bg-cover opacity-30 pointer-events-none"></div>

      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16 relative z-10">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">Terravale</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300 italic">“Dari tanah kami tumbuh, dengan akar kami kami kuat.”</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="flex justify-center mb-16 relative z-10">
        <img src="/hero4.png" alt="Terravale Guild" className="rounded-2xl shadow-[0_0_40px_rgba(34,197,94,0.6)] w-72 md:w-96 lg:w-[28rem] object-contain border border-green-500/30" />
      </motion.div>

      <section className="max-w-5xl mx-auto space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-green-900/70 to-black/60 p-8 rounded-2xl shadow-lg border border-green-500/30">
          <h2 className="text-3xl font-semibold text-green-300 mb-4">Profile</h2>
          <p className="text-gray-200 leading-relaxed">
            Terravale adalah guild ahli sihir bumi, terkenal karena kekuatan pertahanan dan kontrol medan tempur. Mereka kuat, stabil, dan mampu melindungi sekutu dari serangan lawan, dengan total bintang mencapai 110.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-black/60 to-green-900/70 p-8 rounded-2xl shadow-lg border border-green-500/30">
          <h2 className="text-3xl font-semibold text-green-300 mb-6 text-center">Features Guild</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-green-500/40 rounded-lg overflow-hidden">
              <thead className="bg-green-950/70">
                <tr>
                  <th className="px-4 py-3 text-left text-green-300">Feature</th>
                  <th className="px-4 py-3 text-left text-green-300">Deskripsi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-green-500/20">
                <tr className="hover:bg-green-800/40 transition">
                  <td className="px-4 py-3 font-semibold text-green-200">Nature’s Balm</td>
                  <td className="px-4 py-3 text-gray-300">Kamu menyalurkan energi alam untuk menyembuhkan luka. Sekali per short rest, anggota Terravale dapat menggunakan energi bumi untuk menyembuhkan diri atau sekutu sebesar 1d8 + modifier.</td>
                </tr>
                <tr className="hover:bg-green-800/40 transition">
                  <td className="px-4 py-3 font-semibold text-green-200">Stone Resurgence</td>
                  <td className="px-4 py-3 text-gray-300">Bisa memanggil rerumputan penyembuh di area kecil (5x5 ft). Sekutu yang berdiri di atasnya mendapatkan 2d6 HP setiap 2 turn. Cooldown: 1 short rest.</td>
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
          className="bg-gradient-to-r from-yellow-900/70 to-black/60 p-6 rounded-2xl shadow-lg border border-yellow-500/40 mt-8 max-w-md mx-auto text-center">
          <h3 className="text-2xl font-semibold text-yellow-300 mb-3">Starting Item</h3>
          <p className="text-gray-200">
            Setiap anggota baru mendapatkan <span className="font-bold text-yellow-400">30 Gold</span>
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mt-8">
          <Link href="/" className="inline-block bg-green-500 hover:bg-green-400 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300">
            Back to Home
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
