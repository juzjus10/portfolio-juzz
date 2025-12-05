export default function FeaturedWork() {
  return (
    <div className="lg:col-span-3 flex flex-col justify-between">
      <div className="relative w-full aspect-square border border-white/5 rounded-sm p-4 flex items-center justify-center overflow-hidden mb-8 lg:mb-0 bg-brand-panel">
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-rose-400/50 stroke-1 fill-none opacity-60">
          <path d="M40 100 L80 60 L120 140 L160 100"></path>
          <circle cx="40" cy="100" r="4" className="fill-rose-500"></circle>
          <circle cx="80" cy="60" r="4" className="fill-rose-500"></circle>
          <circle cx="120" cy="140" r="4" className="fill-rose-500"></circle>
          <circle cx="160" cy="100" r="4" className="fill-rose-500"></circle>
          <rect x="20" y="20" width="160" height="160" rx="4" className="stroke-white/10 stroke-[0.5]"></rect>
          <path d="M100 20 V180 M20 100 H180" className="stroke-white/5 stroke-[0.5]"></path>
        </svg>

      </div>

      <div className="hidden lg:block mt-auto">
        <h3 className="text-xl font-medium tracking-tight text-white">FEATURED WORK</h3>
        <p className="text-sm text-gray-500 mt-2 font-light">Experience reality redefined through our lens.</p>
      </div>
    </div>
  );
}
