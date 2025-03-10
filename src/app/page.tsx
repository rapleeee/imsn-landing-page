"use client";

import Head from 'next/head';
import React, { useState } from 'react'
import Navbar from './layouts/Navbar';
import HeroSection from './layouts/HeroSection';
import Section from './layouts/Section';

export default function Page() {
  return (
    <>
      <Head>
            <title>Dashboard - IMSN</title>
            <meta name="description" content="Dashboard for Indonesia Mining Student Network" />
          </Head>
      <Navbar />
      <HeroSection/>
      <Section/>
    </>
    )
}
