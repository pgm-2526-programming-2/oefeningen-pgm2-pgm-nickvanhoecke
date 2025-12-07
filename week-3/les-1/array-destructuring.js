const person = ["Nick", "Hoecke"]

const firstname = person [0]
const lastname = person [1]


const [firstN, lastN, middleName ="van"] = person
console.log(firstN, middleName, lastN);



const results = ["n1", "n2", "n3", "n4"]

// const [firstwinner] = results

// console.log(firstwinner);


// const [firstwinner, thirdwinner] = results

// console.log(firstwinner, thirdwinner);


const [firstwinner, , thirdwinner] = results

console.log(firstwinner, thirdwinner);



const songs = [
    {
        name: "name1",
        artist: "artist1"
    },
    {
        name: "name2",
        artist: "artist2"
    }
]

// const [, firstTrack, lastTrack] = songs
const [, {name: artistName , artist}, lastTrack] = songs
console.log(lastTrack, artistName, artist);


// combinatie rest operator en destructurnig

const [head, ...tail] = [1, 2, 3, 4, 5]

