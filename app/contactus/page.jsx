import dynamic from 'next/dynamic'
import contactBg from '../../assests/images/contact-us-bg.png'
import Loading from '../loading'

const BreadCrumsSlide = dynamic(() => import('@/components/BreadCrumsSlide/BreadCrumsSlide'), {
    loading: () => <Loading />,
})
const ContactDetails = dynamic(() => import('@/pages/Contactus/ContactDetails/ContactDetails'), {
    loading: () => <Loading />,
})
const Contactplace = dynamic(() => import('@/pages/Contactus/Contactplace/Contactplace'), {
    loading: () => <Loading />,
})
// const imageUrl = process.env.BASE_URL + contactBg?.src
const imageUrl = 'https://uistech.in/assets/images/UIS_LOGO.png'
export const metadata = {
    title: 'UIS TECH',
    description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
    keywords: "UISPL TECH, technology solutions, business services, software development, tech consultancy, Man power, Human Resource ",
    openGraph: {
        title: 'UISPL TECH | Contact Us ',
        description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
        images: [imageUrl],
        url: process.env.BASE_URL
    },
    twitter: {
        title: 'UISPL TECH | Contact Us ',
        description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
        images: [imageUrl],
        url: process.env.BASE_URL,
        card: 'summary_large_image'
    }
}

const Contactus = () => {
    return (
        <>
            <BreadCrumsSlide
                icon='contact-us'
                image={contactBg}
                title={"Contact Us"}
                description={`Have questions or need assistance? We’re here to help. Reach out to us, and we’ll connect with you as soon as possible.`}
            />
            <ContactDetails />
            <Contactplace />
        </>
    )
}

export default Contactus