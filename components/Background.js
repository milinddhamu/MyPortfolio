import mybackground from '../public/background.jpg'
import Image from 'next/image';

const Background = () => {
  return (
    <>
    <div className='w-full fixed h-full overflow-hidden z-[-10] '>
    
    <Image
    src={mybackground}
    alt=""
    quality={100}
    fill
    sizes='100vw'
    style={{
      objectFit:'cover',
    }}
    /> 
    </div> 
    </>
    
  );
}

export default Background;