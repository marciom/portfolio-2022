import React from "react";
import { Link } from "gatsby";

export default function Nav() {
    return (
        <>
            <header>
                <Link to="/">Marcio Morgado Logo</Link>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about-me">About</Link>
                        </li>
                        <li>
                            <Link to="/work/">Work</Link>
                        </li>
                        <li>
                            <Link to="/">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <ul>
                    <li>
                        <a
                            href="https://www.twitter.com/marciomorgado"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/marciomorgado"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </header>
        </>
    );
}
