import dynamic from 'next/dynamic';
import privacyBg from '../../assests/images/PrivacyPolicy/privacy-bg.png';
import Loading from '../loading';

const BreadCrumsSlide = dynamic(() => import('@/components/BreadCrumsSlide/BreadCrumsSlide'), {
   loading: () => <Loading />,
})
const Privacypolicy = dynamic(() => import('@/pages/Privacypolicy/Privacypolicy'), {
   loading: () => <Loading />,
})
// const imageUrl = process.env.BASE_URL + privacyBg?.src
const imageUrl = 'https://uistech.in/assets/images/UIS_LOGO.png'
export const metadata = {
   title: 'UIS TECH',
   description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
   keywords: "UISPL TECH, technology solutions, business services, software development, tech consultancy, Man power, Human Resource ",
   openGraph: {
      title: 'UISPL TECH | Privacy Policy ',
      description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
      images: [imageUrl],
      url: process.env.BASE_URL
   },
   twitter: {
      title: 'UISPL TECH | Privacy Policy',
      description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
      images: [imageUrl],
      url: process.env.BASE_URL,
      card: 'summary_large_image'
   }
}

const PrivacyPolicy = () => {
   return (
      <>
         <BreadCrumsSlide
            icon={'privacy-policy'}
            image={privacyBg}
            title={"Privacy Policy"}
            description={`We are committed to protecting your personal information and ensuring that your privacy is respected. Our policies are designed to give you clear insights into how we handle and safeguard your data, providing you with a secure and transparent experience.`}
         />
         <Privacypolicy />
      </>
   )
}

export default PrivacyPolicy