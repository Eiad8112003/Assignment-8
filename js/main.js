var recipe = [
  {
    name: "Beef Tacos",
    description: "Flavorful Mexican tacos with seasoned ground beef",
    image: "./assets/images/Beef Tacos.png",
    alt: "Beef Tacos",
    PrepTime: "15 min",
    CookTime: "20 min",
    Servings: "4 people",
    rating: "4.5",
    review: "120 reviews",
    country: "American",
    level: "Easy",
    alertMessage: "This recipe requires less than 15 minutes to prepare. Plan accordingly!",
    ingredients: {
      1: "500g ground beef",
      2: "8 taco shells",
      3: "1 onion, chopped",
      4: "1 tbsp olive oil",
      5: "2 cloves garlic, minced",
      6: "Diced tomatoes",
      7: "Shredded cheddar cheese",
      8: "Sour cream",
      9: " salsa",
    },
    instructions: {
      1: "Heat olive oil in a large skillet over medium-high heat.",
      2: "Add ground beef and cook until browned, breaking it apart with a spoon.",
      3: "Drain excess fat. Stir in chopped onion and minced garlic, cooking until softened (about 3-4 minutes).",
      4: "Add taco seasoning, salt, and pepper. Cook for 1 minute more.",
      5: "Warm taco shells according to package directions.",
    },
    chefTips: {
      1: "For extra flavor, add a pinch of smoked paprika to the beef mixture.",
      2: "If you don't have fresh tomatoes, use canned diced tomatoes (drained).",
      3: "Warm the taco shells in the oven for a few minutes to make them crispier.",
    },
    nutrition: {
      calories: "250",
      protein: "15g",
      carbs: "20g",
      fat: "10g",
      sodium: "500mg",
      fiber: "5g",
    },
  },

  {
    name: "Greek Moussaka",
    description:
      "Layered eggplant and minced meat casserole with creamy béchamel topping.",
    image: "./assets/images/Greek_Moussaka.avif",
    alt: "Greek Moussaka",
    PrepTime: "45 min",
    CookTime: "90 min",
    Servings: "6 people",
    rating: "4.8",
    review: "245 reviews",
    country: "Greek",
    level: "Medium",
    alertMessage: "This recipe requires more than 50 minutes to prepare. Plan accordingly!",
    ingredients: {
      1: "3 large eggplants, sliced",
      2: "500g ground lamb",
      3: "400g canned tomatoes",
      4: "1 onion, diced",
      5: "3 cloves garlic, minced",
      6: "500ml béchamel sauce",
      7: "100g parmesan cheese",
      8: "Cinnamon and oregano",
      9: "Olive oil",
    },
    instructions: {
      1: "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
      2: "Brush eggplant slices with olive oil, grill or bake until softened.",
      3: "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
      4: "Preheat oven to 180°C (350°F).",
      5: "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
      6: "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
    },
    chefTips: {
      1: "Salt eggplant to remove bitterness",
      2: "Don't skip the resting time - it helps set the layers",
      3: "Use ground beef if lamb is unavailable",
      4: "Make ahead and reheat for easier serving",
    },
    nutrition: {
      calories: "250",
      protein: "15g",
      carbs: "20g",
      fat: "10g",
      sodium: "500mg",
      fiber: "5g",
    },
  },
  {
    name: "Margherita Pizza",
    description:
      "A classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
    image: "./assets/images/Margherita Pizza.png",
    alt: "Margherita Pizza",
    PrepTime: "15 min",
    CookTime: "15 min",
    Servings: "4 people",
    rating: "4.8",
    review: "245 reviews",
    country: "Italian",
    level: "Medium",
    alertMessage: "This recipe requires more than 45 minutes to prepare. Plan accordingly!",
    ingredients: {
      1: "3 large eggplants, sliced",
      2: "500g ground lamb",
      3: "400g canned tomatoes",
      4: "1 onion, diced",
      5: "3 cloves garlic, minced",
      6: "500ml béchamel sauce",
      7: "100g parmesan cheese",
      8: "Cinnamon and oregano",
      9: "Olive oil",
    },
    instructions: {
      1: "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
      2: "Brush eggplant slices with olive oil, grill or bake until softened.",
      3: "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
      4: "Preheat oven to 180°C (350°F).",
      5: "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
      6: "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
    },
    chefTips: {
      1: "Salt eggplant to remove bitterness",
      2: "Don't skip the resting time - it helps set the layers",
      3: "Use ground beef if lamb is unavailable",
      4: "Make ahead and reheat for easier serving",
      5: "Use fresh mozzarella for best flavor",
    },
    nutrition: {
      calories: "250",
      protein: "15g",
      carbs: "20g",
      fat: "10g",
      sodium: "500mg",
      fiber: "5g",
    },
  },

  {
    name: "Chicken Stir-Fry",
    description:
      "A quick and healthy Asian stir-fry with chicken and vegetables.",
    image: `./assets/images/Chicken Stir-Fry.png`,
    alt: "Chicken Stir-Fry",
    PrepTime: "25 min",
    CookTime: "30 min",
    Servings: "6 people",
    rating: "4.7",
    review: "125 reviews",
    country: "Asian",
    level: "Easy",
    alertMessage: "This recipe requires less than 30 minutes to prepare. Plan accordingly!",
    ingredients: {
      1: "500g chicken breast, sliced",
      2: "2 bell peppers, sliced",
      3: "1 broccoli head, florets",
      4: "2 carrots, julienned",
      5: "3 tablespoons soy sauce",
      6: "2 tablespoons oyster sauce",
      7: "1 tablespoon sesame oil",
      8: "2 cloves garlic, minced",
      9: "Fresh ginger, grated",
    },
    instructions: {
      1: "Heat sesame oil in a large skillet or wok over medium-high heat.",
      2: "Add chicken breast and stir-fry until cooked through and lightly browned (about 5-7 minutes).",
      3: "Add garlic and ginger, cook for 30 seconds until fragrant.",
      4: "Add bell peppers, broccoli, and carrots. Stir-fry for 5-7 minutes until tender-crisp.",
      5: "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
      6: "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
    },
    chefTips: {
      1: "Salt eggplant to remove bitterness",
      2: "Don't skip the resting time - it helps set the layers",
      3: "Use ground beef if lamb is unavailable",
      4: "Make ahead and reheat for easier serving",
    },
    nutrition: {
      calories: "250",
      protein: "15g",
      carbs: "20g",
      fat: "10g",
      sodium: "500mg",
      fiber: "5g",
    },
  },
  {
    name: "Vegetable Curry",
    description: "Hearty vegetarian curry with coconut milk",
    image: "./assets/images/Vegetable Curry.avif",
    alt: "Vegetable Curry",
    PrepTime: "15 min",
    CookTime: "30 min",
    Servings: "4 people",
    rating: "4.9",
    review: "345 reviews",
    country: "Indian",
    level: "Medium",
    alertMessage: "This recipe requires more than 30 minutes to prepare. Plan accordingly!",
    ingredients: {
    1: "2 potatoes, cubed",
    2: "1 cauliflower, florets",
    3: "2 carrots, sliced",
    4: "1 can chickpeas",
    5: "400ml coconut milk",
    6: "3 tablespoons curry powder",
    7: "1 onion, diced",
    8: "3 cloves garlic, minced",
    9: "Fresh spinach",
    },
    instructions: {
      1: "Heat the oil in a large pot or Dutch oven over medium heat. Add the chopped onion and cook until softened, about 5 minutes.",
      2: "Stir in the garlic and cook for another minute until fragrant.",
      3: "Add the curry powder and cook for 1 minute more, stirring constantly to toast the spices.",
      4: "Add the cubed potatoes, sliced carrots, and cauliflower florets to the pot. Stir well to coat the vegetables in the curry powder mixture.",
      5: "Pour in the coconut milk and add the chickpeas. Stir everything together and bring the mixture to a boil.",
      6: "Reduce the heat to low, cover the pot, and let the curry simmer for 20-25 minutes, or until the potatoes and carrots are tender.",
    },
    chefTips: {
      1: "Add a pinch of cayenne pepper for extra heat",
      2: "For a creamier curry, use full-fat coconut milk",
      3: "Add fresh spinach at the end of cooking and stir until wilted",
      4: "Serve hot with basmati rice or naan bread",
      
    },
    nutrition: {
      calories: "380",
      protein: "10g",
      carbs: "45g",
      fat: "15g",
      sodium: "600mg",
      fiber: "8g",
    },
  },
  {
    name: "Greek Salad",
    description: "Classic Greek salad with fresh vegetables",
    image: "./assets/images/Greek salad.jpg",
    alt: "Greek Salad",
    PrepTime: "15 min",
    CookTime: "30 min",
    Servings: "4 people",
    rating: "4.9",
    review: "345 reviews",
    country: "Greek",
    level: "Medium",
    alertMessage: "This recipe requires more than 30 minutes to prepare. Plan accordingly!",
    ingredients: {
    1: "2 potatoes, cubed",
    2: "1 cauliflower, florets",
    3: "2 carrots, sliced",
    4: "1 can chickpeas",
    5: "400ml coconut milk",
    6: "3 tablespoons curry powder",
    7: "1 onion, diced",
    8: "3 cloves garlic, minced",
    9: "Fresh spinach",
    },
    instructions: {
      1: "Heat the oil in a large pot or Dutch oven over medium heat. Add the chopped onion and cook until softened, about 5 minutes.",
      2: "Stir in the garlic and cook for another minute until fragrant.",
      3: "Add the curry powder and cook for 1 minute more, stirring constantly to toast the spices.",
      4: "Add the cubed potatoes, sliced carrots, and cauliflower florets to the pot. Stir well to coat the vegetables in the curry powder mixture.",
      5: "Pour in the coconut milk and add the chickpeas. Stir everything together and bring the mixture to a boil.",
      6: "Reduce the heat to low, cover the pot, and let the curry simmer for 20-25 minutes, or until the potatoes and carrots are tender.",
    },
    chefTips: {
      1: "Add a pinch of cayenne pepper for extra heat",
      2: "For a creamier curry, use full-fat coconut milk",
      3: "Add fresh spinach at the end of cooking and stir until wilted",
      4: "Serve hot with basmati rice or naan bread",
      
    },
    nutrition: {
      calories: "380",
      protein: "10g",
      carbs: "45g",
      fat: "15g",
      sodium: "600mg",
      fiber: "8g",
    },
  }
  ,
  {
    name: "Classic Beef Burger",
    description: "Classic Beef Burger recipe with fresh ingredients",
    image: "./assets/images/Classic Beef Burger.avif",
    alt: "Classic Beef Burger",
    PrepTime: "15 min",
    CookTime: "10 min",
    Servings: "4 people",
    rating: "4.8",
    review: "234 reviews",
    country: "American",
    level: "Easy",
    alertMessage: "This recipe requires less than 30 minutes to prepare. Plan accordingly!",
    ingredients: {
    1: "500g ground beef (80/20)",
    2: "4 burger buns",
    3: "4 slices cheddar cheese",
    4: "Lettuce leaves",
    5: "Tomato slices",
    6: "Red onion, sliced",
    7: "Pickles",
    8: "Burger sauce or condiments",
    },
    instructions: {
      1: "Divide the ground beef into four equal portions and form into patties. Season both sides with salt and pepper.",
      2: "Heat the grill or grill pan to medium-high heat. Lightly brush the grill grates with oil.",
      3: "Cook the burger patties for 3-5 minutes per side, or until they reach your desired level of doneness.",
      4: "While the burgers are cooking, lightly toast the burger buns on the grill or in a separate pan.",
      5: "During the last minute of cooking, place a slice of cheddar cheese on top of each burger patty and let it melt.",
      6: "Remove the burgers from the grill and let them rest for a few minutes.",
    },
    chefTips: {
      1: "For juicier burgers, add a tablespoon of Worcestershire sauce to the ground beef before forming patties.",
      2: "Don't overwork the meat when forming patties, as this can result in tough burgers.",
      3: "Let the burgers rest for at least 5 minutes after grilling before serving to allow the juices to redistribute.",
      4: "Serve immediately for best results",
    },
    nutrition: {
      calories: "480",
      protein: "20g",
      carbs: "60g",
      fat: "18g",
      sodium: "850mg",
      fiber: "3g",
    },
  },
  {
    name: "Chicken Tikka",
    description: "Chicken Tikka recipe with fresh ingredients",
    image: "./assets/images/Chicken tikka",
    alt: "chicken tikka",
    PrepTime: "15 min",
    CookTime: "10 min",
    Servings: "4 people",
    rating: "4.8",
    review: "234 reviews",
    country: "Indian",
    level: "Easy",
    alertMessage: "This recipe requires less than 30 minutes to prepare. Plan accordingly!",
    ingredients: {
    1: "1 kg boneless chicken, cut into cubes",
    2: "1 cup plain yogurt",
    3: "2 tablespoons lemon juice",
    4: "1 tablespoon ginger paste",
    5: "1 tablespoon garlic paste",
    6: "1 tablespoon garam masala",
    7: "1 teaspoon red chili powder",
    8: "1 teaspoon turmeric powder",
    },
    instructions: {
      1: "Marinate the chicken cubes in yogurt, lemon juice, ginger paste, garlic paste, garam masala, red chili powder, and turmeric powder for at least 30 minutes.",
      2: "Thread the chicken cubes onto skewers, alternating with pieces of bell pepper and onion if desired.",
      3: "Grill the chicken skewers over medium-high heat for 12-15 minutes, turning occasionally, until the chicken is cooked through and lightly charred.",
      4: "While the chicken is grilling, prepare the rice according to package directions.",
      5: "Serve the grilled chicken tikka hot with basmati rice and a side of cucumber raita or mint chutney.",
    },
    chefTips: {
      1: "To prevent the chicken from drying out, avoid overcooking and let it rest for a few minutes after grilling.",
      2: "For a deeper flavor, marinate the chicken for at least 2-3 hours or overnight.",
      3: "Add fresh spinach at the end of cooking and stir until wilted",
      4: "Serve hot with basmati rice or naan bread",
    },
    nutrition: {
      calories: "480",
      protein: "20g",
      carbs: "60g",
      fat: "18g",
      sodium: "850mg",
      fiber: "3g",
    },
  },
  {
    name: "French Onion Soup",
    description: "Classic French Onion Soup recipe with fresh ingredients",
    image: "./assets/images/French Onion Soup.avif",
    alt: "French Onion Soup",
    PrepTime: "15 min",
    CookTime: "10 min",
    Servings: "4 people",
    rating: "4.8",
    review: "234 reviews",
    country: "French",
    level: "Easy",
    alertMessage: "This recipe takes more than 1 hour to prepare. Plan accordingly!",
    ingredients: {
    1: "6 cups beef broth",
    2: "2 tablespoons butter",
    3: "4 large yellow onions, thinly sliced",
    4: "2 cloves garlic, minced",
    5: "1 teaspoon dried thyme",
    6: "1 bay leaf",
    7: "Salt and pepper to taste",
    },
    instructions: {
      1: "Melt the butter in a large pot or Dutch oven over medium heat. Add the sliced onions and cook, stirring occasionally, for 20-30 minutes, or until the onions are deeply caramelized and golden brown.",
      2: "Add the beef broth, dried thyme, and bay leaf to the pot. Bring the soup to a boil, then reduce the heat and let it simmer for at least 30 minutes to allow the flavors to meld.",
      3: "Remove the bay leaf and season the soup with salt and pepper to taste.",
      4: "Ladle the soup into oven-safe bowls, top each with a slice of crusty bread and a sprinkle of grated cheese, then broil until the cheese is bubbly and golden.",
      
    },
    chefTips: {
      1: "Don't rush the caramelization process; low and slow heat is key to developing the deep, rich flavor of the onions.",
      2: "Use a good quality beef broth for the best flavor.",
      3: "For extra depth of flavor, deglaze the pan with a splash of dry sherry or white wine after caramelizing the onions.",
      4: "Add a splash of balsamic vinegar at the end to balance the richness of the soup.",
    },
    nutrition: {
      calories: "290",
      protein: "10g",
      carbs: "45g",
      fat: "12g",
      sodium: "850mg",
      fiber: "8g",
    },
  },
  {
    name: "Lasagna Bolognese",
    description: "Lasagna Bolognese recipe with fresh ingredients",
    image: "./assets/images/Lasagna Bolognese.avif",
    alt: "Lasagna Bolognese",
    PrepTime: "15 min",
    CookTime: "10 min",
    Servings: "4 people",
    rating: "4.8",
    review: "234 reviews",
    country: "Italian",
    level: "Medium",
    alertMessage: "This recipe requires more than 1 hour to prepare. Plan accordingly!",
    ingredients: {
    1:"12 lasagna sheets",
    2:"500g ground beef",
    3:"400g canned tomatoes",
    4:"1 onion, diced",
    5:"2 carrots, diced",
    6:"500ml béchamel sauce",
    7:"200g mozzarella, grated",
    8:"100g parmesan cheese",
    9:"Fresh basil",
    },
    instructions: {
      1: "Preheat oven to 180°C (350°F).",
      2: "In a large pan, brown the ground beef over medium heat. Drain excess fat.",
      3: "Add diced onions and carrots to the pan with the beef. Cook until softened, about 5-7 minutes.",
      4: "Pour in the canned tomatoes, season with salt and pepper, and simmer for 10 minutes to create the Bolognese sauce.",
      5: "Assemble the lasagna by layering pasta sheets, Bolognese sauce, béchamel sauce, mozzarella, and parmesan cheese in a baking dish.",
      6: "Bake for 30-40 minutes, or until the pasta is tender and the cheese is golden brown and bubbly.",
      7: "Let the lasagna rest for 10 minutes before slicing and serving hot, garnished with fresh basil.",
    },
    chefTips: {
      1: "Make-ahead magic: Prepare the Bolognese sauce and béchamel sauce a day in advance. Store them separately in the refrigerator and assemble the lasagna just before baking.",
      2: "No-boil lasagna sheets: Use oven-ready lasagna sheets to save time. Just ensure there's enough sauce to cook them properly during baking.",
      3: "Cheese layer perfection: For an extra creamy texture, mix some ricotta cheese with the parmesan before sprinkling it over the top layer.",
      4: "Rest is best: Let the lasagna rest for at least 10 minutes after removing it from the oven. This allows the layers to set, ensuring clean slices and preventing a soupy mess.",
    },
    nutrition: {
      calories: "480",
      protein: "20g",
      carbs: "60g",
      fat: "18g",
      sodium: "850mg",
      fiber: "3g",
    },
  },
{
name: " Shrimp Scampi",
description: "Garlicky shrimp in white wine butter sauce",
image: "./assets/images/Shrimp Scampi.avif",
alt: "Shrimp Scampi",
PrepTime: "15 min",
CookTime: "20 min",
Servings: "2 people",
rating: "4.5",
review: "520 reviews",
country: "American",
level: "Easy",
alertMessage: "This recipe requires less than 15 minutes to prepare. Plan accordingly!",
ingredients: {
 1: "400g large shrimp, peeled",
 2: "300g linguine pasta",
 3: "6 cloves garlic, minced",
 4: "1/2 cup white wine",
 5: "4 tablespoons butter",
 6: "2 tablespoons olive oil",
 7: "Fresh parsley, chopped",
 8: "Lemon juice and zest",
 9: "Red pepper flakes",
},
instructions: {
  1: "Cook pasta in salted water until al dente",
  2: "Heat olive oil and butter in large skillet",
  3: "Sauté garlic and red pepper flakes (30 seconds)",
  4: "Add shrimp, cook 2-3 minutes per side until pink",
  5: "Add white wine, lemon juice, zest, parsley",
  6: "Toss with cooked pasta",
  7: "Serve immediately",
},
nutrition: {
  calories: "250",
  protein: "15g",
  carbs: "20g",
  fat: "10g",
  sodium: "500mg",
  fiber: "5g",
},
  chefTips: {
    1: "Make-ahead magic: Prepare the Bolognese sauce and béchamel sauce a day in advance. Store them separately in the refrigerator and assemble the lasagna just before baking.",
    2: "No-boil lasagna sheets: Use oven-ready lasagna sheets to save time. Just ensure there's enough sauce to cook them properly during baking.",
    3: "Cheese layer perfection: For an extra creamy texture, mix some ricotta cheese with the parmesan before sprinkling it over the top layer.",
    4: "Rest is best: Let the lasagna rest for at least 10 minutes after removing it from the oven. This allows the layers to set, ensuring clean slices and preventing a soupy mess.",
  },
},
{
name: "Mediterranean Quinoa Bowl",
  description: "Healthy and flavorful quinoa bowl with Mediterranean ingredients.",
  image: "assets/images/Mediterranean Quinoa Bowl.avif",
  alt: "Mediterranean Quinoa Bowl",
  PrepTime: "15 min",
  CookTime: "15 min",
  Servings: "4 people",
  rating: "4.6",
  review: "345 reviews",
  country: "Greek",
  level: "Easy",
  alertMessage: "This recipe requires less than 15 minutes to prepare. Plan accordingly!",
  ingredients: {
    1: "1 cup quinoa",
    2: "Cherry tomatoes, halved",
    3: "Cucumber, diced",
    4: "Red onion, sliced",
    5: "Kalamata olives",
    6: "Feta cheese, crumbled",
    7: "Fresh parsley",
    8: "Tahini dressing",
  },
  instructions: {
    1: "Cook quinoa according to package directions",
    2: "Combine quinoa, tomatoes, cucumber, red onion, olives, feta, and parsley in a large bowl.",
    3: "Add tahini dressing and toss to combine.",
    4: "Serve immediately or refrigerate for later use.",
  },
  chefTips: {
    1: "For extra flavor, add a pinch of smoked paprika to the beef mixture.",
    2: "If you don't have fresh tomatoes, use canned diced tomatoes (drained).",
    3: "Warm the taco shells in the oven for a few minutes to make them crispier.",
    4: "Add a splash of balsamic vinegar at the end to balance the richness of the soup.",
  },
  nutrition: {
    calories: "320",
    protein: "35g",
    carbs: "12g",
    fat: "12g",
    sodium: "450mg",
    fiber: "2g",
  },
},

  
];




var lastRecipeIndex = -1;

// get random recipe index
function randomRecipe() {
  var random = Math.floor(Math.random() * recipe.length);
  while (random === lastRecipeIndex) {
    random = Math.floor(Math.random() * recipe.length);
  }
  lastRecipeIndex = random;
  return recipe[random];
}


// Get the button element
var btn = document.getElementById("try-btn");


// add event listener to button
btn.addEventListener("click", displayRecipe);



//display recipe function
function displayRecipe() {
  var currentRecipe = randomRecipe();
  document.getElementById("recipe-name").innerHTML = currentRecipe.name;
  document.getElementById("recipe-description").innerHTML = currentRecipe.description;
  document.getElementById("recipe-image").src = currentRecipe.image;
  document.getElementById("recipe-image").alt = currentRecipe.alt;
  document.getElementById("recipe-prep-time").innerHTML = currentRecipe.PrepTime;
  document.getElementById("recipe-cook-time").innerHTML = currentRecipe.CookTime;
  document.getElementById("recipe-servings").innerHTML = currentRecipe.Servings;
  document.getElementById("recipe-rating").innerHTML = currentRecipe.rating;
  document.getElementById("recipe-review").innerHTML = currentRecipe.review;
  document.getElementById("recipe-country").innerHTML = currentRecipe.country;
  document.getElementById("recipe-level").innerHTML = currentRecipe.level;
  document.getElementById("recipe-alert-message").innerHTML = currentRecipe.alertMessage;


  for (var i = 1; i <= 20; i++) {
    var el = document.getElementById("recipe-ingredient-" + i);
    if (el) {
      if (currentRecipe.ingredients && currentRecipe.ingredients[i]) {
        el.innerHTML = currentRecipe.ingredients[i];
        el.parentElement.style.display = "flex";
      } else {
        el.parentElement.style.display = "none";
      }
    }
  }

  for (var i = 1; i <= 20; i++) {
    var el = document.getElementById("recipe-instruction-" + i);
    if (el) {
      if (currentRecipe.instructions && currentRecipe.instructions[i]) {
        el.innerHTML = currentRecipe.instructions[i];
        el.parentElement.style.display = "flex";
      } else {
        el.parentElement.style.display = "none";
      }
    }
  }

  for (var i = 1; i <= 15; i++) {
    var el = document.getElementById("recipe-tip-" + i);
    if (el) {
      if (currentRecipe.chefTips && currentRecipe.chefTips[i]) {
        el.innerHTML = currentRecipe.chefTips[i];
        el.parentElement.style.display = "flex";
      } else {
        el.parentElement.style.display = "none";
      }
    }
  }

  document.getElementById("recipe-calories").innerHTML = currentRecipe.nutrition.calories + " kcal";
  document.getElementById("recipe-protein").innerHTML = currentRecipe.nutrition.protein;
  document.getElementById("recipe-carbs").innerHTML = currentRecipe.nutrition.carbs;
  document.getElementById("recipe-fat").innerHTML = currentRecipe.nutrition.fat;
  document.getElementById("recipe-sodium").innerHTML = currentRecipe.nutrition.sodium;
  document.getElementById("recipe-fiber").innerHTML = currentRecipe.nutrition.fiber;
}
displayRecipe();
