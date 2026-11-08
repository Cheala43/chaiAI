import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#services', label: '调理项目' },
  { href: '#philosophy', label: '三养之道' },
  { href: '#consult', label: '线上咨询' },
  { href: '#kids', label: '小儿推拿' },
  { href: '#notes', label: '养生随笔' },
  { href: '#about', label: '关于我' },
]


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-[#f7f8f4]/88 backdrop-blur-xl border-b border-[#dde5dc]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-[60px] flex items-center justify-between">
        {/* 品牌 */}
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="w-7 h-7 flex items-center justify-center border border-[#2f6b58]/45 text-[#2f6b58] font-serif text-[13px] tracking-tight group-hover:bg-[#2f6b58] group-hover:text-white transition-colors duration-300">
            維
          </span>
          <span className="leading-none">
            <span className="block text-[15.5px] font-semibold text-[#1d2b25] tracking-[0.04em]">维尔康 · Welcome</span>
            <span className="block text-[10px] text-[#7d9287] tracking-[0.28em] mt-1">中醫工作室</span>
          </span>
        </a>

        {/* 桌面导航 */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 text-[13.5px] text-[#55685f] hover:text-[#2f6b58] transition-colors duration-200 tracking-[0.03em]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 px-5 py-2 text-[13.5px] font-medium text-white bg-[#2f6b58] hover:bg-[#245245] transition-colors duration-200 tracking-[0.06em]"
          >
            微信咨询
          </a>
        </div>

        {/* 移动端 */}
        <div className="flex items-center gap-2 md:hidden">
          <a href="#contact" className="px-4 py-1.5 text-[13px] font-medium text-white bg-[#2f6b58]">
            咨询
          </a>
          <button
            type="button"
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
            className="p-2 -mr-1 text-[#1d2b25]"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#f7f8f4]/97 backdrop-blur-xl border-b border-[#dde5dc]">
          <div className="max-w-6xl mx-auto px-5 py-2 flex flex-col">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-3.5 text-[15px] text-[#55685f] border-b border-[#dde5dc]/70 last:border-0 tracking-[0.03em]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
