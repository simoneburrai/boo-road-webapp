const travels = [
  {
    "id": 1,
    "destination": {
      "city": "Parigi",
      "country": "Francia"
    },
    "start": "2025-09-15",
    "end": "2025-09-20",
    "duration": 5,
    "travelType": "culturale",
    "price": 380.00,
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
    "start": "2025-10-01",
    "end": "2025-10-04",
    "duration": 3,
    "travelType": "culturale",
    "price": 250.00,
    "discountPrice": 220.00,
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
    "start": "2025-11-05",
    "end": "2025-11-09",
    "duration": 4,
    "travelType": "escursionistico",
    "price": 420.00,
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
    "start": "2025-12-10",
    "end": "2025-12-17",
    "duration": 7,
    "travelType": "relax",
    "price": 780.00,
    "discountPrice": 700.00,
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
    "start": "2026-01-20",
    "end": "2026-01-26",
    "duration": 6,
    "travelType": "culturale",
    "price": 950.00,
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
    "start": "2026-02-15",
    "end": "2026-02-22",
    "duration": 7,
    "travelType": "escursionistico",
    "price": 1100.00,
    "discountPrice": 1000.00,
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
    "price": 1300.00,
    "discountPrice": null,
    "state": "active",
    "image": "https://via.placeholder.com/300/673AB7/FFFFFF?Text=Maldive",
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
    "price": 360.00,
    "discountPrice": 320.00,
    "state": "active",
    "image": "https://via.placeholder.com/300/FF5722/FFFFFF?Text=Atene",
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
    "price": 480.00,
    "discountPrice": null,
    "state": "active",
    "image": "https://via.placeholder.com/300/00BCD4/FFFFFF?Text=Toscana",
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
    "price": 850.00,
    "discountPrice": 780.00,
    "state": "active",
    "image": "https://via.placeholder.com/300/3F51B5/FFFFFF?Text=Phuket",
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
    "price": 1200.00,
    "discountPrice": null,
    "state": "active",
    "image": "https://via.placeholder.com/300/00897B/FFFFFF?Text=Machu+Picchu",
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
    "price": 410.00,
    "discountPrice": 380.00,
    "state": "active",
    "image": "https://via.placeholder.com/300/4A148C/FFFFFF?Text=Londra",
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
    "price": 650.00,
    "discountPrice": null,
    "state": "active",
    "image": "https://via.placeholder.com/300/0288D1/FFFFFF?Text=Santorini",
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
    "price": 920.00,
    "discountPrice": 850.00,
    "state": "active",
    "image": "https://via.placeholder.com/300/8BC34A/FFFFFF?Text=Fiordi",
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
    "price": 620.00,
    "discountPrice": 580.00,
    "state": "active",
    "image": "https://via.placeholder.com/300/008080/FFFFFF?Text=Cappadocia",
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
    "price": 290.00,
    "discountPrice": null,
    "state": "active",
    "image": "https://via.placeholder.com/300/FFA000/FFFFFF?Text=Siviglia",
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
    "price": 700.00,
    "discountPrice": 650.00,
    "state": "active",
    "image": "https://via.placeholder.com/300/8FBC8F/FFFFFF?Text=Creta",
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
    "price": 280.00,
    "discountPrice": 250.00,
    "state": "active",
    "image": "https://via.placeholder.com/300/F44336/FFFFFF?Text=Barcellona",
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
    "price": 580.00,
    "discountPrice": null,
    "state": "active",
    "image": "https://via.placeholder.com/300/303F9F/FFFFFF?Text=Amalfi",
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
      "city": "Cappadocia",
      "country": "Turchia"
    },
    "start": "2027-02-01",
    "end": "2027-02-06",
    "duration": 5,
    "travelType": "escursionistico",
    "price": 620.00,
    "discountPrice": 580.00,
    "state": "active",
    "image": "https://via.placeholder.com/300/008080/FFFFFF?Text=Cappadocia",
    "description": "Esplora gli incredibili paesaggi lunari e le città sotterranee della Cappadocia.",
    "flight": {
      "airline": "Turkish Airlines",
      "flightNumber": "TK1856",
      "departureAirport": "Barcellona BCN",
      "arrivalAirport": "Kayseri AS"
    }
  }
]


export default travels;