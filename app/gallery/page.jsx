import dynamic from "next/dynamic"
import galleryBg from '../../assests/images/Gallery/gallery-bg.png'
import Loading from "../loading"

const BreadCrumsSlide = dynamic(() => import('@/components/BreadCrumsSlide/BreadCrumsSlide'), {
    loading: () => <Loading />,
})
const Gallery = dynamic(() => import("@/pages/Gallery/Gallery"), {
    loading: () => <Loading />,
})
// const imageUrl = process.env.BASE_URL + galleryBg?.src
const imageUrl = 'https://uistech.in/assets/images/UIS_LOGO.png'
export const metadata = {
    title: 'UIS TECH',
    description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
    keywords: "UISPL TECH, technology solutions, business services, software development, tech consultancy, Man power, Human Resource ",
    openGraph: {
        title: 'UISPL TECH | Gallery',
        description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
        images: [imageUrl],
        url: process.env.BASE_URL
    },
    twitter: {
        title: 'UISPL TECH | Gallery',
        description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
        images: [imageUrl],
        url: process.env.BASE_URL,
        card: 'summary_large_image'
    }
}

const Gallerys = () => {
    return (
        <>
            <BreadCrumsSlide
                image={galleryBg}
                icon='gallery'
                title={"Gallery"}
                description={`Explore our collection showcasing the finest moments, projects, and creations. A visual journey through our work and achievements.`}
            />
            <Gallery />
        </>
    )
}

export default Gallerys