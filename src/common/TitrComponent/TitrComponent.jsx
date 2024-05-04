import React from 'react'

const TitrComponent = ({title}) => {
  return (
    <div>
      <div className="flex flex-col items-center my-16 w-full text-lg text-start md:text-nowrap md:text-2xl">
            <span className="block w-32 md:w-32 md:text-2xl"> {title}</span>
            <span className="block bg-gradient-to-l from-slate-600 to-transparent py-[2px] w-32"></span>
        </div>
    </div>
  )
}

export default TitrComponent
