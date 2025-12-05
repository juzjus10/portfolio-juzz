import { Box, Layers, Smartphone } from "lucide-react";

export default function Services() {
  return (
    <div className="lg:col-span-9">
      <div className="mb-12">
        <h2 className="text-2xl font-medium tracking-tight text-white mb-1">THE ARCHITECT BEHIND THE CODE</h2>
        <p className="text-lg text-rose-500/80 font-light tracking-tight">DIGITAL MASTERPIECES</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="group border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-rose-500/30 transition-all duration-300 cursor-pointer h-64 flex flex-col justify-between">
          <Box className="w-8 h-8 text-rose-400 stroke-[1.5]" />
          <div>
            <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-2">Custom Web Development</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Robust architectures tailored to your specific business needs with scalable code.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-rose-500/30 transition-all duration-300 cursor-pointer h-64 flex flex-col justify-between">
          <Layers className="w-8 h-8 text-rose-400 stroke-[1.5]" />
          <div>
            <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-2">UI/UX Design</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Crafting intuitive interfaces that engage users and drive conversion metrics.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-rose-500/30 transition-all duration-300 cursor-pointer h-64 flex flex-col justify-between">
          <Smartphone className="w-8 h-8 text-rose-400 stroke-[1.5]" />
          <div>
            <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-2">API Integration</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Seamlessly connecting third-party services to enhance application functionality.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
