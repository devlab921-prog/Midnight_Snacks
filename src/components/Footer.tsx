import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white px-6 py-8 pb-25">

      <div className="
        max-w-7xl mx-auto
        flex flex-col md:flex-row
        items-center justify-between
        gap-6
      ">

        {/* Izquierda */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-primary-light">
            MIDNIGHT SNACKS
          </h2>

          <p className="text-white/50 mt-2 text-sm">
            © 2026 Midnight Snacks. The nocturnal kitchen.
          </p>
        </div>

        {/* Derecha */}
        <div className="
          flex flex-wrap items-center justify-center
          gap-6
          text-sm text-white/70
        ">
          <a className="hover:text-primary-light transition cursor-pointer">
            Instagram
          </a>

          <a className="hover:text-primary-light transition cursor-pointer">
            TikTok
          </a>

          <a className="hover:text-primary-light transition cursor-pointer">
            WhatsApp
          </a>

          <Link
            to="/politicas"
            className="hover:text-primary-light transition cursor-pointer"
          >
            Políticas de privacidad
          </Link>
        </div>

      </div>

    </footer>
  )
}

export default Footer