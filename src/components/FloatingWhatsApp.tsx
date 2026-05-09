import { FaWhatsapp } from "react-icons/fa"

function FloatingWhatsApp() {
  return (
    <a
      className="
        fixed bottom-6 right-6
        w-16 h-16
        rounded-full
        bg-green-500
        flex items-center justify-center
        shadow-2xl
        hover:scale-110
        transition-all duration-300
        animate-pulse
        z-50
        cursor-pointer
      "
    >
      <FaWhatsapp size={32} className="text-white" />
    </a>
  )
}

export default FloatingWhatsApp