import React from "react";

export default function Footer() {
    return (
        <>
            <footer>
                <address>
                    <h2>Want to chat?</h2>
                    <p>Shoot me an email at me@mrco.design.</p>
                    <p>I'd love to hear from you!</p>
                </address>

                <p>&copy; {new Date().getFullYear()} Marcio Morgado.</p>
            </footer>
        </>
    );
}
