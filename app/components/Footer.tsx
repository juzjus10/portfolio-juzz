export default function Footer() {
  return (
    <div className="container mx-auto px-6 pb-12">
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-light tracking-widest">
        <p>© 2024 JUZZ. ALL RIGHTS RESERVED.</p>
        <svg className="w-6 h-6 text-rose-900 fill-current mt-4 md:mt-0" viewBox="0 0 24 24">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"></path>
        </svg>
      </div>
    </div>
  );
}
