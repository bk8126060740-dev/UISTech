import dynamic from "next/dynamic"
import Loading from "../loading"

const AboutInfo = dynamic(() => import("@/pages/Aboutus/AboutInfo/AboutInfo"), {
  loading: () => <Loading />,
})
const Certifications = dynamic(() => import("@/pages/Aboutus/Certifications/Certifications"), {
  loading: () => <Loading />,
})
const VideoSection = dynamic(() => import("@/pages/Aboutus/VideoSection/VideoSection"), {
  loading: () => <Loading />,
})
const WhyUispl = dynamic(() => import("@/pages/Aboutus/WhyUispl/WhyUispl"), {
  loading: () => <Loading />,
})
const JobTestimonial = dynamic(() => import("@/pages/Aboutus/JobTestimonial/JobTestimonial"), {
  loading: () => <Loading />,
})

// const imageUrl = process.env.BASE_URL + profileImg?.src
const imageUrl = 'https://uistech.in/assets/images/UIS_LOGO.png'
export const metadata = {
  title: 'UIS TECH',
  description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
  keywords: "UISPL TECH, technology solutions, business services, software development, tech consultancy, Man power, Human Resource ",
  openGraph: {
    title: 'UISPL TECH | About Us ',
    description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
    images: [imageUrl],
    url: process.env.BASE_URL
  },
  twitter: {
    title: 'UISPL TECH | About Us ',
    description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
    images: [imageUrl],
    url: process.env.BASE_URL,
    card: 'summary_large_image'
  }
}

const Aboutus = () => {

  return (
    <>
      <VideoSection />
      <AboutInfo />
      <WhyUispl />
      <Certifications />
      <JobTestimonial />
    </>
  )
}

export default Aboutus