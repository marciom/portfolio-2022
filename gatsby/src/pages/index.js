import React from "react";

export default function HomePage() {
    return (
        <>
            <nav id="main-menu">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>

                <div class="socials">
                    <ul>
                        <li>
                            <a href="#">Twitter</a>
                        </li>
                        <li>
                            <a href="#">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
