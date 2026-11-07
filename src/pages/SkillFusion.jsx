import { useState } from 'react'
import { motion } from 'framer-motion'
import { skillSources, fusionPacks } from '../data/skillFusion'

const BASE = import.meta.env.BASE_URL || '/'

const catColors = {
  '东方智慧': 'border-emerald-500/30 from-emerald-500/10 to-transparent',
  '思维方法': 'border-violet-500/30 from-violet-500/10 to-transparent',
  '战略方法': 'border-red-500/30 from-red-500/10 to-transparent',
  '投资智慧': 'border-amber-500/30 from-amber-500/10 to-transparent',
}

const catAccents = {
  '东方智慧': 'text-emerald-400',
  '思维方法': 'text-violet-400',
  '战略方法': 'text-red-400',
  '投资智慧': 'text-amber-400',
}

function dl(url, name) {
  const a = document.createElement('a')
  a.href = url
  a.download = name
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

function dlTar(sourceId) {
  // 知本创业法 use sub-category tars
  if (sourceId === 'book2startup') {
    // Don't have a single tar for all - handled per category
    return
  }
  dl(`${BASE}skills/${sourceId}.tar.gz`, `${sourceId}.tar.gz`)
}

function dlSubTar(categorySlug) {
  dl(`${BASE}skills/book2startup-${categorySlug}.tar.gz`, `book2startup-${categorySlug}.tar.gz`)
}

function dlSkill(sourceId, slug) {
  // book2startup entries are categories, use sub-tar instead
  if (sourceId === 'book2startup') {
    dlSubTar(slug)
    return
  }
  dl(`${BASE}skills/${sourceId}/${slug}.md`, `${sourceId}-${slug}.md`)
}

function dlFusion(name, id) {
  const encoded = encodeURIComponent(name)
  dl(`${BASE}skills/fusion-packs/${encoded}.md`, `${id}.md`)
}

export default function SkillFusion() {
  const [expandedId, setExpandedId] = useState(null)
  const [expandedPack, setExpandedPack] = useState(null)
  const [tab, setTab] = useState('sources')

  const total = skillSources.reduce((s, src) => s + src.skills.length, 0)

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black mb-3">
            <span className="gradient-text">拆专家工坊</span>
          </h1>
          <p className="text-[#6e6e73] text-lg max-w-2xl mx-auto">
            把思想家蒸馏成可召唤的 AI 专家：<span className="text-neon-purple font-bold">8</span> 套思想体系、<span className="text-neon-purple font-bold">{total}</span> 个技能、<span className="text-neon-purple font-bold">6</span> 个专家团 — 全部本站直接下载
          </p>
          <p className="text-[#86868b] text-sm max-w-3xl mx-auto mt-4 leading-relaxed">
            以《毛泽东选集》为示范：把原著蒸馏成矛盾分析、调查研究等技能与工作流，结合毛选拆书精华，
            让教员思想落到你的真实决策与执行里。未来这些专家将进入
            <span className="text-[#1d1d1f] font-medium"> WorkBuddy</span>，随时召唤调用。
          </p>
        </div>

        {/* Workshop Section */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 md:p-10 border border-dark-border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/10 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-500/10 to-amber-500/10 border border-red-500/20 text-red-600 text-sm">
                新工作坊 · 定档后开放报名
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-[#1d1d1f] mb-3">拆专家工作坊 · 本期拆《毛泽东选集》</h2>
              <p className="text-[#6e6e73] max-w-3xl mb-8">
                目标不是读完毛选，是把<b className="text-[#1d1d1f]">思想家蒸馏成技能</b>——现场拆讲师做好的毛选技能包（矛盾分析、调查研究、战略方法……怎么从原著长出来），再亲手蒸馏出你自己的专家：一句召唤，随时上矩阵干活。
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="p-5 rounded-xl bg-dark-card-hover/50 border border-dark-border">
                  <div className="text-xs text-red-600 font-semibold mb-2">拆 · 讲师的毛选技能包</div>
                  <div className="text-sm font-bold text-[#1d1d1f]">8 套思想体系全打开</div>
                  <p className="text-xs text-[#86868b] mt-2">本页可直接下载的毛选技能就是现场教材：矛盾分析、调查研究怎么从《矛盾论》《反对本本主义》一节一节蒸馏成 SKILL.md，当堂拆给你看。</p>
                </div>
                <div className="p-5 rounded-xl bg-dark-card-hover/50 border border-dark-border">
                  <div className="text-xs text-red-600 font-semibold mb-2">做 · 你的专属专家</div>
                  <div className="text-sm font-bold text-[#1d1d1f]">换一本书，做你自己的专家</div>
                  <p className="text-xs text-[#86868b] mt-2">选你熟的一本书（一本兵法、一门手艺、一位你佩服的人），照同样的五步蒸馏法做出属于你的技能与专家团。</p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-red-500/10 to-amber-500/10 border border-red-500/30">
                  <div className="text-xs text-red-600 font-semibold mb-2">交付台阶 · 上矩阵</div>
                  <div className="text-sm font-bold text-[#1d1d1f]">你的专家，上算力矩阵跑</div>
                  <p className="text-xs text-[#86868b] mt-2">做好的专家接上工作流——定时用你的思想体系扫热点、读来信、出日报，专家从「点开才在」变成「全天在岗」。</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-xs font-semibold text-[#86868b] tracking-widest mb-3">带走三样</div>
                  <ul className="space-y-2 text-sm text-[#424245]">
                    <li className="flex gap-2"><span className="text-red-600 font-bold">①</span>拆懂「原著 → 技能」的五步蒸馏法（选段 → 提方法 → 定步骤 → 写护栏 → 组专家团）</li>
                    <li className="flex gap-2"><span className="text-red-600 font-bold">②</span>你自己的一个专家技能包，发到你自己的 GitHub 仓（现场发出去）</li>
                    <li className="flex gap-2"><span className="text-red-600 font-bold">③</span>一条上了矩阵的工作流：你的专家定时出选题、出报告，卡了会喊你</li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#86868b] tracking-widest mb-3">适合谁</div>
                  <ul className="space-y-2 text-sm text-[#424245]">
                    <li>读过毛选、想让方法真正落到决策里的人</li>
                    <li>想把自己信的一套思想固化成可召唤 AI 专家的人</li>
                    <li>上过拆技能工作坊、想再进一阶的老学员</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => { try { navigator.clipboard?.writeText('ikoning365') } catch (e) {} }}
                  className="px-5 py-2.5 rounded-xl bg-[#0071e3] text-white text-sm font-semibold hover:bg-[#0077ed] transition-all"
                  title="点击复制微信号"
                >
                  定档早知道 · 微信 ikoning365 📋
                </button>
                <span className="text-xs text-[#86868b]">时间地点定档后，报名帖发拆书帮公众号 · 12 人小班</span>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="flex justify-center gap-2 mb-10">
          {[
            { k: 'sources', l: '专家' },
            { k: 'fusion', l: '专家团' },
          ].map(t => (
            <button key={t.k}
              onClick={() => setTab(t.k)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                tab === t.k
                  ? 'bg-[#1d1d1f] text-white shadow-sm'
                  : 'bg-black/[.04] text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-black/[.06]'
              }`}
            >{t.l}</button>
          ))}
        </div>

        {tab === 'sources' && (
          <div className="grid gap-4">
            {skillSources.map(src => (
              <div key={src.id}
                className={`rounded-xl border bg-gradient-to-br ${catColors[src.category] || 'border-slate-700/50 from-slate-800/50 to-slate-900/50'} overflow-hidden`}
              >
                <button
                  onClick={() => setExpandedId(expandedId === src.id ? null : src.id)}
                  className="w-full flex items-center justify-between p-5 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`text-xl font-black ${catAccents[src.category] || 'text-[#424245]'}`}>
                      {src.name}
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-black/[.06] text-[#6e6e73]">
                      {src.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-black/[.06] text-[#6e6e73]">
                      {src.skills.length} 技能
                    </span>
                  </div>
                  <svg className={`w-5 h-5 text-[#86868b] shrink-0 transition-transform ${expandedId === src.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedId === src.id && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-[#86868b] mb-4">{src.description}</p>

                    {/* 下载全部 */}
                    {src.id !== 'book2startup' && (
                      <button onClick={() => dlTar(src.id)}
                        className="mb-4 px-4 py-1.5 rounded-lg bg-black/[.04] hover:bg-black/[.06] text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-all inline-flex items-center gap-1.5"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        下载全部 ({src.id}.tar.gz)
                      </button>
                    )}

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5">
                      {src.skills.map(sk => (
                        <div key={sk.slug}
                          className="group flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] transition-colors"
                        >
                          <div className="min-w-0 flex-1">
                            <div className="text-sm text-[#424245] group-hover:text-[#1d1d1f] transition-colors truncate">
                              {sk.name}
                            </div>
                            <div className="text-[11px] text-[#86868b] truncate">{sk.desc}</div>
                          </div>
                          <button onClick={() => dlSkill(src.id, sk.slug)}
                            className="ml-2 p-1.5 rounded hover:bg-black/[.06] text-[#86868b] hover:text-neon-purple transition-all opacity-0 group-hover:opacity-100 shrink-0"
                            title="下载">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === 'fusion' && (
          <div className="grid md:grid-cols-2 gap-5">
            {fusionPacks.map(p => (
              <div key={p.id}
                className="rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 hover:border-neon-purple/30 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setExpandedPack(expandedPack === p.id ? null : p.id)}
                  className="w-full text-left p-5"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-xl mr-2">{p.emoji}</span>
                      <span className="text-lg font-bold text-[#1d1d1f]">{p.name}</span>
                    </div>
                    <svg className={`w-5 h-5 text-[#86868b] shrink-0 mt-1 transition-transform ${expandedPack === p.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <p className="text-sm text-[#86868b]">{p.description}</p>
                </button>

                {expandedPack === p.id && (
                  <div className="px-5 pb-5">
                    <div className="space-y-1.5 mb-4">
                      {p.combinations.map((c, i) => {
                        const src = skillSources.find(s => s.id === c.from)
                        const sk = src?.skills.find(s => s.slug === c.skill)
                        return (
                          <div key={i} className="flex items-start gap-2.5 p-2 rounded-lg bg-white/[0.03]">
                            <span className="text-xs font-bold text-neon-purple mt-0.5 shrink-0">#{i + 1}</span>
                            <div className="min-w-0">
                              <div className="text-sm text-[#1d1d1f] truncate">
                                <span className="font-medium">{sk?.name || c.skill}</span>
                                <span className="text-[#86868b] mx-1">·</span>
                                <span className="text-[#86868b]">{src?.name}</span>
                              </div>
                              <div className="text-xs text-[#86868b] truncate">{c.desc}</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <button onClick={() => dlFusion(p.name, p.id)}
                      className="w-full py-2 rounded-lg bg-neon-purple/20 text-neon-purple text-sm font-medium hover:bg-neon-purple/30 transition-colors"
                    >
                      下载融合包 (.md)
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
