import { FunctionComponent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavItem: React.FC<{
    activePage: string,
    setActivePage: Function,
    name: string,
    route: string

}> = ({activePage, name, route, setActivePage}) => (
         activePage != name ? (
         <Link href={route}>
                    <a>
                    <span onClick={() => setActivePage(name)} className='hover:text-green'>{name}</span>
                    </a>
                </Link>
         ): null

)

const Navbar = () => {
    const [activePage, setActivePage] = useState<string>('')
    const { pathname } = useRouter()
    
    
    useEffect(() => {

        if (pathname === "/") {setActivePage('About')}
        if (pathname === "Projects") {setActivePage('projects')}
        if (pathname === "Resume") {setActivePage('resume')}
        if (pathname === "Web3") {setActivePage('Web3')}
    },[])
    
    return (
        <div className='flex justify-between px-5 py-3 my-3'>
            <span className='text-xl font-bold border-b-4 text-green border-green md:text-2xl' >{activePage}</span>
            <div className='flex space-x-3 text-lg'>
            <NavItem activePage={activePage} setActivePage={setActivePage} name='About' route='/' />
            <NavItem activePage={activePage} setActivePage={setActivePage} name='Projects' route='projects' />
            <NavItem activePage={activePage} setActivePage={setActivePage} name='Resume' route='resume' />
            <NavItem activePage={activePage} setActivePage={setActivePage} name='Web3' route='web3' />
            </div>
        </div>
        
        
        
    )
}

export default Navbar