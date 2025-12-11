const path = require("path")

function twoPathsToOne(path1, path2) {
    const result = path.join(path1, path2)
    return result
}

    const firstPath = path.join("/gebruiker/naam")
    const secondPath = path.join("/documenten/bestand.txt")

console.log(twoPathsToOne(firstPath, secondPath));
