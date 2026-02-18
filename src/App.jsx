import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

import Home from "./pages/Home"
import Services from "./pages/Services"
import Experience from "./pages/Experience"

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF7F0]">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>

      <Footer />
    </div>
  )
}
