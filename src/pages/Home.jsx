import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* HERO */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4EBDD] border border-[#E7D9C8] text-sm font-semibold text-[#2E2A24]">
              <span className="w-2 h-2 rounded-full bg-[#2F6F5E]" />
              Resmi • Aman • Terpercaya
            </p>

            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold leading-tight text-[#2E2A24]">
              Temani Perjalanan{" "}
              <span className="italic text-[#2F6F5E] font-extrabold">
                Haji & Umroh
              </span>{" "}
              Anda dengan Pelayanan Sepenuh Hati.
            </h1>

            <p className="mt-5 text-lg text-[#6B6257] leading-relaxed max-w-xl">
              PT Altur Wisata Mulia hadir untuk memberikan pengalaman ibadah yang
              lebih tenang, lebih nyaman, dan lebih terarah — dari manasik hingga
              kepulangan.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/experience"
                className="px-6 py-3 rounded-full bg-[#2F6F5E] text-white font-semibold hover:bg-[#255a4c] transition shadow-sm"
              >
                Lihat Paket
              </Link>

              <Link
                to="/services"
                className="px-6 py-3 rounded-full bg-white border border-[#E7D9C8] text-[#2E2A24] font-semibold hover:border-[#C8A15A] transition shadow-sm"
              >
                Layanan & FAQ
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <div className="bg-white border border-[#E7D9C8] rounded-2xl p-4 shadow-sm">
                <p className="font-extrabold text-lg text-[#2E2A24]">1000+</p>
                <p className="text-sm text-[#6B6257]">Jamaah</p>
              </div>

              <div className="bg-white border border-[#E7D9C8] rounded-2xl p-4 shadow-sm">
                <p className="font-extrabold text-lg text-[#2E2A24]">Hotel</p>
                <p className="text-sm text-[#6B6257]">Strategis</p>
              </div>

              <div className="bg-white border border-[#E7D9C8] rounded-2xl p-4 shadow-sm">
                <p className="font-extrabold text-lg text-[#2E2A24]">Support</p>
                <p className="text-sm text-[#6B6257]">24/7</p>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden shadow-md border border-[#E7D9C8]">
              <img
                src="https://images.unsplash.com/photo-1564769625392-651b57d3cfa0?q=80&w=1600&auto=format&fit=crop"
                alt="Perjalanan Umroh"
                className="w-full h-[420px] object-cover"
              />
            </div>

            <div className="absolute -bottom-6 left-6 right-6 bg-white border border-[#E7D9C8] rounded-3xl p-5 shadow-sm">
              <p className="font-bold text-[#2E2A24]">
                ✨ Paket Terjadwal Setiap Bulan
              </p>
              <p className="mt-1 text-sm text-[#6B6257]">
                Pilihan paket fleksibel dengan fasilitas lengkap dan pendampingan.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="mt-28">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-[#2E2A24]">
                Tentang{" "}
                <span className="italic text-[#C8A15A]">
                  PT Altur Wisata Mulia
                </span>
              </h2>

              <p className="mt-4 text-[#6B6257] leading-relaxed">
                PT Altur Wisata Mulia adalah perusahaan yang bergerak di bidang
                layanan perjalanan ibadah Haji dan Umroh. Kami berkomitmen untuk
                memberikan pengalaman perjalanan yang aman, nyaman, dan sesuai
                tuntunan.
              </p>

              <p className="mt-4 text-[#6B6257] leading-relaxed">
                Dengan tim yang berpengalaman serta mitra hotel dan maskapai yang
                terpercaya, kami memastikan jamaah mendapatkan pelayanan terbaik
                sejak proses pendaftaran hingga kembali ke tanah air.
              </p>

              <div className="mt-7">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 font-semibold text-[#2F6F5E] hover:text-[#255a4c] transition"
                >
                  Pelajari Layanan Kami <span>→</span>
                </Link>
              </div>
            </div>

            <div className="bg-white border border-[#E7D9C8] rounded-[2rem] p-8 shadow-sm">
              <p className="text-sm font-semibold text-[#C8A15A]">
                Komitmen Kami
              </p>

              <h3 className="mt-2 text-2xl font-extrabold text-[#2E2A24]">
                Ibadah lebih tenang, perjalanan lebih nyaman.
              </h3>

              <div className="mt-6 flex flex-col gap-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F4EBDD] flex items-center justify-center">
                    🕌
                  </div>
                  <div>
                    <p className="font-bold text-[#2E2A24]">
                      Pendampingan Ibadah
                    </p>
                    <p className="text-sm text-[#6B6257]">
                      Dibimbing oleh pembimbing berpengalaman.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F4EBDD] flex items-center justify-center">
                    ✈️
                  </div>
                  <div>
                    <p className="font-bold text-[#2E2A24]">
                      Transport Nyaman
                    </p>
                    <p className="text-sm text-[#6B6257]">
                      Maskapai terpercaya & handling profesional.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F4EBDD] flex items-center justify-center">
                    🏨
                  </div>
                  <div>
                    <p className="font-bold text-[#2E2A24]">
                      Hotel Strategis
                    </p>
                    <p className="text-sm text-[#6B6257]">
                      Lokasi dekat area ibadah dan fasilitas lengkap.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="mt-24">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl font-extrabold text-[#2E2A24]">
                Kenapa{" "}
                <span className="italic text-[#2F6F5E]">
                  Memilih Kami?
                </span>
              </h2>

              <p className="mt-3 text-[#6B6257] max-w-2xl">
                Kami tidak hanya menawarkan paket perjalanan, tetapi juga menjaga
                kenyamanan dan ketenangan jamaah selama menjalankan ibadah.
              </p>
            </div>

            <Link
              to="/services"
              className="px-5 py-3 rounded-full bg-[#F4EBDD] border border-[#E7D9C8] font-semibold text-[#2E2A24] hover:border-[#2F6F5E] transition"
            >
              Lihat FAQ
            </Link>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#E7D9C8] rounded-[2rem] p-6 shadow-sm hover:shadow-md transition">
              <p className="text-2xl">✅</p>
              <h3 className="mt-4 font-bold text-lg text-[#2E2A24]">
                Legalitas Jelas
              </h3>
              <p className="mt-2 text-sm text-[#6B6257]">
                Perusahaan resmi dan transparan dalam proses administrasi.
              </p>
            </div>

            <div className="bg-white border border-[#E7D9C8] rounded-[2rem] p-6 shadow-sm hover:shadow-md transition">
              <p className="text-2xl">🤝</p>
              <h3 className="mt-4 font-bold text-lg text-[#2E2A24]">
                Pelayanan Ramah
              </h3>
              <p className="mt-2 text-sm text-[#6B6257]">
                Tim siap membantu jamaah dari awal hingga kepulangan.
              </p>
            </div>

            <div className="bg-white border border-[#E7D9C8] rounded-[2rem] p-6 shadow-sm hover:shadow-md transition">
              <p className="text-2xl">📋</p>
              <h3 className="mt-4 font-bold text-lg text-[#2E2A24]">
                Manasik Terarah
              </h3>
              <p className="mt-2 text-sm text-[#6B6257]">
                Pembekalan sebelum keberangkatan agar ibadah lebih siap.
              </p>
            </div>

            <div className="bg-white border border-[#E7D9C8] rounded-[2rem] p-6 shadow-sm hover:shadow-md transition">
              <p className="text-2xl">🌟</p>
              <h3 className="mt-4 font-bold text-lg text-[#2E2A24]">
                Fasilitas Premium
              </h3>
              <p className="mt-2 text-sm text-[#6B6257]">
                Hotel, transport, konsumsi, dan itinerary disusun dengan rapi.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24">
          <div className="rounded-[2.5rem] bg-[#2F6F5E] text-white p-10 md:p-14 border border-[#255a4c] shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-3xl font-extrabold">
                  Siap Berangkat Umroh atau Haji?
                </h2>
                <p className="mt-3 text-white/80 max-w-xl">
                  Konsultasikan kebutuhan perjalanan ibadah Anda bersama tim kami.
                  Kami siap membantu dari awal hingga selesai.
                </p>
              </div>

              <a
                href="https://wa.me/6280000000000"
                target="_blank"
                className="inline-flex justify-center px-7 py-4 rounded-full bg-white text-[#2F6F5E] font-bold hover:bg-[#F4EBDD] transition"
              >
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
