import * as Gluon from "../gluon/index.js";
import logger from "./lib/logger.js";

(async () => {
    const browser = await Gluon.open("https://radio.uwu.network", { windowSize: [800, 800], onLoad: () => {
        document.addEventListener("DOMContentLoaded", (event) => {
                const stylesheet = `
                #app > div:first-child > div:first-child:not(.grid), #app > div > div:last-child > div:first-child {
                    display: none !important;
                }
            
                #app > div > div:last-child > span:nth-child(2) {
                    visibility: hidden;
                }
            
                #app > div > div:last-child > span:nth-child(4) {
                    margin-bottom: 0.5rem;
                }
            `;

            const style = document.createElement("style");
            style.textContent = stylesheet;
            document.head.append(style);
        });
    }});

    logger.log("Ready!");
})();