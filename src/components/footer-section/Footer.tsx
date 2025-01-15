   import { Link } from 'react-router-dom'
    import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
    
    const Footer = () => {
      return (
        <div className='bg-white w-full px-3 py-5 md:px-10 lg:px-20 '>
            <div className='block md:flex justify-between text-center md:text-left pb-2'>
            <Link to="/">
        <p className="font-mono font-bold text-lg">FactScan</p>
      </Link>
         <div className='grid grid-cols-3 md:hidden'>
         <div>
            <h1 className='text-blue-500 text-lg font-bold'>Product</h1>
            <p className='text-sm text-neutral-600 font-normal pb-1'>Scan Product</p>
            <p className='text-sm text-neutral-600 font-normal pb-1'>Search Product</p>
         </div>
         <div>
            <h1 className='text-blue-500 text-lg font-bold'>Resources</h1>
          
            <p className='text-sm text-neutral-600 font-normal pb-1'>How it work</p>
          
         </div>
        
         <div>
            <h1 className='text-blue-500 text-lg font-bold pb-1'>Company</h1>
            <p className='text-sm text-neutral-600 font-normal pb-1'>About</p>
            <p className='text-sm text-neutral-600 font-normal pb-1'>Contact</p>
         </div>
         </div>
         <div className='hidden md:block'>
            <h1 className='text-blue-500 text-lg font-bold'>Product</h1>
            <p className='text-sm text-neutral-600 font-normal pb-1'>Scan Product</p>
            <p className='text-sm text-neutral-600 font-normal pb-1'>Search</p>
         </div>
         <div className='hidden md:block'>
            <h1 className='text-blue-500 text-lg font-bold'>Resources</h1>

            <p className='text-sm text-neutral-600 font-normal pb-1'>How it work</p>

         </div>
        
         <div className='hidden md:block'>
            <h1 className='text-blue-500 text-lg font-bold pb-1'>Company</h1>
            <p className='text-sm text-neutral-600 font-normal pb-1'>About</p>
            <p className='text-sm text-neutral-600 font-normal pb-1'>Contact</p>
         </div>
         <div>
            <p className='text-blue-500 text-lg font-bold'>Subscribe to our newsletter</p>
            <p className='text-xs text-neutral-600 font-normal'>For product announcements and exclusive insights</p>
            <div className='flex justify-between items-center py-1'><input type="tel" name="" id="" placeholder='Input your email' className='border-2 text-xs px-2 py-1 border-blue-500 bg-transparent rounded-l-md w-2/3' />
            <button className='bg-blue-500  rounded-r-md text-white px-2 py-1 font-bold w-1/3'>Subscribe</button>
            </div>
            </div>
            </div>
            <hr />
            <div className='flex justify-between items-center w-full pt-2'>
                <p className='text-base font-normal'>© 2025 Zakariyah Robiah.</p>
                <div className='flex justify-between items-center gap-5'>
                <FaFacebook className="text-xl hover:text-blue-500 transition"/>
                <FaTwitter className="text-xl hover:text-blue-500 transition"/>
                <FaLinkedin className="text-xl hover:text-blue-500 transition"/>
                <FaYoutube className="text-xl hover:text-blue-500 transition"/>
                </div>
            </div>
        </div>
      )
    }
    
    export default Footer
  