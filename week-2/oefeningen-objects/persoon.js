const persoon = {
    naam: "Anna",
    leeftijd: 25,
    adres: {
        straat: "Hoofdstraat",
        nummer: 123,
        stad: "Stadsville" }
}
console.log(persoon);


console.log(persoon.adres.nummer);

persoon.telefoon = "+32 472 65 38 11"
console.log(persoon);

const extraInfo = {
    hobby: "lezen",
    favorieteKleur: "rood"
}
persoon.extraInfo = extraInfo
console.log(persoon);
