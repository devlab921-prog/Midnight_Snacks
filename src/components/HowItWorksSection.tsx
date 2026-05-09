import { motion } from "framer-motion";

import { MdOutlineMessage } from "react-icons/md";
import { RiEBike2Line } from "react-icons/ri";
import { MdOutlineAdsClick } from "react-icons/md";

function HowItWorksSection() {

  const steps = [
    {
      icon: <MdOutlineMessage className="text-primary-light text-4xl" />,
      title: "1. Pide nuestro menú",
      description:
        "Escríbenos por WhatsApp y recibe el menú actualizado del día.",
    },
    {
      icon: <MdOutlineAdsClick className="text-primary-light text-4xl" />,
      title: "2. Haz tu pedido",
      description:
        "Elige tus favoritos y confirma tu dirección en minutos.",
    },
    {
      icon: <RiEBike2Line className="text-primary-light text-4xl" />,
      title: "3. Disfruta en casa",
      description:
        "Nosotros llevamos la comida caliente directo hasta tu puerta.",
    },
  ];

  return (
    <section id="como" className="py-24 px-6 bg-zinc-950 text-white">

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          ¿Cómo funciona?
        </h2>

        <p className="text-white/60 text-lg mt-4">
          Sin apps complicadas, directo al grano.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
            }}
            className="
              bg-white/5
              border border-white/10
              rounded-3xl
              p-10
              text-center
              hover:bg-white/10
              transition
              relative
              overflow-hidden
              group
            "
          >

            {/* Glow */}
            <div className="
              absolute inset-0
              bg-primary/0
              group-hover:bg-primary/5
              transition-all duration-500
            " />

            {/* Icono */}
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 3,
              }}
              transition={{ duration: 0.3 }}
              className="
                relative z-10
                mb-6
                bg-primary-light/10
                rounded-full
                border border-primary-light
                w-16 h-16
                flex items-center justify-center
                mx-auto
              "
            >
              {step.icon}
            </motion.div>

            {/* Título */}
            <h3 className="relative z-10 text-2xl font-bold mb-4">
              {step.title}
            </h3>

            {/* Texto */}
            <p className="relative z-10 text-white/70">
              {step.description}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  )
}

export default HowItWorksSection