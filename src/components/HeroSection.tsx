import heroImg from '../assets/mae-mu-I7A_pHLcQK8-unsplash.jpg';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Fondo con imagen */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Fondo Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
      </motion.div>

      {/* Contenido */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          min-h-screen
          flex items-center
          px-4 sm:px-6 lg:px-8
        "
      >

        <div
          className="
            max-w-xl lg:max-w-2xl
            text-white
            pt-28 sm:pt-32 md:pt-20
          "
        >

          {/* Badge */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="
              inline-block
              border border-primary
              bg-primary/20
              backdrop-blur-sm
              rounded-full
              px-3 py-2
              sm:px-4
              mb-5 sm:mb-6
            "
          >
            <p
              className="
                text-primary-light
                text-[10px] sm:text-xs md:text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
              "
            >
              Servicio exclusivo de Delivery
            </p>
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              leading-tight
              sm:leading-tight
              mb-6 sm:mb-8
            "
          >
            El sabor que no duerme, directo a tu puerta
          </motion.h1>

          {/* Botón */}
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-sm sm:text-base inline-block"
          >
            Pedir por WhatsApp
          </motion.a>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;