import { Form, Formik } from 'formik'
import React from 'react'
import AllButton from '../../common/button/AllButton'


// send comment user
const UserCommentComponent = () => {
  return (
    <div className='flex flex-col justify-center items-center md:items-start px-1 w-full' >
       {/* <CourseProudactMenuTabUL/> */}
       <div className='flex flex-col justify-center items-start mt-10 p-5 w-96 h-10'>
            <span className='pt-5 text-2xl'>افزودن نظر</span>
            <div className='flex gap-10 mb-10' >
                <span> بهار</span>
                <span>1403/02/01</span>
            </div>

       </div>
       <div className='w-full'>
        <Formik>
            <Form className="m-5 mx-auto max-w-sm md:max-w-full leading-5">
                <textarea id="message" rows="1" className="block border-[#9293FF] border-2 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 my-5 p-2.5 focus:border-blue-500 dark:focus:border-blue-500 rounded-lg w-full text-gray-900 text-sm focus:ring-blue-500 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500" placeholder="عنوان پیام را وارد کنید"></textarea>
                <textarea id="message" rows="4" className="block border-[#9293FF] border-2 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-2.5 focus:border-blue-500 dark:focus:border-blue-500 rounded-lg w-full text-gray-900 text-sm focus:ring-blue-500 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500" placeholder="پیام خود را وارد کنید..."></textarea>
            </Form>
        </Formik>
        <div className="flex justify-center md:justify-start"><AllButton  title=" ثبت دیدگاه"/></div>
       </div>
       
    </div>
  )
}

export default UserCommentComponent
