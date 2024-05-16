import React from 'react'
import NewsDetailTopComponent from '../NewsDetailsComponent/NewsDetailTopComponent'
import NewsDtailsExplanation from '../NewsDetailsComponent/NewsDtailsExplanation'
import NewsDetailShare from '../NewsDetailsComponent/NewsDetailShare'
import AllUsersComment from '../CourcesDetailComponent/AllUsersComment'


const NewsDetailsPageComponent = () => {
  return (
    <div className='bg-bluec w-full'>
        <div className="dark:bg-violet-950 shadow-2xl shadow-bg-bluec mx-auto max-w-[1920px]">
            <NewsDetailTopComponent/>
            <NewsDtailsExplanation/>
            <NewsDetailShare/>
            <AllUsersComment/>
            
        </div>
      
    </div>
  )
}

export default NewsDetailsPageComponent
