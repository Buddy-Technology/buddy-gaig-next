'use client';
import { useEffect } from 'react';
import BuddyOfferElement, { useConfig } from '@buddy-technology/offer-component';
import Head from 'next/head';
import Nav from '@components/Nav';
import Hero from '@components/Hero';
import RTB from '@components/RTB';
import Testimonials from '@components/Testimonials';
import Leagues from '@components/Leagues';
import FeaturedTeam from '@components/FeaturedTeam';
import Footer from '@components/Footer';


const userData = {
  "customer": {
    "firstName": "Joe",
    "lastName": "Tester",
    "address": {
      "line1": "123 Main St",
      "city": "Birmingham",
      "state": "AL",
      "postalCode": "35213",
      "country": "US"
    },
    "email": "test1@buddy-testing.insure",
    "phone": "+15555555555"
  },
  "policy": {

    "state": "AL",
    "startDate": "03/15/2024",
    "endDate": "03/31/2024",
    "utility": {
      "childFirstName": "kevin",
      "childLastName": "power",
      "childSport": "softball",
      "childDob": "09/09/2011",
      "childGender": "Male",
      "childAgeNumber": 12,
      "addressAutocompleteInput": "123 Main St, Birmingham, AL 35213, USA",
      "childName": "kevin power",
      "name": "Joe Tester",
      "customerFirstName": "Joe",
      "customerLastName": "Tester",
      "customerCurrentAddress": {
        "line1": "123 Main St",
        "line2": "",
        "city": "Birmingham",
        "state": "AL",
        "postalCode": "35213"
      },
      "singleSports": "softball",
      "childRelationship": "parent"
    }
  }
}

function Loading() {
  return <div>Loading...</div>;
}

function OfferElement() {

  useEffect(() => {
    // This code runs only on the client side
    const intervalId = setInterval(() => {
      if (window.Buddy) {
        window.Buddy.partnerUserEvents = (payload) => {
          console.log('partnerUserEvents', payload);
        };
        clearInterval(intervalId);
      }
    }, 100); // Check every 100 milliseconds

    return () => clearInterval(intervalId); // Clean up the interval
  }, []);

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
        data={userData}
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
