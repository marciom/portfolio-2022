import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const HeroStyle = styled.section`
    margin-top: 30vh;
    margin-bottom: 20vh;

    h1 {
        color: var(--purple);
        font-size: 10.96vw;
        line-height: 12vw;
        letter-spacing: -0.03em;
        margin-bottom: 15px;
    }

    p {
        font-size: 6.5vw;
        line-height: 7.75vw;
        color: #979797;
        letter-spacing: -0.055rem;
        margin-bottom: 15px;
    }

    @media screen and (min-width: 768px) {
        margin-top: 20vh;

        p {
            font-size: 2.325rem /* 34/16 */;
            line-height: 3rem;
            letter-spacing: -1.5px;
        }
    }

    @media screen and (min-width: 1100px) {
        max-width: 1200px;
        h1 {
            font-size: 7vw;
            line-height: 7.5vw;
        }

        p {
            font-size: 3rem /* 48/16 */;
            line-height: 3.5rem;
        }
    }
`;

export default function HomePage() {
    return (
        <>
            <Layout breadcrumbs={["Portfolio"]}>
                <HeroStyle>
                    <h1 className="serif">
                        Hey, folks!
                        <br />
                        I’m Marcio Morgado.
                    </h1>
                    <p>
                        I’m a multidisciplinary designer fuelled by
                        collaboration, curiosity, craftsmanship and coffee.
                    </p>
                    <p>
                        Browse my latest projects below, view my resume, or say
                        hey.
                    </p>
                </HeroStyle>

                <section>
                    <h2>Featured Work</h2>
                    <div className="fw-container">
                        <div className="fw-project">
                            <img src="" alt="" />
                            <div className="content">
                                <h3 className="title serif">
                                    Canada Post Spring Series: Pansis
                                </h3>
                                <p className="desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quisque lobortis semper
                                    libero, luctus.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Other work</h2>
                    <div>
                        <div>
                            <img src="" alt="" />

                            <div>
                                <h3>SRI Magazine</h3>
                                <p>Editorial, Illustration, Layout, Photo</p>
                            </div>
                        </div>
                        <div>
                            <img src="" alt="" />

                            <div>
                                <h3>Quandl Onboarding</h3>
                                <p>Editorial, Illustration, Layout, Photo</p>
                            </div>
                        </div>
                        <div>
                            <img src="" alt="" />

                            <div>
                                <h3>Alternative Data Weekly</h3>
                                <p>Editorial, Illustration, Layout, Photo</p>
                            </div>
                        </div>
                        <div>
                            <img src="" alt="" />

                            <div>
                                <h3>Converge3</h3>
                                <p>Editorial, Illustration, Layout, Photo</p>
                            </div>
                        </div>
                        <div>
                            <img src="" alt="" />

                            <div>
                                <h3>Tawse Cider</h3>
                                <p>Editorial, Illustration, Layout, Photo</p>
                            </div>
                        </div>
                        <div>
                            <img src="" alt="" />

                            <div>
                                <h3>Wedding</h3>
                                <p>Editorial, Illustration, Layout, Photo</p>
                            </div>
                        </div>
                        <div>
                            <img src="" alt="" />

                            <div>
                                <h3>Marks</h3>
                            </div>
                        </div>
                        <div>
                            <img src="" alt="" />

                            <div>
                                <h3>Motion Graphics</h3>
                            </div>
                        </div>
                        <div>
                            <img src="" alt="" />

                            <div>
                                <h3>Data Visualization</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
