export default function FAQItems({ item, isOpen, onClick }) {
  return (
    <div className="bg-white border border-[#E7D9C8] rounded-3xl p-6 shadow-sm">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left"
      >
        <p className="font-bold text-[#2E2A24] text-lg">
          {item.question}
        </p>

        <span className="text-[#2F6F5E] font-extrabold text-xl">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <p className="mt-4 text-[#6B6257] leading-relaxed">
          {item.answer}
        </p>
      )}
    </div>
  )
}
