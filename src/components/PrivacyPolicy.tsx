function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-28">

      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-16">

          <div className="
            inline-flex items-center
            px-4 py-2
            rounded-full
            border border-primary/30
            bg-primary/10
            text-primary-light
            text-sm
            font-medium
            mb-6
          ">
            Privacidad Nocturna
          </div>

          <h1 className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-black
            leading-tight
            mb-6
          ">
            Protegemos tus datos tanto como cuidamos tu hambre a las 3 AM
          </h1>

          <p className="
            text-white/70
            text-base sm:text-lg
            max-w-3xl
            mx-auto
          ">
            En Midnight Snacks, te explicamos cómo manejamos tu información
            mientras disfrutas nuestros antojos nocturnos.
          </p>

          <p className="text-white/40 text-sm mt-6">
            Última actualización: Mayo 2026
          </p>

        </div>

        {/* CONTENIDO */}
        <div className="space-y-8">

          {/* CARD 1 */}
          <div className="
            bg-white/5
            border border-white/10
            rounded-3xl
            p-8 md:p-10
            backdrop-blur-md
          ">

            <h2 className="
              text-2xl md:text-3xl
              font-bold
              mb-6
            ">
              Recopilación de Información
            </h2>

            <p className="text-white/70 mb-8 leading-relaxed">
              Para procesar tus antojos de medianoche, necesitamos ciertos
              datos esenciales:
            </p>

            <div className="space-y-6">

              <div>
                <h3 className="font-semibold text-primary-light mb-2">
                  Órdenes vía WhatsApp
                </h3>

                <p className="text-white/70 leading-relaxed">
                  Tu número de teléfono y el historial de chats para asegurar
                  que tu pedido llegue correctamente.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary-light mb-2">
                  Dirección de entrega
                </h3>

                <p className="text-white/70 leading-relaxed">
                  Coordenadas exactas para que nuestro escuadrón de reparto
                  te encuentre incluso en la oscuridad.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary-light mb-2">
                  Preferencias gastronómicas
                </h3>

                <p className="text-white/70 leading-relaxed">
                  Lo que te gusta comer cuando el mundo duerme.
                </p>
              </div>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="
            bg-white/5
            border border-white/10
            rounded-3xl
            p-8 md:p-10
            backdrop-blur-md
          ">

            <h2 className="
              text-2xl md:text-3xl
              font-bold
              mb-6
            ">
              Uso de Datos
            </h2>

            <p className="text-white/70 leading-relaxed text-lg">
              Utilizamos tu información exclusivamente para optimizar nuestras
              rutas de entrega nocturna y personalizar tu menú diario.
              Nunca vendemos tu información a terceros; nuestro único negocio
              es la comida increíble.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="
            bg-white/5
            border border-white/10
            rounded-3xl
            p-8 md:p-10
            backdrop-blur-md
          ">

            <h2 className="
              text-2xl md:text-3xl
              font-bold
              mb-10
            ">
              Tus Derechos
            </h2>

            <div className="
              grid grid-cols-1
              md:grid-cols-3
              gap-6
            ">

              {/* DERECHO 1 */}
              <div className="
                bg-white/5
                border border-white/10
                rounded-2xl
                p-6
              ">

                <h3 className="
                  text-xl
                  font-semibold
                  text-primary-light
                  mb-4
                ">
                  Acceso
                </h3>

                <p className="text-white/70 leading-relaxed">
                  Puedes solicitar una copia de todos los datos que tenemos
                  sobre tus pedidos.
                </p>

              </div>

              {/* DERECHO 2 */}
              <div className="
                bg-white/5
                border border-white/10
                rounded-2xl
                p-6
              ">

                <h3 className="
                  text-xl
                  font-semibold
                  text-primary-light
                  mb-4
                ">
                  Eliminación
                </h3>

                <p className="text-white/70 leading-relaxed">
                  Derecho al olvido: borramos tu historial si decides dejar
                  de ser un noctámbulo.
                </p>

              </div>

              {/* DERECHO 3 */}
              <div className="
                bg-white/5
                border border-white/10
                rounded-2xl
                p-6
              ">

                <h3 className="
                  text-xl
                  font-semibold
                  text-primary-light
                  mb-4
                ">
                  Portabilidad
                </h3>

                <p className="text-white/70 leading-relaxed">
                  Lleva tus preferencias contigo a cualquier otra plataforma
                  si así lo deseas.
                </p>

              </div>

            </div>

          </div>

          {/* CARD FINAL */}
          <div className="
            bg-primary/10
            border border-primary/20
            rounded-3xl
            p-8 md:p-12
            text-center
          ">

            <h2 className="
              text-3xl
              md:text-4xl
              font-bold
              mb-5
            ">
              ¿Dudas sobre tus datos?
            </h2>

            <p className="
              text-white/70
              text-lg
              max-w-2xl
              mx-auto
              leading-relaxed
            ">
              Escríbenos directamente por WhatsApp para cualquier consulta
              relacionada con privacidad, soporte o información legal.
            </p>

            <div className="mt-10">

              <a className="btn-primary inline-block">
                Hablar con Soporte
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default PrivacyPolicy