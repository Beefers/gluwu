const rgb = (r, g, b, content) => `\x1b[38;2;${r};${g};${b}m${content}\x1b[0m`;
const log = (source, color, ...content) => console.log(`[${rgb(...color, source)}]`, ...content);

export default {
    log: (source, ...content) => log(source, [108, 146, 169], ...content),
    warn: (source, ...content) => log(source, [218, 159, 73], ...content),
    error: (source, ...content) => log(source, [159, 64, 67], ...content),
};