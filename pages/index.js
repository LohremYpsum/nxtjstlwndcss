import Head from 'next/head'
import {useState} from 'react';
import Content from '../components/Content';
import DesktopImage from '../components/DesktopImage';
import MobileImage from '../components/MobileImage';

export default function Home() {

  const [clicked, setClicked] = useState(false);
  const lightMode = "bg-white"
  const darkMode = "bg-black"
  const toggle = clicked ?  '☀️' : '🌙';

  
  return (
    <div 
      className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover w-full h-screen"
      style={{
        backgroundImage: `url(https://source.unsplash.com/iIJrUoeRoCQ)`,
        display: "block",
      }}
    >
      <div className="absolute top-0 right-0 h-12 w-18 p-4">
        <button 
          className="js-change-theme focus:outline-none" 
          onClick={() => setClicked(current => !current)}>{toggle}
        </button>

	    </div>

      <div className="flex flex-wrap max-w-4xl items-center justify-center h-auto lg:h-screen mx-auto sm:my-32 lg:my-0 pt-12">
        <div 
          id="profile" 
          className={`w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl opacity-75 mx-6 lg:mx-0 opacity-75 mx-6 lg:mx-0 ${clicked ?  darkMode : lightMode}`}
          >
          <div className="p-4 md:p-12 text-center lg:text-left">
        
            <MobileImage />
            <Content />
            
          </div>
	      </div>
	
       <DesktopImage />
	
      </div>
	
</div>
  )
}
