import { GetServerSidePropsContext, GetStaticPathsContext, GetStaticPropsContext } from 'next'
import { services } from '../data'
import ServiceCard from '../components/ServiceCard'


const index = () => {
  return (
    <div className='flex flex-col pt-1 px-7'>
      <p className='my-5 text-left text-medium' >I am currently a web3 Developer and defi investor looking to help contribute to the web3 environment and help make cryptocurrency more accessible. Please Join me in welcoming you into this community or something.  I dunno this is just filler till to tweak around shit. 
      </p>

      <div className='flex-grow tracking-wide text-left bg-gray-500 dark:bg-dark-500 p-7 mt-7' style={{marginLeft:'-2rem',marginRight:'-2rem'}}>
        <h6 className='p-2 text-xl font-bold'>Skills:</h6>
        <div className='grid gap-6 text-left md:grid-cols-2'>
        {services.map(service => (
              <div className='bg-gray-100 rounded-lg dark:bg-dark-100 lg:col-span-1'key={service.title}>
              <ServiceCard service={service} />
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default index



