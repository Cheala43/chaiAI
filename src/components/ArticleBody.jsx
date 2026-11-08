/** 文章正文渲染（单页内嵌，随 Home 的「养生随笔」板块一起输出）
 *  数据结构见 src/data/articles.js
 */

function inline(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((p, i) =>
    p.startsWith('**') && p.endsWith('**') ? (
      <strong key={i} className="font-semibold text-[#1d2b25]">
        {p.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    ),
  )
}

function Recipe({ b }) {
  return (
    <div className="herb-card p-7 my-8">
      <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
        <h4 className="font-serif text-[21px] text-[#1d2b25] tracking-[0.08em]">{b.name}</h4>
        <div className="flex flex-wrap gap-2">
          {b.tags?.map((t) => (
            <span key={t} className="seal">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="text-[13.5px] leading-[1.95] text-[#55685f] mb-5">
        <span className="text-[#2f6b58]">适用：</span>
        {b.indication}
      </div>

      <div className="space-y-3 border-t border-[#dde5dc] pt-5">
        <div>
          <div className="text-[11.5px] tracking-[0.24em] text-[#b08d4f] mb-2">組 成</div>
          <ul className="space-y-1.5">
            {b.ingredients?.map((x) => (
              <li key={x} className="flex items-start gap-3 text-[13.5px] text-[#3f5148] leading-relaxed">
                <span className="mt-[9px] w-1 h-1 flex-shrink-0 bg-[#6ba58e]" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[11.5px] tracking-[0.24em] text-[#b08d4f] mb-2">用 法</div>
          <p className="text-[13.5px] leading-[1.9] text-[#3f5148]">{b.usage}</p>
        </div>
        {b.effect && (
          <div>
            <div className="text-[11.5px] tracking-[0.24em] text-[#b08d4f] mb-2">功 用</div>
            <p className="text-[13.5px] leading-[1.9] text-[#3f5148]">{b.effect}</p>
          </div>
        )}
        {b.note && <p className="text-[12.5px] leading-[1.9] text-[#7d9287] pt-1">加减：{b.note}</p>}
      </div>
    </div>
  )
}

function Block({ b }) {
  if (b.t === 'h') {
    return (
      <h3 className="font-serif text-[21px] md:text-[24px] text-[#1d2b25] tracking-[0.04em] mt-12 mb-5 pb-3 border-b border-[#dde5dc]">
        {b.v}
      </h3>
    )
  }
  if (b.t === 'p') {
    return <p className="text-[15px] leading-[2] text-[#3f5148] mb-5">{inline(b.v)}</p>
  }
  if (b.t === 'list') {
    return (
      <ul className="mb-6 space-y-3">
        {b.items.map((x, i) => (
          <li key={i} className="flex items-start gap-3 text-[14.5px] leading-[1.95] text-[#3f5148]">
            <span className="mt-[11px] w-1 h-1 flex-shrink-0 bg-[#6ba58e]" />
            <span>{inline(x)}</span>
          </li>
        ))}
      </ul>
    )
  }
  if (b.t === 'quote') {
    return (
      <blockquote className="my-8 border-l-2 border-[#6ba58e] bg-[#eef2ec] px-6 py-5">
        <p className="font-serif text-[16px] leading-[1.95] text-[#245245]">{b.v}</p>
      </blockquote>
    )
  }
  if (b.t === 'recipe') return <Recipe b={b} />
  return null
}

export default function ArticleBody({ article }) {
  return (
    <article id={`note-${article.slug}`} className="max-w-2xl mx-auto scroll-mt-24">
      <div className="flex items-center gap-3 mb-5">
        <span className="seal">{article.tag}</span>
        <span className="text-[12px] tracking-[0.12em] text-[#8b9c92]">
          {article.date.replace(/-/g, '.')} · 约 {article.readMin} 分钟
        </span>
      </div>

      <h3 className="headline text-[26px] md:text-[34px] mb-3">{article.title}</h3>
      <p className="lede mb-8">{article.subtitle}</p>

      <div className="rule mb-10" />

      {article.blocks.map((b, i) => (
        <Block key={i} b={b} />
      ))}

      <div className="rule mt-12 mb-6" />

      <div className="text-[12.5px] leading-[2] text-[#7d9287]">
        <p>
          本文原发于公众号「维尔康 welcome」，{article.originalDate}；此处为整理重发版。
        </p>
        <p className="mt-2">
          站内所有内容为健康科普，不构成诊疗意见，也不能替代线下面诊。急症重症请及时前往正规医疗机构。
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a href="#contact" className="btn-primary">
          有情况想问 → 留言咨询
        </a>
        <a href="#services" className="btn-secondary">
          看调理项目
        </a>
      </div>
    </article>
  )
}
