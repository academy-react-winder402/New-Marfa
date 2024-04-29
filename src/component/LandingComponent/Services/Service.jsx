import React from "react"
import  ServiceCart  from "./SerrviceCart"
import simpleService from '../../../assets/image/simple.png'
import jobOpportunity from '../../../assets/image/forsat.png'
import ValidCertificate from '../../../assets/image/madrak.png'

export const Service = () => {
    const service = [
        {
        "title":"سادگی خدمت" ,
        "img": simpleService ,
        "description" : "سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت "
    },
    {
        "title":"فرصت شغلی " ,
        "img": jobOpportunity ,
        "description" : "سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت "
    },
    {
        "title":"مدرک معتبر" ,
        "img": ValidCertificate ,
        "description" : "سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت "
    }
    ]
    return (
        <>
        <div className="mt-24 flex w-full flex-col items-center text-start text-lg md:text-nowrap md:text-2xl">
            <span className="block w-16 md:w-28 md:text-2xl">خدمات ما</span>
            <span className="block w-16 bg-gradient-to-l from-slate-600 to-transparent py-[2px]"></span>
        </div>
        <div className="mt-10 flex h-auto w-full flex-col items-end gap-5 p-5 md:flex-row md:justify-center" >
            {service.map((service , index) => {
                return (
                    <ServiceCart title={service.title} image={service.img} description={service.description}/>              
                )
            })}
        </div>

        </>
    )    
}

