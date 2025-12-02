const universiteit = {
  "naam": "Arteveldehogeschool",
  "campussen": {



    "Campus Kantienberg": {    
      "adres": {
        "straat": "Voetweg 66",
        "stad": "Gent",
      },


      "Opleidingen": {
        "graduaat": {
          "naam": "Bedrijfsadministratie",
          "jaren": 2,
          "vakken": ["Boekhouden", "Administratieve vaardigheden", "Bedrijfseconomie"],
          "faculteit": "Economie & Management"
        },

        "bachelor": {
          "naam": "Bedrijfsmanagement",
          "jaren": 3,
          "vakken": ["Marketing", "Financiën", "Strategisch management"],
          "faculteit": "Economie & Management"
        },

        "master": {
          "naam": "Internationaal Business Management",
          "jaren": 1,
          "vakken": ["Internationale handel", "Bedrijfsethiek", "Supply chain"],
          "faculteit": "Economie & Management"
        }
      }
    },




    "Campus Leeuwstraat": {
      "adres": {
        "straat": "Leeuwstraat 1",
        "stad": "Gent",
      },


      "Opleidingen": {
        "graduaat": {
          "naam": "Programmeren",
          "jaren": 2,
          "vakken": ["Programmeren", "Webontwikkeling", "Databases"],
          "faculteit": "ICT"
        },

        "bachelor": {
          "naam": "Toegepaste informatica",
          "jaren": 3,
          "vakken": ["Software engineering", "Netwerken", "Databanken"],
          "faculteit": "ICT"
        },

        "master": {
          "naam": "Data‑science & AI",
          "jaren": 1,
          "vakken": ["Machine learning", "Big data", "Statistiek"],
          "faculteit": "ICT"
        }
      }
    }
  }
}

console.log(JSON.stringify(universiteit, null, 2));
