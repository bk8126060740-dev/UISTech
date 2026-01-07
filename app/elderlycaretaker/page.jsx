import dynamic from 'next/dynamic'
import elderBg from '../../assests/images/elderly-caretaker/elderly-caretaker-bg.jpg'
import Loading from '../loading'

const BreadCrumsSlide = dynamic(() => import('@/components/BreadCrumsSlide/BreadCrumsSlide'), {
    loading: () => <Loading />,
})
const Elderlycaretaker = dynamic(() => import('@/pages/Elderlycaretaker/Elderlycaretaker'), {
    loading: () => <Loading />,
})
// const imageUrl = process.env.BASE_URL + elderBg?.src
const imageUrl = 'https://uistech.in/assets/images/UIS_LOGO.png'
export const metadata = {
    title: 'UIS TECH',
    description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
    keywords: "UISPL TECH, technology solutions, business services, software development, tech consultancy, Man power, Human Resource ",
    openGraph: {
        title: 'UISPL TECH | Elder Care Taker ',
        description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
        images: [imageUrl],
        url: process.env.BASE_URL
    },
    twitter: {
        title: 'UISPL TECH | Elder Care Taker ',
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
                icon='elder-care'
                image={elderBg}
                title={"We High Quality Elderly Care"}
                description={`The elderly care services from UISPL are designed to attain and maintain physical and mental well being of its beneficiaries by addressing their physical, social, psychological, empowerment & recreational needs.`}
            />
            <Elderlycaretaker />
        </>
    )
}

export default page