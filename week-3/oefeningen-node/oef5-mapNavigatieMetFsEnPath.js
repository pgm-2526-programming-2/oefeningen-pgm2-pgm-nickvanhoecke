const pathModule = require("path")
const filesystemModule = require("fs")

const pathOfFolder = pathModule.join(__dirname, "oef4-padManipulatie")

const folderContent = filesystemModule.readdirSync(pathOfFolder)

for (const item of folderContent) {
    const pathToEachFile = pathModule.join(pathOfFolder, item)
    const statOfitem = filesystemModule.statSync(pathToEachFile)
    if (statOfitem.isDirectory()) {
        console.log(item, "is a map");
    } else if (statOfitem.isFile()) {
        console.log(item, "is a file");
        
    }
}






// https://www.geeksforgeeks.org/node-js/how-to-check-the-given-path-is-file-or-directory-in-node-js/

// https://www.geeksforgeeks.org/node-js/node-js-fs-readdirsync-method/