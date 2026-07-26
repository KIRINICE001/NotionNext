import Card from './Card'

export function AnalyticsCard (props) {

  const { postCount, wordCount } = props

  // 建站日期
  const targetDate = new Date('2026-07-24')
  const today = new Date()

  const diffTime = today.getTime() - targetDate.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))


  return <Card>
    <div className='ml-2 mb-3'>
      <i className='fas fa-chart-area' /> 统计
    </div>

    <div className='text-base font-light justify-center mx-7'>

      <div className='flex justify-between'>
        <div>文章数:</div>
        <div>{postCount}</div>
      </div>


      <div className='flex justify-between'>
        <div>总字数:</div>
        <div>{wordCount || 0}</div>
      </div>


      <div className='flex justify-between'>
        <div>运行时间:</div>
        <div>{diffDays} 天</div>
      </div>


      <div className='hidden busuanzi_container_page_pv'>
        <div className='flex justify-between'>
          <div>访问量:</div>
          <div className='busuanzi_value_page_pv' />
        </div>
      </div>


      <div className='hidden busuanzi_container_site_uv'>
        <div className='flex justify-between'>
          <div>访客数:</div>
          <div className='busuanzi_value_site_uv' />
        </div>
      </div>

    </div>

  </Card>
}
