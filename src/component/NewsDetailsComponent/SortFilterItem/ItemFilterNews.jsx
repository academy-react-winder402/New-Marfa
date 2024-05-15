import React from 'react'
import Searchcomponent from '../../../common/Search/SearchComponent'
import SortFilterComponent from './SortFilterComponent'




const ItemFilterNews = () => {
  return (
    <div  className='flex md:flex-row flex-col justify-center items-center md:items-start gap-8 md:gap-24 mx-auto my-3 w-[90%]'>
      <SortFilterComponent/>
      <Searchcomponent/>   
    </div>
  )
}

export default ItemFilterNews
