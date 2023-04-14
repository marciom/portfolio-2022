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

export function Head() {
    return (
        <>
            <title>Marcio Morgado - Home</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1"
            />
        </>
    );
}
