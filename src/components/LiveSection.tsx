import TikTok from "../assets/Gemini_Generated_Image_p6ebvyp6ebvyp6eb.png";
import { motion } from "framer-motion";

function LiveSection() {
    return (
        <section
            id="sesiones"
            className="bg-neutral text-white pt-24 pb-8 px-4 sm:px-6 lg:px-8"
        >

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-10 bg-white/10 border border-white/20 rounded-xl"
            >

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    {/* IZQUIERDA */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >

                        {/* LIVE BADGE */}
                        <motion.div
                            animate={{
                                boxShadow: [
                                    "0 0 0px rgba(255,0,0,0.4)",
                                    "0 0 20px rgba(255,0,0,0.8)",
                                    "0 0 0px rgba(255,0,0,0.4)",
                                ],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                            className="
                                inline-flex items-center gap-2
                                bg-red-500/20
                                border border-red-500/40
                                px-4 py-2
                                rounded-full
                                mb-6
                            "
                        >
                            <div className="w-2 h-2 rounded-full bg-red-500" />

                            <span className="text-sm font-semibold text-red-400 uppercase tracking-widest">
                                Live Now
                            </span>
                        </motion.div>

                        <h2 className="text-white text-4xl md:text-6xl font-black leading-tight mb-6">
                            Estamos en vivo
                        </h2>

                        <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl mb-8">
                            Mira cómo preparamos tu pedido en tiempo real.
                            <br />
                            Transparencia total, desde nuestra cocina nocturna hasta tu puerta.
                        </p>

                        <motion.a
                            whileHover={{
                                scale: 1.05,
                                y: -3,
                            }}
                            whileTap={{ scale: 0.96 }}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary cursor-pointer inline-block"
                        >
                            Ver Live Ahora
                        </motion.a>

                    </motion.div>

                    {/* DERECHA - CELULAR */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >

                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
                                relative
                                w-[280px]
                                h-[560px]
                                bg-black
                                rounded-[3rem]
                                border border-white/10
                                overflow-hidden
                                shadow-2xl
                            "
                        >

                            {/* Glow */}
                            <div className="absolute inset-0 bg-primary/10 blur-3xl z-0" />

                            {/* Cámara */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20" />

                            {/* Imagen */}
                            <motion.img
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.4 }}
                                src={TikTok}
                                alt="Live Midnight Snacks"
                                className="w-full h-full object-cover"
                            />

                            {/* Usuario TikTok */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="
                                    absolute bottom-4 left-4
                                    bg-black/60
                                    backdrop-blur-sm
                                    px-4 py-2
                                    rounded-full
                                    border border-white/10
                                "
                            >

                                <p className="text-sm font-semibold text-white">
                                    @midnightsnacks.pe
                                </p>

                            </motion.div>

                        </motion.div>

                    </motion.div>

                </div>

            </motion.div>

        </section>
    );
}

export default LiveSection;