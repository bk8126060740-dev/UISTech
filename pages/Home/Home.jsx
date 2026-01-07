'use client';

import Head from "next/head";
import Loading from '@/app/loading';
import AlertMessage from '@/components/Alert/Alert';
import { useState } from 'react';
import FirstSlideSection from './FirstSlideSection/FirstSlideSection';
import OurClient from './OurClient/OurClient';
import Ourteam from './Ourteam/Ourteam';
import WelcomeSection from './WelcomeSection/WelcomeSection';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState({
        open: false,
        success: false,
        message: '',
    });

    if (isLoading) return <Loading />;

    return (
        <>
            <Head>
                <title>Home | UISPL</title>
                <meta
                  name="description"
                  content="UISPL official website – software development, IT services and solutions."
                />
                <meta
                  name="google-site-verification"
                  content="ZY5RFdeecVemrk5taIsVyfUIg7asacUpS47c7rVZDMw"
                />
            </Head>

            <FirstSlideSection />
            <WelcomeSection />
            <Ourteam />
            <OurClient />

            <AlertMessage {...alert} />
        </>
    );
};

export default Home;
