import React, { useState } from 'react'
import img  from '../assets/Group.png';
import Background  from '../assets/Background.png';
import Arrow from '../assets/arrow.png'


const Menulinks = [
{id: 1,name: 'Home',link: '#home'},
{id: 2,name:'About',link:'#about'},
{id: 3,name:'Service',link:'#service'},
{id: 4,name:'Cars',link:'#cars'},
{id: 5,name:'Contact us',link:'#contact us'},
]
const Navbar = () => {
   const [num,setnum] = useState(1);

  const handle =()=>{
    setnum(num+1);
  }

    let badge = null;
    if(num > 0){
     badge = (
      <span className='absolute bg-orange-200 w-5 h-5 rounded-[4px] text-xs top-0 right-0 inline-flex justify-center items-center'onClick={handle} >{num}</span>
     )
    }



  return (
   <div className='bg-cover w-full h-screen bg-center' style={{
    backgroundImage:`url(${Background})`
   }}>
   <div className="w-full flex justify-center">
    <div className="px-6 h-[81px] bg-white flex items-center justify-between pt-3">
      
      

      <div className="flex items-center space-x-6">
        {/* nav link */}
       <ul className=' hidden  md:flex space-x-10  text-xl font-semibold text-white'>
        {Menulinks.map((menu)=>(
          <li key={menu.id} >
            <a href={menu.link}>{menu.name}</a>
          </li>
        ))}
        </ul>
         <div className='relative inline-block ml-10 '>
          <img className='h-7 mr-2 mt-2' src={Cart} alt="" />
          {badge}
        </div>
        <div className="md:hidden">
         <img src={hum} className='text-white' alt="" />
        </div>
      </div>
    </div>
   </div>

     

   </div>
 
    
  )
}

export default Navbar

