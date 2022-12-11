import * as Gluon from "../gluon/index.js";
import initCosmetics from "./mods/cosmetics.js";

(async () => {
    const Chromium = await Gluon.open("https://radio.uwu.network", { windowSize: [800, 800] });
    await initCosmetics(Chromium);
})();
