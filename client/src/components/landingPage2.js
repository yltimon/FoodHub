import landingpic from "../assets/landingpic1.jpg"
import profile1 from "../assets/profile1.jpeg"

function Landing2(params) {
    return (
    <>
      <div className="max-w-[1040px] m-auto pt-28 h-[600px] bg-white">
        <img className="w-full h-full object-fill" src={landingpic } alt="Landing page pic"/>
      </div>

      <div className="max-w-[1040px] m-auto pt-8">
        <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl cursor-pointer">TRENDING NOW</h1>
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
            <a className="text-blue-800 cursor-pointer">View All</a>
        </div>

        <div className='grid grid-cols-4 max-w-[1040px] m-auto items-center pt-2 gap-5 '>
          {Array(16).fill().map((_, index) => (
            <div className='items-center border border-gray-100' key={index}>
              <img  src={profile1} alt="Placeholder" />
              <p className='text-center pb-4'>Dish Name {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </>
    )
} 


export default Landing2