import React from 'react'
import LiComponent from './LiComponent'

const SortFilterComponent = () => {
  return (
    <div className='mx-1 rounded-xl w-full md:w-[60%]'>
        <ul className='flex flex-row justify-around items-center border-2 border-violet-700 dark:bg-violet-950 rounded-lg w-full md:w-full h-14 text-sm text-violet-800 md:text-nowrap md:text-lg dark:text-violet-200'>
        <LiComponent item={"همه"}/>
        <LiComponent item={"محبوب ترین ها"}/>
        <LiComponent item={"پربازدید ترین ها"}/>
        <LiComponent item={"جدید ترین ها"}/>
        </ul>
    </div>
  )
}

export default SortFilterComponent
