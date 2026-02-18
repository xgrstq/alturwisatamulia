export default function PackageCard({ item, onDetail }) {
  return (
    <div className="bg-white border border-[#E7D9C8] rounded-[2.5rem] shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold text-[#C8A15A] uppercase tracking-wide">
              {item.type}
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-[#2E2A24] leading-snug">
              {item.name}
            </h2>

            <p className="mt-3 text-sm text-[#6B6257]">
              Durasi: <span className="font-semibold">{item.duration}</span>
            </p>

            <p className="mt-1 text-sm text-[#6B6257]">
              Keberangkatan:{" "}
              <span className="font-semibold">{item.departureDate}</span>
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-[#6B6257]">
              Mulai dari
            </p>
            <p className="text-2xl font-extrabold text-[#2F6F5E]">
              {item.price}
            </p>
          </div>
        </div>

        <div className="mt-6 bg-[#FFFDF9] border border-[#E7D9C8] rounded-2xl p-5">
          <p className="font-bold text-[#2E2A24] text-sm">
            Highlight Fasilitas
          </p>

          <ul className="mt-3 grid gap-2 text-sm text-[#6B6257]">
            {item.benefits.slice(0, 4).map((b, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#2F6F5E] font-extrabold">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={onDetail}
            className="px-6 py-3 rounded-full bg-[#F4EBDD] border border-[#E7D9C8] font-semibold text-[#2E2A24] hover:border-[#2F6F5E] transition"
          >
            Detail Paket
          </button>

          <a
            href={`https://wa.me/6280000000000?text=Halo%20PT%20Altur%20Wisata%20Mulia,%20saya%20ingin%20daftar%20${encodeURIComponent(
              item.name
            )}`}
            target="_blank"
            className="px-6 py-3 rounded-full bg-[#2F6F5E] text-white font-semibold hover:bg-[#255a4c] transition"
          >
            Daftar via WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
