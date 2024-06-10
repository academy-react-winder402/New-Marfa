import React, { useEffect } from 'react'
import NewsDetailTopComponent from '../NewsDetailsComponent/NewsDetailTopComponent'
import NewsDtailsExplanation from '../NewsDetailsComponent/NewsDtailsExplanation'
import NewsDetailShare from '../NewsDetailsComponent/NewsDetailShare'
import AllUsersComment from '../CourcesDetailComponent/AllUsersComment'
import handleTheme from '../../core/services/handleTheme'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'


const NewsDetailsPageComponent = () => {

  const params  = useParams()
    
  const {data , isLoading ,isError , error} = useQuery("newsList",
     () => getList(`/News/:${params.id}`))
  
  useEffect(() => {
    handleTheme();
  }, []);
  return (
    <div className='bg-bluec w-full'>
        <div className="dark:bg-violet-950 shadow-2xl shadow-bg-bluec dark:shadow-2xl dark:shadow-violet-600 mx-auto max-w-[1920px]">
            <NewsDetailTopComponent/>
            <NewsDtailsExplanation/>
            <NewsDetailShare/>
            <AllUsersComment/>
            
        </div>
      
    </div>
  )
}

export default NewsDetailsPageComponent
