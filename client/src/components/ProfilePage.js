import React, { useState } from 'react';
import profile1 from '../assets/profile1.jpeg'

export default function ProfilePage() {
  const [view, setView] = useState('saved');

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className='mt-0 top-0' style={styles.container}>
      <div className='pt-28 p-4 flex max-w-[900px] m-auto'>
        <a
          onClick={() => handleViewChange('saved')}
          className={`pr-8 pt-20 ${view === 'saved' ? 'text-yellow-400' : ''}`}
          href='#'
        >
          SAVED
        </a>
        <a
          onClick={() => handleViewChange('likes')}
          className={`px-5 pt-20 ${view === 'likes' ? 'text-yellow-400' : ''}`}
          href='#'
        >
          LIKES
        </a>
        <a
          onClick={() => handleViewChange('settings')}
          className={`pl-8 pt-20 ${view === 'settings' ? 'text-yellow-400' : ''}`}
          href='#'
        >
          SETTINGS
        </a>
        <a className='pl-8 pt-24 ml-auto text-blue-800' href='#'>
          View All
        </a>
      </div>

      {view === 'likes' && (
          <div className='max-w-[900px] m-auto items-center pt-4 p-5 bg-white gap-5 border-white' style={styles.grid}>
            {Array(16).fill().map((_, index) => (
              <div className='items-center border border-gray-100' key={index} style={styles.imagePlaceholder}>
                <img  src={profile1} alt="Placeholder" />
                <p className='text-center pb-4'>Dish Name {index + 1}</p>
              </div>
            ))}
          </div>
        )}

      {view === 'saved' && (
        <div className='max-w-[900px] m-auto items-center pt-4 p-5 bg-white gap-5 border-white' style={styles.grid}>
          {Array(16).fill().map((_, index) => (
            <div className='items-center border border-gray-100' key={index} style={styles.imagePlaceholder}>
              <img  src={profile1} alt="Placeholder" />
              <p className='text-center pb-4'>Dish Name {index + 1}</p>
            </div>
          ))}
        </div>
      )}

      {view === 'settings' && (
        <div className='max-w-[900px] m-auto items-center pb-4' style={styles.settings}>
          <form method='POST' className='border border-gray-500 rounded-lg pb-4 pt-12'>
            <input 
              type="text" 
              placeholder="Name" 
              style={styles.input} 
              className="rounded-2xl w-3/4 pl-12 py-[30px] border border-gray-400 focus:outline-none"
              /> <br/>
          <input 
              type="email" 
              placeholder="Email" 
              style={styles.input} 
              className="rounded-2xl w-3/4 pl-12 py-8 border border-gray-400 focus:outline-none"
              /> <br/>
          <input 
              type="text" 
              placeholder="Username" 
              style={styles.input} 
              className="rounded-2xl w-3/4 pl-12 py-8 border border-gray-400 focus:outline-none"
              /> <br/>
          <input 
              type="password" 
              placeholder="Password" 
              style={styles.input} 
              className="rounded-2xl w-3/4 pl-12 py-8 border border-gray-400 focus:outline-none"
              /> <br/>
          <button className='bg-black text-white rounded-xl px-20 py-2 mt-8' style={styles.editButton}>Edit</button>
        </form>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#fff',
  },
  title: {
    margin: 0,
  },
  navButton: {
    margin: '0 5px',
    padding: '10px 20px',
    backgroundColor: '#ffcc00',
    border: 'none',
    cursor: 'pointer',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  imagePlaceholder: {
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
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
