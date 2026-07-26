import Card from './Card'
import { siteConfig } from '@/lib/config'

export function AnalyticsCard (props) {
  const { postCount, allPages } = props

  // ================= 1. 建站天数计算 =================
  // 默认读取 site.config.js 中的 SINCE 年份（如 2023）
  // 💡 如果想精确到具体日期，可以直接把下面这行改为例如: const startDateStr = '2023-05-20'
  const startDateStr = siteConfig('SINCE') ? ${siteConfig('SINCE')}-01-01 : '2026-07-24'
  
  const startDate = new Date(startDateStr)
  const today = new Date()
  const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24))

  // ================= 2. 全站字数计算 =================
  const totalWords = allPages?.reduce((acc, post) => {
    return acc + (post.wordCount || 0)
  }, 0) || 0

  // 格式化字数：超过 1 万显示为 X.X 万，否则显示具体数字
  const formatWordCount = (count) => {
    if (count >= 10000) {
      return (count / 10000).toFixed(1) + ' 万'
    }
    return count
  }

  return (
    <Card>
      /* 头部标题区域（保持原有 UI 样式） */
      <div className='ml-2 mb-3 '>
        <i className='fas fa-chart-area' /> 统计
      </div>

      /* 统计列表（保持原有 text-xs font-light 样式） */
      <div className='text-xs font-light justify-center mx-7'>
        /* 文章数 */
        <div className='inline'>
          <div className='flex justify-between'>
            <div>文章数:</div>
            <div>{postCount}</div>
          </div>
        </div>

        /* 新增：全站字数 */
        <div className='inline'>
          <div className='flex justify-between mt-1'>
            <div>全站字数:</div>
            <div>{formatWordCount(totalWords)}</div>
          </div>
        </div>

        /* 新增：运行天数 */
        <div className='inline'>
          <div className='flex justify-between mt-1'>
            <div>建站天数:</div>
            <div>{diffDays > 0 ? diffDays : 1} 天</div>
          </div>
        </div>

        /* 访问量（不蒜子统计，保持原有类名与结构） */
        <div className='hidden busuanzi_container_page_pv ml-2'>
          <div className='flex justify-between mt-1'>
            <div>访问量:</div>
            <div className='busuanzi_value_page_pv' />
          </div>
        </div>

        /* 访客数（不蒜子统计，保持原有类名与结构） */
        <div className='hidden busuanzi_container_site_uv ml-2'>
          <div className='flex justify-between mt-1'>
            <div>访客数:</div>
            <div className='busuanzi_value_site_uv' />
          </div>
        </div>
      </div>
    </Card>
  )
}
