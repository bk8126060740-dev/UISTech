import dynamic from "next/dynamic"
import hrBg from '../../assests/images/business-team.png'
import Loading from "../loading"

const BreadCrumsSlide = dynamic(() => import('@/components/BreadCrumsSlide/BreadCrumsSlide'), {
    loading: () => <Loading />,
})
const Humanresourcemanagement = dynamic(() => import('@/pages/Services/Humanresourcemanagement/Humanresourcemanagement'), {
    loading: () => <Loading />,
})
// const imageUrl = process.env.BASE_URL + hrBg?.src
const imageUrl = 'https://uistech.in/assets/images/UIS_LOGO.png'
export const metadata = {
    title: 'UIS TECH',
    description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
    keywords: "UISPL TECH, technology solutions, business services, software development, tech consultancy, Man power, Human Resource ",
    openGraph: {
        title: 'UISPL TECH | Human Resources ',
        description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
        images: [imageUrl],
        url: process.env.BASE_URL
    },
    twitter: {
        title: 'UISPL TECH | Human Resources ',
        description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
        images: [imageUrl],
        url: process.env.BASE_URL,
        card: 'summary_large_image'
    }
}

const Services = () => {
    return (
        <>
            <BreadCrumsSlide
                icon='human-resourses'
                image={hrBg}
                title={"Human Resource Management"}
                description={`Our Human Resource Management services are designed to streamline your workforce processes, enhance productivity, and ensure compliance, while fostering a dynamic and supportive workplace environment.`}
            />
            <Humanresourcemanagement />
        </>
    )
}

export default Services