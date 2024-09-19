import profile1 from "../assets/profile1.jpeg"
import React, { useState } from 'react';

function Blog2() {
    const [activeLink, setActiveLink] = useState('TRENDING');
    const [navbarColor, setNavbarColor] = useState(false);

    const handleNavbarColorChange = (link) => {
        setActiveLink(link);
        setNavbarColor(!navbarColor);
     };

    const [postView, setPostView] = useState('Post')
    const handlePostView = (newPostView) => {
        setPostView(newPostView)
    }

    return(
        <>
            <div className="max-w-[1040px] m-auto pt-40 flex items-center justify-between">
                 <button onClick={() => handlePostView('viewPost')} className="bg-black text-white rounded-3xl px-8 py-2 ml-16 text-xl font-bold">
                    POST
                </button>
                <div className="flex justify-between gap-5">
                    
                        <input
                            type="text"
                            placeholder="I'm craving..."
                            className="rounded-2xl pr-20 pl-8 py-2 border border-gray-400 focus:outline-none"
                        />
                
                        <button className="bg-yellow-300 px-28 font-bold">
                            SEARCH
                        </button>
                    
                </div>
                <a className="text-blue-800 cursor-pointer pt-20">View All</a>
            </div>   
        
            {postView === 'viewPost' && (
                <div className='max-w-[900px] m-auto items-center pb-4' style={styles.settings}>
                    <form method='POST' className='flex flex-col items-center border border-gray-500 rounded-lg pb-4 pt-12'>
                        <input 
                        type="text" 
                        placeholder="Name" 
                        style={styles.input} 
                        className="rounded-2xl w-3/4 pl-12 py-[30px] border border-gray-400 focus:outline-none"
                        /> 
                        <input 
                            type="email" 
                            placeholder="Email" 
                            style={styles.input} 
                            className="rounded-2xl w-3/4 pl-12 py-8 border border-gray-400 focus:outline-none"
                            /> 
                        <input 
                            type="text" 
                            placeholder="Username" 
                            style={styles.input} 
                            className="rounded-2xl w-3/4 pl-12 py-8 border border-gray-400 focus:outline-none"
                            /> 
                        <input 
                            type="password" 
                            placeholder="Password" 
                            style={styles.input} 
                            className="rounded-2xl w-3/4 pl-12 py-8 border border-gray-400 focus:outline-none"
                            />
                        <button className='bg-black text-white rounded-xl px-20 py-2 mt-8' style={styles.editButton}>Edit</button>
                    </form>
                </div>
            )}


            <div className='grid grid-cols-4 max-w-[1040px] m-auto items-center pt-2 gap-5 '>
                {Array(16).fill().map((_, index) => (
                <div className='items-center border border-gray-100' key={index}>
                    <img  src={profile1} alt="Placeholder" />
                    <p className='text-center pb-4'>Dish Name {index + 1}</p>
                </div>
                ))}
            </div>   
        </>
    )
}

export default Blog2

const styles = {
    settings: {
        marginTop: '0px',
      },
      input: {
        margin: '24px'
      },
      editButton: {
        border: 'none',
        cursor: 'pointer',
      },
    };