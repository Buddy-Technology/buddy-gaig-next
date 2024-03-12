'use client';

import Head from 'next/head';
import Nav from '@components/Nav';
import Hero from '@components/Hero';
import RTB from '@components/RTB';
import Testimonials from '@components/Testimonials';
import Leagues from '@components/Leagues';
import FeaturedTeam from '@components/FeaturedTeam';
import Footer from '@components/Footer';


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
        <Testimonials />
        <FeaturedTeam />
      </main>

      <Footer />
    </div>
  )
}