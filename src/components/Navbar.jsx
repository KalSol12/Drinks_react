import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className="bg-white shadow-lg py-8 px-4 font-main">
      <div className="flex items-center justify-between container mx-auto flex-wrap ">
        <h3 className='text-2xl font-bold text-green-500'>Bartender</h3>
        <nav className="flex items-center gap-6 flex-wrap">
          <NavLink to={'/'} className="text-xl font-semibold hover:text-purple-400">Drinks</NavLink>
          <NavLink to={'about'} className="text-xl font-semibold hover:text-purple-400">About</NavLink>
          <NavLink to={'newsletter'} className="text-xl font-semibold hover:text-purple-400">Newsletter</NavLink>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
