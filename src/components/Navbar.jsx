import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-full text-sm font-semibold transition ${
      isActive
        ? "bg-[#2F6F5E] text-white"
        : "text-[#2E2A24] hover:bg-[#efe7dc]"
    }`

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-5">
      <nav className="w-full max-w-6xl rounded-3xl bg-[#ffffff]/95 border border-[#E7D9C8] shadow-sm px-5 py-3">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2F6F5E] flex items-center justify-center text-white font-extrabold">
              A
            </div>
            <h1 className="font-bold text-[#2E2A24] text-sm sm:text-base">
              Altur Wisata Mulia
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 bg-[#F4EBDD] border border-[#E7D9C8] rounded-full px-2 py-2">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
            <NavLink to="/experience" className={linkClass}>
              Experience
            </NavLink>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/6280000000000"
              target="_blank"
              className="hidden sm:inline-flex px-5 py-2 rounded-full bg-[#2F6F5E] text-white text-sm font-semibold hover:bg-[#255a4c] transition"

            >
              Konsultasi
            </a>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 rounded-full border border-[#E7D9C8] bg-[#F4EBDD] flex items-center justify-center hover:bg-[#efe7dc] transition"

            >
              <span className="text-xl">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-4 flex flex-col gap-2 md:hidden">
            <NavLink
              to="/"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              Services
            </NavLink>

            <NavLink
              to="/experience"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              Experience
            </NavLink>

            <a
              href="https://wa.me/6280000000000"
              target="_blank"
              className="mt-2 px-5 py-3 rounded-full bg-[#2E2A24] text-white text-sm font-semibold hover:bg-[#1f1c18] transition text-center"
            >
              Konsultasi via WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
