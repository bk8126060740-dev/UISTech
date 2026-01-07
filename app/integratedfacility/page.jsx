import dynamic from 'next/dynamic'
import intBg from '../../assests/images/modern-technology.jpg'
import Loading from '../loading'

const BreadCrumsSlide = dynamic(() => import('@/components/BreadCrumsSlide/BreadCrumsSlide'), {
  loading: () => <Loading />,
})
const ServiceInfo = dynamic(() => import('@/pages/Services/ServiceInfo/ServiceInfo'), {
  loading: () => <Loading />,
})

// const imageUrl = process.env.BASE_URL + intBg?.src
const imageUrl = 'https://uistech.in/assets/images/UIS_LOGO.png'
export const metadata = {
  title: 'UIS TECH',
  description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
  keywords: "UISPL TECH, technology solutions, business services, software development, tech consultancy, Man power, Human Resource ",
  openGraph: {
    title: 'UISPL TECH | Integrated Facility ',
    description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
    images: [imageUrl],
    url: process.env.BASE_URL
  },
  twitter: {
    title: 'UISPL TECH | Integrated Facility ',
    description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
    images: [imageUrl],
    url: process.env.BASE_URL,
    card: 'summary_large_image'
  }
}

const page = () => {
  return (
    <>
      <BreadCrumsSlide
        image={intBg}
        icon={'integrated-facility'}
        title={'Integrated Facility Management'}
        description={`Our Integrated Facility Management services streamline operations, optimize resources, and ensure seamless management of your facilities, creating efficient and safe environments for growth.`}
      />
      <ServiceInfo />
    </>
  )
}

export default page