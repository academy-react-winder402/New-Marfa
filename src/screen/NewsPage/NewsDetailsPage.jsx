import React from 'react'

import NewsDetailTopComponent from '../../component/NewsDetailsComponent/NewsDetailTopComponent'
import NewsDtailsExplanation from '../../component/NewsDetailsComponent/NewsDtailsExplanation'
import NewsDetailShare from '../../component/NewsDetailsComponent/NewsDetailShare'
import AllUsersComment from '../../component/CourcesDetailComponent/AllUsersComment'

const NewsDitailsPage = () => {
  return (
    <div className='bg-bluec w-full'>
        <div className="shadow-2xl shadow-bg-bluec mx-auto max-w-[1920px]">
            <NewsDetailTopComponent/>
            <NewsDtailsExplanation/>
            <NewsDetailShare/>
            <AllUsersComment/>
            
        </div>
      
    </div>
  )
}

export default NewsDitailsPage
