'use client';

import BuddyOfferElement, { useConfig } from '@buddy-technology/offer-component';
import Head from 'next/head';
import Nav from '@components/Nav';
import Hero from '@components/Hero';
import RTB from '@components/RTB';
import Testimonials from '@components/Testimonials';
import Leagues from '@components/Leagues';
import FeaturedTeam from '@components/FeaturedTeam';
import Footer from '@components/Footer';

function Loading() {
  return <div>Loading...</div>;
}

function OfferElement() {
  const { config, isLoading } = useConfig(
    "https://staging.embed.buddy.insure/gaig/pomi/gaig-pomi-accident-config-react.js"
  );

  if (isLoading || !config) return <Loading />;

  return (
    <div className="App w-full">
      <BuddyOfferElement
        ion="GAIG_POMI_ACCIDENT"
        partnerID="p-buddytest"
        stage="STAGING"
        theme={config.themeBase}
        onUserEvent={config.userEvents}
      />
    </div>
  );
}

export default function Home() {

  return (
    <div className="container" style={{ maxWidth: "100% !important" }}>
      <Head>
        <title>Rosterable</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <Hero />
        <RTB />
        <OfferElement />
        <Testimonials />
        <FeaturedTeam />
      </main>

      <Footer />
    </div>
  )
}
