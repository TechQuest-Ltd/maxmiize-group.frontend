import { Link } from 'react-router-dom';
import LogoImg from '@/assets/lightLogo.png';

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-white/80 backdrop-blur-lg'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center items-center h-20 md:h-24'>
          <Link to='/' className='flex items-center transition-opacity duration-200 hover:opacity-80'>
            <img src={LogoImg} alt='Maxmiize Logo' className='w-40 md:w-48 h-auto' />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
