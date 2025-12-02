let woordenArray = ['appel', 'peer', 'kiwi', 'banaan'];
let langsteWoord = woordenArray.reduce((langste, woord) => {
    if (langste.length > woord.length) {
        return langste 
    } else {
        return woord
    }
})

console.log(langsteWoord); // schrijf hier de logica om het langste woord te vinden // geeft 'banaan'
