import dynamic from 'next/dynamic'
import archiveBg from '../../assests/images/graphic-designers-meeting 1.png'
import Loading from '../loading'

const BreadCrumsSlide = dynamic(() => import('@/components/BreadCrumsSlide/BreadCrumsSlide'), {
    loading: () => <Loading />,
})
const CredintialArchive = dynamic(() => import('@/pages/Achivments/CredintialArchive/CredintialArchive'), {
    loading: () => <Loading />,
})
const ArchivmentCount = dynamic(() => import('@/pages/Achivments/ArchivmentCount/ArchivmentCount'), {
    loading: () => <Loading />,
})
const MileStones = dynamic(() => import('@/pages/Achivments/MileStones/MileStones'), {
    loading: () => <Loading />,
})
const OurHistory = dynamic(() => import('@/pages/Achivments/OurHistory/OurHistory'), {
    loading: () => <Loading />,
})
const GenerateRevanue = dynamic(() => import('@/pages/Achivments/GenerateRevanue/GenerateRevanue'), {
    loading: () => <Loading />,
})
const CustomerBase = dynamic(() => import('@/pages/Achivments/CustomerBase/CustomerBase'), {
    loading: () => <Loading />,
})
const ProductPortfolio = dynamic(() => import('@/pages/Achivments/ProductPortfolio/ProductPortfolio'), {
    loading: () => <Loading />,
})

// const imageUrl = process.env.BASE_URL + archiveBg?.src
const imageUrl = 'https://uistech.in/assets/images/certificates/ISO-45001-Logo.png'
export const metadata = {
    title: 'UIS TECH',
    description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
    keywords: "UISPL TECH, technology solutions, business services, software development, tech consultancy, Man power, Human Resource ",
    openGraph: {
        title: 'UISPL TECH | Achievements ',
        description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
        images: [imageUrl],
        url: process.env.BASE_URL
    },
    twitter: {
        title: 'UISPL TECH | Achievements ',
        description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
        images: [imageUrl],
        url: process.env.BASE_URL,
        card: 'summary_large_image'
    }
}

const Achievements = () => {
    return (
        <>
            <BreadCrumsSlide
                icon='archivment'
                image={archiveBg}
                title={'Achievements'}
                description={`Showcasing our milestones, innovations, and the trust we've built with our clients, these achievements reflect our dedication to delivering top-notch tech solutions.`}
            />
            <CredintialArchive />
            <ArchivmentCount />
            <MileStones />
            <OurHistory />
            <GenerateRevanue />
            <CustomerBase />
            <ProductPortfolio />
        </>

    )
}

export default Achievements;