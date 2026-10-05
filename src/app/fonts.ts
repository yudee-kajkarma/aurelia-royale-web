import {
    Manrope,
    Playfair_Display,
    Cormorant_Garamond,
    Jost,
} from "next/font/google";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
    variable: "--font-cormorant",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const fontClassNames = `${manrope.variable} ${playfair.variable} ${cormorant.variable} ${jost.variable}`;
