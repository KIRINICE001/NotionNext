import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm ${props.className || ''}`}>
      <span className='mr-1'>Powered by</span>
      <a
        href='https://github.com/tangly1024/NotionNext'
        className='text-gray-400 hover:text-gray-600 transition-colors'>
        NotionNext {siteConfig('VERSION')}
      </a>
      .
    </div>
  )
}
