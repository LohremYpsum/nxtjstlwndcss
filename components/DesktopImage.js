import Image from 'next/image'
import localProfilePic from '../asset/test.png'

const profilePicSource = () => {
  return `https://source.unsplash.com/kCZSzqvIei4`
}

const DesktopImage = () => {
    return ( 
      <div className="w-full lg:w-2/5 rounded-none lg:rounded-lg shadow-2xl hidden lg:block">
      <Image
          loader={profilePicSource}
          src='must be filled'
          alt="Picture of the author"
          width="300px"
          height="350px"
          layout="responsive" 
      />
    </div>
     );
}
 
export default DesktopImage;