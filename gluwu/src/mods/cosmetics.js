import logger from "../lib/logger.js";
import { addPersistentStyle } from "../lib/stylesheet.js";

const stylesheet = `
    #app > div > div:first-child, #app > div > div:last-child > div:first-child {
        display: none !important;
    }

    #app > div > div:last-child > span:nth-child(2) {
        visibility: hidden;
    }

    #app > div > div:last-child > span:nth-child(4) {
        margin-bottom: 0.5rem;
    }
`;

export default async function initCosmetics(Chromium) {
    logger.log("Cosmetics", "Injecting stylesheet...");
    addPersistentStyle(Chromium, stylesheet);
}