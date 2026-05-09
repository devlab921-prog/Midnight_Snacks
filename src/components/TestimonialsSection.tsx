import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

function TestimonialsSection() {

  const testimonials = [
    {
      text: "“Pedí a las 2 AM pensando que no responderían… llegaron en menos de 30 minutos y la burger estaba brutal.”",
      author: "— Diego R.",
    },
    {
      text: "“La pizza nocturna salvó nuestra madrugada de estudio. Full queso, rápida entrega y buena atención.”",
      author: "— Camila M.",
    },
    {
      text: "“Literalmente el mejor hot dog que he pedido de madrugada. Todo caliente y bien presentado.”",
      author: "— Andrés T.",
    },
  ];

  return (
    <section
      id="testimonios"
      className="py-24 px-6 bg-zinc-950 text-white"
    >

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >

        <h2 className="text-4xl md:text-5xl font-bold">
          Lo que dicen nuestros noctámbulos
        </h2>

        <p className="text-white/60 text-lg mt-4">
          Historias reales de antojos satisfechos a medianoche.
        </p>

      </motion.div>

      {/* Testimonios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {testimonials.map((testimonial, index) => (
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
              relative
              bg-white/5
              border border-white/10
              rounded-3xl
              p-8
              backdrop-blur-md
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

            {/* Estrellas */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.2 + index * 0.2,
              }}
              viewport={{ once: true }}
              className="relative z-10 flex gap-1 mb-5"
            >

              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: 0.3 + i * 0.05 + index * 0.15,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                >
                  <FaStar
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                </motion.div>
              ))}

            </motion.div>

            {/* Texto */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4 + index * 0.2,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="
                relative z-10
                text-white/75
                leading-relaxed
              "
            >
              {testimonial.text}
            </motion.p>

            {/* Autor */}
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + index * 0.2,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="
                relative z-10
                mt-6
                font-semibold
                text-primary-light
              "
            >
              {testimonial.author}
            </motion.h4>

          </motion.div>
        ))}

      </div>

    </section>
  )
}

export default TestimonialsSection