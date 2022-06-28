import React from 'react';
import FeaturedProjects from '../components/FeaturedProjects';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

export default function HomePage() {
   return (
      <>
         <Hero />

         <FeaturedProjects />

         <Projects />
      </>
   );
}
