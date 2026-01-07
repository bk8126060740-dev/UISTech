import dynamic from 'next/dynamic'
import seviceBg from '../../assests/images/development-company-business.png'
import Loading from '../loading'

const BreadCrumsSlide = dynamic(() => import('@/components/BreadCrumsSlide/BreadCrumsSlide'), {
    loading: () => <Loading />,
})
const AllServices = dynamic(() => import('@/pages/Services/AllServices/AllServices'), {
    loading: () => <Loading />,
})
// const imageUrl = process.env.BASE_URL + seviceBg?.src
const imageUrl = 'https://uistech.in/assets/images/UIS_LOGO.png'
export const metadata = {
    title: 'UIS TECH',
    description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
    keywords: "UISPL TECH, technology solutions, business services, software development, tech consultancy, Man power, Human Resource ",
    openGraph: {
        title: 'UISPL TECH | Services ',
        description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
        images: [imageUrl],
        url: process.env.BASE_URL
    },
    twitter: {
        title: 'UISPL TECH | Services',
        description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
        images: [
            'https://media.licdn.com/dms/image/v2/C511BAQFNUBZKZUXytQ/company-background_10000/company-background_10000/0/1583946750462/urmila_info_solution_pvt_ltd_cover?e=2147483647&v=beta&t=Wm6YLSIlfCENb9qhLq3x31_KdCIveCUuqsJ2w36i7Ow'
        ],
        url: process.env.BASE_URL,
        card: 'summary_large_image'
    }
}

const Services = () => {
    return (
        <>
            <BreadCrumsSlide
                image={seviceBg}
                icon={'integrated-facility'}
                title={'Integrated Facility Management'}
                description={`Our Integrated Facility Management services streamline operations, optimize resources, and ensure seamless management of your facilities, creating efficient and safe environments for growth.`}
            />
            <AllServices />
        </>
    )
}

export default Services