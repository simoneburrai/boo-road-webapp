const emergencyContacts = [
  {
    "travelId": 1,
    "contactName": "Marie Dubois",
    "phone": "+33 1 42 68 53 00",
    "email": "support.paris@example.com",
    "location": "Ambasciata Italiana, Parigi"
  },
  {
    "travelId": 2,
    "contactName": "Luca Bianchi",
    "phone": "+39 06 4691 1",
    "email": "support.roma@example.com",
    "location": "Ambasciata Spagnola, Roma"
  },
  {
    "travelId": 3,
    "contactName": "Heidi Meier",
    "phone": "+41 31 322 18 11",
    "email": "support.interlaken@example.com",
    "location": "Ufficio turistico di Interlaken",
    "internationalSupport": {
      "embassy": {
        "name": "Ambasciata d'Italia a Berna",
        "phone": "+41 31 350 07 77",
        "email": "ambasciata.berna@esteri.it",
        "address": "Elfenstrasse 14, 3006 Berna, Svizzera"
      },
      "emergencyNumbers": {
        "police": "117",
        "ambulance": "144"
      }
    }
  },
  {
    "travelId": 4,
    "contactName": "Ketut Ayu",
    "phone": "+62 361 222 123",
    "email": "support.bali@example.com",
    "location": "Consolato Onorario Italiano, Denpasar",
    "internationalSupport": {
      "embassy": {
        "name": "Ambasciata d'Italia a Giacarta",
        "phone": "+62 21 3193 7445",
        "email": "ambasciata.jakarta@esteri.it",
        "address": "Jl. Diponegoro 45, Menteng, Giacarta 10310, Indonesia"
      },
      "emergencyNumbers": {
        "police": "110",
        "ambulance": "118"
      }
    }
  },
  {
    "travelId": 5,
    "contactName": "Satoshi Yamamoto",
    "phone": "+81 75 222 1234",
    "email": "support.kyoto@example.com",
    "location": "Ambasciata Italiana, Tokyo",
    "internationalSupport": {
      "embassy": {
        "name": "Ambasciata d'Italia a Tokyo",
        "phone": "+81 3 3453 5291",
        "email": "ambasciata.tokyo@esteri.it",
        "address": "2-5-4 Mita, Minato-ku, Tokyo 108-0073, Giappone"
      },
      "emergencyNumbers": {
        "police": "110",
        "ambulance": "119"
      }
    }
  },
  {
    "travelId": 6,
    "contactName": "Camila Torres",
    "phone": "+54 2902 492 150",
    "email": "support.patagonia@example.com",
    "location": "Centro informazioni turistiche, El Calafate",
    "internationalSupport": {
      "embassy": {
        "name": "Ambasciata d'Italia a Buenos Aires",
        "phone": "+54 11 4011 2100",
        "email": "ambasciata.buenosaires@esteri.it",
        "address": "Reconquista 572, C1003ABR Buenos Aires, Argentina"
      },
      "emergencyNumbers": {
        "police": "911",
        "ambulance": "107"
      }
    }
  },
  {
    "travelId": 7,
    "contactName": "Mohamed Rasheed",
    "phone": "+960 331 4422",
    "email": "support.maldives@example.com",
    "location": "Ambasciata Italiana, Malé",
    "internationalSupport": {
      "embassy": {
        "name": "Ambasciata d'Italia a Colombo (competente per le Maldive)",
        "phone": "+94 11 2588388",
        "email": "ambasciata.colombo@esteri.it",
        "address": "55 Jawatta Road, Colombo 5, Sri Lanka"
      },
      "emergencyNumbers": {
        "police": "119",
        "ambulance": "102"
      }
    }
  },
  {
    "travelId": 8,
    "contactName": "Nikos Papadopoulos",
    "phone": "+30 210 721 1281",
    "email": "support.athens@example.com",
    "location": "Ambasciata Italiana, Atene"
  },
  {
    "travelId": 9,
    "contactName": "Giulia Conti",
    "phone": "+39 055 23801",
    "email": "support.tuscany@example.com",
    "location": "Ufficio del turismo, Firenze"
  },
  {
    "travelId": 10,
    "contactName": "Somsak Arun",
    "phone": "+66 76 201 234",
    "email": "support.phuket@example.com",
    "location": "Ambasciata Italiana, Bangkok",
    "internationalSupport": {
      "embassy": {
        "name": "Ambasciata d'Italia a Bangkok",
        "phone": "+66 2 250 4970",
        "email": "ambasciata.bangkok@esteri.it",
        "address": "399 Nang Linchi Road, Chongnonsee, Yannawa, Bangkok 10120, Thailandia"
      },
      "emergencyNumbers": {
        "police": "191",
        "ambulance": "1669"
      }
    }
  },
  {
    "travelId": 11,
    "contactName": "Luis Huamán",
    "phone": "+51 84 582030",
    "email": "support.machu@example.com",
    "location": "Ufficio turistico, Cusco",
    "internationalSupport": {
      "embassy": {
        "name": "Ambasciata d'Italia a Lima",
        "phone": "+51 1 463 0302",
        "email": "ambasciata.lima@esteri.it",
        "address": "Av. Giuseppe Garibaldi 298, Jesús María, Lima 11, Perú"
      },
      "emergencyNumbers": {
        "police": "105",
        "ambulance": "106"
      }
    }
  },
  {
    "travelId": 12,
    "contactName": "Emily Smith",
    "phone": "+44 20 7235 8353",
    "email": "support.london@example.com",
    "location": "Ambasciata Italiana, Londra",
    "internationalSupport": {
      "embassy": {
        "name": "Ambasciata d'Italia a Londra",
        "phone": "+44 20 7312 2200",
        "email": "ambasciata.londra@esteri.it",
        "address": "14 Three Kings Yard, London W1K 4EH, Regno Unito"
      },
      "emergencyNumbers": {
        "police": "999",
        "ambulance": "999"
      }
    }
  },
  {
    "travelId": 13,
    "contactName": "Yannis Georgiou",
    "phone": "+30 22860 22100",
    "email": "support.santorini@example.com",
    "location": "Municipio di Fira"
  },
  {
    "travelId": 14,
    "contactName": "Erik Larsen",
    "phone": "+47 55 55 90 00",
    "email": "support.fjords@example.com",
    "location": "Visit Bergen Office"
  },
  {
    "travelId": 15,
    "contactName": "Ayşe Demir",
    "phone": "+90 352 337 52 00",
    "email": "support.cappadocia@example.com",
    "location": "Centro Informazioni Turistiche, Göreme",
    "internationalSupport": {
      "embassy": {
        "name": "Ambasciata d'Italia ad Ankara",
        "phone": "+90 312 457 4200",
        "email": "ambasciata.ankara@esteri.it",
        "address": "Atatürk Bulvari No. 118, Kavaklidere, Ankara, Turchia"
      },
      "emergencyNumbers": {
        "police": "155",
        "ambulance": "112"
      }
    }
  },
  {
    "travelId": 16,
    "contactName": "Antonio López",
    "phone": "+34 954 502 200",
    "email": "support.sevilla@example.com",
    "location": "Oficina de Turismo, Siviglia"
  },
  {
    "travelId": 17,
    "contactName": "Elena Kriti",
    "phone": "+30 2810 300 400",
    "email": "support.crete@example.com",
    "location": "Ufficio del turismo, Heraklion"
  },
  {
    "travelId": 18,
    "contactName": "Marta Rovira",
    "phone": "+34 932 703 111",
    "email": "support.barcelona@example.com",
    "location": "Ufficio del turismo, Plaça Catalunya"
  },
  {
    "travelId": 19,
    "contactName": "Giovanni Esposito",
    "phone": "+39 089 871107",
    "email": "support.amalfi@example.com",
    "location": "Ufficio del turismo, Amalfi"
  },
  {
    "travelId": 20,
    "contactName": "Ayşe Demir",
    "phone": "+90 352 337 52 00",
    "email": "support.cappadocia@example.com",
    "location": "Centro Informazioni Turistiche, Göreme",
    "internationalSupport": {
      "embassy": {
        "name": "Ambasciata d'Italia ad Ankara",
        "phone": "+90 312 457 4200",
        "email": "ambasciata.ankara@esteri.it",
        "address": "Atatürk Bulvari No. 118, Kavaklidere, Ankara, Turchia"
      },
      "emergencyNumbers": {
        "police": "155",
        "ambulance": "112"
      }
    }
  }
];

export default emergencyContacts;
