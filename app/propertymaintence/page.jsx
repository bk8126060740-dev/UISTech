import dynamic from "next/dynamic"
import propertyBg from '../../assests/images/property-maintenance/property-maintain-bg.jpeg'
import Loading from "../loading"

const BreadCrumsSlide = dynamic(() => import('@/components/BreadCrumsSlide/BreadCrumsSlide'), {
    loading: () => <Loading />,
})
const PropertyMaintenance = dynamic(() => import('@/pages/Services/PropertyMaintenance/PropertyMaintenance'), {
    loading: () => <Loading />,
})
// const imageUrl = process.env.BASE_URL + propertyBg?.src
const imageUrl = 'https://uistech.in/assets/images/UIS_LOGO.png'
export const metadata = {
    title: 'UIS TECH',
    description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
    keywords: "UISPL TECH, technology solutions, business services, software development, tech consultancy, Man power, Human Resource ",
    openGraph: {
        title: 'UISPL TECH | Property Maintence ',
        description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
        images: [imageUrl],
        url: process.env.BASE_URL
    },
    twitter: {
        title: 'UISPL TECH | Property Maintence ',
        description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
        images: [imageUrl],
        url: process.env.BASE_URL,
        card: 'summary_large_image'
    }
}

const Propertymaintain = () => {
    return (
        <>
            <BreadCrumsSlide
                icon={'property-maintenance'}
                image={propertyBg}
                title={"Property Maintenance"}
                description={`Ensuring Your Property Stays Pristine and Functional. From Repairs to Renovations, We Handle it All with Expertise and Care.`}
            />
            <PropertyMaintenance />
        </>
    )
}

export default Propertymaintain