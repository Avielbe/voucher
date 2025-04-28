// src/components/Footer.tsx

import React from "react";

const Footer: React.FC = () => (
    <footer className="bg-gray-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
            <p>© {new Date().getFullYear()} Aviel BE. All rights reserved.</p>
            <p className="mt-2">
                Landing page live at:{" "}
                <a
                    href="https://your-app.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    your-app.web.app
                </a>
            </p>
        </div>
    </footer>
);

export default Footer;
