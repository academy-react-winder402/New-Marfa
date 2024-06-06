import React, { useEffect } from 'react'
import NewsDetailsPageComponent from '../../component/NewsComponent/NewsDetailsPageComponent'

const NewsDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0,0)
}, []);
  return (
    <div>
      <NewsDetailsPageComponent/>
    </div>
  )
}

export default NewsDetailsPage
