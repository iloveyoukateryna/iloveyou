let verses = [
    [
        "Introduction",
        "Kateryna, my dear love, my darling,",
        "My heart for you is so strongly sparkling.",
        "On this website, I want to show why,",
        "You are my world, my sun, my sky.",
        "It's only a couple of things I love about you,",
        "There's so much more: I love all that you do.",
    ],
    [
        "Chapter 1: Character",
        "I truly love everything about you,",
        "Everything, literally everything you, my love, do,",
        "Everything you say I love to hear,",
        "And everything you write I love to read,",
        "Every part of you, every atom, is my favourite one.",
        "Just know that for me and my heart, you are the only one.",
    ],
    [
        "Chapter 2: Independence",
        "My love, you don't need anyone to be the absolute best,",
        "On your own you can pass every test,",
        "To stand, you don't need anyone: just your two feet,",
        "And no matter the challenge, you never retreat.",
        "But honestly, I feel so dependent on you,",
        "I just can't imagine my life without you.",
    ],
    [
        "Chapter 3: Adaptability",
        "You're the best girl in the world, I truly mean it,",
        "In the whole universe, you've got the best wit,",
        "Every activity, every hobby you take,",
        "You ace it like it's just a piece of cake.",
        "My love, you're so so adaptable, ",
        "I find it so incredibly admirable.",
    ],
    [
        "Chapter 4: Beauty",
        "I'm so charmed by how gorgeous you are,",
        "Your beauty's so bright: you're my favourite star,",
        "Your body, your smile: I dream of them each night,",
        "Every atom of you gives me infinite delight,",
        "Each moment, each second I want to see you,",
        "And when I see you happy, I am too.",
    ],
    [
        "Chapter 5: Humour",
        "I laugh so much when I'm with you,",
        "You find the best jokes no matter what you do,",
        "In every situation, you find the best line,",
        "My happiness you truly define,",
        "When I see your smile, I feel so much joy,",
        "When I'm with you, I'm the happiest boy.",
    ],
    [
        "Chapter 6: Responsibility",
        "I've never met anyone as responsible as you,",
        "Every promise you make you keep and do,",
        "You are the person I can always rely on,",
        "Everything you say, through actions you carry on,",
        "With those actions, you carry every community you're in,",
        "And it's you, and only you, who's bringing them the win.",
    ],
    [
        "Chapter 7: Power",
        "My darling, you are so powerful and strong,",
        "No challenge can stop your magnificent flow,",
        "Cause you are the best, there is no debate,",
        "Being the best is truly your fate.",
        "Your light breaks through even the darkest of days,",
        "You're the reason my heart endlessly sways.",
    ],
    [
        "I love you",
        "My love, no words can describe how much I feel,",
        "But everything I've said I truly mean,",
        "I think of you every night, every day,",
        "I love you in every possible way.",
        "In each my breath, you are all I see,",
        "You hold my heart's whole symphony.",
    ]
];

let colours = [5, 230, 150, 27, 340, 40, 200, 280, 0];

let pageId = 0;

const root = document.querySelector(':root');
const verse = document.getElementsByClassName("verse")[0];
const title = document.getElementsByClassName("verse__title")[0];
const typedTitle = document.getElementsByClassName("verse__title__typed")[0];
const invisibleTitle = document.getElementsByClassName("verse__title__invisible")[0];
const lines = document.getElementsByClassName("verse__text__line");
const typedLines = document.getElementsByClassName("verse__text__line__typed");
const invisibleLines = document.getElementsByClassName("verse__text__line__invisible");
const nextButton = document.getElementsByClassName("verse__buttons__next")[0];
const previousButton = document.getElementsByClassName("verse__buttons__previous")[0];

function showTitle(ind = 0) {
    if (ind >= verses[pageId][0].length) {
        setTimeout(() => showLine(1), 1000);
        return;
    }
    typedTitle.textContent += verses[pageId][0][ind];
    if (verses[pageId][0][ind] == ':') {
        setTimeout(() => showTitle(ind + 1), 500);
    }
    else {
        setTimeout(() => showTitle(ind + 1), 200);
    }
}

function showLine(i, ind=0) {
    if (i >= verses[pageId].length) {
        if (pageId != 0) {
            setTimeout(() => {previousButton.classList.remove("transparent")}, 500);
        }
        if (pageId != verses.length - 1) {
            setTimeout(() => {nextButton.classList.remove("transparent")}, 500);
        }
        return;
    }
    if (ind >= verses[pageId][i].length) {
        setTimeout(() => showLine(i + 1), 200);
        return;
    }
    typedLines[i - 1].textContent += verses[pageId][i][ind];
    if (verses[pageId][i][ind] == ',') {
        setTimeout(() => showLine(i, ind + 1), 100);
    }
    else {
        setTimeout(() => showLine(i, ind + 1), 80);
    }
}

function showPage() {
    if (pageId == 0) {
        nextButton.textContent = "Get started!";
        previousButton.classList.add("hidden");
        nextButton.classList.remove("hidden");
    }
    else if (pageId == verses.length - 1) {
        nextButton.classList.add("hidden");
        previousButton.classList.remove("hidden");
    }
    else {
        nextButton.textContent = "Next";
        nextButton.classList.remove("hidden");
        previousButton.classList.remove("hidden");
    }

    verse.classList.remove("hidden");
    if (pageId != verses.length - 1) {
        nextButton.classList.add("transparent");
    }
    if (pageId != 0) {
        previousButton.classList.add("transparent");
    }
    root.style.setProperty("--backgroud_colour", `hsl(${colours[pageId]}, 62%, 93%)`);
    root.style.setProperty("--secondary_colour", `hsl(${colours[pageId]}, 80%, 60%)`);
    root.style.setProperty("--highlight_colour", `hsl(${colours[pageId]}, 60%, 59%)`);

    typedTitle.textContent = "";
    invisibleTitle.textContent = verses[pageId][0];
    for (let i = 0; i < lines.length; i++) {
        invisibleLines[i].textContent = verses[pageId][i + 1];
        typedLines[i].textContent = "";
        
    }

    const titlePosition = invisibleTitle.getBoundingClientRect();
    typedTitle.style.left = `${titlePosition.left + window.scrollX}px`;
    typedTitle.style.top = `${titlePosition.top + window.scrollY}px`;
    typedTitle.style.width = `${titlePosition.width}px`;

    for (let i = 0; i < lines.length; i++) {
        const linePosition = invisibleLines[i].getBoundingClientRect();
        typedLines[i].style.left = `${linePosition.left + window.scrollX}px`;
        typedLines[i].style.top = `${linePosition.top + window.scrollY}px`;
        typedLines[i].style.width = `${linePosition.width}px`;
    }

    setTimeout(() => {
        showTitle();
    }, 2000);
}

function nextPage() {
    if (pageId == verses.length - 1) return;
    pageId++;
    verse.classList.add("hidden");
    setTimeout(() => {
        showPage();
    }, 1000);
}

function previousPage() {
    if (pageId == 0) return;
    verse.classList.add("hidden");
    pageId--;
    setTimeout(() => {
        showPage();
    }, 1000);
}

showPage();

window.onresize = () => {
    const titlePosition = invisibleTitle.getBoundingClientRect();
    typedTitle.style.left = `${titlePosition.left + window.scrollX}px`;
    typedTitle.style.top = `${titlePosition.top + window.scrollY}px`;
    typedTitle.style.width = `${titlePosition.width}px`;

    for (let i = 0; i < lines.length; i++) {
        const linePosition = invisibleLines[i].getBoundingClientRect();
        typedLines[i].style.left = `${linePosition.left + window.scrollX}px`;
        typedLines[i].style.top = `${linePosition.top + window.scrollY}px`;
        typedLines[i].style.width = `${linePosition.width}px`;
    }
};