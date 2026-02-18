export default function TestimonialCard({ item }) {
  return (
    <div className="bg-white border border-[#E7D9C8] rounded-[2rem] p-7 shadow-sm hover:shadow-md transition">
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
          {"★".repeat(item.rating)}
        </p>
      </div>
    </div>
  )
}
