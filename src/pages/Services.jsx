import { useState } from "react"

export default function Services() {
  const faqs = [
    {
      q: "Apakah PT Altur Wisata Mulia resmi dan berizin?",
      a: "Ya, kami menjalankan layanan perjalanan ibadah dengan legalitas yang jelas serta proses administrasi yang transparan."
    },
    {
      q: "Apa saja yang termasuk dalam paket Umroh?",
      a: "Umumnya paket sudah termasuk tiket pesawat PP, visa, hotel, konsumsi, transportasi selama di Arab Saudi, serta pembimbing ibadah."
    },
    {
      q: "Apakah tersedia manasik sebelum keberangkatan?",
      a: "Tersedia. Jamaah akan mendapatkan manasik dan briefing agar lebih siap menjalankan ibadah."
    },
    {
      q: "Bagaimana cara pendaftaran Umroh/Haji?",
      a: "Pendaftaran bisa dilakukan melalui kantor kami atau konsultasi via WhatsApp. Tim kami akan membantu proses hingga selesai."
    },
    {
      q: "Apakah bisa memilih tanggal keberangkatan?",
      a: "Bisa. Kami memiliki jadwal keberangkatan yang fleksibel sesuai periode yang tersedia."
    }
  ]

  const testimonials = [
    {
      name: "Bapak Ahmad",
      city: "Bekasi",
      text: "Pelayanannya rapi dan sangat membantu. Hotelnya dekat dan pembimbingnya sabar banget. Alhamdulillah perjalanan lancar."
    },
    {
      name: "Ibu Siti Nurhayati",
      city: "Jakarta",
      text: "Dari awal daftar sampai pulang semua diurus. Timnya fast response. Jadi ibadah lebih fokus tanpa kepikiran hal teknis."
    },
    {
      name: "Bapak Hendra",
      city: "Depok",
      text: "Handling bandara mantap, jadwalnya jelas, makanannya juga enak. Recommended buat keluarga."
    }
  ]

  const gallery = [
    "https://images.unsplash.com/photo-1542327897-37aa9f1c2f95?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1564769625392-651b57d3cfa0?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519817650390-64a93db511aa?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600&auto=format&fit=crop"
  ]

  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <section>
          <p className="text-sm font-semibold text-[#C8A15A]">
            Services
          </p>

          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-[#2E2A24]">
            Layanan &{" "}
            <span className="italic text-[#2F6F5E]">
              Informasi Jamaah
            </span>
          </h1>

          <p className="mt-5 text-lg text-[#6B6257] max-w-2xl leading-relaxed">
            Kami menyediakan layanan perjalanan ibadah yang terstruktur, aman,
            dan nyaman. Halaman ini berisi informasi penting, dokumentasi kegiatan,
            serta testimoni jamaah.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-20">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl font-extrabold text-[#2E2A24]">
                FAQ{" "}
                <span className="italic text-[#C8A15A]">
                  (Pertanyaan Umum)
                </span>
              </h2>
              <p className="mt-3 text-[#6B6257] max-w-2xl">
                Pertanyaan yang sering ditanyakan calon jamaah sebelum berangkat.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E7D9C8] rounded-3xl p-6 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <p className="font-bold text-[#2E2A24] text-lg">
                    {item.q}
                  </p>

                  <span className="text-[#2F6F5E] font-extrabold text-xl">
                    {openIndex === idx ? "−" : "+"}
                  </span>
                </button>

                {openIndex === idx && (
                  <p className="mt-4 text-[#6B6257] leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="mt-24">
          <h2 className="text-3xl font-extrabold text-[#2E2A24]">
            Proses{" "}
            <span className="italic text-[#2F6F5E]">
              Pendaftaran
            </span>
          </h2>

          <p className="mt-3 text-[#6B6257] max-w-2xl">
            Kami buat prosesnya simple, jelas, dan gak ribet.
          </p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Konsultasi",
                desc: "Diskusi kebutuhan paket & jadwal keberangkatan."
              },
              {
                step: "02",
                title: "Pendaftaran",
                desc: "Isi formulir + persiapan dokumen administrasi."
              },
              {
                step: "03",
                title: "Manasik",
                desc: "Pembekalan ibadah sebelum keberangkatan."
              },
              {
                step: "04",
                title: "Keberangkatan",
                desc: "Handling bandara + pendampingan selama perjalanan."
              }
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white border border-[#E7D9C8] rounded-[2rem] p-7 shadow-sm hover:shadow-md transition"
              >
                <p className="text-sm font-extrabold text-[#C8A15A]">
                  STEP {item.step}
                </p>
                <h3 className="mt-3 text-xl font-extrabold text-[#2E2A24]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-[#6B6257] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="mt-24">
          <h2 className="text-3xl font-extrabold text-[#2E2A24]">
            Gallery{" "}
            <span className="italic text-[#C8A15A]">
              Kegiatan
            </span>
          </h2>

          <p className="mt-3 text-[#6B6257] max-w-2xl">
            Dokumentasi perjalanan jamaah bersama PT Altur Wisata Mulia.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((img, idx) => (
              <div
                key={idx}
                className="rounded-[2rem] overflow-hidden border border-[#E7D9C8] shadow-sm hover:shadow-md transition bg-white"
              >
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-[240px] object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="mt-24">
          <h2 className="text-3xl font-extrabold text-[#2E2A24]">
            Testimoni{" "}
            <span className="italic text-[#2F6F5E]">
              Jamaah
            </span>
          </h2>

          <p className="mt-3 text-[#6B6257] max-w-2xl">
            Cerita singkat dari jamaah yang telah berangkat bersama kami.
          </p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E7D9C8] rounded-[2rem] p-7 shadow-sm hover:shadow-md transition"
              >
                <p className="text-[#6B6257] text-sm leading-relaxed">
                  “{item.text}”
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#2E2A24]">
                      {item.name}
                    </p>
                    <p className="text-xs text-[#6B6257]">
                      {item.city}
                    </p>
                  </div>

                  <p className="text-[#C8A15A] font-extrabold">
                    ★★★★★
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24">
          <div className="rounded-[2.5rem] bg-[#2F6F5E] text-white p-10 md:p-14 border border-[#255a4c] shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-3xl font-extrabold">
                  Masih Bingung Pilih Paket?
                </h2>
                <p className="mt-3 text-white/80 max-w-xl">
                  Tenang, konsultasi dulu aja. Tim kami siap bantu pilih paket
                  terbaik sesuai kebutuhan dan budget Anda.
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
