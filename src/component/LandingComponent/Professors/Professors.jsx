import ProfessorCard from './ProfessorCard'
const Professors = () => {
  return (
    <>
    <div className="mb-5 mt-20 flex w-full flex-col items-center text-end text-lg">
      <span className="block w-36 text-2xl text-indigo-900">اساتید برتر</span>
      <span className="block w-36 bg-gradient-to-l from-violet-900 to-transparent py-[2px]"></span>
    </div>
    <div className="mx-auto flex w-[95%] flex-col justify-center md:w-[90%] lg:flex-row lg:justify-center">
      <ProfessorCard />
      <ProfessorCard/>
      <ProfessorCard/>
    </div>
</>
  )
}

export default Professors;
