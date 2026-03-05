const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, 'dictionaries', 'en.json');
const enDict = JSON.parse(fs.readFileSync(enPath, 'utf-8'));

// Top page header
if (enDict.topPage && enDict.topPage.hero) {
    enDict.topPage.hero.title = "Turning Ambitions<br />into Value.";
}

if (enDict.topPage && enDict.topPage.whoWeAre) {
    enDict.topPage.whoWeAre.title = "A culture of ambition.";
}

if (enDict.topPage && enDict.topPage.ourPhilosophy) {
    enDict.topPage.ourPhilosophy.subtitle = "PHILOSOPHY";
    enDict.topPage.ourPhilosophy.headline = "Turning Ambitions into Value.";
}

if (enDict.topPage && enDict.topPage.valuesStrength) {
    enDict.topPage.valuesStrength.values = [
        {
            "title": "A culture of ambition.",
            "subtitle": "VISION",
            "description": "We don’t just consult; we take the initiative as business operators representing Japan. We invest our own capital and sweat equity into businesses we truly believe in, creating cases of explosive growth."
        },
        {
            "title": "Turning Ambitions into Value.",
            "subtitle": "PHILOSOPHY",
            "description": "True change comes from those who dare. We are a collective of professionals who possess an overwhelming passion for business and the grit to achieve the unprecedented."
        },
        {
            "title": "Directly Drive Business Evolution.",
            "subtitle": "MISSION",
            "description": "From seed-stage startups to legacy industry transformations, we provide the 'missing parts'—be it capital, strategy, or global network—to forcefully drive business evolution."
        }
    ];

    enDict.topPage.valuesStrength.strengths = [
        {
            "number": "01",
            "title": "Developing business opportunity at the world class standard",
            "description": "A cross-border network that makes global expansion the default. We provide the structural advantage to win anywhere in the world."
        },
        {
            "number": "02",
            "title": "Being a progressive trailblazer",
            "description": "Not just providing advice, but taking the helm. We commit to the very end as the primary driver of the business."
        },
        {
            "number": "03",
            "title": "Aiming for unprecedented heights through teamwork",
            "description": "A hybrid model of top-tier consulting logic and real-world investment banking speed. We achieve what others cannot through unified effort."
        },
        {
            "number": "04",
            "title": "Breakthrough Thinking",
            "description": "Challenging the status quo with innovative ideas that redefine industries."
        },
        {
            "number": "05",
            "title": "Passion for the business",
            "description": "An unwavering dedication to the success and growth of the enterprises we partner with."
        }
    ];
}

// About page specifics
if (enDict.about && enDict.about.vision) {
    enDict.about.vision.philosophy.title = "Turning Ambitions into Value.";
    enDict.about.vision.vision.title = "A culture of ambition.";
    enDict.about.vision.mission.title = "Directly Drive Business Evolution.";
    enDict.about.vision.values.items = [
        {
            "title": "Developing business opportunity at the world class standard",
            "desc": "A cross-border network that makes global expansion the default. We provide the structural advantage to win anywhere in the world."
        },
        {
            "title": "Being a progressive trailblazer",
            "desc": "Not just providing advice, but taking the helm. We commit to the very end as the primary driver of the business."
        },
        {
            "title": "Aiming for unprecedented heights through teamwork",
            "desc": "A hybrid model of top-tier consulting logic and real-world investment banking speed. We achieve what others cannot through unified effort."
        },
        {
            "title": "Breakthrough Thinking",
            "desc": "Challenging the status quo with innovative ideas that redefine industries."
        },
        {
            "title": "Passion for the business",
            "desc": "An unwavering dedication to the success and growth of the enterprises we partner with."
        }
    ];
}

// Future page specifics
if (enDict.future) {
    enDict.future.header.title = "Turning Ambitions<br />into Value.";
    enDict.future.mission.text = "Never leave a TRY solitary.<br />Make the TRY reproducible.<br />Structure the TRY.<br /><br />Turning Ambitions into Value.";

    // Replace "challenge" with "TRY"
    enDict.future.manifesto.p7 = enDict.future.manifesto.p7.replace(/challenge/ig, "TRY");
    enDict.future.manifesto.p9 = enDict.future.manifesto.p9.replace(/challenges/ig, "TRYs");
    enDict.future.manifesto.p15 = "Turning that will into a TRY.<br />Turning that TRY into victory.";
}

// Company page message
if (enDict.company && enDict.company.message) {
    // Replace "A Culture of Challenge."
    enDict.company.message.title = "A culture of ambition.";
}

fs.writeFileSync(enPath, JSON.stringify(enDict, null, 2));
console.log("English dictionaries successfully updated!");
