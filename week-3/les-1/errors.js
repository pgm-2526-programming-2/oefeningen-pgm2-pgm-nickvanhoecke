// throw "Fout!";

const message = new Error("Er ging iets mis!");
// throw message;

try {
    console.log("We voeren code uit");
    
    // Fetch("www.test.be")
    // Bijvoorbeeld: iets in databank bestaat niet
    throw new Error("Item in databank betaat niet")
} catch (error) {
    console.log("Hier geraken we wanneer er iets mis gaat", error.message);
} finally {
    console.log("code die sowieso moet uitgevoerd worden zelf als er iets misgaat, maar ook indien niet");
}