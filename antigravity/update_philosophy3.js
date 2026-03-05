const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, 'dictionaries', 'en.json');
const enDict = JSON.parse(fs.readFileSync(enPath, 'utf-8'));

// 1. 意志ある挑戦を創造する → Turning Ambitions into Value
// 2. 挑戦をカルチャーに → A culture of ambition
// 3. 世界基準で事業機会を切り拓く → Developing business opportunity at the world class standard
// 4. 枠にとらわれず挑戦し、主体者としてやり切る → Being a progressive trailblazer
// 5. チームワークで未踏の高みを目指す → Aiming for unprecedented heights through teamwork
// 6. 革新的な発想 → Breakthrough Thinking
// 7. 事業への情熱 → Passion for the business

// Helper function to safely update deep object paths
function updateDeep(obj, pathStr, value) {
    const keys = pathStr.split('.');
    let current = obj;
    for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) return false;
        current = current[keys[i]];
    }
    if (current[keys[keys.length - 1]] !== undefined) {
        current[keys[keys.length - 1]] = value;
        return true;
    }
    return false;
}

// Hero Section & Header
updateDeep(enDict, 'hero.title', "Turning Ambitions<br />into Value.");
updateDeep(enDict, 'whoWeAre.title', "A culture of ambition.");
updateDeep(enDict, 'ourPhilosophy.headline', "Turning Ambitions into Value.");

// Values & Strength (Top Page)
if (enDict.valuesStrength) {
    enDict.valuesStrength.values = [
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

    enDict.valuesStrength.strengths = [
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

// About Page
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

// Future Page
if (enDict.future) {
    enDict.future.header.title = "Turning Ambitions<br />into Value.";
    enDict.future.mission.text = "Never leave a TRY solitary.<br />Make the TRY reproducible.<br />Structure the TRY.<br /><br />Turning Ambitions into Value.";

    // Replace "challenge" with "TRY"
    enDict.future.manifesto.p7 = enDict.future.manifesto.p7.replace(/challenge/ig, "TRY");
    enDict.future.manifesto.p9 = enDict.future.manifesto.p9.replace(/challenges/ig, "TRYs");
    enDict.future.manifesto.p15 = "Turning that will into a TRY.<br />Turning that TRY into victory.";
}

// Company Page
if (enDict.company && enDict.company.message) {
    enDict.company.message.title = "A culture of ambition.";
}

// Write the updated dictionary to file
fs.writeFileSync(enPath, JSON.stringify(enDict, null, 2));
console.log("English translation update successful!");
