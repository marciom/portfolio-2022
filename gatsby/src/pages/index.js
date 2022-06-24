import React from "react";
import Layout from "../components/Layout";
import FeaturedWork from "../components/FeaturedWork";
import Hero from "../components/Hero";

export default function HomePage() {
    return (
        <>
            <Layout breadcrumbs={["Portfolio"]}>
                <Hero />

                <FeaturedWork />

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
