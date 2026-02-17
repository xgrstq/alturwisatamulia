export default function PackageModal({ open, onClose, data }) {
  if (!open || !data) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 py-8">
      {/* overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />

      {/* modal box */}
      <div className="relative w-full max-w-lg bg-white rounded-[2rem] border border-[#E7D9C8] shadow-xl overflow-hidden">
        
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#F4EBDD] border border-[#E7D9C8] flex items-center justify-center text-[#2E2A24] font-extrabold hover:border-[#2F6F5E] hover:text-[#2F6F5E] transition z-10"
        >
          ✕
        </button>

        {/* content scroll */}
        <div className="p-6 sm:p-7 max-h-[85vh] overflow-y-auto">
          <p className="text-xs font-semibold text-[#C8A15A] uppercase tracking-wide">
            {data.type}
          </p>

          <h2 className="mt-2 text-xl sm:text-2xl font-extrabold text-[#2E2A24] leading-snug">
            {data.name}
          </h2>

          <p className="mt-2 text-sm text-[#6B6257]">
            Durasi: <span className="font-semibold">{data.duration}</span>
          </p>

          {/* price */}
          <div className="mt-5 bg-[#FFFDF9] border border-[#E7D9C8] rounded-2xl p-4">
            <p className="text-xs text-[#6B6257]">Harga Mulai Dari</p>
            <p className="text-2xl font-extrabold text-[#2F6F5E]">
              {data.price}
            </p>
            <p className="mt-2 text-xs text-[#6B6257]">
              Keberangkatan:{" "}
              <span className="font-semibold">{data.departureDate}</span>
            </p>
          </div>

          {/* details */}
          <div className="mt-6 grid gap-3 text-sm">
            <div className="bg-white border border-[#E7D9C8] rounded-2xl p-4">
              <p className="font-bold text-[#2E2A24]">✈️ Maskapai</p>
              <p className="mt-1 text-[#6B6257]">{data.airline}</p>
            </div>

            <div className="bg-white border border-[#E7D9C8] rounded-2xl p-4">
              <p className="font-bold text-[#2E2A24]">🏨 Hotel Makkah</p>
              <p className="mt-1 text-[#6B6257]">{data.hotelMakkah}</p>
            </div>

            <div className="bg-white border border-[#E7D9C8] rounded-2xl p-4">
              <p className="font-bold text-[#2E2A24]">🏨 Hotel Madinah</p>
              <p className="mt-1 text-[#6B6257]">{data.hotelMadinah}</p>
            </div>
          </div>

          {/* benefits */}
          <div className="mt-7">
            <h3 className="text-base font-extrabold text-[#2E2A24]">
              Benefit Paket
            </h3>

            <ul className="mt-4 grid gap-2 text-sm text-[#6B6257]">
              {data.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#2F6F5E] font-extrabold">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="w-full px-6 py-3 rounded-full bg-[#F4EBDD] border border-[#E7D9C8] font-semibold text-[#2E2A24] hover:border-[#2F6F5E] transition"
            >
              Tutup
            </button>

            <a
              href={`https://wa.me/6280000000000?text=Halo%20PT%20Altur%20Wisata%20Mulia,%20saya%20ingin%20konsultasi%20tentang%20${encodeURIComponent(
                data.name
              )}`}
              target="_blank"
              className="w-full px-6 py-3 rounded-full bg-[#2F6F5E] text-white font-semibold hover:bg-[#255a4c] transition text-center"
            >
              Konsultasi Paket
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
