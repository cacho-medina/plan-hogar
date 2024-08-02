/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                gris: "#F5F7F9",
                "gris-oscuro": "#4D4E55",
            },
        },
    },
    plugins: [],
};
