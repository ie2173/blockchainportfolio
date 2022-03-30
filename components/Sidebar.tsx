import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { BsFileEarmarkPersonFill } from 'react-icons/bs' 

const Sidebar = () => {
    return (
        <div id='main' className='h-full font-Questrial'>
           <div >
               <img src="https://www.partycity.com.cy/media/k2/items/cache/97d987363fe63c4fd6af306d4ce1e151_XL.jpg" alt="avatar" className='w-32 h-32 mx-auto rounded-full'></img>
           </div> 
            <h3 className='my-4 text-3xl font-medium tracking-wider '>Ian Elliott</h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Web3 Developer </p>
            <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full'><BsFileEarmarkPersonFill className='w-5 h-5' /> Download Resume</a>
            <div className='flex justify-around w-9/12 m-5 mx-auto text-green md:w-full'>
            <button><a href='http://www.github.com/ie2173' target='_blank'><FaGithub  className='w-7 h-7'/></a></button>
            <button><a href='https://www.linkedin.com/in/ilelliott/' target='_blank'><FaLinkedin className='w-7 h-7' /></a></button>
            <button><a href='https://twitter.com/lunacrypto4' target='_blank'><FaTwitter className='w-7 h-7' /></a></button>
            </div>
            <div id='2' className='py-4 my-5 bg-gray-200' style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
            <div className='flex justify-center space-x-2 item-center'> <MdLocationOn/>
            San Jose, CA</div>
                <p>ie2173@columbia.edu</p>
                <p>(425) 770-2474</p>
            </div>
            <div id='3'>
                <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none' onClick={() => window.open('mailto:ie2173@columbia.edu')} >Email Button</button>
                <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400' >Dark Mode</button> 
                <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400' >Metamask!</button>
            </div>
        </div>
    )
}

export default Sidebar