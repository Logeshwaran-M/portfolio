import logo from './../assets/logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Nav() {

    let list = [
        {name:"Home",link:"#home"},
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#contact" }
      ];
    const [isOpen, setIsOpen] = useState(false);
    return (<>
        <nav className="navbar sticky top-0">
            <div className='nav-items'>
                <img src={logo} alt="" className='logo' /> <h2>Logeshwaran</h2>
            </div>

            <div >
                <ul className='nav-list-items'>
                    {
                        list.map((item,index) => {
                            return (<li key={index}><a className='hover:underline decoration-green-500 decoration-4 scroll-mt-20 underline-offset-8 me-4' href={item.link}>{item.name}</a></li>)
                        })
                    }
                    
                </ul>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className='text-white md:hidden'>
                ☰
            </button>
        </nav>
        {
  isOpen && (
    <ul className="mobile-menu fixed top-16 right-0 w-full bg-gray-900 text-white shadow-lg z-50">
      {list.map((item, index) => (
        <li key={index}>
          <a
            href={item.link}
            className="block w-full hover:text-black hover:bg-white transition-all duration-300 px-3 py-2"
            onClick={() => setIsOpen(false)} 
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  )
}


    </>)
}
export default Nav;