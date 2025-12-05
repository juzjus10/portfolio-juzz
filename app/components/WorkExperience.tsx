import { Cpu } from "lucide-react";

export default function WorkExperience() {
  return (
    <div className="container mx-auto px-6 py-20">
      {/* Work Experience Header */}
      <div className="flex flex-col mb-16 lg:pl-[25%]">
        <h2 className="text-2xl font-medium tracking-tight text-white mb-2 uppercase">Work Experience</h2>
        <p className="text-lg text-rose-500/90 font-light tracking-tight">JOURNEY THROUGH THE DIGITAL FRONTIER</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        {/* Circuit Illustration (Left) */}
        <div className="lg:col-span-3 flex items-center justify-center lg:justify-start opacity-70">
          <svg viewBox="0 0 200 200" className="w-64 h-64 lg:w-full lg:h-full stroke-rose-400/40 fill-none stroke-[0.8]">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"></feGaussianBlur>
                <feMerge>
                  <feMergeNode in="coloredBlur"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#glow)">
              <path d="M40 40 H80 V80 H120 V40 H160"></path>
              <path d="M40 160 H80 V120 H120 V160 H160"></path>
              <path d="M20 100 H180"></path>
              <path d="M100 20 V180"></path>
              <rect x="60" y="60" width="80" height="80" rx="4" className="fill-black/50"></rect>
              <circle cx="40" cy="40" r="3" className="fill-rose-500"></circle>
              <circle cx="160" cy="40" r="3" className="fill-rose-500"></circle>
              <circle cx="40" cy="160" r="3" className="fill-rose-500"></circle>
              <circle cx="160" cy="160" r="3" className="fill-rose-500"></circle>
              <circle cx="100" cy="100" r="10" className="stroke-white/20"></circle>
              <path d="M10 50 H30 M10 60 H30 M10 70 H30"></path>
              <path d="M170 130 H190 M170 140 H190 M170 150 H190"></path>
            </g>
          </svg>
        </div>

        {/* Timeline Container (Right) */}
        <div className="lg:col-span-9 relative pt-4">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute bottom-12 left-0 w-full h-px bg-white/20"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 pb-0 lg:pb-12">
            {/* Timeline Item 1 */}
            <div className="group relative flex flex-col justify-end">
              <div className="border border-white/10 bg-white/[0.02] p-6 hover:border-rose-500/40 transition-colors duration-300 min-h-[180px] flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium text-white tracking-wide uppercase">LEAD WEB DEVELOPER</h3>
                  <p className="text-xs text-rose-400 font-mono mt-1 mb-3">TechCorp / 2022 - Present</p>
                  <ul className="text-xs text-gray-500 space-y-2 list-disc list-inside font-light">
                    <li>Spearheaded rearchitecting of blog platform</li>
                    <li>Implemented CI/CD pipelines</li>
                  </ul>
                </div>
              </div>
              <div className="hidden lg:flex absolute -bottom-12 left-1/2 -translate-x-1/2 flex-col items-center h-12">
                <div className="w-px h-full bg-white/20 group-hover:bg-rose-500/50 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-brand-dark border border-white group-hover:border-rose-500 translate-y-[50%] z-10"></div>
              </div>
            </div>

            {/* Timeline Item 2 (Visual) */}
            <div className="group relative flex flex-col justify-end">
              <div className="border border-white/10 bg-white/[0.02] p-6 flex items-center justify-center min-h-[180px] hover:bg-white/[0.03] transition-colors">
                <Cpu className="w-10 h-10 text-rose-400 stroke-[1] opacity-80" />
              </div>
              <div className="hidden lg:flex absolute -bottom-12 left-1/2 -translate-x-1/2 flex-col items-center h-12">
                <div className="w-px h-full bg-white/20 group-hover:bg-rose-500/50 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-brand-dark border border-white group-hover:border-rose-500 translate-y-[50%] z-10"></div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="group relative flex flex-col justify-end">
              <div className="border border-white/10 bg-white/[0.02] p-6 hover:border-rose-500/40 transition-colors duration-300 min-h-[180px] flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium text-white tracking-wide uppercase">SOFTWARE ENGINEER</h3>
                  <p className="text-xs text-rose-400 font-mono mt-1 mb-3">Imovatex / 2016-2022</p>
                  <p className="text-xs text-gray-500 leading-relaxed font-light">
                    Built core connection strategies API app. Optimized Next.js build quality by 30%.
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex absolute -bottom-12 left-1/2 -translate-x-1/2 flex-col items-center h-12">
                <div className="w-px h-full bg-white/20 group-hover:bg-rose-500/50 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-brand-dark border border-white group-hover:border-rose-500 translate-y-[50%] z-10"></div>
              </div>
            </div>

            {/* Timeline Item 4 (Visual) */}
            <div className="group relative flex flex-col justify-end">
              <div className="border border-white/10 bg-white/[0.02] p-6 flex items-center justify-center min-h-[180px] hover:bg-white/[0.03] transition-colors">
                <div className="relative w-12 h-20 border border-rose-400/40 rounded-lg p-1">
                  <div className="w-full h-full border-t border-rose-400/20"></div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-rose-400/40"></div>
                </div>
              </div>
              <div className="hidden lg:flex absolute -bottom-12 left-1/2 -translate-x-1/2 flex-col items-center h-12">
                <div className="w-px h-full bg-white/20 group-hover:bg-rose-500/50 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-brand-dark border border-white group-hover:border-rose-500 translate-y-[50%] z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
