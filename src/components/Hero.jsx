
const buttons = ["Auto", "Home", "Business", "Life & Financial", "Travel"];

const Hero = () => {
  return (
    <div className="bg-white w-full flex px-6 items-center">
      <div className='flex flex-col gap-5'>
          <h3 className=' uppercase text-[30px] font-bold leading-normal'>
            Your Coverage, Your Way!
          </h3>
          <h3 className='text-[64px] font-extrabold leading-[64px]'>
            Save Up To 30% on <br />
            Auto, Home and Business Insurance
          </h3>
          <p className='text-2xl'>Your Trusted Insurance Partner. Customized Solutions for Your Insurance Needs!</p>
          <h3 className='text-xl font-bold'>
            + Popular Products
          </h3>
          <div className="flex gap-2 items-center text-[16px] font-bold">
            {
              buttons.map((button, index) => (
                <button key={index} className='p-3.5 uppercase rounded bg-[#9ecb75] hover:bg-[#2a80b4] hover:text-white transition duration-300'>
                  {button}
                </button>
              ))
            }
            <p className='text-[#2cc8b3]'>+ MORE</p>
          </div>
          <div className="">
            <button className='py-3.5 px-10 uppercase text-white bg-[#2a80b4] hover:bg-[#9ecb75] hover:text-black text-xl font-bold transition duration-300'>
              Get a Quote
            </button>
          </div>
      </div>
      <img src="/bgHero.webp" alt="" />
    </div>
  )
}

export default Hero;