import React,{useState} from 'react'
import msg from '../assets/msg.svg';
import ph from '../assets/ph.svg'
import logo from '../assets/logo.svg';
import bg from '../assets/bg.svg';
import login from '../assets/login.svg';
import button from '../assets/button.svg'
import videoCall from '../assets/videoCall.svg'
import videoCallTxt from '../assets/videoCallTxt.svg'
import videoCallTxtSmall from '../assets/videoCallTxtSmall.svg'



function Home() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen );
  };
  const divStyle={
    display: "inline-block",
    minWidth: "100%"
}

  return (
    <div className='' style={divStyle}>
        <section className='bg-[#133f7d] flex justify-between items-center flex-wrap'>
          <div className='left'>
          <img src={msg} className='inline p-2 ml-1'/>  
         <span className='text-[white] p-1'>Contact@incruiter.com</span>
          </div>
          <div className='right inline mr-1'>
          <img src={ph} className='p-1 inline overflow-auto'/>      
          <span className="grow-0 shrink-0 basis-auto box-border [font-family:Inter] text-base font-normal text-[white] ml-[11.5px]">US</span>
          <span className="text-[white] p-1">|</span>
         <span className=" text-[white]">(+1) 080-47187100</span>
         <span className="grow-0 shrink-0 basis-auto box-border [font-family:Inter] text-base font-normal text-[white] ml-2">IN</span>
         <span className="text-[white] p-1">|</span>

        <span className="grow-0 shrink-0 basis-auto box-border [font-family:Manrope] text-base font-normal text-[white] p-2">(+91) 080-47187100</span>
          </div>
        </section>
        <img src={bg} alt='bg' className='z-0 min-w-full overflow-visible'/>
        <nav class="absolute top-10 left-10 right-10 text-white p-4 flex justify-between flex-wrap md: m-8 items-center ">
        <img src={logo} alt='logo' className='inline'/>
           {/* Navbar  */}
            
           <div className="md:flex md:space-x-4 md:text-white flex items-center">
    
           <ul className={`md:flex space-x-4 ${!isMobileMenuOpen ? 'hidden' : 'block'}`}>

        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">For Interviewer</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Blogs</a></li>

      </ul>
      <img src={login} alt="login" className={`md:block hidden ${isMobileMenuOpen ? 'hidden' : 'block'}`} />
       <img src={button} alt="btn" className={`md:block hidden ${isMobileMenuOpen ? 'hidden' : 'block'}`} />
      
  
      <button className={`md:hidden block text-white p-2 ${isMobileMenuOpen ? 'hidden' : 'block'}`} onClick={toggleMobileMenu}>
        ☰
      </button>


      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 bg-gray-800 text-white h-screen p-4 z-[10000] ">
                  <img src={logo} alt='logo' className='inline mt-4'/>
                   {/* Cross Button */}
      <button className={`md:hidden absolute top-4 right-4 text-white text-2xl`} onClick={toggleMobileMenu}>
        ✕
      </button>
          <ul className="flex flex-col space-y-2 m-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">For Interviewer</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Blogs</a></li>
            <h3>Login</h3>
          <img src={button} alt="btn" className='w-24' />
          </ul>
          
        </div>
        )}
        </div>  

          
           {/* Navbar */}

        </nav>
          <div class="flex justify-center   p-4 absolute top-40 left-0 right-0">
              <div class="flex flex-col justify-center">
      
                  <div class="flex flex-col lg:flex-row  justify-center items-center p-2 space-y-3 w-[100%]">
                      <div class="flex flex-col  items-center lg:text-left text-center justify-between  space-y-6 px-8">
                          <div class="flex flex-col items-start space-y-3">
                              <div class="text-3xl md:text-5xl font-bold px-8">
                               <img src={videoCallTxt} alt=''  className='mr-96 -mt-[20px] md:mr-0' /> </div>
                    
                          </div>
                      </div>
                      <div class="flex space-x-2 md:space-x-6 md:m-4 "> 
                       
                            <img src={videoCall} class="h-full w-full " alt=""/>
      
                      </div>
      
                  </div>
              </div>
          </div>
                                  
        
        {/* <section className='absolute top-1/4 right-0 flex flex-row-reverse'> */}
        {/* <img class="object-contain w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-auto" src={videoCall} alt="Image"/> */}

          {/* <img src={videoCall} alt=""  className=' h-[510px] p-[30px] -mt-[20px] mb-36 md:w-3/4 ' />
          <img src={videoCallTxt} alt=''  className='mr-96 -mt-[20px]' />
          {isMobileMenuOpen && <img src={videoCallTxtSmall} alt=''  className='bg-[red]' />}
         
        
        </section> */}
        

        
</div>

    
  )
}

export default Home