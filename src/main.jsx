import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <NextUIProvider>
                <main className="flex flex-col min-h-screen scroll-smooth">
                    <App />
                </main>
            </NextUIProvider>
        </BrowserRouter>
    </React.StrictMode>
);
