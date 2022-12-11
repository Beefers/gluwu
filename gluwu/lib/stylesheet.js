export async function addPersistentStyle(Chromium, style) {
    const toRun = `
        document.addEventListener("DOMContentLoaded", (event) => {
            const style = document.createElement("style");
            style.textContent = \`${style}\`;
            document.head.append(style);
        })
    `;

    Chromium.window.eval(toRun);

    await Chromium.cdp.send(`Page.addScriptToEvaluateOnNewDocument`, {
        source: toRun
    });
}