import Image from 'next/image'
import localProfilePic from '../asset/test.png'

const MobileImage = () => {
    return ( 
        <div className="block lg:hidden mx-auto -mt-16 h-48 w-48 bg-cover bg-center">
        <Image
          //loader={myLoader}
          src={localProfilePic}
          alt="Local Pic of the Author"
          width={48}
          height={48}
          layout="responsive" 
          className="rounded-full shadow-xl"
        />
      </div>
     );
}
 
export default MobileImage;