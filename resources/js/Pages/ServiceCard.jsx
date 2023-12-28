
import logo from '../Pages/images/logo.png';
import Tilt from 'react-parallax-tilt';
import Chat from './images/chat.png'

const ServiceCard = ({ title, description ,start,setStart }) => {
 

  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} >
        <div className={`flex flex-row justify-start bg-[#000]] h-[40vh] p-4 w-[100%]`}>
      <div className='p-2 w-[80%] rounded-full shadow-lg border-[2px] shadow-[#123b94] bg-[#123b94] flex flex-row'>
        <img src={Chat} className='h-[180px] rounded-l-full p-2 mb-4' alt='' />
        <div className='w-[75%] m-4 mt-1'>
          <h1 className='font-extrabold text-lg text-white' >{title}</h1>
          <p className='text-white' >{description}</p>
        </div>
      </div>
    </div>
    </Tilt>
  );
};

export default ServiceCard;
