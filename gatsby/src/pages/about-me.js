import React from "react";
import styled from "styled-components";

import FeaturedProjects from "../components/FeaturedProjects";
import Hero from "../components/Hero";

const AboutStyle = styled.section`
    margin-top: 25vh;

    h1 {
        font-size: 5rem;
        line-height: 1;
        color: var(--purple);
    }
`;

export default function AboutPage() {
    return (
        <>
            <Hero />

            <FeaturedProjects />

            <AboutStyle>
                {/* Pull out quote */}
                <h1 className="serif">
                    I strive to create things that are{" "}
                    <span className="italic">simple</span>,{" "}
                    <span className="italic">effective</span> and{" "}
                    <span className="italic">elegant</span>.
                </h1>

                <p>
                    I’m currently a product designer at Nasdaq. My day-to-day
                    involves improving the experience of our users on the Nasdaq
                    Data Link platform and pushing our design aesthetic forward.
                </p>

                <img src="" alt="" />

                <h2>Introduction</h2>
                <p>
                    I’ve always had a passion for art and technology and looked
                    for ways to make money doing both. At first I intended to be
                    an animator and I was fully motivated to become just that.
                    One thing led to another and I stumbled upon graphic design.
                    After pursuing education at Humber College I worked at HM&E
                    Design, a Toronto-based design agency, for 6.5 years. During
                    that time I built a foundation of typography, layout and
                    critical design thinking.
                </p>

                <p>
                    I approach design with a curious mindset and ask a lot of
                    questions to understand the pain points of the project. This
                    works well to establish the right tools to use and allows me
                    to strive to create things that are simple, effective and
                    elegant. I work best with collaborative teams that respect
                    the design process.
                </p>

                <p>
                    I describe myself as a fast learning generalist and a
                    compulsive problem solver. I was fortunate to work on a wide
                    variety of projects for different clients during my career.
                    This has given me a unique insight into project requirements
                    for both print and digital. On rare occasions, it allowed me
                    to bridge the gap between print and digital and create a
                    lasting experience for people.
                </p>

                <p>
                    I’m currently open to opportunities at both large and small
                    companies while leaning towards working with startups. If
                    you have an opportunity that you think I would be a great
                    fit for or an idea you would like to partner with don’t
                    hesitate to reach out, I’d love to learn more about it.
                </p>

                <section>
                    <div>
                        <h2>Work History</h2>
                        2019 — Present Designer, Quandl 2012 — 2019 Designer,
                        HM&E Design May 2012 — Jun 2012 Design Intern,
                        Christie-Stewart
                        <h2>Skills</h2>
                        <div>
                            <h3>Design Skills</h3>
                            <ul>
                                <li>Design Thinking</li>
                                <li>Layout</li>
                                <li>Typography</li>
                                <li>Concept Development</li>
                                <li>Colour Theory</li>
                                <li>Branding</li>
                                <li>Motion</li>
                                <li>UI/UX</li>
                                <li>Marketing</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Applications</h3>

                            <ul>
                                <li>Photoshop</li>
                                <li>Illustrator</li>
                                <li>InDesign After Effects</li>
                                <li>Premiere Pro</li>
                                <li>Adobe XD / Sketch</li>
                                <li>Visual Studio Code</li>
                                <li>Adobe Acrobat</li>
                                <li>Microsoft Office</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Coding</h3>
                            <ul>
                                <li>HTML/CSS/SCSS</li>
                                <li>jQuery/JavaScript</li>
                                <li>WordPress</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Technical</h3>
                            <ul>
                                <li>Photo retouching</li>
                                <li>Colour correction</li>
                                <li>Print production</li>
                                <li>Accessibility Compliance</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </AboutStyle>
        </>
    );
}
