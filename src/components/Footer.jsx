export default function Footer() {
  return (
    <footer className="border-t border-[#dde5dc] bg-[#eef2ec]">
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-7 h-7 flex items-center justify-center border border-[#2f6b58]/45 text-[#2f6b58] font-serif text-[13px]">
                維
              </span>
              <span className="text-[16px] font-semibold text-[#1d2b25] tracking-[0.04em]">维尔康 Welcome 工作室</span>
            </div>
            <p className="text-[13px] leading-[1.9] text-[#7d9287] max-w-xs">
              中医 · 针灸 · 推拿 · 治脊 · 拉伸。以辨证为先，以调理为要。<br />
              赵绮娜 · 主治中医师 · 从医 22 年<br />
              广州中医药大学 中医学 · 针灸推拿双专业<br />
              养心、养德、养身。
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[12px] font-medium text-[#1d2b25] mb-4 tracking-[0.2em]">项目</div>
            <ul className="space-y-2.5 text-[13px] text-[#55685f]">
              <li><a href="#services" className="hover:text-[#2f6b58] transition-colors">针灸 · 推拿 · 治脊</a></li>
              <li><a href="#consult" className="hover:text-[#2f6b58] transition-colors">线上辨证咨询</a></li>
              <li><a href="#kids" className="hover:text-[#2f6b58] transition-colors">小儿推拿 · 家长课</a></li>
              <li><a href="#notes" className="hover:text-[#2f6b58] transition-colors">养生随笔</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[12px] font-medium text-[#1d2b25] mb-4 tracking-[0.2em]">联系</div>
            <ul className="space-y-2.5 text-[13px] text-[#55685f]">
              <li>公众号「维尔康 welcome」后台留言</li>
              <li>健康科普长期更新于同一公众号</li>
              <li className="text-[#7d9287]">线上咨询为主，线下需另行预约</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#dde5dc] flex flex-col gap-3">
          <p className="text-[11.5px] leading-[1.9] text-[#8b9c92]">
            免责声明：本站内容为健康科普与调理思路分享，不构成诊疗意见，也不能替代线下面诊。急症、重症、外伤及不明原因症状，请及时前往正规医疗机构就诊。
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-2 text-[11.5px] text-[#8b9c92]">
            <span>© {new Date().getFullYear()} 维尔康 Welcome 工作室 · 赵绮娜</span>
            <span>养心 · 养德 · 养身</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
