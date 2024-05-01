import React from 'react'

const Checboxcourscomponent = ({titel}) => {
  return (
    <div>
        <div class="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 rounded w-4 h-4 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"/>
            <label for="default-checkbox" className="font-medium text-gray-900 text-sm md:text-lg dark:text-gray-300 ms-2">{titel}</label>
        </div>
    </div>
  )
}

export default Checboxcourscomponent
