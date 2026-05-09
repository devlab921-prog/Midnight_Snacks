import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function NavBar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="
        fixed top-0 left-0
        w-full
        px-4 sm:px-6 lg:px-8
        z-50
      "
    >

      <motion.nav
        animate={{
          marginTop: scrolled ? 12 : 16,
          scale: scrolled ? 0.98 : 1,
        }}
        transition={{ duration: 0.3 }}
        className={`
          max-w-7xl mx-auto
          text-white
          px-4 sm:px-6
          rounded-2xl
          border
          shadow-lg
          flex items-center justify-between
          transition-all duration-300

          ${scrolled
            ? "py-3 bg-black/70 backdrop-blur-xl border-white/10"
            : "py-4 bg-black/20 backdrop-blur-md border-white/5"
          }
        `}
      >

        {/* IZQUIERDA - Logo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="
            text-base sm:text-lg lg:text-xl
            font-bold
            text-primary-light
            whitespace-nowrap
          "
        >
          MIDNIGHT SNACKS
        </motion.div>

        {/* CENTRO - Links */}
        <ul
          className="
            hidden lg:flex
            items-center
            gap-6 xl:gap-8
            text-sm
          "
        >
          {[
            { name: "Sesiones en vivo", href: "/#sesiones" },
            { name: "Nuestro Menú", href: "/#menu" },
            { name: "Cómo funciona", href: "/#como" },
            { name: "Testimonios", href: "/#testimonios" },
            { name: "Cobertura", href: "/#cobertura" },
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href={item.href}
                className="
                  relative
                  text-white/80
                  hover:text-white
                  transition-colors duration-300

                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:w-0
                  after:h-[2px]
                  after:bg-primary
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* DERECHA - Botón */}
        <motion.a
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{ scale: 0.96 }}
          className="
            btn-primary
            text-xs sm:text-sm
            whitespace-nowrap
          "
        >
          <span className="hidden sm:inline">
            Pedir por WhatsApp
          </span>

          <span className="sm:hidden">
            WhatsApp
          </span>
        </motion.a>

      </motion.nav>

    </motion.div>
  );
}

export default NavBar;