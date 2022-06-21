import React from "react";
import Layout from "../components/Layout";

export default function HomePage() {
    return (
        <>
            <Layout breadcrumbs={["Portfolio"]}>
                <section>
                    <h1>
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
                </section>

                <section>
                    <h2>Featured Work</h2>
                    <div className="fw-container">
                        <div clasNames="fw-project">
                            <img src="" alt="" />
                            <div className="content">
                                <h3 className="title serif">
                                    Canada Post Spring Series: Pansis
                                </h3>
                                <p class="desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quisque lobortis semper
                                    libero, luctus.
                                </p>
                            </div>
                        </div>
                        <div clasNames="fw-project">
                            <img src="" alt="" />
                            <div className="content">
                                <h3 className="title serif">
                                    Canada Post Spring Series: Pansis
                                </h3>
                                <p class="desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quisque lobortis semper
                                    libero, luctus.
                                </p>
                            </div>
                        </div>
                        <div clasNames="fw-project">
                            <img src="" alt="" />
                            <div className="content">
                                <h3 className="title serif">
                                    Canada Post Spring Series: Pansis
                                </h3>
                                <p class="desc">
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
