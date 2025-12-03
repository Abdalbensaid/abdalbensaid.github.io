/** @type {import('tailwindcss').Config} */
module.exports = {
    // 1. Définir le contenu : doit pointer vers votre HTML
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}", // Si vous utilisez React/TS dans src/
    ],
    // 2. Le mode sombre est défini ici
    darkMode: "class", 
    
    theme: {
        extend: {
            // 3. VOS COULEURS ET THÈMES PERSONNALISÉS
            colors: {
                primary: "#f59e0b",
                paper: "#f3f2ef", // La couleur de fond crème du design
                "text-main": "#1a1a1a",
                "accent-teal": "#4fd1c5", // Le turquoise du design
            },
            fontFamily: {
                display: ["Poppins", "sans-serif"],
            },
            boxShadow: {
                hard: "4px 4px 0px 0px rgba(0,0,0,1)", // L'effet "Dessin / Sticker"
                "hard-sm": "2px 2px 0px 0px rgba(0,0,0,1)",
            },
            borderWidth: {
                3: "3px",
            },
        },
    },
    plugins: [],
}