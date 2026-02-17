import { Link } from "react-router-dom"
import { FaInstagram, FaTiktok } from "react-icons/fa"
import { FiYoutube } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[#E7D9C8] bg-[#FFFDF9]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#2F6F5E] flex items-center justify-center text-white font-extrabold text-lg">
                A
              </div>
              <h2 className="font-extrabold text-lg text-[#2E2A24]">
                Altur Wisata Mulia
              </h2>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#6B6257] max-w-sm">
              PT Altur Wisata Mulia melayani perjalanan Haji dan Umroh dengan
              layanan profesional, fasilitas nyaman, serta pendampingan ibadah
              yang terarah.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                className="w-11 h-11 rounded-2xl bg-white border border-[#E7D9C8] flex items-center justify-center text-[#6B6257] hover:text-[#2F6F5E] hover:border-[#2F6F5E] transition"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                className="w-11 h-11 rounded-2xl bg-white border border-[#E7D9C8] flex items-center justify-center text-[#6B6257] hover:text-[#2F6F5E] hover:border-[#2F6F5E] transition"
                aria-label="TikTok"
              >
                <FaTiktok size={18} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                className="w-11 h-11 rounded-2xl bg-white border border-[#E7D9C8] flex items-center justify-center text-[#6B6257] hover:text-[#2F6F5E] hover:border-[#2F6F5E] transition"
                aria-label="YouTube"
              >
                <FiYoutube size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-extrabold text-[#2E2A24]">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-[#6B6257]">
              <li>
                <Link to="/" className="hover:text-[#2F6F5E] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#2F6F5E] transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-[#2F6F5E] transition">
                  Experience
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#2F6F5E] transition">
                  Tentang Perusahaan
                </a>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-extrabold text-[#2E2A24]">
              Layanan Kami
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-[#6B6257]">
              <li className="hover:text-[#2F6F5E] transition cursor-pointer">
                Paket Umroh Reguler
              </li>
              <li className="hover:text-[#2F6F5E] transition cursor-pointer">
                Paket Umroh VIP
              </li>
              <li className="hover:text-[#2F6F5E] transition cursor-pointer">
                Paket Haji Khusus
              </li>
              <li className="hover:text-[#2F6F5E] transition cursor-pointer">
                Manasik & Pembimbingan
              </li>
              <li className="hover:text-[#2F6F5E] transition cursor-pointer">
                Handling Bandara
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-extrabold text-[#2E2A24]">
              Kontak
            </h3>

            <div className="mt-5 space-y-4 text-sm text-[#6B6257]">
              <p>
                <span className="font-semibold text-[#2E2A24]">Alamat:</span>
                <br />
                Jl. Contoh Raya No. 123, Jakarta, Indonesia
              </p>

              <p>
                <span className="font-semibold text-[#2E2A24]">Email:</span>
                <br />
                info@alturwisatamulia.com
              </p>

              <p>
                <span className="font-semibold text-[#2E2A24]">Telepon:</span>
                <br />
                +62 812-0000-0000
              </p>

              <a
                href="https://wa.me/6281200000000"
                target="_blank"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-2xl bg-[#2F6F5E] text-white font-bold hover:bg-[#255a4c] transition"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-8 border-t border-[#E7D9C8] flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-[#6B6257]">
          <p>
            © {new Date().getFullYear()} PT Altur Wisata Mulia. All rights reserved.          
          </p>
              
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#2F6F5E] transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#2F6F5E] transition">
              Terms & Conditions
            </a>
          </div>
        
         <div className="border-t border-[#E7D9C8] w-full my-2"></div>
              <p className="text-xs">Built By ngodinginaja</p>
        
        </div>
      </div>
    </footer>
  )
}
