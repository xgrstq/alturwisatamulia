export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-28"
    >
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <p className="text-sm font-semibold text-[#D97706] tracking-wide uppercase">
            PT Altur Wisata Mulia
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-[#3F2E2E]">
            Perjalanan Haji & Umroh  
            <span className="text-[#D97706]"> Nyaman</span>,  
            <span className="text-[#D97706]"> Aman</span>, dan  
            <span className="text-[#D97706]"> Berkesan</span>.
          </h1>

          <p className="mt-5 text-lg text-[#5a4a4a] leading-relaxed">
            Kami menghadirkan layanan perjalanan ibadah dengan fasilitas terbaik,
            pembimbing berpengalaman, serta proses yang transparan untuk
            kenyamanan jamaah.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="px-6 py-3 rounded-full bg-[#D97706] text-white font-semibold hover:bg-[#b85f00] transition shadow-sm"
            >
              Jelajahi Paket ✨
            </a>

            <a
              href="#services"
              className="px-6 py-3 rounded-full bg-white border border-[#e9d6c3] text-[#3F2E2E] font-semibold hover:border-[#D97706] transition shadow-sm"
            >
              Lihat Layanan
            </a>
          </div>

          <div className="mt-10 flex gap-6 text-sm text-[#5a4a4a]">
            <div>
              <p className="font-bold text-[#3F2E2E]">1000+</p>
              <p>Jamaah Berangkat</p>
            </div>
            <div>
              <p className="font-bold text-[#3F2E2E]">Resmi</p>
              <p>Berizin & Terpercaya</p>
            </div>
            <div>
              <p className="font-bold text-[#3F2E2E]">Premium</p>
              <p>Fasilitas & Hotel</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-[#f1ddc9]">
            <img
              src="https://images.unsplash.com/photo-1564769625392-651b57d3cfa0?q=80&w=1600&auto=format&fit=crop"
              alt="Ka'bah"
              className="w-full h-[450px] object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-md border border-[#f1ddc9] px-5 py-4">
            <p className="text-sm font-semibold text-[#3F2E2E]">
              ✈️ Keberangkatan Terjadwal
            </p>
            <p className="text-xs text-[#5a4a4a] mt-1">
              Umroh & Haji dengan pilihan paket fleksibel
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
