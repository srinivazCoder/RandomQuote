
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

let quotes = [{
    quote: "If names are not correct, language will not be in accordance with the truth of things.",
    person: "Confucius"
},
{
    quote: "How vain, without the merit, is the name.",
    person: "Homer"
}, {
    quote: "Action without a name, a who attached to it, is meaningless.",
    person: "Hanna Arendt"
}, {
    quote: "A name pronounced is the recognition of the individual to whom it belongs. He who can pronounce my name aright, he can call me, and is entitled to my love and service.",
    person: "Henry David Thoreau"
}, {
    quote: "The glory of my name increases my shame. Less known by mortals, I could better escape their eyes.",
    person: "Jean Racine."
}, {
    quote: "Forgive your enemies, but never forget their names.",
    person: "John F. Kennedy"
}, {
    quote: "History is not another name for the past, as many people imply. It is the name for stories about the past.",
    person: "A. J. P. Taylor"
}, {
    quote: "They say we die twice - once when the last breath leaves our body and once when the last person we know says our name.",
    person: "Al Pacino"
}, {
    quote: "O peace! how many wars were waged in thy name.",
    person: "Alexander Pope"
}, {
    quote: "We write our names in the sand: and then the waves roll in and wash them away.",
    person: "Neil Gaiman"
}];

btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);
    // console.log(random)
    quote.innerText = quotes[random]["quote"];
    person.innerText = quotes[random]["person"];

});