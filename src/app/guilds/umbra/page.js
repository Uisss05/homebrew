"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function UmbraNoctisPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/mist.png')] bg-cover opacity-30 pointer-events-none"></div>

      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16 relative z-10">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-900 drop-shadow-[0_0_10px_rgba(128,0,128,0.8)]">Umbra Noctis</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-400 italic">“Dari bayangan kami mengintai, dan dalam kegelapan kami menguasai.”</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="flex justify-center mb-16 relative z-10">
        <img src="/hero5.png" alt="Umbra Noctis Guild" className="rounded-2xl shadow-[0_0_40px_rgba(128,0,128,0.6)] w-72 md:w-96 lg:w-[28rem] object-contain border border-purple-500/30" />
      </motion.div>

      <section className="max-w-5xl mx-auto space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-900/70 to-black/60 p-8 rounded-2xl shadow-lg border border-purple-500/30">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">Profile</h2>
          <p className="text-gray-300 leading-relaxed">
            Umbra Noctis adalah guild bayangan yang ahli dalam misi rahasia dan pengintaian. Mereka mengandalkan strategi licik, kemampuan siluman, dan sihir gelap untuk mendominasi medan tempur, menjadikan mereka ahli dalam operasi rahasia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-black/60 to-gray-900/70 p-8 rounded-2xl shadow-lg border border-purple-500/30">
          <h2 className="text-3xl font-semibold text-purple-300 mb-6 text-center">Features Guild</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-purple-500/40 rounded-lg overflow-hidden">
              <thead className="bg-gray-900/70">
                <tr>
                  <th className="px-4 py-3 text-left text-purple-300">Feature</th>
                  <th className="px-4 py-3 text-left text-purple-300">Deskripsi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-500/20">
                <tr className="hover:bg-gray-800/40 transition">
                  <td className="px-4 py-3 font-semibold text-purple-200">Shadow Summon</td>
                  <td className="px-4 py-3 text-gray-300">
                    Bayangan melindungimu dan semua sekutu dengan ilusi samar. Sekali per long rest, kamu bisa mengaktifkan aura bayangan selama 1 menit (radius 15 ft). Semua sekutu dalam area mendapatkan advantage pada Stealth checks.{" "}
                  </td>
                </tr>
                <tr className="hover:bg-gray-800/40 transition">
                  <td className="px-4 py-3 font-semibold text-purple-200"> Veil of Deception</td>
                  <td className="px-4 py-3 text-gray-300">
                    dapat membuat diri dan sekutu di dekatnya sulit dilihat, meningkatkan stealth dan mengurangi kemungkinan diserangMusuh dalam area mendapat disadvantage saat menyerang target selain kamu (efeknya kayak soft taunt karena ilusi bikin
                    mereka sulit membedakan target)
                  </td>
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
          className="bg-gradient-to-r from-purple-900/70 to-black/60 p-6 rounded-2xl shadow-lg border border-purple-500/40 mt-8 max-w-md mx-auto text-center">
          <h3 className="text-2xl font-semibold text-purple-300 mb-3">Starting Item</h3>
          <p className="text-gray-300">
            Setiap anggota baru mendapatkan <span className="font-bold text-purple-400">5 Gold</span> dan <span className="font-bold text-purple-400">Shadow Cloak</span> sebagai perlengkapan awal.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mt-8">
          <Link href="/" className="inline-block bg-purple-500 hover:bg-purple-400 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300">
            Back to Home
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
