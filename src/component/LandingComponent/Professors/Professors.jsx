import TitrComponent from '../../../common/TitrComponent/TitrComponent';
import DesignSvgComponent from '../../SvgComponent/DesignSvgComponent';
import ProfessorCard from './ProfessorCard'
const Professors = () => {
  return (
    <div className="relative dark:bg-violet-950 w-full">
    {/* <div className="flex flex-col items-center mt-80 mb-5 w-full text-end text-lg">
      <span className="block w-36 text-2xl text-indigo-900">اساتید برتر</span>
      <span className="block bg-gradient-to-l from-violet-900 to-transparent py-[2px] w-36"></span>
    </div> */}
        <TitrComponent title="  اساتید برتر"/>

    <div className="flex lg:flex-row flex-col justify-center lg:justify-center mx-auto w-[95%] md:w-[90%]">
      <div className="top-0 left-0 absolute ml-0 -rotate-180" >
      <DesignSvgComponent className=""/>
      </div>
      <ProfessorCard />
      <ProfessorCard/>
      <ProfessorCard />
      
    </div>
</div>
  )
}

export default Professors;
