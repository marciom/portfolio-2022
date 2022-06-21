import React from "react";
import Layout from "../components/Layout";

export default function AboutPage() {
    return (
        <>
            <Layout breadcrumbs={["About Me"]}>
                <section>
                    <h1>
                        I strive to create things that are <span>simple</span>,{" "}
                        <span>effective</span> and <span>elegant</span>.
                    </h1>
                    <img src="" alt="" />

                    <h2>Introduction</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque lorem elit, tincidunt quis tincidunt in,
                        feugiat sit amet justo. Duis dictum ante mi, eu
                        porttitor metus varius id. Nullam non diam interdum,
                        vulputate massa vel, convallis leo. Morbi purus risus,
                        egestas et varius ut, euismod sit amet metus. Etiam ac
                        tortor interdum, tristique metus in, consectetur massa.
                        Duis bibendum sed tortor et cursus. Fusce in malesuada
                        ipsum. Suspendisse dictum tellus non turpis faucibus
                        consectetur. Suspendisse placerat tempor enim, a
                        placerat nulla ultrices nec.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque lorem elit, tincidunt quis tincidunt in,
                        feugiat sit amet justo. Duis dictum ante mi, eu
                        porttitor metus varius id. Nullam non diam interdum,
                        vulputate massa vel, convallis leo. Morbi purus risus,
                        egestas et varius ut, euismod sit amet metus. Etiam ac
                        tortor interdum, tristique metus in, consectetur massa.
                        Duis bibendum sed tortor et cursus. Fusce in malesuada
                        ipsum. Suspendisse dictum tellus non turpis faucibus
                        consectetur. Suspendisse placerat tempor enim, a
                        placerat nulla ultrices nec.
                    </p>

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
            </Layout>
        </>
    );
}
