export default function Home() {
  return (
    <div className="pt-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold leading-tight">
          Perjalanan Ibadah dengan Rasa Tenang.
        </h1>

        <p className="mt-5 text-lg text-[#6B6257] max-w-2xl">
          PT Altur Wisata Mulia menghadirkan layanan perjalanan Haji dan Umroh
          yang aman, nyaman, dan terarah, dengan fasilitas terbaik serta
          pendampingan profesional.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-[#ede3d6] shadow-sm">
            <h3 className="font-bold text-lg">Berizin & Terpercaya</h3>
            <p className="mt-2 text-sm text-[#6B6257]">
              Proses transparan, legalitas jelas, dan pendampingan resmi untuk
              kenyamanan jamaah.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#ede3d6] shadow-sm">
            <h3 className="font-bold text-lg">Fasilitas Premium</h3>
            <p className="mt-2 text-sm text-[#6B6257]">
              Hotel strategis, konsumsi terjamin, transport nyaman, dan layanan
              yang rapi dari awal hingga pulang.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#ede3d6] shadow-sm">
            <h3 className="font-bold text-lg">Pembimbing Berpengalaman</h3>
            <p className="mt-2 text-sm text-[#6B6257]">
              Dibimbing oleh tim yang memahami perjalanan ibadah secara detail
              dan mendampingi jamaah sepenuh hati.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
