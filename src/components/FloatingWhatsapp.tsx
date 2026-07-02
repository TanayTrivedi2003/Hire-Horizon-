import { MessageCircle } from "lucide-react";

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/919721759696"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="group flex items-center">
        <div className="hidden md:flex items-center bg-white rounded-l-full px-4 py-3 shadow-xl border opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Chat with us
            </p>
            <p className="text-xs text-slate-500">
              Usually replies instantly
            </p>
          </div>
        </div>

        <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300">
          <MessageCircle size={32} className="text-white" />
        </div>
      </div>
    </a>
  );
}