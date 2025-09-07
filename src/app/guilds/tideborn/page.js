"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TidebornPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white px-6 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/stars.png')] bg-cover opacity-30 pointer-events-none"></div>

      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16 relative z-10">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 drop-shadow-[0_0_10px_rgba(14,165,233,0.8)]">Tideborn</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300 italic">“Kami menunggang ombak, dan lautan adalah kekuatan kami.”</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="flex justify-center mb-16 relative z-10">
        <img src="/hero3.png" alt="Tideborn Guild" className="rounded-2xl shadow-[0_0_40px_rgba(14,165,233,0.6)] w-72 md:w-96 lg:w-[28rem] object-contain border border-teal-500/30" />
      </motion.div>

      <section className="max-w-5xl mx-auto space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-900/70 to-black/60 p-8 rounded-2xl shadow-lg border border-teal-500/30">
          <h2 className="text-3xl font-semibold text-teal-300 mb-4">Profile</h2>
          <p className="text-gray-200 leading-relaxed">
            Tideborn adalah guild ahli sihir air, terkenal dengan kemampuan mengendalikan arus dan gelombang dalam pertempuran. Mereka cepat, fleksibel, dan ahli strategi laut, dengan total bintang yang diperoleh mencapai 100.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-black/60 to-blue-900/70 p-8 rounded-2xl shadow-lg border border-teal-500/30">
          <h2 className="text-3xl font-semibold text-teal-300 mb-6 text-center">Features Guild</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-teal-500/40 rounded-lg overflow-hidden">
              <thead className="bg-blue-950/70">
                <tr>
                  <th className="px-4 py-3 text-left text-teal-300">Feature</th>
                  <th className="px-4 py-3 text-left text-teal-300">Deskripsi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal-500/20">
                <tr className="hover:bg-blue-800/40 transition">
                  <td className="px-4 py-3 font-semibold text-teal-200">Tidal Guard</td>
                  <td className="px-4 py-3 text-gray-300">Air mengalir melindungimu dan sekutumu.Sekali per short rest, kamu bisa mengeluarkan perisai air di sekitarmu. Selama 1 menit, kamu dan satu sekutu dalam 10 ft mendapatkan +2 AC.</td>
                </tr>
                <tr className="hover:bg-blue-800/40 transition">
                  <td className="px-4 py-3 font-semibold text-teal-200">Wave of Resilience</td>
                  <td className="px-4 py-3 text-gray-300">
                    Kamu meledakkan energi air untuk menahan serangan. Efek: Sekali per long rest, sebagai reaction saat kamu atau sekutu dalam 15 ft terkena serangan:Kamu bisa memunculkan gelombang air yang mengurangi damage sebesar 1d8 +
                    Constitution modifier. Jika damage jadi 0, gelombang itu memantul → musuh dalam 5 ft dari target terkena Bludgeoning damage 1d6.
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
          className="bg-gradient-to-r from-yellow-900/70 to-black/60 p-6 rounded-2xl shadow-lg border border-yellow-500/40 mt-8 max-w-md mx-auto text-center">
          <h3 className="text-2xl font-semibold text-yellow-300 mb-3">Starting Item</h3>
          <p className="text-gray-200">
            Setiap anggota baru mendapatkan <span className="font-bold text-yellow-400">30 Gold</span>
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mt-8">
          <Link href="/" className="inline-block bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300">
            Back to Home
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
