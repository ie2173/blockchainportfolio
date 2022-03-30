import React from 'react'
import { Languages, tools } from '../data'
import Bar from '../components/Bar'

const resume = () => {
  return (
    <div className='p-4'>
      <div className='grid gap-6 md:grid-cols-2 '>
        <div> 
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div>
            <h5 className='mt-3 text-xl font-semibold '>Columbia University</h5>
            <h5 className=' text-m'>B.A. Economics</h5>
            <h5 className='text-m'>Class of 2016</h5>
          </div>
        </div>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          <div>
            <h5 className='mt-3 text-xl font-semibold'>Zap Protocol</h5>
            <h5 className=' text-m'>Oct 2021 - Present</h5>
            <p className='my-3'>I don't know what I did at this job.</p>
          </div>

        </div>
      </div>
      <div className='grid gap-6 mt-20 md:grid-cols-2 '>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Languages</h5>
            <div className='my-2'>
              {
                Languages.map(language => (<Bar data={language} key={language.name}/>))
              }
            </div>
        </div>
        <div>
        <h5 className='my-3 text-2xl font-bold'>Tools</h5>
            <div className='my-2'>
              {
                tools.map(tool => (<Bar data={tool} key={tool.name} />))
              }
            </div>
        </div>
      </div>
    </div>
  )
}

export default resume