import { useQuery } from 'react-query';
import TitrComponent from '../../../common/TitrComponent/TitrComponent';
import DesignSvgComponent from '../../SvgComponent/DesignSvgComponent';
import ProfessorCard from './ProfessorCard'
import http from '../../../core/services/interceptore'
const Professors = () => {
  const getCourseList =async() => {
    const res = await http.get(`/Home/GetTeachers`)
    //console.log(res.data.courseFilterDtos);

    return res
   }

   const {data , isLoading ,isError , error} = useQuery('masterList', getCourseList)

  return (
    <div className="relative dark:bg-violet-950 w-full">
    
        <TitrComponent title="  اساتید برتر"/>

    <div className="flex lg:flex-row flex-col justify-center lg:justify-center mx-auto w-[95%] md:w-[90%]">
      <div className="top-0 left-0 absolute ml-0 -rotate-180" >
      <DesignSvgComponent className=""/>
      </div>
      <ProfessorCard   />
      <ProfessorCard/>
      <ProfessorCard />
      
    </div>
</div>
  )
}

export default Professors;
