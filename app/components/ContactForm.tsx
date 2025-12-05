import { Linkedin, Dribbble } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl font-medium tracking-tight text-white mb-1 uppercase">Get In Touch</h2>
          <p className="text-base text-gray-400 font-light">CRAFTING YOUR VISION</p>
        </div>

        <form className="space-y-6 mb-12">
          <div className="group relative">
            <input
              type="text"
              id="name"
              required
              placeholder=" "
              className="peer w-full bg-transparent border border-white/20 p-4 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors uppercase placeholder-transparent"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-4 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:bg-brand-dark peer-focus:px-2 peer-focus:text-rose-500 peer-valid:-top-2.5 peer-valid:bg-brand-dark peer-valid:px-2 cursor-text"
            >
              NAME
            </label>
          </div>

          <div className="group relative">
            <input
              type="email"
              id="email"
              required
              placeholder=" "
              className="peer w-full bg-transparent border border-white/20 p-4 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors uppercase placeholder-transparent"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-4 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:bg-brand-dark peer-focus:px-2 peer-focus:text-rose-500 peer-valid:-top-2.5 peer-valid:bg-brand-dark peer-valid:px-2 cursor-text"
            >
              EMAIL
            </label>
          </div>

          <div className="group relative">
            <textarea
              id="message"
              rows={2}
              required
              placeholder=" "
              className="peer w-full bg-transparent border border-white/20 p-4 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors uppercase placeholder-transparent resize-none"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-4 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:bg-brand-dark peer-focus:px-2 peer-focus:text-rose-500 peer-valid:-top-2.5 peer-valid:bg-brand-dark peer-valid:px-2 cursor-text"
            >
              MESSAGE
            </label>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5 stroke-[1.5]" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Dribbble className="w-5 h-5 stroke-[1.5]" />
              </a>
            </div>
            <button type="submit" className="border border-white/20 hover:bg-white hover:text-black hover:border-white text-white text-xs tracking-widest px-8 py-3 transition-all duration-300 font-medium">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
