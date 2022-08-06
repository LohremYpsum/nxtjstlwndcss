import Link from 'next/link';
import { FaGithub, FaXing, FaEnvelope, FaSuitcase, FaGlobe } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import HeadlessUiModal from './HeadlessUiModal';

const Content = () => {
 
    return ( 
      <div>
      <h1 className="text-3xl font-bold pt-8 lg:pt-0">Maurice Müller</h1>
     
            <IconContext.Provider 
              value={{ 
                className: "h-6 fill-current text-blue-600", 
                size: 18
                }}>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            <span className='pr-4'><FaSuitcase /></span>
              Webdeveloper / IT - Consultant
              </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
            <span className='pr-4'><FaGlobe /> </span>
              Wiesbaden - 25.0000° N, 71.0000° W
            </p>
        
            <p className="pt-8 text-sm">
              Hi, my name is Maurice, and I am a Webdeveloper
              </p>

            <div className="flex pt-12 pb-8 justify-center space-x-4">
              <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full">
                Get In Touch
              </button> 
              <HeadlessUiModal />
            </div>
            </IconContext.Provider>

            <IconContext.Provider 
              value={{ 
                className: "h-6 fill-current text-gray-600 hover:text-blue-700", 
                size: 24
                }}>
            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-center space-x-4">
            <Link href="https://github.com/LohremYpsum">
              <a><FaGithub /></a>
            </Link>
            <Link href="https://www.xing.com">
              <a><FaXing /></a>
            </Link>
            <Link href="https://www.google.com">
              <a><FaEnvelope /></a>
            </Link>
            </div>
            </IconContext.Provider>
      </div>
     );
}
 
export default Content;