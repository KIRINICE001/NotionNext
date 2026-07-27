import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import BeiAnSite from '@/components/BeiAnSite'
import PoweredBy from '@/components/PoweredBy'
import { siteConfig } from '@/lib/config'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-8 text-gray-600 dark:text-gray-200 py-10 px-6 '>
      {/* <DarkModeButton/> */}
      {/* 第一行：版权 */}
      <div className='text-base'>
        Copyright © {copyrightDate}{' '}
      <span>
        <a
          href='/aboutme'
          className='font-bold dark:text-gray-300 hover:text-gray-400 transition-colors'>
          {siteConfig('AUTHOR')}
        </a>
        </span>
      </div>

      {/* 第二行：统计 */}
      <div className='mt-3 text-base'>
        <span className='hidden busuanzi_container_site_pv'>
          <i className='fas fa-eye mr-1' />
          <span className='busuanzi_value_site_pv' />
        </span>

        <span className='ml-6 hidden busuanzi_container_site_uv'>
          <i className='fas fa-users mr-1' />
          <span className='busuanzi_value_site_uv' />
        </span>

      </div>

      {/* 第三行：备案 */}
      <div className='mt-3 text-base'>
        <BeiAnSite />
        <BeiAnGongAn />
      </div>

      {/* 第四行：简介 */}
      <div className='mt-4 text-base text-gray-500 dark:text-gray-400'>
         <a
    href={siteConfig('LINK')}
    className='font-bold dark:text-gray-300 hover:text-gray-400 transition-colors'
  >
    {title}
  </a><i className='fas fa-paw mx-1' />{siteConfig('BIO')}
      </div>

      {/* 第五行：Powered By */}
      <div className='mt-4 text-sm text-gray-400 dark:text-gray-500'>
        <PoweredBy className='justify-center' />
      </div>

    </footer>
  )
}

export default Footer
