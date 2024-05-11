
const ServiceCart = (props) => {
    return (
        <div className="hover:border-1 hover:bg-[#3F40EA/30]  flex w-[95%] flex-row justify-around rounded-lg shadow-slate-300 transition-all hover:border-white hover:shadow-2xl md:flex-col">
            <div className='h-full w-24 md:h-1/4 md:w-24'>
                <img className='mr-8 py-6' src={props.image} alt="" />
            </div>
            <div className='h-full w-3/4 py-5 text-right md:w-full md:px-12'>
                <div className='flex flex-col items-start'>
                    <span className='text-2xl text-[#121242] font-semibold'>{props.title}</span>
                    <span className='mt-2 w-6 bg-blue-700 py-[2px]'> </span>
                </div>
                <div className='mt-5'>
                    <p className='text-lg text-[#121242] text-opacity-70'>
                        {props.description}
                    </p></div>
            </div>
        </div>
    )
}

export default ServiceCart;