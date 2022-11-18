document.body.onload = createGallery;

const data = [
    {
        "src": "ilovelucy",
        "alt": "An ad reading \"Smoke for Pleasure today -- No Cigarette Hangover tomorrow!\" The ad features Lucille Ball and Desi Arnaz, as well as the bellhop for Philip Morris.",
        "figure": "An ad featuring Lucille Ball and Desi Arnaz in an ad for Philip Morris.",
        "citation": "Vintage Ad Browser (1952)"
    },
    {
        "src": "joecamel",
        "alt": "Joe Camel in a biker jacket.",
        "figure": "Joe Camel, the mascot for the Camel company. His biker jacket and sunglasses show that he is appealing to the youth. While this is late enough that a Surgeon General's Warning is needed, the ad is still able to market itself to young people. There were many Joe Camel, which used their cartoon nature to apeal to young people.",
        "citation": "Vintage Ad Browser (1990)"
    },
    {
        "src": "marlboroold",
        "alt": "There are pictures of the faces of the box for each three directions. The box is paper with minimal color, but features red.",
        "figure": "A box of 1920 Marlboro cigarettes.",
        "citation": "First Versions"
    },
    {
        "src": "marlboronew",
        "alt": "Written on the box is the text “SURGEON GENERAL’S WARNING: Smoking By Pregnant Women May Result in Fetal Injury, Premature Birth, and Low Birth Weight.” The box is half red.",
        "figure": "A newer box of Marlboro’s.",
        "citation": "Image credit: National Library of Medicine"
    },
    {
        "src": "fonda",
        "alt": "Why did you change to Camel's Henry Fonda? \"My voice is important to my career. I smoke Camels because they're mild and have such rich flavor.\" Not one single case of throat irritation due to smoking Camels.",
        "figure": "Henry Fonda in a cigarette ad.",
        "citation": "Image credit: National Library of Medicine"
    }
];

// 14Nov22: https://getbootstrap.com/docs/4.0/content/figures/
function createGallery() {
    let n = 1;
    data.forEach(datum => {
        const newFigure = document.createElement("figure");
        newFigure.setAttribute("class", "figure " + datum.src);
        document.body.appendChild(newFigure);

        const newImg = document.createElement("img");
        newImg.setAttribute("src", "media/" + datum.src + ".png");
        newImg.setAttribute("class", "figure-img img-fluid rounded");
        newImg.setAttribute("title", datum.alt);
        newImg.setAttribute("alt", datum.alt);
        newImg.setAttribute("id", datum.src);
        newFigure.appendChild(newImg);

        const newTextAlt = document.createTextNode("(" + datum.alt + ")");
        newFigure.insertBefore(newTextAlt, newImg);

        const newFigcaption = document.createElement("figcaption");
        newFigcaption.setAttribute("class", "figure-caption");
        newFigure.appendChild(newFigcaption);

        const newText = document.createTextNode(`Figure ${n++}: ${datum.figure} `);
        newFigcaption.appendChild(newText);
        
        const newA = document.createElement("a");
        newA.setAttribute("href", "citations.html#" + datum.src);
        newFigcaption.appendChild(newA);

        const newTextA = document.createTextNode(datum.citation);
        newA.appendChild(newTextA);
    });

    addNavbar();
}