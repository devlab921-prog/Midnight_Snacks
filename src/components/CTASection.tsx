import { motion } from "framer-motion";

function CTASection() {
    return (
        <section className="py-24 px-6 bg-black text-white">

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="
                    relative
                    max-w-4xl mx-auto
                    bg-white/5
                    border border-white/10
                    rounded-3xl
                    p-10 md:p-16
                    text-center
                    backdrop-blur-md
                    overflow-hidden
                "
            >

                {/* Glow animado */}
                <motion.div
                    animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        absolute
                        inset-0
                        bg-primary/10
                        blur-3xl
                    "
                />

                {/* Contenido */}
                <div className="relative z-10">

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.1,
                        }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        ¿Hambre a estas horas?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.25,
                        }}
                        viewport={{ once: true }}
                        className="
                            text-white/70
                            text-lg
                            mt-5
                            max-w-2xl
                            mx-auto
                        "
                    >
                        Estamos operativos. El grill está encendido y el drive está listo.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.4,
                        }}
                        viewport={{ once: true }}
                        className="mt-10"
                    >

                        <motion.a
                            whileHover={{
                                scale: 1.05,
                                y: -3,
                            }}
                            whileTap={{ scale: 0.96 }}
                            className="btn-primary inline-block"
                        >
                            Pedir Ahora por WhatsApp
                        </motion.a>

                    </motion.div>

                </div>

            </motion.div>

        </section>
    )
}

export default CTASection