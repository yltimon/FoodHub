import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function NavBar({isLoggedIn, setIsLoggedIn}) {
    const navigateNavbarLogout = useNavigate;

    const handleLogout = () => {
        setIsLoggedIn(false);
        
    }
    
    const [activeLink, setActiveLink] = useState('TRENDING');

    const handleNavbarColorChange = (link) => {
        setActiveLink(link);
     };

    return(
    <>
    <div className='flex justify-around items-center bg-[#000] text-[#fff] px-4 py-1 m-0  top-0 fixed w-full'>
            <div className='py-2 m-0 flex flex-col cursor-pointer' >
                <p className='text-3xl text-white  font-bold'>Food</p>
                <p className='text-3xl text-white  font-bold'>HUB<span className='text-yellow-400'>+</span></p>
            </div>

            <div className='flex cursor-pointer'>
            <Link 
                onClick={() => handleNavbarColorChange('TRENDING')} 
                className={`pr-8 ${activeLink === 'TRENDING' ? 'text-yellow-600' : 'text-white'}`} 
                to={'/'}
            >
                TRENDING
            </Link>
            <Link 
                onClick={() => handleNavbarColorChange('CHATBOT')} 
                className={`px-5 ${activeLink === 'CHATBOT' ? 'text-yellow-600' : 'text-white'}`} 
                to={'/chatbot'}
            >
                CHATBOT
            </Link>
            <Link
                onClick={() => handleNavbarColorChange('BLOG')} 
                className={`px-5 ${activeLink === 'BLOG' ? 'text-yellow-600' : 'text-white'}`} 
                to={'/blog'}
            >
                BLOG
            </Link>
            <Link 
                onClick={() => handleNavbarColorChange('PROFILE')} 
                className={`pl-8 ${activeLink === 'PROFILE' ? 'text-yellow-600' : 'text-white'}`} 
                to={'/profile'}
            >
                PROFILE
            </Link>
            </div>

            <div>
                { isLoggedIn ? (
                    <button onClick={handleLogout} className='text-wrap rounded-2xl px-5 bg-yellow-400'>
                        Log Out
                    </button>

                ):(

                    <button className='text-wrap rounded-2xl px-5 bg-yellow-400'>
                        <span className='block'><Link to={'/signup'}>Sign up/</Link></span>
                        <span className='block'><Link to={'/login'}>Sign in</Link></span>
                    </button>
                    )
                }
            </div>
    </div>
    </>
    )
}

export default NavBar