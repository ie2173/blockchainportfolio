import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'

export const getServerSideProps = async (context:GetServerSidePropsContext) => {

    const res = await fetch('http://localhost:3000/api/services')
    const data = await res.json()
    
    return {
      props:{
        services: data.services,
      }
    }
  }
  
  
  export const getStaticProps = async (context: GetStaticPropsContext) => {
    
    const res = await fetch('http://localhost:3000/api/services')
    const data = await res.json()
    
    return {
      props: {
        services: data.services,
      }
    }
  }