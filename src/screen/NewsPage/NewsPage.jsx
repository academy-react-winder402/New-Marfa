import React, { useEffect } from 'react'
import NewsPageComponent from '../../component/NewsComponent/NewsPageComponent'

const NewsPage = () => {
  useEffect(() => {
    window.scrollTo(0,0)
}, []);
  return (
    <div>
      <NewsPageComponent/>
    </div>
  )
}

export default NewsPage
