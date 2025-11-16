// constants/data.ts

export const SAMPLE_COFFEES = [
  {
    id: "1",
    name: "Caffe Mocha",
    short: "Deep Foam",
    price: 4.53,
    rating: 4.8,
    description:
      "A rich and creamy Caffe Mocha made with premium Arabica espresso, blended with velvety chocolate and topped with smooth foam.",
    category: "Macchiato",
    image: require("../assets/images/Coffee5.png"),
  },
  {
    id: "2",
    name: "Flat White",
    short: "Espresso",
    price: 3.53,
    rating: 4.7,
    description:
      "A bold and silky Flat White brewed with a perfect balance of strong espresso and velvety steamed milk.",
    category: "Latte",
    image: require("../assets/images/Coffee4.png"),
  },
  {
    id: "3",
    name: "Latte",
    short: "Creamy",
    price: 3.8,
    rating: 4.9,
    description:
      "A smooth and creamy latte with rich espresso undertones, perfectly balanced with steamed milk.",
    category: "Americano",
    image: require("../assets/images/Coffee3.png"),
  },
];

// ✅ Export the function
export const getCoffeeById = (id: string) =>
  SAMPLE_COFFEES.find((c) => c.id === id);
