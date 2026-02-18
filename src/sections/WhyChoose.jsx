import { Link } from "react-router-dom"

export default function WhyChoose() {
  return (
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
        {[
          {
            icon: "✅",
            title: "Legalitas Jelas",
            desc: "Perusahaan resmi dan transparan dalam proses administrasi."
          },
          {
            icon: "🤝",
            title: "Pelayanan Ramah",
            desc: "Tim siap membantu jamaah dari awal hingga kepulangan."
          },
          {
            icon: "📋",
            title: "Manasik Terarah",
            desc: "Pembekalan sebelum keberangkatan agar ibadah lebih siap."
          },
          {
            icon: "🌟",
            title: "Fasilitas Premium",
            desc: "Hotel, transport, konsumsi, dan itinerary disusun dengan rapi."
          }
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#E7D9C8] rounded-[2rem] p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-2xl">{item.icon}</p>
            <h3 className="mt-4 font-bold text-lg text-[#2E2A24]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-[#6B6257]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
