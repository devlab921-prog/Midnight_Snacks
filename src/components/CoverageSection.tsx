import { motion } from "framer-motion";

import { LuMapPin } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";

function CoverageSection() {
  return (
    <section
      id="cobertura"
      className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white"
    >

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          relative
          max-w-5xl mx-auto
          bg-white/5
          border border-white/10
          rounded-3xl
          p-8 sm:p-10 md:p-16
          text-center
          backdrop-blur-md
          overflow-hidden
        "
      >

        {/* Glow */}
        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute inset-0
            bg-primary/10
            blur-3xl
          "
        />

        <div className="relative z-10">

          {/* Icono */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 120,
            }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                w-16 h-16 sm:w-20 sm:h-20
                rounded-xl
                border border-white/10
                bg-primary/20
                flex items-center justify-center
                rotate-6
              "
            >
              <LuMapPin
                size={32}
                className="text-primary-light sm:w-10 sm:h-10"
              />
            </motion.div>

          </motion.div>

          {/* Texto */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-bold
              leading-tight
            "
          >
            Llegamos a todo Chimbote y Nuevo Chimbote
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="
              text-white/70
              text-base sm:text-lg
              mt-5
              max-w-2xl mx-auto
            "
          >
            Tu antojo, directo a tu puerta en minutos.
          </motion.p>

          {/* Cobertura */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="
              mt-8
              inline-flex items-center justify-center
              gap-2
              px-4 sm:px-6
              py-3
              flex-wrap
            "
          >

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <FaRegCheckCircle
                className="text-primary-light text-sm sm:text-base"
              />
            </motion.div>

            <span
              className="
                font-semibold
                tracking-wide
                text-primary-light
                text-xs sm:text-sm
              "
            >
              COBERTURA TOTAL GARANTIZADA
            </span>

          </motion.div>

        </div>

      </motion.div>

    </section>
  )
}

export default CoverageSection