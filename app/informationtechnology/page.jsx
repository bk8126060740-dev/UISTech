import dynamic from "next/dynamic"
import digilizeBg from '../../assests/images/Services/Service-bg.png'
import Loading from "../loading"

const BreadCrumsSlide = dynamic(() => import('@/components/BreadCrumsSlide/BreadCrumsSlide'), {
    loading: () => <Loading />,
})
const DataDigitalization = dynamic(() => import('@/pages/Services/ITService/DataDigitalization'), {
    loading: () => <Loading />,
})

// const imageUrl = process.env.BASE_URL + digilizeBg?.src
const imageUrl = 'https://uistech.in/assets/images/UIS_LOGO.png'
export const metadata = {
    title: 'UIS TECH',
    description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
    keywords: "UISPL TECH, technology solutions, business services, software development, tech consultancy, Man power, Human Resource ",
    openGraph: {
        title: 'UISPL TECH | Information Technology ',
        description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
        images: [imageUrl],
        url: process.env.BASE_URL
    },
    twitter: {
        title: 'UISPL TECH | Information Technology ',
        description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
        images: [imageUrl],
        url: process.env.BASE_URL,
        card: 'summary_large_image'
    }
}

const DataDigitalize = () => {
    return (
        <>
            <BreadCrumsSlide
                icon={'information-technology'}
                image={digilizeBg}
                title={"Information Technology Services"}
                description={`Our IT services empower businesses with cutting-edge solutions, optimizing technology infrastructure, enhancing security, and driving innovation for sustainable growth.`}
            />
            <DataDigitalization />
        </>
    )
}

export default DataDigitalize