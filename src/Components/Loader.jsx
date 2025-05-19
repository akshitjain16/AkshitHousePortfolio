import { Html } from '@react-three/drei';
import "../Loader.css"

export default function Loader() {


  return (
    <Html fullscreen>
      <div className='carte'>
        <img className='ship' src='./Textures/navire.png'/>
        <p className='text'>Welcome to Akshit's World... loading</p>
      </div>
    </Html>
  )
}