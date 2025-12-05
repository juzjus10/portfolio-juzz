import { Atom, GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <div className="container mx-auto px-6 py-20">
      {/* Education Header & Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-medium tracking-tight text-white mb-1 uppercase">Education</h2>
        <p className="text-lg text-rose-500/80 font-light tracking-tight">FOUNDATIONS OF INNOVATIONS</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Edu Card 1: Atom Icon */}
        <div className="border border-white/10 bg-white/[0.02] aspect-square md:aspect-auto md:h-64 flex items-center justify-center group hover:border-rose-500/30 transition-all duration-300">
          <Atom className="w-24 h-24 text-gray-500 group-hover:text-rose-400 transition-colors stroke-[1] opacity-80" />
        </div>

        {/* Edu Card 2: Masters Details */}
        <div className="border border-white/10 bg-white/[0.02] p-8 h-64 flex flex-col justify-center group hover:border-rose-500/30 transition-all duration-300">
          <h3 className="text-sm font-medium text-white tracking-wide uppercase mb-2">M.S. COMPUTER SCIENCE</h3>
          <p className="text-xs text-rose-400 font-mono mb-4">State University / 2016-2018</p>
          <div className="space-y-1">
            <p className="text-xs text-gray-500 font-light">Security basis analysis.</p>
            <p className="text-xs text-gray-500 font-light">Graduated with Honors.</p>
            <p className="text-xs text-gray-500 font-light mt-4 pt-4 border-t border-white/5">Awarded Dean&apos;s List for Senior Cognitive Eco-App.</p>
          </div>
        </div>

        {/* Edu Card 3: Bachelor Details + Icon */}
        <div className="relative border border-white/10 bg-white/[0.02] p-8 h-64 flex flex-col justify-end group hover:border-rose-500/30 transition-all duration-300 overflow-hidden">
          <div className="absolute top-8 right-8">
            <GraduationCap className="w-16 h-16 text-white/5 stroke-[1]" />
          </div>
          <h3 className="text-sm font-medium text-white tracking-wide uppercase mb-2">B.A. SOFTWARE ENGINEERING</h3>
          <p className="text-xs text-rose-400 font-mono mb-2">City College / 2012-2016</p>
        </div>
      </div>
    </div>
  );
}
