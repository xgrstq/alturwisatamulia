import { useState } from "react"
import { packages } from "../data/packages"

export default function Experience() {
  const [activeType, setActiveType] = useState("Umroh")

  const filteredPackages = packages.filter((p) => p.type === activeType)

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <section>
          <p className="text-sm font-semibold text-[#C8A15A]">
            Experience
          </p>

          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-[#2E2A24]">
            Paket{" "}
            <span className="italic text-[#2F6F5E]">
              Umroh & Haji
            </span>{" "}
            Pilihan
          </h1>

          <p className="mt-5 text-lg text-[#6B6257] max-w-2xl leading-relaxed">
            Pilih paket terbaik sesuai kebutuhan Anda. Setiap paket sudah
            dilengkapi fasilitas utama seperti hotel strategis, konsumsi, dan
            pembimbing ibadah.
          </p>

          {/* FILTER */}
          <div className="mt-10 inline-flex gap-2 bg-white border border-[#E7D9C8] rounded-full p-2 shadow-sm">
            <button
              onClick={() => setActiveType("Umroh")}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition ${
                activeType === "Umroh"
                  ? "bg-[#2F6F5E] text-white"
                  : "text-[#2E2A24] hover:bg-[#F4EBDD]"
              }`}
            >
              Umroh
            </button>

            <button
              onClick={() => setActiveType("Haji")}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition ${
                activeType === "Haji"
                  ? "bg-[#2F6F5E] text-white"
                  : "text-[#2E2A24] hover:bg-[#F4EBDD]"
              }`}
            >
              Haji
            </button>
          </div>
        </section>

        {/* PACKAGE LIST */}
        <section className="mt-14 grid lg:grid-cols-2 gap-8">
          {filteredPackages.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E7D9C8] rounded-[2.5rem] shadow-sm hover:shadow-md transition overflow-hidden"
            >
              {/* TOP */}
              <div className="p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold text-[#C8A15A]">
                      {item.type}
                    </p>

                    <h2 className="mt-2 text-2xl font-extrabold text-[#2E2A24]">
                      {item.name}
                    </h2>

                    <p className="mt-2 text-sm text-[#6B6257]">
                      Durasi: <span className="font-semibold">{item.duration}</span>
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-[#6B6257]">Mulai dari</p>
                    <p className="text-2xl font-extrabold text-[#2F6F5E]">
                      {item.price}
                    </p>
                  </div>
                </div>

                {/* DETAILS */}
                <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="bg-[#FFFDF9] border border-[#E7D9C8] rounded-2xl p-4">
                    <p className="font-bold text-[#2E2A24]">✈️ Maskapai</p>
                    <p className="mt-1 text-[#6B6257]">{item.airline}</p>
                  </div>

                  <div className="bg-[#FFFDF9] border border-[#E7D9C8] rounded-2xl p-4">
                    <p className="font-bold text-[#2E2A24]">📅 Keberangkatan</p>
                    <p className="mt-1 text-[#6B6257]">{item.departureDate}</p>
                  </div>

                  <div className="bg-[#FFFDF9] border border-[#E7D9C8] rounded-2xl p-4">
                    <p className="font-bold text-[#2E2A24]">🏨 Hotel Makkah</p>
                    <p className="mt-1 text-[#6B6257]">{item.hotelMakkah}</p>
                  </div>

                  <div className="bg-[#FFFDF9] border border-[#E7D9C8] rounded-2xl p-4">
                    <p className="font-bold text-[#2E2A24]">🏨 Hotel Madinah</p>
                    <p className="mt-1 text-[#6B6257]">{item.hotelMadinah}</p>
                  </div>
                </div>

                {/* BENEFITS */}
                <div className="mt-7">
                  <h3 className="font-extrabold text-[#2E2A24] text-lg">
                    Benefit Paket
                  </h3>

                  <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-[#6B6257]">
                    {item.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#2F6F5E] font-extrabold">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BUTTONS */}
                <div className="mt-10 flex flex-wrap gap-3">
                  <button className="px-6 py-3 rounded-full bg-[#F4EBDD] border border-[#E7D9C8] font-semibold text-[#2E2A24] hover:border-[#2F6F5E] transition">
                    Detail Paket
                  </button>

                  <a
                    href="https://wa.me/6280000000000"
                    target="_blank"
                    className="px-6 py-3 rounded-full bg-[#2F6F5E] text-white font-semibold hover:bg-[#255a4c] transition"
                  >
                    Daftar via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="mt-24">
          <div className="rounded-[2.5rem] bg-[#2E2A24] text-white p-10 md:p-14 border border-[#1f1c18] shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-3xl font-extrabold">
                  Ingin Paket Custom?
                </h2>
                <p className="mt-3 text-white/75 max-w-xl">
                  Anda bisa request tanggal keberangkatan, pilihan hotel, atau
                  layanan tambahan. Tim kami akan membantu menyusun itinerary terbaik.
                </p>
              </div>

              <a
                href="https://wa.me/6280000000000"
                target="_blank"
                className="inline-flex justify-center px-7 py-4 rounded-full bg-[#2F6F5E] text-white font-bold hover:bg-[#255a4c] transition"
              >
                Konsultasi Paket Custom
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
