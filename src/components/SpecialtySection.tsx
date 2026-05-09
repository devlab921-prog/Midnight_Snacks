import { motion } from "framer-motion";

import Hamburguesa from '../assets/eiliv-aceron-uBigm8w_MpA-unsplash.jpg'
import Pizza from '../assets/ivan-torres-MQUqbmszGGM-unsplash.jpg'
import HotDog from '../assets/mr_wdh-PPwYBaC_g8M-unsplash.jpg'

function SpecialtySection() {

  const cards = [
    {
      image: Hamburguesa,
      title: "Midnight Burger",
      description:
        "Carne artesanal, queso cheddar y papas crocantes.",
    },
    {
      image: Pizza,
      title: "Pizza Nocturna",
      description:
        "Masa artesanal con full queso y pepperoni premium.",
    },
    {
      image: HotDog,
      title: "Hot Dog XL",
      description:
        "Salchicha jumbo con papitas al hilo y salsas especiales.",
    },
  ];

  return (
    <section id="menu" className="py-24 px-6 bg-black text-white">

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Nuestra Especialidad
        </h2>

        <p className="text-white/70 mt-4">
          Las mejores combinaciones para tus noches de antojo.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border border-white/10
              group
            "
          >

            {/* Glow */}
            <div className="
              absolute inset-0
              bg-primary/0
              group-hover:bg-primary/10
              transition-all duration-500
              z-10
            " />

            {/* Imagen */}
            <motion.img
              src={card.image}
              alt={card.title}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
              className="
                w-full
                h-[420px]
                object-cover
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Contenido */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + index * 0.15,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="absolute bottom-0 p-6 z-20"
            >

              <h3 className="text-2xl font-bold">
                {card.title}
              </h3>

              <p className="text-white/80 mt-2 text-sm">
                {card.description}
              </p>

            </motion.div>

          </motion.div>
        ))}

      </div>

      {/* Botón */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center mt-14"
      >
        <motion.a
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{ scale: 0.96 }}
          className="btn-primary"
        >
          Ver menú completo por WhatsApp
        </motion.a>
      </motion.div>

    </section>
  )
}

export default SpecialtySection