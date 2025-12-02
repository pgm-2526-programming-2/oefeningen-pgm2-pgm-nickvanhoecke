const persoon = {
    "naam": "John",
    "leeftijd": 30,
    "verjaar": function() {
    this.leeftijd++

    return this.leeftijd
    }
}


console.log( "naam:"+ persoon.naam, "leeftijd:" + persoon.verjaar());
console.log( "naam:"+ persoon.naam, "leeftijd:" + persoon.verjaar());
console.log( "naam:"+ persoon.naam, "leeftijd:" + persoon.verjaar());
console.log( "naam:"+ persoon.naam, "leeftijd:" + persoon.verjaar());
console.log( "naam:"+ persoon.naam, "leeftijd:" + persoon.verjaar());


