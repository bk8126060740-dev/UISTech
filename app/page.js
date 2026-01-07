
import dynamic from "next/dynamic";
import Loading from "./loading";

// const imageUrl = process.env.BASE_URL + HomeImage?.src
const imageUrl = 'https://uistech.in/assets/images/UIS_LOGO.png'
const favicon = 'https://uistech.in/favicon.ico'

export const metadata = {
  title: 'UIS TECH',
  description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
  keywords: "UISPL TECH, technology solutions, business services, software development, tech consultancy, Man power, Human Resource",
  openGraph: {
    title: 'UISPL TECH | Home ',
    description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
    images: [imageUrl, favicon],
    url: process.env.BASE_URL
  },
  twitter: {
    title: 'UISPL TECH | Home ',
    description: 'UIS TECH | provides technology solutions and services to enhance business performance.',
    images: [imageUrl],
    url: process.env.BASE_URL,
    card: 'summary_large_image'
  },
}

const HomeSection = dynamic(() => import("@/pages/Home/Home"), {
  loading: () => <Loading />,
})

export default function HomePage() {

  return (
    <HomeSection />
  );
}
