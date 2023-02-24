import React, { useEffect, useState } from 'react'
import home from '../images/home.jpg'
import { useNavigate } from "react-router-dom";

import './home.css'
import vectorOne from '../images/logo/VectorOne.png';
import vectorTwo from '../images/logo/VectorTwo.png';
import vectorThree from '../images/logo/VectorThree.png';
import vectorFour from '../images/logo/VectorFour.png';
import vectorFive from '../images/logo/VectorFive.png';
import {BsSearch} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'

import {BsEyeFill} from 'react-icons/bs'
import Floor from './floor';
import DropPane from '../components/dropPane';
import MobileMenu from '../components/mobileMenu';


const Home = (  {floor,setFloor,floorClicked,setfloorClicked}) => {
  const [width, setWidth]   = useState(window.innerWidth);
  const [pane,setpane]=useState(false);
  const [menu,setmenu]=useState(false);
  const [appartment,setappartment]=useState('');
  const navigate = useNavigate();

  // const updateDimensions=()=>{
  //   setWidth(window.innerWidth)
  // }
  // useEffect(()=>{
  //   window.addEventListener("resize", updateDimensions);
  //   return () => window.removeEventListener("resize", updateDimensions);
  // },[])



 const menuHandler=(event)=>{
  event.stopPropagation();
 }

 const floorHandler=(label)=>{
   setfloorClicked(label)
  // if(label.length>0 && width>767){
  // }else{
  //   setappartment(label)
  // }
 }

if(floorClicked.length===0){
  return (
    <>
      <div 
      className='container w-screen overflow-hidden'
      >

      <MobileMenu menu={menu} setmenu={setmenu}/>
      {/* backdrop-brightness-50 */}
      {!menu &&

        <div className='text-primary relative top-10 flex flex-row items-center w-full justify-between px-10 mb:px-1 sm:px-2'>
           <div className='flex flex-row justify-center items-center space-x-5 '>
              <div className='h-[51.09px] w-[180.9px] rounded-3xl border-[1px] border-primary cursor-pointer flex flex-row   items-center justify-center hover:bg-primary hover:text-white sm:hidden mb:hidden'>
                  Sign In
              </div>
              
              <AiOutlineMenu  className="mb:block sm:block hidden text-white bg-primary p-2 w-fit rounded-full h-fit cursor-pointer" onClick={()=>{setmenu(true)}}/>
              <div className='text-smallBold hidden  lg:block xl:block 2xl:block'>
                 <span className='text-[#FFFFFF66] '>
                  UAN 
                 </span>
                 &nbsp;
                 <span className='text-white'>(051)-111 789 111</span>
              </div>
           </div>
           <div  className=' flex flex-row  mb:h-[20%]  mb:w-[4%] md:h-[20%] md:w-[2.8%] sm:h-[20%] sm:w-[2.8%] h-[10%] w-[1.7%] '>
                <img src={vectorOne}/>
                <img src={vectorTwo}    className=""/>
                <img src={vectorThree}  className=""/>
                <img src={vectorFour}   className=""/>
                <img src={vectorFive}   className=""/>
           </div>
           <div className='flex flex-row items-center '>
              <div className='text-smallBold mr-10 hidden lg:block xl:block 2xl:block'>
                 <span className='text-[#FFFFFF66] '>
                  UAN 
                 </span>
                 &nbsp;
                 <span className='text-white'>(051)-111 789 111</span>
              </div>
              <div className='h-[51.09px] w-[180.9px] rounded-3xl border-[1px]  cursor-pointer flex flex-row   items-center border-primary justify-center bg-primary text-white sm:hidden mb:hidden'>
                  Sign In
              </div>
              <label  htmlFor="my-modal">
                <div  className='h-[51.09px] w-[120.9px] rounded-3xl border-[1px] text-center  border-primary cursor-pointer  hover:bg-primary hover:text-white flex-row justify-center items-center hidden sm:flex  mb:flex '>
                    Appartments
                </div>
              </label>
              <div>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal  rounded-none">
                  <div className="modal-box h-[23%] w-[95%] rounded-none p-0 absolute top-28 divide-x flex flex-row bg-[#F6F2EC]">
                    <div className=' w-full h-full      cursor-pointer flex flex-col justify-between items-start  hover:bg-white p-3 group' onClick={()=>{
                       setTimeout(()=>{
                         setfloorClicked(floor  || "1")
                         console.log('clicked',floor)
                       },500);
                    }}>
                        Virtual Selection of appartments
                        <BsEyeFill size={25} />
                     </div>
                     <div className='w-full h-full      cursor-pointer flex flex-col justify-between items-start  hover:bg-white p-3 group' onClick={()=>{setfloorClicked(floor);console.log('clicked',floor)}}>
                      Selection by parameters
                      <BsSearch size={25} className="" />
                     </div>
                  </div>
                </div>
              </div>  
           </div>
        </div>   
      }

        {/* onMouseLeave={()=>{setFloor("")}} */}
        {/*  */}
            {/* {floor && */}

        
        <div className='flex flex-row relative w-[85%]  left-[13%] md:left-[3%] lg-small:left-[6%] lg:left-[8%]   top-[30%]  ' onMouseLeave={()=>{setFloor("")}} >
            <div className={`bg-box cursor-pointer   w-fit h-fit  flex flex-col items-start absolute   left-[1%] p-3    ${floor.length>0 ? "block sm:hidden mb:hidden" : "hidden"}`} onClick={()=>{setfloorClicked(floor)}} >
                        <h1 className="   relative   text-[#BB9692] text-popup-heading">{floor}</h1>
                        <div className='flex flex-col space-y-3  '>
                              <div className='text-[#606060] flex flex-row justify-around items-center  relative space-x-8'>
                                <h1 className='text-extraLarge font-poppins text-[#606060]'>01</h1>
                                <div className='flex flex-col leading-4'>
                                  <div className='text-[#606060] text-small'>
                                      Shop From 12 Million PKR
                                  </div>
                                  <div className='text-[#9E9E9E] text-smallBold'>
                                      Instalments Available
                                  </div>
                                </div>
                              </div>
            
                              <div className='text-[#606060] flex flex-row justify-around items-center  relative space-x-8'>
                                <h1 className='text-extraLarge font-poppins text-[#606060]'>01</h1>
                                <div className='flex flex-col leading-4'>
                                  <div className='text-[#606060] text-small'>
                                      Shop From 12 Million PKR
                                  </div>
                                  <div className='text-[#9E9E9E] text-smallBold'>
                                      Instalments Available
                                  </div>
                                </div>
                              </div>
            
                              <div className='text-[#606060] flex flex-row justify-around items-center  relative space-x-8'>
                                <h1 className='text-extraLarge font-poppins text-[#606060]'>01</h1>
                                <div className='flex flex-col leading-4'>
                                  <div className='text-[#606060] text-small'>
                                      Shop From 12 Million PKR
                                  </div>
                                  <div className='text-[#9E9E9E] text-smallBold'>
                                      Instalments Available
                                  </div>
                                </div>
                              </div>
            
                              <div className='text-[#606060] flex flex-row justify-around items-center  relative space-x-8'>
                                <h1 className='text-extraLarge font-poppins text-[#606060]'>01</h1>
                                <div className='flex flex-col leading-4'>
                                  <div className='text-[#606060] text-small'>
                                      Shop From 12 Million PKR
                                  </div>
                                  <div className='text-[#9E9E9E] text-smallBold'>
                                      Instalments Available
                                  </div>
                                </div>
                              </div>
                        </div>
            </div>
            {/* sm:overflow-hidden mb:overflow-hidden */}
            
            <div className='relative  w-[50vw] md:w-[55.5vw] left-[22.5vw]  sm:[100vw]  md:left-[35%] lg-small:left-[28.5%] lg-tab: sm:left-[20%]    xl:left-[25%]  mb:left-[1%]  mb:w-[76vw] desktop-20:top-[0vh]  desktop-23:top-[6vh] desktop-23-h:top-[5vh] desktop-22:top-[5vh] desktop-22:left-[25%]  desktop-23:left-[25%] desktop-23-h:left-[26.5%]       h-full '>                
                  <div className='flex flex-row items-center w-full h-full relative top-[30px] lg:top-[57px] mb:top-[3.7vh]   xl:top-[70px] lg-tab:top-0' onClick={()=>{floorHandler("2");}}>
                    <div className={` text-white cursor-pointer flex flex-row  align-middle  h-[65px] lg-tab:h-[3rem] mb:h-[3rem] w-[31vw] sm:w-[100vw] md:w-[36.7vw] mb:w-[80vw] lg-small:w-[42vw] xl:w-[33.5vw] desktop-22:w-[33.5vw] desktop-23-h:w-[31vw] desktop-23:w-[67%]  visible     ${floor==='2nd' ? 'bg-blue-50 opacity-[0.3]':''}`} onMouseEnter={()=>{console.log('hi..');setFloor('2nd') }} ></div>
                    {floor==='2nd' &&
                    <>
                      <span className='text-white border-[1px] border-white w-[7%] ml-[3%] mb:hidden'></span>
                      <span className='text-white ml-[3%] mb:hidden'>Second Floor</span>
                    </>
                    }
                  </div>
                  
                  <div className='flex flex-row items-center w-full h-full relative top-[30px] lg:top-[57px] xl:top-[70px] mb:top-[4vh] desktop-20:top-[5vh] lg-tab:top-[3vh]  desktop-22:top-[5vh] desktop-23:top-[5vh] desktop-23-h:top-[5vh]' onClick={()=>{floorHandler("1");}}>
                    <div className={` text-white cursor-pointer flex flex-row  align-middle  h-[65px] lg-tab:h-[3rem] mb:h-[3rem] w-[31vw]  sm:w-[100vw] md:w-[36.7vw] mb:w-[80vw] lg-small:w-[42vw] xl:w-[33.5vw] desktop-22:w-[33.5vw] desktop-23-h:w-[31vw] desktop-23:w-[67%]    visible    ${floor==='1st' ? 'bg-blue-50 opacity-[0.3]':''}`} onMouseEnter={()=>{console.log('hi..');setFloor('1st') }} ></div>
                    {floor==='1st' &&
                    <>
                      <span className='text-white border-[1px] border-white w-[7%] ml-[3%] mb:hidden'></span>
                      <span className='text-white ml-[3%] mb:hidden'>First Floor</span>
                    </>
                    }
                  </div>
            
                   <div className='flex flex-row items-center w-full h-full relative top-[48px] lg-tab:top-[4vh] lg-[4vh] lg:top-[68px] xl:top-[95px] desktop-20:top-[9vh] desktop-22:top-[9vh] desktop-23:top-[10vh] desktop-23-h:top-[10vh] mb:top-[5vh]' onClick={()=>{floorHandler("Ground Floor")}}>
                    <div className={` text-white cursor-pointer flex flex-row  align-middle  h-[65px] w-[31vw] lg-tab:h-[3rem] sm:w-[100vw] md:w-[36.7vw] mb:w-[80vw] xl:w-[33.5vw] desktop-22:w-[33.5vw] desktop-23-h:w-[31vw] mb:h-[3rem] desktop-23:w-[67%]   visible    ${floor==='Ground Floor' ? 'bg-blue-50 opacity-[0.3]':''}`} onMouseEnter={()=>{setFloor('Ground Floor') }} ></div>
                    {floor==='Ground Floor' &&
                    <>
                      <span className='text-white border-[1px] border-white w-[7%] ml-[3%] mb:hidden'></span>
                      <span className='text-white  ml-[3%] mb:hidden'>Ground Floor</span>
                    </>
                    }
                  </div>

                  <div className='flex flex-row items-center w-full h-full relative top-[48px] lg-tab:top-[7vh] lg:top-[70px] xl:top-[110px] desktop-20:top-[10vh] desktop-22:top-[12vh] desktop-23:top-[14vh] desktop-23-h:top-[14vh]' onClick={()=>{floorHandler("mazen")}}>
                    <div className={` text-white cursor-pointer flex flex-row  align-middle  h-[65px] w-[31vw] lg-tab:h-[3rem] sm:w-[100vw] md:w-[36.7vw] mb:w-[80vw] xl:w-[33.5vw] desktop-20:w-[31vw] desktop-23-h:w-[31vw] mb:h-[3rem] desktop-22:w-[33.5vw] desktop-23:w-[67%]   visible    ${floor==='mazen' ? 'bg-blue-50 opacity-[0.3]':''}`} onMouseEnter={()=>{setFloor('mazen') }} ></div>
                    {floor==='mazen' &&
                    <>
                      <span className='text-white border-[1px] border-white w-[7%] ml-[3%] mb:hidden'></span>
                      <span className='text-white ml-[3%] mb:hidden'>mazen</span>
                    </>
                    }
                  </div>

                  <div className='flex flex-row items-center w-full h-full relative top-[48px] mb:top-[10vh] lg-tab:top-[9vh]  lg:top-[75px] xl:top-[120px] desktop-20:top-[10vh] desktop-22:top-[15vh] desktop-23:top-[18vh] desktop-23-h:top-[18vh]' onClick={()=>{floorHandler("Basement")}}>
                    <div className={` text-white cursor-pointer flex flex-row  align-middle  h-[65px] w-[31vw] mb:h-[3rem] lg-tab:h-[3rem]  sm:w-[100vw] md:w-[36.7vw] mb:w-[80vw] xl:w-[33.5vw] desktop-20:w-[31vw] desktop-22:w-[33.5vw] desktop-23-h:w-[31vw]  desktop-23:w-[67%]   visible    ${floor==='Basement' ? 'bg-blue-50 opacity-[0.3]':''}`} onMouseEnter={()=>{console.log('hi..');setFloor('Basement') }} ></div>
                    {floor==='Basement' &&
                    <>
                      <span className='text-white border-[1px] border-white w-[7%] ml-[3%] mb:hidden'></span>
                      <span className='text-white ml-[3%] mb:hidden'>Basement</span>
                    </>
                    }
                  </div>                

          </div>
          
          {/* <div className={`absolute top-0 left-0 backdrop-blur-0 w-full h-full  z-40 hidden `}> */}
         
            {/* </div> */}
  
          </div>
       </div>

    </>)

}else if(floorClicked.length>0) {
  return (<Floor setfloorClicked={setfloorClicked} />);
}


}
export default Home