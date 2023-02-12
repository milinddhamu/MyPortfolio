import { useRouter } from 'next/router'

const Projects = () => {
  const router = useRouter();
  return (
    
    <>
    <div className="">

    
    <div className="flex justify-center items-center h-36 bg-indigo-300 bg-opacity-40 mx-20 rounded-xl backdrop-blur-sm shadow-xl gap-2">
      <h1 className="text-2xl font-extrabold text-blue-50 drop-shadow-md font-mono ">
        Projects Section is not built yet.
         </h1>
         <h2 className="text-2xl font-extrabold text-blue-50 drop-shadow-md font-mono ">Visit <a className='cursor-pointer underline hover:text-blue-600'
    onClick={()=> router.push("https://github.com/milinddhamu")}
    >github&#8599;</a> for more info.</h2>
    </div>
    </div>
    </>
  );
}

export default Projects;
