const travels = [
  {
    "id": 1,
    "destination": {
      "city": "Parigi",
      "country": "Francia"
    },
    "start": "2025-05-30",
    "end": "2025-06-06",
    "duration": 7,
    "travelType": "culturale",
    "price": 380.0,
    "discountPrice": null,
    "state": "active",
    "image": "https://t4.ftcdn.net/jpg/02/96/15/35/360_F_296153501_B34baBHDkFXbl5RmzxpiOumF4LHGCvAE.jpg",
    "description": "Un viaggio culturale nella Ville Lumière, tra musei e monumenti storici.",
    "flight": {
      "airline": "Air France",
      "flightNumber": "AF1049",
      "departureAirport": "Barcellona BCN",
      "arrivalAirport": "Parigi CDG"
    }
  },
  {
    "id": 2,
    "destination": {
      "city": "Roma",
      "country": "Italia"
    },
    "start": "2025-07-14",
    "end": "2025-07-20",
    "duration": 6,
    "travelType": "culturale",
    "price": 250.0,
    "discountPrice": 220.0,
    "state": "active",
    "image": "https://t4.ftcdn.net/jpg/00/67/84/93/360_F_67849317_GdgNMpfjgYaaEHVfe3MwPFciwr4Pn7zu.jpg",
    "description": "Esplora la ricca storia e l'arte di Roma.",
    "flight": {
      "airline": "ITA Airways",
      "flightNumber": "AZ202",
      "departureAirport": "Barcellona BCN",
      "arrivalAirport": "Roma FCO"
    }
  },
  {
    "id": 3,
    "destination": {
      "city": "Interlaken",
      "country": "Svizzera"
    },
    "start": "2025-06-17",
    "end": "2025-06-19",
    "duration": 2,
    "travelType": "escursionistico",
    "price": 420.0,
    "discountPrice": null,
    "state": "active",
    "image": "https://www.svizzera.net/wp-content/uploads/sites/6/Interlaken.jpg",
    "description": "Avventure escursionistiche tra le montagne svizzere.",
    "flight": {
      "airline": "Swiss International Air Lines",
      "flightNumber": "LX2101",
      "departureAirport": "Barcellona BCN",
      "arrivalAirport": "Zurigo ZRH"
    }
  },
  {
    "id": 4,
    "destination": {
      "city": "Bali",
      "country": "Indonesia"
    },
    "start": "2025-06-16",
    "end": "2025-06-18",
    "duration": 2,
    "travelType": "relax",
    "price": 780.0,
    "discountPrice": 700.0,
    "state": "active",
    "image": "https://www.pelago.com/img/destinations/bali/0619-0941_bali.jpg",
    "description": "Una vacanza all'insegna del relax sulle spiagge paradisiache di Bali.",
    "flight": {
      "airline": "Singapore Airlines",
      "flightNumber": "SQ377",
      "departureAirport": "Barcellona BCN",
      "arrivalAirport": "Denpasar DPS"
    }
  },
  {
    "id": 5,
    "destination": {
      "city": "Kyoto",
      "country": "Giappone"
    },
    "start": "2025-07-02",
    "end": "2025-07-04",
    "duration": 2,
    "travelType": "culturale",
    "price": 950.0,
    "discountPrice": null,
    "state": "active",
    "image": "https://www.advantour.com/img/japan/images/kyoto.jpg",
    "description": "Immergiti nella cultura tradizionale di Kyoto, tra templi e giardini zen.",
    "flight": {
      "airline": "Japan Airlines",
      "flightNumber": "JL008",
      "departureAirport": "Barcellona BCN",
      "arrivalAirport": "Osaka KIX"
    }
  },
  {
    "id": 6,
    "destination": {
      "city": "Patagonia",
      "country": "Argentina/Cile"
    },
    "start": "2025-07-04",
    "end": "2025-07-08",
    "duration": 4,
    "travelType": "escursionistico",
    "price": 1100.0,
    "discountPrice": 1000.0,
    "state": "active",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Cavalli_Al_Pascolo_Ai_Piedi_Del_Massiccio_Del_Fitz_Roy%2C_Patagonia.jpg",
    "description": "Esplora gli spettacolari paesaggi della Patagonia, tra montagne e ghiacciai.",
    "flight": {
      "airline": "LATAM Airlines",
      "flightNumber": "LA800",
      "departureAirport": "Barcellona BCN",
      "arrivalAirport": "El Calafate FTE"
    }
  },
  {
    "id": 7,
    "destination": {
      "city": "Maldive",
      "country": "Maldive"
    },
    "start": "2026-03-25",
    "end": "2026-04-01",
    "duration": 7,
    "travelType": "relax",
    "price": 1300.0,
    "discountPrice": null,
    "state": "active",
    "image": "https://images.lonelyplanetitalia.it/static/places/maldive-139.jpg?q=90&p=2400%7C1350%7Cmax&s=22143f847c5de9bc56585d24123d51cb",
    "description": "Rilassati sulle spiagge bianche e nelle acque cristalline delle Maldive.",
    "flight": {
      "airline": "Qatar Airways",
      "flightNumber": "QR146",
      "departureAirport": "Barcellona BCN",
      "arrivalAirport": "Malé MLE"
    }
  },
  {
    "id": 8,
    "destination": {
      "city": "Atene",
      "country": "Grecia"
    },
    "start": "2026-04-10",
    "end": "2026-04-14",
    "duration": 4,
    "travelType": "culturale",
    "price": 360.0,
    "discountPrice": 320.0,
    "state": "active",
    "image": "https://hips.hearstapps.com/hmg-prod/images/atene-foto-cosa-vedere-1534841425.jpg",
    "description": "Un viaggio alla scoperta delle antiche meraviglie di Atene.",
    "flight": {
      "airline": "Aegean Airlines",
      "flightNumber": "A3610",
      "departureAirport": "Barcellona BCN",
      "arrivalAirport": "Atene ATH"
    }
  },
  {
    "id": 9,
    "destination": {
      "city": "Toscana",
      "country": "Italia"
    },
    "start": "2026-05-05",
    "end": "2026-05-10",
    "duration": 5,
    "travelType": "escursionistico",
    "price": 480.0,
    "discountPrice": null,
    "state": "active",
    "image": "https://www.edreams.it/blog/wp-content/uploads/sites/7/2021/02/shutterstock_401867536.jpg.webp",
    "description": "Escursioni tra le colline e i borghi storici della Toscana.",
    "flight": {
      "airline": "Vueling",
      "flightNumber": "VY6203",
      "departureAirport": "Barcellona BCN",
      "arrivalAirport": "Firenze FLR"
    }
  },
  {
    "id": 10,
    "destination": {
      "city": "Phuket",
      "country": "Thailandia"
    },
    "start": "2026-06-15",
    "end": "2026-06-22",
    "duration": 7,
    "travelType": "relax",
    "price": 850.0,
    "discountPrice": 780.0,
    "state": "active",
    "image": "https://www.agoda.com/wp-content/uploads/2024/05/Pileh-lagoon-at-Phi-Phi-island-1049x700.jpg",
    "description": "Una pausa rilassante sulle spiagge assolate di Phuket.",
    "flight": {
      "airline": "Thai Airways",
      "flightNumber": "TG951",
      "departureAirport": "Barcellona BCN",
      "arrivalAirport": "Phuket HKT"
    }
  },
  {
    "id": 11,
    "destination": {
      "city": "Machu Picchu",
      "country": "Perù"
    },
    "start": "2026-07-01",
    "end": "2026-07-08",
    "duration": 7,
    "travelType": "escursionistico",
    "price": 1200.0,
    "discountPrice": null,
    "state": "active",
    "image": "https://camminoinca.com/wp-content/uploads/2022/02/machu-picchu-ci.jpg",
    "description": "Un'indimenticabile escursione all'antica città inca di Machu Picchu.",
    "flight": {
      "airline": "Iberia",
      "flightNumber": "IB6651",
      "departureAirport": "Barcellona BCN",
      "arrivalAirport": "Cusco CUZ"
    }
  },
  {
    "id": 12,
    "destination": {
      "city": "Londra",
      "country": "Regno Unito"
    },
    "start": "2026-08-10",
    "end": "2026-08-15",
    "duration": 5,
    "travelType": "culturale",
    "price": 410.0,
    "discountPrice": 380.0,
    "state": "active",
    "image": "https://www.aviontourism.com/images/1920-900-fix/f63bb117-bd96-4946-a550-c4029688ba96",
    "description": "Scopri la storia e la cultura vibrante di Londra.",
    "flight": {
      "airline": "British Airways",
      "flightNumber": "BA475",
      "departureAirport": "Barcellona BCN",
      "arrivalAirport": "Londra LHR"
    }
  },
  {
    "id": 13,
    "destination": {
      "city": "Santorini",
      "country": "Grecia"
    },
    "start": "2026-09-20",
    "end": "2026-09-25",
    "duration": 5,
    "travelType": "relax",
    "price": 650.0,
    "discountPrice": null,
    "state": "active",
    "image": "https://www.youknowboat.com/blog/wp-content/uploads/2021/06/santorini-island-greece.webp",
    "description": "Rilassati tra i panorami mozzafiato e le spiagge di Santorini.",
    "flight": {
      "airline": "Ryanair",
      "flightNumber": "FR8123",
      "departureAirport": "Barcellona BCN",
      "arrivalAirport": "Santorini JTR"
    }
  },
  {
    "id": 14,
    "destination": {
      "city": "Fiordi Norvegesi",
      "country": "Norvegia"
    },
    "start": "2026-10-05",
    "end": "2026-10-12",
    "duration": 7,
    "travelType": "escursionistico",
    "price": 920.0,
    "discountPrice": 850.0,
    "state": "active",
    "image": "https://stories.weroad.it/wp-content/uploads/2024/06/Fiordi_Norvegesi_WeRoad-scaled.jpg",
    "description": "Esplora la maestosità dei fiordi norvegesi con escursioni indimenticabili.",
    "flight": {
      "airline": "Norwegian Air Shuttle",
      "flightNumber": "DY1801",
      "departureAirport": "Barcellona BCN",
      "arrivalAirport": "Bergen BGO"
    }
  },
  {
    "id": 15,
    "destination": {
      "city": "Cappadocia",
      "country": "Turchia"
    },
    "start": "2027-02-01",
    "end": "2027-02-06",
    "duration": 5,
    "travelType": "escursionistico",
    "price": 620.0,
    "discountPrice": 580.0,
    "state": "active",
    "image": "https://i0.wp.com/www.worldface.it/wp-content/uploads/2024/02/Turchia-Cappadocia-Exclusive-Goreme-al-tramonto-2.jpg?fit=800%2C600&ssl=1",
    "description": "Esplora gli incredibili paesaggi lunari e le città sotterranee della Cappadocia.",
    "flight": {
      "airline": "Turkish Airlines",
      "flightNumber": "TK1856",
      "departureAirport": "Barcellona BCN",
      "arrivalAirport": "Kayseri AS"
    }
  },
  {
    "id": 16,
    "destination": {
      "city": "Siviglia",
      "country": "Spagna"
    },
    "start": "2027-03-10",
    "end": "2027-03-13",
    "duration": 3,
    "travelType": "culturale",
    "price": 290.0,
    "discountPrice": null,
    "state": "active",
    "image": "https://www.andalusiatour.com/wp-content/uploads/2020/12/piazza-di-spagna-siviglia.jpg",
    "description": "Immergiti nella passione e nella storia di Siviglia.",
    "flight": {
      "airline": "Vueling",
      "flightNumber": "VY2054",
      "departureAirport": "Barcellona BCN",
      "arrivalAirport": "Siviglia SVQ"
    }
  },
  {
    "id": 17,
    "destination": {
      "city": "Creta",
      "country": "Grecia"
    },
    "start": "2027-04-05",
    "end": "2027-04-12",
    "duration": 7,
    "travelType": "relax",
    "price": 700.0,
    "discountPrice": 650.0,
    "state": "active",
    "image": "https://www.costacrociere.it/content/dam/costa/costa-magazine/articles-magazine/travel/crete-travel/creta_m.jpg.image.694.390.low.jpg",
    "description": "Goditi le spiagge e la cultura millenaria dell'isola di Creta.",
    "flight": {
      "airline": "Aegean Airlines",
      "flightNumber": "A3320",
      "departureAirport": "Barcellona BCN",
      "arrivalAirport": "Heraklion HER"
    }
  },
  {
    "id": 18,
    "destination": {
      "city": "Barcellona",
      "country": "Spagna"
    },
    "start": "2026-11-15",
    "end": "2026-11-18",
    "duration": 3,
    "travelType": "culturale",
    "price": 280.0,
    "discountPrice": 250.0,
    "state": "active",
    "image": "https://www.barcellona.org/wp-content/uploads/sites/14/barcellona-thumbnail.jpg",
    "description": "Scopri i capolavori architettonici e la vivace cultura di Barcellona.",
    "flight": null
  },
  {
    "id": 19,
    "destination": {
      "city": "Costiera Amalfitana",
      "country": "Italia"
    },
    "start": "2026-12-01",
    "end": "2026-12-06",
    "duration": 5,
    "travelType": "relax",
    "price": 580.0,
    "discountPrice": null,
    "state": "active",
    "image": "https://www.aziendaturismopositano.it/wp-content/uploads/2025/03/mappa-costiera-amalfitana.webp",
    "description": "Rilassati tra i paesaggi mozzafiato e i borghi pittoreschi della Costiera Amalfitana.",
    "flight": {
      "airline": "EasyJet",
      "flightNumber": "EJU2869",
      "departureAirport": "Barcellona BCN",
      "arrivalAirport": "Napoli NAP"
    }
  },
  {
    "id": 20,
    "destination": {
      "city": "Torino",
      "country": "Italia"
    },
    "start": "2025-07-10",
    "end": "2025-07-14",
    "duration": 4,
    "travelType": "culturale ed esplorativo",
    "price": 550.0,
    "discountPrice": null,
    "state": "active",
    "image": "https://www.rivistabc.com/wp-content/uploads/2019/03/2d1c1225-9a29-4491-b108-81092ac1ef7e-desktop-e1552315555936.jpg",
    "description": "Immergiti nella storia e nella cultura di Torino, esplorando i suoi maestosi palazzi, affascinanti musei e gustando le specialità locali.",
    "flight": {
      "airline": "AZ",
      "flightNumber": "AZ1421",
      "departureAirport": "Roma FCO",
      "arrivalAirport": "Torino TRN"
    }
  },
  {
    "id": 21,
    "destination": {
      "city": "Parigi",
      "country": "Francia"
    },
    "start": "2023-05-15",
    "end": "2023-05-20",
    "duration": 5,
    "travelType": "romantico",
    "price": 780.0,
    "discountPrice": 700.0,
    "state": "completed",
    "image": "https://accademiabritannica.com/public/pacchetti/264-disneyland-experience-connubio-magico-di-cultura-svago-e-incanto-raCplLSf.jpg",
    "description": "Un viaggio indimenticabile nella città dell'amore, tra arte, storia e atmosfere magiche.",
    "flight": {
      "airline": "Air France",
      "flightNumber": "AF1042",
      "departureAirport": "Milano MXP",
      "arrivalAirport": "Parigi CDG"
    }
  },
  {
    "id": 22,
    "destination": {
      "city": "Valencia",
      "country": "Spagna"
    },
    "start": "2022-09-01",
    "end": "2022-09-07",
    "duration": 6,
    "travelType": "culturale e balneare",
    "price": 650.0,
    "discountPrice": null,
    "state": "completed",
    "image": "https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/valencia/ciudad-artes-ciencias-valencia-c-luca-bravo-u-UyUjtbu5vj4.jpg",
    "description": "Scopri la vibrante Valencia.",
    "flight": {
      "airline": "Vueling",
      "flightNumber": "VY6315",
      "departureAirport": "Roma FCO",
      "arrivalAirport": "Valencia VCN"
    }
  },
  {
    "id": 23,
    "destination": {
      "city": "Londra",
      "country": "Regno Unito"
    },
    "start": "2024-03-10",
    "end": "2024-03-14",
    "duration": 4,
    "travelType": "storico e moderno",
    "price": 820.0,
    "discountPrice": 750.0,
    "state": "completed",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjtPN3H3MonT-wv7K8-Exzg-lSv0NRez_BLA&s",
    "description": "Un tuffo nella storia e nella modernità di Londra, tra monumenti iconici e quartieri alla moda.",
    "flight": {
      "airline": "British Airways",
      "flightNumber": "BA0549",
      "departureAirport": "Venezia VCE",
      "arrivalAirport": "Londra LHR"
    }
  },
  {
    "id": 24,
    "destination": {
      "city": "Roma",
      "country": "Italia"
    },
    "start": "2021-11-20",
    "end": "2021-11-24",
    "duration": 4,
    "travelType": "culturale e religioso",
    "price": 580.0,
    "discountPrice": 520.0,
    "state": "completed",
    "image": "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1640835927/o3pfl41q7m5bj8jardk0.jpg",
    "description": "Esplora le meraviglie della Città Eterna, tra antiche rovine, capolavori artistici e la spiritualità del Vaticano.",
    "flight": {
      "airline": "Ryanair",
      "flightNumber": "FR7812",
      "departureAirport": "Palermo PMO",
      "arrivalAirport": "Roma CIA"
    }
  },
  {
    "id": 25,
    "destination": {
      "city": "Berlino",
      "country": "Germania"
    },
    "start": "2023-07-05",
    "end": "2023-07-10",
    "duration": 5,
    "travelType": "storico e alternativo",
    "price": 690.0,
    "discountPrice": null,
    "state": "completed",
    "image": "https://blog.girolibero.it/wp-content/uploads/2020/01/articolo-happytobehere-berlino-quartieri-4.jpg",
    "description": "Un viaggio alla scoperta della storia, della cultura e della vibrante scena alternativa di Berlino.",
    "flight": {
      "airline": "EasyJet",
      "flightNumber": "U24638",
      "departureAirport": "Napoli NAP",
      "arrivalAirport": "Berlino BER"
    }
  },
  {
    "id": 26,
    "destination": {
      "city": "Amsterdam",
      "country": "Paesi Bassi"
    },
    "start": "2022-04-18",
    "end": "2022-04-23",
    "duration": 5,
    "travelType": "romantico e culturale",
    "price": 750.0,
    "discountPrice": 680.0,
    "state": "completed",
    "image": "https://www.amsterdam.net/it/wp-content/uploads/sites/20/amsterdam-canali-ponti-hd.jpg",
    "description": "Lasciati incantare dai canali, dai musei e dall'atmosfera unica di Amsterdam.",
    "flight": {
      "airline": "KLM",
      "flightNumber": "KL1606",
      "departureAirport": "Firenze FLR",
      "arrivalAirport": "Amsterdam AMS"
    }
  },
  {
    "id": 27,
    "destination": {
      "city": "Praga",
      "country": "Repubblica Ceca"
    },
    "start": "2024-09-25",
    "end": "2024-09-29",
    "duration": 4,
    "travelType": "storico e fiabesco",
    "price": 620.0,
    "discountPrice": 550.0,
    "state": "completed",
    "image": "https://images.lonelyplanetitalia.it/uploads/shutterstockrf-648833449?q=80&p=slider&s=1139324ecc561db0a84ed5e004c63d64",
    "description": "Scopri la magia di Praga, con il suo castello imponente, il Ponte Carlo e le stradine pittoresche.",
    "flight": {
      "airline": "Czech Airlines",
      "flightNumber": "OK0785",
      "departureAirport": "Bologna BLQ",
      "arrivalAirport": "Praga PRG"
    }
  },
  {
    "id": 28,
    "destination": {
      "city": "Vienna",
      "country": "Austria"
    },
    "start": "2021-06-10",
    "end": "2021-06-15",
    "duration": 5,
    "travelType": "culturale e musicale",
    "price": 710.0,
    "discountPrice": null,
    "state": "completed",
    "image": "https://www.lorenzotaccioli.it/wp-content/uploads/2018/01/Michaelerplatz-Vienna-e-Cavalli.jpg",
    "description": "Immergiti nell'eleganza di Vienna, tra palazzi imperiali, musica classica e caffè storici.",
    "flight": {
      "airline": "Austrian Airlines",
      "flightNumber": "OS0502",
      "departureAirport": "Catania CTA",
      "arrivalAirport": "Vienna VIE"
    }
  },
  {
    "id": 29,
    "destination": {
      "city": "Budapest",
      "country": "Ungheria"
    },
    "start": "2023-12-01",
    "end": "2023-12-05",
    "duration": 4,
    "travelType": "termale e culturale",
    "price": 590.0,
    "discountPrice": 530.0,
    "state": "completed",
    "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/36/37/32/caption.jpg?w=1100&h=-1&s=1",
    "description": "Rilassati nelle famose terme di Budapest e scopri la sua ricca storia e la sua vivace atmosfera.",
    "flight": {
      "airline": "Wizz Air",
      "flightNumber": "W62305",
      "departureAirport": "Bari BRI",
      "arrivalAirport": "Budapest BUD"
    }
  },
  {
    "id": 30,
    "destination": {
      "city": "Lisbona",
      "country": "Portogallo"
    },
    "start": "2022-10-26",
    "end": "2022-10-30",
    "duration": 4,
    "travelType": "culturale e vivace",
    "price": 670.0,
    "discountPrice": null,
    "state": "completed",
    "image": "https://www.guidaitaliananelmondo.it/wp-content/uploads/2024/10/28.jpg",
    "description": "Lasciati conquistare dal fascino di Lisbona, con i suoi quartieri colorati, la musica fado e la vista sull'oceano.",
    "flight": {
      "airline": "TAP Air Portugal",
      "flightNumber": "TP0821",
      "departureAirport": "Genova GOA",
      "arrivalAirport": "Lisbona LIS"
    }
  }
];


export default travels;