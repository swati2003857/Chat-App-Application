export const functions = [
    "💗",
    "💖",
    "💓",
    "😘",
    "😍",
    "🤗",
    "😗",
    "♥️",
    "💞",
    "💜",
    "🤎",
    "❤️‍🩹",
    "🫶🏼",
    "💜",
    "💟",
    "❤️‍🔥",
    "💓",
    "😻",
    "🥰",
    "😍",
    "💘",
    "💕",
    "😍",

];

export const getRandomEmoji = () => {
    return functions [Math.floor(Math.random() * functions.length)];
}