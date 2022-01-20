# Eat the World

Welcome to our project **Eat The World**, developed by [@Adrysa](https://github.com/Adryisa), [@amorosAlvaro](https://github.com/amorosAlvaro) and [@alsersan](https://github.com/alsersan). This app provides recipes from around the world, and allows logged in users to save their favorite recipes. Check it out!

1. Clone the repo

2. Create an api folder at the root of the project containing a file named db.json with the following content (a sample recipe):

```
{
  "favorites": [
    {
      "recipeId": "52777",
      "name": "Mediterranean Pasta Salad",
      "country": "Italian",
      "instructions": "Bring a large saucepan of salted water to the boil\r\nAdd the pasta, stir once and cook for about 10 minutes or as directed on the packet.\r\nMeanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil.\r\nPut the tomatoes into a salad bowl and tear the basil leaves over them. Add a tablespoon of olive oil and mix.\r\nWhen the pasta is ready, drain into a colander and run cold water over it to cool it quickly.\r\nToss the pasta into the salad bowl with the tomatoes and basil.\r\nAdd the sliced olives, drained mozzarella balls, and chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavours to mingle.\r\nSprinkle the pasta with a generous grind of black pepper and drizzle with the remaining olive oil just before serving.",
      "category": "Seafood",
      "picture": "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
      "tags": "Pasta,Baking",
      "ingredients": [
        {
          "ingredient": "mozzarella balls",
          "quantity": "200 g"
        },
        {
          "ingredient": "baby plum tomatoes",
          "quantity": "250 g"
        },
        {
          "ingredient": "fresh basil",
          "quantity": "1 bunch"
        },
        {
          "ingredient": "farfalle",
          "quantity": "350 g"
        },
        {
          "ingredient": "extra virgin olive oil",
          "quantity": "3 tablespoons"
        },
        {
          "ingredient": "Green Olives",
          "quantity": "40 g"
        },
        {
          "ingredient": "tuna",
          "quantity": "200 g"
        },
        {
          "ingredient": "salt",
          "quantity": "to taste"
        },
        {
          "ingredient": "pepper",
          "quantity": "to taste"
        }
      ],
      "isFavorite": true,
      "userEmail": "johndoe@gmail.com",
      "id": 8
    },
  ]
}
```

3. Run `npm i`

4. Run `npm run launch`

5. Enjoy!!
