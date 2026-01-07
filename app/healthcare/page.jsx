import dynamic from 'next/dynamic'
import healthBg from '../../assests/images/medical-thematic.png'
import Loading from '../loading'

const BreadCrumsSlide = dynamic(() => import('@/components/BreadCrumsSlide/BreadCrumsSlide'), {
    loading: () => <Loading />,
})
const HealthManagment = dynamic(() => import('@/pages/Services/HealthManagment/HealthManagment'), {
    loading: () => <Loading />,
})
// const imageUrl = process.env.BASE_URL + healthBg?.src
const imageUrl = 'https://uistech.in/assets/images/UIS_LOGO.png'
export const metadata = {
    title: 'UIS TECH',
    description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
    keywords: "UISPL TECH, technology solutions, business services, software development, tech consultancy, Man power, Human Resource ",
    openGraph: {
        title: 'UISPL TECH | Health Care ',
        description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
        images: [imageUrl],
        url: process.env.BASE_URL
    },
    twitter: {
        title: 'UISPL TECH | Health Care ',
        description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
        images: [imageUrl],
        url: process.env.BASE_URL,
        card: 'summary_large_image'
    }
}

const HealthCare = () => {
    return (
        <>
            <BreadCrumsSlide
                icon='health'
                image={healthBg}
                title={"Healthcare Management"}
                description={`Our healthcare consulting services provide expert guidance to help healthcare organizations optimize their operations, improve patient care, and ensure regulatory compliance. We work closely with your team to identify areas of improvement and develop tailored solutions to achieve sustainable growth.`}
            />
            <HealthManagment />
        </>
    )
}

export default HealthCare