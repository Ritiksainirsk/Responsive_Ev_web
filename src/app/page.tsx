"use client"
import Image from 'next/image'

import React from 'react';
import Homee from './Component/Homee';
import Service from './Component/Service';
import Info from './Component/Info';

export default function Home() {
  return (
    <main className="">
     <Homee/>
     <Service/>
     <Info/>
    </main>
  )
}
