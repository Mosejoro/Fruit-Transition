const fruits = [
  {
    name: "Banana",
    description:
      "A cheerful fruit packed with natural sweetness and essential nutrients. Bananas are versatile, energizing, and a favorite for all ages.",
    backgroundColor: "#F7E23E",
    textColor: "#8B4513",
    image: "IMG/Banana.png",
    titleFont: "Raleway",
    descriptionFont: "Comic Neue",
  },
  {
    name: "Orange",
    description:
      "Oranges are packed with vitamin C and antioxidants. They belong to the citrus family and can help boost your immune system. One medium orange provides more than 100% of your daily vitamin C needs.",
    backgroundColor: "#FFA500",
    textColor: "#8B4513",
    image: "IMG/Orange.png",
    titleFont: "Amatic SC",
    descriptionFont: "Comic Neue",
  },
  {
    name: "Pineapple",
    description:
      "Pineapples contain an enzyme called bromelain that helps with digestion. They are tropical fruits known for their sweet and tangy flavor. One cup of pineapple provides 131% of your daily vitamin C needs.",
    backgroundColor: "#F9D923",
    textColor: "#2E8B57",
    image: "IMG/Pineapple.png",
    titleFont: "Lobster",
    descriptionFont: "Comic Neue",
  },
  {
    name: "Mango",
    description:
      "The king of fruits, mangoes are a tropical delight with a rich, juicy taste that balances sweetness and tartness. They symbolize summer vibes and exotic indulgence.",
    backgroundColor: "#FFC324",
    textColor: "#206A5D",
    image: "IMG/Mango.png",
    titleFont: "Pacifico",
    descriptionFont: "Comic Neue",
  },
  {
    name: "Strawberry",
    description:
      " A heart-shaped fruit bursting with sweet and tangy flavors. Strawberries are a symbol of love, freshness, and indulgence in every bite.",
    backgroundColor: "#FF4C4C",
    textColor: "#FFF5E1",
    image: "IMG/Strawberry.png",
    titleFont: "Dancing Script",
    descriptionFont: "Comic Neue",
  },
  {
    name: "Blueberry",
    description:
      " Tiny but mighty, blueberries are a superfood packed with antioxidants and a burst of refreshing sweetness in every bite.",
    backgroundColor: "#3A4374",
    textColor: "#E8DAEF",
    image: "IMG/Blueberry.png",
    titleFont: "Montserrat",
    descriptionFont: "Comic Neue",
  },
  {
    name: "Apple",
    description:
      " Crisp, juicy, and iconic, apples symbolize health and tradition, from classic pies to refreshing snacks.",
    backgroundColor: "#990f02",
    textColor: "#fff",
    image: "IMG/Apple.png",
    titleFont: " Playfair Display",
    descriptionFont: "Comic Neue",
  },
  {
    name: "Watermelon",
    description:
      "A summertime favorite, watermelon is hydrating and sweet with a crisp texture. Perfect for picnics and poolside treats.",
    backgroundColor: "#FC6C85",
    textColor: "#228B22",
    image: "IMG/Watermelon.png",
    titleFont: "Cinzel",
    descriptionFont: "Comic Neue",
  },
  {
    name: "Grape",
    description:
      "A classic fruit of royalty, grapes are sweet and juicy, enjoyed fresh, dried as raisins, or pressed into wine.",
    backgroundColor: "#6A0DAD",
    textColor: "#FFFFFF",
    image: "IMG/Grape.png",
    titleFont: "Cinzel",
    descriptionFont: "Comic Neue",
  },
  {
    name: "Kiwi",
    description:
      "A fuzzy fruit with a bright green interior and a unique tart-sweet flavor, kiwi is a tropical gem full of nutrients.",
    backgroundColor: "#76C893",
    textColor: "#5A3E36",
    image: "IMG/Kiwi.png",
    titleFont: "Poppins",
    descriptionFont: "Comic Neue",
  },
];

let currentIndex = 0;

function updateFruit(index) {
  const fruit = fruits[index];
  const container = document.getElementById("container");
  const title = document.getElementById("fruitTitle");
  const description = document.getElementById("fruitDescription");
  const image = document.getElementById("fruitImage");

  // Add fade out animation
  title.classList.add("fade-out");
  description.classList.add("fade-out");
  image.classList.add("fade-out");

  setTimeout(() => {
    // Update content
    container.style.backgroundColor = fruit.backgroundColor;
    title.style.color = fruit.textColor;
    title.style.fontFamily = fruit.titleFont;
    description.style.color = fruit.textColor;
    description.style.fontFamily = fruit.descriptionFont;
    title.textContent = fruit.name;
    description.textContent = fruit.description;
    image.src = fruit.image;
    image.alt = fruit.name;

    // Remove fade out and trigger fade in animations
    title.classList.remove("fade-out");
    description.classList.remove("fade-out");
    image.classList.remove("fade-out");

    // Reset animations
    void title.offsetWidth;
    void description.offsetWidth;
    void image.offsetWidth;

    // Add animation classes
    title.classList.add("fruit-title");
    description.classList.add("fruit-description");
    image.classList.add("fruit-image");
  }, 300);
}

function nextFruit() {
  currentIndex = (currentIndex + 1) % fruits.length;
  updateFruit(currentIndex);
}

function prevFruit() {
  currentIndex = (currentIndex - 1 + fruits.length) % fruits.length;
  updateFruit(currentIndex);
}

// Initialize first fruit
updateFruit(currentIndex);
