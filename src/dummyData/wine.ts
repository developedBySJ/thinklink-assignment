const wineData = [
  {
    id: 1,
    name: "Staglin Family Vineyard Cabernet Sauvignon",
    cost: 56.95,
    price: 59.95,
    qty: 4,
    vintage: 1950,
    region: ["United States", "California", "Napa Valley"],
    volume: "Odd Ball (5000 mL)",
    image: "1.jpg",
    stocks: [
      {
        name: "Possimus",
        units: 43,
      },
      {
        name: "Downtown Condo",
        units: 95,
      },
    ],
    ratings: [
      {
        name: "Robert Parker",
        value: 95,
        prefix: "RP",
      },
      {
        name: "Wine Spectator",
        value: 79,
        prefix: "WS",
      },
      {
        name: "James Suckling's",
        value: 95,
        prefix: "JS",
      },
      {
        name: "Antonio Galloni's",
        value: null,
        prefix: "AG",
      },
    ],
  },
  {
    id: 2,
    name: "Chateau Lafite Rothschild",
    cost: 46.95,
    price: 49.95,
    qty: 4,
    vintage: 2001,
    region: ["France", "Bordeaux", "Pauillac"],
    volume: "Magnum (2500 mL)",
    image: "2.jpg",
    stocks: [
      {
        name: "Possimus",
        units: 36,
      },
      {
        name: "Downtown Condo",
        units: 12,
      },
    ],
    ratings: [
      {
        name: "Robert Parker",
        value: 95,
        prefix: "RP",
      },
      {
        name: "Wine Spectator",
        value: 79,
        prefix: "WS",
      },
      {
        name: "James Suckling's",
        value: 95,
        prefix: "JS",
      },
      {
        name: "Antonio Galloni's",
        value: null,
        prefix: "AG",
      },
    ],
  },
  {
    id: 3,
    name: "Chateau Mouton Rothschild",
    cost: 96.95,
    price: 99.99,
    qty: 5,
    vintage: 1985,
    region: ["France", "Bordeaux", "Pauillac"],
    volume: "Standard (1000 mL)",
    image: "3.jpg",
    stocks: [
      {
        name: "Possimus",
        units: 43,
      },
      {
        name: "Downtown Condo",
        units: 95,
      },
    ],
    ratings: [
      {
        name: "Robert Parker",
        value: 95,
        prefix: "RP",
      },
      {
        name: "Wine Spectator",
        value: 79,
        prefix: "WS",
      },
      {
        name: "James Suckling's",
        value: 95,
        prefix: "JS",
      },
      {
        name: "Antonio Galloni's",
        value: null,
        prefix: "AG",
      },
    ],
  },
  {
    id: 4,
    name: "Chateau Latour",
    cost: 145.95,
    price: 147.95,
    qty: 1,
    vintage: 1930,
    region: ["France", "Bordeaux", "Pauillac"],
    volume: "Gold Ball (1250 mL)",
    image: "4.jpg",
    stocks: [
      {
        name: "Possimus",
        units: 43,
      },
      {
        name: "Downtown Condo",
        units: 95,
      },
    ],
    ratings: [
      {
        name: "Robert Parker",
        value: 95,
        prefix: "RP",
      },
      {
        name: "Wine Spectator",
        value: 79,
        prefix: "WS",
      },
      {
        name: "James Suckling's",
        value: 95,
        prefix: "JS",
      },
      {
        name: "Antonio Galloni",
        value: null,
        prefix: "AG",
      },
    ],
  },
  {
    id: 5,
    name: "Staglin Family Vineyard Cabernet Sauvignon",
    cost: 56.95,
    price: 59.95,
    qty: 4,
    vintage: 1950,
    region: ["United States", "California", "Napa Valley"],
    volume: "Odd Ball (5000 mL)",
    image: "1.jpg",
    stocks: [
      {
        name: "Possimus",
        units: 43,
      },
      {
        name: "Downtown Condo",
        units: 95,
      },
    ],
    ratings: [
      {
        name: "Robert Parker",
        value: 95,
        prefix: "RP",
      },
      {
        name: "Wine Spectator",
        value: 79,
        prefix: "WS",
      },
      {
        name: "James Suckling's",
        value: 95,
        prefix: "JS",
      },
      {
        name: "Antonio Galloni's",
        value: null,
        prefix: "AG",
      },
    ],
  },
  {
    id: 6,
    name: "Chateau Lafite Rothschild",
    cost: 46.95,
    price: 49.95,
    qty: 4,
    vintage: 2001,
    region: ["France", "Bordeaux", "Pauillac"],
    volume: "Magnum (2500 mL)",
    image: "2.jpg",
    stocks: [
      {
        name: "Possimus",
        units: 36,
      },
      {
        name: "Downtown Condo",
        units: 12,
      },
    ],
    ratings: [
      {
        name: "Robert Parker",
        value: 95,
        prefix: "RP",
      },
      {
        name: "Wine Spectator",
        value: 79,
        prefix: "WS",
      },
      {
        name: "James Suckling's",
        value: 95,
        prefix: "JS",
      },
      {
        name: "Antonio Galloni's",
        value: null,
        prefix: "AG",
      },
    ],
  },
  {
    id: 7,
    name: "Chateau Mouton Rothschild",
    cost: 96.95,
    price: 99.99,
    qty: 5,
    vintage: 1985,
    region: ["France", "Bordeaux", "Pauillac"],
    volume: "Standard (1000 mL)",
    image: "3.jpg",
    stocks: [
      {
        name: "Possimus",
        units: 43,
      },
      {
        name: "Downtown Condo",
        units: 95,
      },
    ],
    ratings: [
      {
        name: "Robert Parker",
        value: 95,
        prefix: "RP",
      },
      {
        name: "Wine Spectator",
        value: 79,
        prefix: "WS",
      },
      {
        name: "James Suckling's",
        value: 95,
        prefix: "JS",
      },
      {
        name: "Antonio Galloni's",
        value: null,
        prefix: "AG",
      },
    ],
  },
  {
    id: 8,
    name: "Chateau Latour",
    cost: 145.95,
    price: 147.95,
    qty: 1,
    vintage: 1930,
    region: ["France", "Bordeaux", "Pauillac"],
    volume: "Gold Ball (1250 mL)",
    image: "4.jpg",
    stocks: [
      {
        name: "Possimus",
        units: 43,
      },
      {
        name: "Downtown Condo",
        units: 95,
      },
    ],
    ratings: [
      {
        name: "Robert Parker",
        value: 95,
        prefix: "RP",
      },
      {
        name: "Wine Spectator",
        value: 79,
        prefix: "WS",
      },
      {
        name: "James Suckling's",
        value: 95,
        prefix: "JS",
      },
      {
        name: "Antonio Galloni",
        value: null,
        prefix: "AG",
      },
    ],
  },
];

export default wineData;
