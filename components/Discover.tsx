import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { topics } from '../utils/constants'

const Discover = () => {
  const router = useRouter()
  const { topic } = router.query

  const activeTopicStyle = 'topicStyle text-[#F51997] xl:border-[#F51997]'

  const topicStyle = 'topicStyle text-black xl:border-gray-300'

  return (
    <div className='xl:border-b-2 xl:border-gray-200 pb-6'>
      <p className='text-gray-500 mt-3 hidden xl:block font-semibold m-3'>
        Popular Topics 
      </p>
      <div className='flex gap-3 flex-wrap'>
        {topics.map((item) => (
          <Link href={`/?topic=${item.name}`} key={item.name}>
            <div className={topic === item.name ? activeTopicStyle : topicStyle}>
              <span className='text-2xl font-bold xl:text-md'>
                {item.icon}
              </span>
              <span className='font-medium text-md hidden xl:block'>
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Discover