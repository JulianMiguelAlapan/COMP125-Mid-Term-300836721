// setup your IIFE (Immediately Invoked Function Expression)
(function () {
"use strict";


// YOUR CODE GOES HERE

function addParagraphsToIntroParagraph()
{
    let IntroParagraph = document.getElementById("IntroParagraph");

    if (IntroParagraph)
    {
        let newIntroParagraph = document.createElement("p");

        newIntroParagraph.textContent =
            `
            Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals.
            
            Greece has 1,400 islands, though only 230 of them are inhabited. 
            
            And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.
            `;

        IntroParagraph.appendChild(newIntroParagraph);

        return true;
    }

    return false;
}

function addParagraphsToFolegandrosParagraph()
{
    let FolegandrosParagraph = document.getElementById("Folegandros");

    if (FolegandrosParagraph)
    {
        let newParagraph = document.createElement("p");

        newParagraph.textContent =
            `
            Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.
            `;

            FolegandrosParagraph.appendChild(newParagraph);

        return true;
    }

    return false;
}

function addParagraphsToAlonissosParagraph()
{
    let AlonissosParagraph = document.getElementById("Alonissos");

    if (AlonissosParagraph)
    {
        let newParagraph = document.createElement("p");

        newParagraph.textContent =
            `
            Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy.
            `;

            AlonissosParagraph.appendChild(newParagraph);

        return true;
    }

    return false;
}

function addParagraphsToSpetsesParagraph()
{
    let SpetsesParagraph = document.getElementById("Spetses");

    if (SpetsesParagraph)
    {
        let newParagraph = document.createElement("p");

        newParagraph.textContent =
            `
            This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight.
            `;

            SpetsesParagraph.appendChild(newParagraph);

        return true;
    }

    return false;
}

function addParagraphsToAmorgosParagraph()
{
    let AmorgosParagraph = document.getElementById("Amorgos");

    if (AmorgosParagraph)
    {
        let newParagraph = document.createElement("p");

        newParagraph.textContent =
            `
            Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the mountainous island is the perfect compromise between unwinding and adventure, boasting beautiful beaches but also hiking, scuba diving and rock-climbing. One of the island's main attractions is the 11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff.
            `;

            AmorgosParagraph.appendChild(newParagraph);

        return true;
    }

    return false;
}

function addParagraphsToSyrosParagraph()
{
    let SyrosParagraph = document.getElementById("Syros");

    if (SyrosParagraph)
    {
        let newParagraph = document.createElement("p");

        newParagraph.textContent =
            `
            A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.
            `;

            SyrosParagraph.appendChild(newParagraph);

        return true;
    }

    return false;
}

function addParagraphsToMilosParagraph()
{
    let MilosParagraph = document.getElementById("Milos");

    if (MilosParagraph)
    {
        let newParagraph = document.createElement("p");

        newParagraph.textContent =
            `
            This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, it's also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as "the island of colours" it's home to around 80 beaches — some only accessible by boat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape.
            `;

            MilosParagraph.appendChild(newParagraph);

        return true;
    }

    return false;
}

function addParagraphsToHydraParagraph()
{
    let HydraParagraph = document.getElementById("Hydra");

    if (HydraParagraph)
    {
        let newParagraph = document.createElement("p");

        newParagraph.textContent =
            `
            The first thing you'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other wheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions, churches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by donkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia Loren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic yet almost rural island paradise more or less to themselves.
            `;

            HydraParagraph.appendChild(newParagraph);

        return true;
    }

    return false;
}

function addParagraphsToIthacaParagraph()
{
    let IthacaParagraph = document.getElementById("Ithaca");

    if (IthacaParagraph)
    {
        let newParagraph = document.createElement("p");

        newParagraph.textContent =
            `
            Most famous for being the home of Odysseus, and a prominent figure in Homer's "The Odyssey," Ithaca is said to have been inhabited since the 2nd millennium BC. Made up of two islands joined by a narrow strip of land, many visit it to see the legendary sites mentioned by Homer. However, Ithaca is more than its mythical counterpart, beckoning with secluded beaches, dramatic cliffs, beautiful olive groves, and sleepy fishing villages full of Byzantine churches and monasteries.
            `;

            IthacaParagraph.appendChild(newParagraph);

        return true;
    }

    return false;
}

function addParagraphsToGavdosParagraph()
{
    let GavdosParagraph = document.getElementById("Gavdos");

    if (GavdosParagraph)
    {
        let newParagraph = document.createElement("p");

        newParagraph.textContent =
            `
            Near the more well-known Crete, Gavdos is the most southern island in Greece — and the most southern spot in Europe discounting the Canaries. Only accessible by ferry, the remote island has only about 50 permanent residents, and can feel like your private playground. Local legend has it that the island was the home of goddess Calypso, who kept Odysseus prisoner here. Today, a favorite tourist activity is to visit the spot believed to be her cave. Be warned, you won't find any luxury hotels here. While the romantically under-developed, super laid back island has a number of rooms for rent, those are limited, as the real draw here for many is the free, seaside camping.
            `;

            GavdosParagraph.appendChild(newParagraph);

        return true;
    }

    return false;
}

function ValidateForm()
{
    let contactForm = document.forms[0];

    if(contactForm)
    {
        contactForm.noValidate = true;

        let errorMessage = document.getElementById("errorMessage");

        let firstName = document.getElementById("firstName");
        firstName.addEventListener("blur", (event) =>
        {
            if(firstName.value.length < 2)
            {
                firstName.focus();
                errorMessage.hidden = false;
                errerMessage.textContent = "Please enter a valid First Name with a length of 2 or more characters";
            }
            else
            {
                errorMessage.hidden = true;
            }
        });

        let lastName = document.getElementById("lastName");
        lastName.addEventListener("blur", (event) => 
        {
            if(lastName.value.length < 2)
            {
                lastName.focus();
                errorMessage.hidden = false;
                errorMessage.textContent = "Please enter a Valid Last Name with a length of 2 or more characters"; 
            }
            else
            {
                errorMessage.hidden = true;
            }
        });

        let sendButton = document.getElementById("sendButton");

        sendButton.addEventListener("click", (event) =>
        {
            event.preventDefault();
            console.log("Send Button Clicked");
        });

    }
    return false
}

function Start()
{
    console.log('%App Started...');

    let introSuccess = addParagraphsToIntroParagraph();

    if(introSuccess)
    {
        console.log("successfully added paragraphs to IntroParagraph");  
    }
    else
    {
        console.warn("content not added to IntroParagraph - does not exist"); 
    }

    let folegandrosParagraphsSuccess = addParagraphsToFolegandrosParagraph();

    if(folegandrosParagraphsSuccess)
    {
        console.log("successfully added paragraphs to FolegandrosParagraph");  
    }
    else
    {
        console.warn("content not added to FolegandrosParagraph - does not exist"); 
    }

    let AlonissosSuccess = addParagraphsToAlonissosParagraph();

    if(AlonissosSuccess)
    {
        console.log("successfully added paragraphs to AlonissosParagraph");  
    }
    else
    {
        console.warn("content not added to AlonissosParagraph - does not exist"); 
    }

    let SpetsesSuccess = addParagraphsToSpetsesParagraph();

    if(SpetsesSuccess)
    {
        console.log("successfully added paragraphs to SpetsesParagraph");  
    }
    else
    {
        console.warn("content not added to SpetsesParagraph - does not exist"); 
    }

    let AmorgosSuccess = addParagraphsToAmorgosParagraph();

    if(AmorgosSuccess)
    {
        console.log("successfully added paragraphs to AmorgosParagraph");  
    }
    else
    {
        console.warn("content not added to AmorgosParagraph - does not exist"); 
    }

    let SyrosSuccess = addParagraphsToSyrosParagraph();

    if(SyrosSuccess)
    {
        console.log("successfully added paragraphs to SyrosParagraph");  
    }
    else
    {
        console.warn("content not added to SyrosParagraph - does not exist"); 
    }

    let MilosSuccess = addParagraphsToMilosParagraph();

    if(MilosSuccess)
    {
        console.log("successfully added paragraphs to MilosParagraph");  
    }
    else
    {
        console.warn("content not added to MilosParagraph - does not exist"); 
    }

    let HydraSuccess = addParagraphsToHydraParagraph();

    if(HydraSuccess)
    {
        console.log("successfully added paragraphs to HydraParagraph");  
    }
    else
    {
        console.warn("content not added to HydraParagraph - does not exist"); 
    }

    let IthacaSuccess = addParagraphsToIthacaParagraph();

    if(IthacaSuccess)
    {
        console.log("successfully added paragraphs to IthacaParagraph");  
    }
    else
    {
        console.warn("content not added to IthacaParagraph - does not exist"); 
    }

    let GavdosSuccess = addParagraphsToGavdosParagraph();

    if(GavdosSuccess)
    {
        console.log("successfully added paragraphs to GavdosParagraph");  
    }
    else
    {
        console.warn("content not added to GavdosParagraph - does not exist"); 
    }

    let formValidated = ValidateForm();
    if(formValidated)
    {
        console.log("Succesfully validated form");
    }
    else
    {
        console.log("Form not validated - does not exist");
    }
}



    window.addEventListener("load", Start);

})();

