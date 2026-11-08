import { motion } from 'framer-motion'

const services = [
  {
    k: '针灸',
    en: 'Acupuncture',
    tag: '经络 · 气血',
    d: '以针刺特定穴位疏通经络、调畅气血。常见于颈肩腰腿痛、头痛、失眠、胃肠不适等问题的调理过程中使用。',
  },
  {
    k: '推拿',
    en: 'Tuina',
    tag: '经筋 · 手法',
    d: '以手法作用于经筋与穴位，松解紧张、改善局部循环。久坐劳损、肩颈僵硬、腰背酸沉最为常见。',
  },
  {
    k: '治脊',
    en: 'Spine Care',
    tag: '脊柱 · 力线',
    d: '从脊柱整体力线入手，处理因姿势不良、长期劳损引起的脊背不适与体态问题，常用龙氏治脊手法，松解与稳定并重。',
  },
  {
    k: '拉伸',
    en: 'Stretching',
    tag: '柔韧 · 活动度',
    d: '针对性拉伸紧张肌群、激活薄弱肌群，配合呼吸训练，逐步恢复关节活动度与身体协调。',
  },
  {
    k: '辨证调理',
    en: 'Consultation',
    tag: '整体 · 体质',
    d: '把饮食、作息、情志、体质放在一起看，给出可执行的调理方向，而不是只盯住单一症状。',
  },
  {
    k: '小儿推拿',
    en: 'Pediatric Tuina',
    tag: '育儿 · 保健',
    d: '面向儿童的保健调理手法，也教家长在日常里做。重点是增强体质、改善食欲与睡眠。',
  },
]

const sanYang = [
  {
    n: '壹',
    k: '养心',
    d: '身体的很多不适，根子在情绪与压力。先把心安顿下来，作息、饮食、手法才有落脚处。',
  },
  {
    n: '贰',
    k: '养德',
    d: '医者先正己。不夸大、不承诺、不拖延，该建议你去医院检查的时候，一定直说。',
  },
  {
    n: '叁',
    k: '养身',
    d: '调理是慢功夫。手法解一时之困，习惯决定长久之安。所以每一份建议，都要能落到日常。',
  },
]

const consultSteps = [
  {
    n: '01',
    k: '说明情况',
    d: '公众号后台留言，描述不适的部位、持续时间、加重或缓解的因素，以及作息、饮食和已有的检查结果。信息越具体，判断越准。',
  },
  {
    n: '02',
    k: '梳理思路',
    d: '给出可能相关的因素、需要留意的地方，以及哪些情况建议先去正规医院排查。这一步不急着给方案。',
  },
  {
    n: '03',
    k: '调理方案',
    d: '可执行的居家调理：按揉哪些穴位、怎么做拉伸、饮食作息怎么调。都是在家就能做的动作。',
  },
  {
    n: '04',
    k: '阶段回看',
    d: '一段时间后回看变化，再调方向。调理不是一次性交付，是跟着身体反应走的。',
  },
]

const kidCourses = [
  { n: 'A', k: '基础诊断与手法', d: '基本手法、常用穴位，以及怎么在家判断孩子的状态。' },
  { n: 'B', k: '呼吸道与消化道', d: '针对咳嗽、鼻塞、积食、便秘、腹泻等常见不适的调理手法。' },
  { n: 'C', k: '其他不适与外治', d: '小儿其他常见不适的调理手法，以及配合的外治方法。' },
]

const commonAsks = [
  '久坐办公，肩颈腰背总是发紧发酸',
  '睡不好、容易累，休息了也缓不过来',
  '孩子吃饭不香、睡得不安稳',
  '含胸、驼背、圆肩，体态越来越差',
  '运动之后恢复慢，总觉得身上“卡着”',
  '想学一套在家就能给自己和家人做的手法',
]

export default function Home() {
  return (
    <div id="top" className="hero-wash">
      {/* ==================== Hero ==================== */}
      <section className="relative pt-32 md:pt-40 pb-24 px-5 overflow-hidden">
        {/* 装饰：经络细线 */}
        <svg
          className="hidden lg:block absolute right-[-60px] top-[80px] w-[420px] opacity-[0.16] pointer-events-none"
          viewBox="0 0 400 400"
          fill="none"
          stroke="#2f6b58"
          strokeWidth="1"
        >
          <circle cx="200" cy="200" r="150" strokeDasharray="2 6" />
          <circle cx="200" cy="200" r="104" />
          <path d="M200 50v300M50 200h300M94 94l212 212M306 94L94 306" strokeDasharray="1 5" />
          <circle cx="200" cy="200" r="22" />
          <circle cx="200" cy="96" r="4" fill="#2f6b58" />
          <circle cx="304" cy="200" r="4" fill="#2f6b58" />
          <circle cx="200" cy="304" r="4" fill="#2f6b58" />
          <circle cx="96" cy="200" r="4" fill="#2f6b58" />
        </svg>

        <div className="max-w-3xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="hidden sm:block h-px w-10 bg-[#2f6b58]/30" />
              <span className="eyebrow !tracking-[0.22em] sm:!tracking-[0.32em] whitespace-nowrap">中醫 · 針灸 · 推拿 · 治脊 · 拉伸</span>
              <span className="hidden sm:block h-px w-10 bg-[#2f6b58]/30" />
            </div>

            <h1 className="headline text-[42px] md:text-[62px] mb-8">
              养心 · 养德 · 养身
            </h1>

            <p className="lede max-w-xl mx-auto mb-4">
              维尔康 Welcome 工作室，专注中医、针灸、推拿、治脊、拉伸。
              希望我们的专业，能帮你解除疑惑和病痛。
            </p>
            <p className="text-[13.5px] text-[#8b9c92] tracking-[0.06em] mb-10">
              主治中医师 · 从医 22 年 · 广州中医药大学双专业 · 线上咨询为主
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#contact" className="btn-primary w-full sm:w-auto">微信咨询</a>
              <a href="#services" className="btn-secondary w-full sm:w-auto">看调理项目</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== 三养之道 ==================== */}
      <section id="philosophy" className="py-24 px-5 bg-white border-y border-[#dde5dc]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="eyebrow mb-4">我們的理念</div>
            <h2 className="headline text-[30px] md:text-[40px] mb-5">三养之道</h2>
            <p className="lede max-w-xl mx-auto">
              养心、养德、养身，是维尔康一直在做的事，也是我们和每一位来访者的共同目标。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#dde5dc]">
            {sanYang.map((s) => (
              <div key={s.k} className="bg-white px-8 py-10">
                <div className="font-serif text-[13px] text-[#b08d4f] tracking-[0.3em] mb-5">{s.n}</div>
                <div className="font-serif text-[24px] text-[#1d2b25] mb-4 tracking-[0.1em]">{s.k}</div>
                <div className="text-[13.5px] leading-[1.95] text-[#55685f]">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 调理项目 ==================== */}
      <section id="services" className="py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 md:flex md:items-end md:justify-between">
            <div>
              <div className="eyebrow mb-4">調理項目</div>
              <h2 className="headline text-[30px] md:text-[40px]">从手法到习惯，一层层往深处走</h2>
            </div>
            <p className="lede max-w-sm mt-5 md:mt-0 md:text-right">
              针灸、推拿、治脊、拉伸各有侧重，实际调理中往往配合使用。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.k} className="herb-card p-7 flex flex-col">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-serif text-[21px] text-[#1d2b25] tracking-[0.08em]">{s.k}</span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#b3c2b8]">{s.en}</span>
                </div>
                <span className="seal self-start mb-4">{s.tag}</span>
                <p className="text-[13.5px] leading-[1.95] text-[#55685f] flex-1">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-[#dde5dc]">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-3">
                <div className="eyebrow mb-3">常見諮詢</div>
                <h3 className="font-serif text-[20px] text-[#1d2b25] leading-relaxed">
                  大家通常为什么事来问
                </h3>
              </div>
              <div className="md:col-span-9 grid sm:grid-cols-2 gap-x-10 gap-y-4">
                {commonAsks.map(a => (
                  <div key={a} className="flex items-start gap-3 text-[13.5px] text-[#55685f] leading-relaxed">
                    <span className="mt-[9px] w-1 h-1 flex-shrink-0 bg-[#6ba58e]" />
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 线上咨询 ==================== */}
      <section id="consult" className="py-24 px-5 herb-texture border-y border-[#dde5dc]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="eyebrow mb-4">線上諮詢</div>
            <h2 className="headline text-[30px] md:text-[40px] mb-5">线上能做什么，不能做什么</h2>
            <p className="lede max-w-2xl mx-auto">
              线上看不到脉象、摸不到肌筋，所以它擅长的是把思路理清楚、把方法教给你；
              需要动手处理的，还是要回到线下。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#d6e0d6] mb-16">
            {consultSteps.map((s) => (
              <div key={s.n} className="bg-[#f7f8f4] p-7">
                <div className="font-serif text-[26px] text-[#6ba58e] mb-4">{s.n}</div>
                <div className="font-serif text-[17px] text-[#1d2b25] mb-3 tracking-[0.06em]">{s.k}</div>
                <div className="text-[13px] leading-[1.95] text-[#55685f]">{s.d}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#dde5dc] p-8">
              <div className="font-serif text-[18px] text-[#2f6b58] mb-4 tracking-[0.08em]">适合线上咨询</div>
              <ul className="space-y-3 text-[13.5px] text-[#55685f] leading-relaxed">
                <li>想弄清自己的不适大概属于什么方向</li>
                <li>需要一套在家能坚持做的调理动作</li>
                <li>饮食、作息、体质上的长期困惑</li>
                <li>孩子日常保健手法怎么学、怎么做</li>
              </ul>
            </div>
            <div className="bg-white border border-[#dde5dc] p-8">
              <div className="font-serif text-[18px] text-[#b08d4f] mb-4 tracking-[0.08em]">建议直接就医</div>
              <ul className="space-y-3 text-[13.5px] text-[#55685f] leading-relaxed">
                <li>突发剧烈疼痛、外伤、骨折</li>
                <li>高热、抽搐、喷射性呕吐等急症</li>
                <li>不明原因的消瘦、出血、包块</li>
                <li>需要影像与化验才能判断的情况</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 小儿推拿 ==================== */}
      <section id="kids" className="py-24 px-5 bg-white border-b border-[#dde5dc]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <div className="eyebrow mb-4">小兒推拿</div>
              <h2 className="headline text-[30px] md:text-[38px] mb-6">
                手在孩子身上，<br />功夫在家长手里
              </h2>
              <p className="lede mb-6">
                小儿推拿最精髓的地方，是应对孩子日常的各种不适、增强体质，
                让孩子少吃药、少打针、少往医院跑。
              </p>
              <p className="text-[13.5px] leading-[1.95] text-[#55685f] mb-6">
                但它不是万能的。任何一种医术都有软肋。
                如果孩子出现高热惊厥、喷射性呕吐、喘憋（三凹征）这类急重症，
                请立刻送医，不要耽误。
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="seal">小班 · 2–3 个家庭 · 需提前预约</span>
                <span className="seal">省中医药学会小儿推拿专委会委员</span>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="space-y-px bg-[#dde5dc]">
                {kidCourses.map((c) => (
                  <div key={c.n} className="bg-white px-7 py-6 flex gap-6">
                    <div className="font-serif text-[22px] text-[#6ba58e] leading-none pt-1">{c.n}</div>
                    <div>
                      <div className="font-serif text-[17px] text-[#1d2b25] mb-2 tracking-[0.04em]">{c.k}</div>
                      <div className="text-[13px] leading-[1.9] text-[#55685f]">{c.d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-[13px] leading-[1.9] text-[#7d9287]">
                现场手把手教，也给孩子做一次保健调理。学完回家就能用，遇事不慌。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 关于我 ==================== */}
      <section id="about" className="py-24 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="eyebrow mb-4">關於</div>
            <h2 className="headline text-[32px] md:text-[42px] mb-4">赵绮娜</h2>
            <p className="text-[13px] tracking-[0.2em] text-[#7d9287]">维尔康 Welcome 工作室 主理人</p>
            <p className="text-[12px] tracking-[0.14em] text-[#8b9c92] mt-2.5">主治中医师 · 从医 22 年 · 广州中医药大学双专业</p>
          </div>

          <div className="space-y-6 text-[15px] leading-[2] text-[#3f5148]">
            <p>
              我是赵绮娜，毕业于<span className="text-[#2f6b58]">广州中医药大学</span>，中医学与针灸推拿双专业，
              从医二十二年余，主治中医师。现为广东省中西医结合学会康复专业委员会常务委员、
              广东省中医药学会小儿推拿专委会委员。
            </p>
            <p>
              临床上主张<span className="text-[#2f6b58]">针药结合</span>——该用针时用针，该用药时用药，
              擅用针灸、推拿与龙氏治脊等方法，处理家庭里常见、多发的那些毛病：
              颈肩腰腿的不适、落枕闪腰、头痛失眠、胃肠不和，以及孩子的积食、咳嗽、睡不安稳。
            </p>
            <p>
              2016 年，我在公众号「维尔康 welcome」写下第一篇健康分享，写的是这个工作室想做的事：
              <span className="text-[#2f6b58]">希望我们的专业，能帮你解除疑惑和病痛</span>。
              这些年除了看诊，也一直在做两件事：开工作室，办分享群。
              推广中医这件事，靠一个人看不完，得让更多家庭自己懂一点。
            </p>
            <p>
              我的思路很朴素：先看清楚，再动手。看体质，也看作息、情绪、饮食习惯——
              很多反复发作的不适，根子不在疼的那个地方。所以我更愿意花时间问清楚，
              而不是上来就按几下、扎两针了事。
            </p>
            <p>
              也不承诺“根治”。身体是自己的，手法和药物只是帮忙，
              真正让状态稳下来的，是日复一日的小习惯。这也是我一直把“养心、养德、养身”
              挂在最前面的原因。
            </p>
            <p>
              如果你正被某个不适困扰，或者只是想找个懂行的人问问，
              欢迎在公众号后台留言。能帮的我尽力，需要去医院的，我也会直接说。
            </p>
          </div>

          <div className="mt-12 pt-9 border-t border-[#dde5dc]">
            <div className="text-center text-[11px] tracking-[0.34em] text-[#b08d4f] mb-8">資 歷</div>
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                ['22 年', '从医'],
                ['双专业', '中医学 · 针灸推拿'],
                ['主治', '中医师'],
              ].map(([big, small]) => (
                <div key={small}>
                  <div className="font-serif text-[26px] text-[#2f6b58] mb-1.5">{big}</div>
                  <div className="text-[11.5px] text-[#8b9c92] tracking-[0.06em]">{small}</div>
                </div>
              ))}
            </div>

            <div className="mt-9 space-y-3">
              {[
                ['广东省中西医结合学会康复专业委员会', '常务委员'],
                ['广东省中医药学会小儿推拿专委会', '委员'],
              ].map(([org, role]) => (
                <div
                  key={org}
                  className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-[#dde5dc]/70 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-[13px] text-[#3f5148]">{org}</span>
                  <span className="text-[11.5px] tracking-[0.2em] text-[#b08d4f]">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 联系 ==================== */}
      <section id="contact" className="py-24 px-5 bg-[#245245] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-[11.5px] tracking-[0.34em] text-[#9dc4b2] mb-6">聯繫我們</div>
          <h2 className="font-serif text-[30px] md:text-[38px] leading-[1.4] mb-6">
            有话想问，就先留言
          </h2>
          <p className="text-[14.5px] leading-[1.95] text-[#c9ded3] mb-10 max-w-lg mx-auto">
            线上咨询为主，留言由<span className="text-white">赵绮娜</span>医师本人回复。
            <br />把你的情况写清楚，我会尽快回；线下调理需另行预约。
          </p>

          <div className="inline-block border border-[#4a7a68] px-10 py-8 bg-[#1f4739]/60">
            <div className="text-[11.5px] tracking-[0.3em] text-[#9dc4b2] mb-3">微信公眾號</div>
            <div className="font-serif text-[22px] tracking-[0.1em]">维尔康 welcome</div>
            <div className="text-[12px] text-[#9dc4b2] mt-4 leading-relaxed">
              搜索公众号名称，关注后在后台直接留言
            </div>
          </div>

          <p className="mt-10 text-[12px] text-[#7fa795] leading-[1.9]">
            本站内容为健康科普，不构成诊疗意见，也不能替代线下面诊。<br />
            急症重症请及时前往正规医疗机构。
          </p>
        </div>
      </section>
    </div>
  )
}
