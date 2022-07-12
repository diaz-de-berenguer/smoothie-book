import { NewSmoothie } from '../graphql-types';

const randomRatings = (): Array<number> => {
  const ratings = [];
  const count = Math.floor(Math.random() * 50);
  for (let i = 0; i < count; i++) {
    const rating = Math.ceil(Math.random() * 5) + 5;
    ratings.push(rating);
  }
  return ratings;
};

const getTestData = (): Array<NewSmoothie & { ratings: Array<number> }> => {
  return [
    {
      name: 'Strawberry Banana Smoothie',
      ingredients: [
        { quantity: '2 cups', name: 'fresh strawberries, halved' },
        { quantity: '1', name: 'banana, quartered and frozen' },
        { quantity: '1/2 cup', name: 'Greek yogurt' },
        { quantity: '1/2 cup', name: 'milk' },
      ],
      ratings: randomRatings(),
      instructions: 'Add all ingredients to a high powered blender and blend until smooth.',
    },
    {
      name: 'Mango Smoothie',
      ingredients: [
        { quantity: '2 cups', name: 'frozen mango' },
        { quantity: '1', name: 'small frozen banana' },
        { quantity: '1/2 cup', name: 'milk, dairy or dairy-free' },
        { quantity: '1/2 cup', name: 'yogurt, dairy or dairy-free' },
      ],
      instructions: 'Add all ingredients to a high-powered blender and blend until creamy.',
      ratings: randomRatings(),
    },
    {
      name: 'Mandarin Breakfast Smoothie',
      instructions: 'Add all of the ingredients to a high powered blender, and blend until smooth.',
      ratings: randomRatings(),
      ingredients: [
        { quantity: '1 & 1/2 cups', name: 'milk, dairy or dairy-free' },
        { quantity: '1 cup', name: 'yogurt, dairy or dairy-free' },
        { quantity: '4', name: 'mandarin oranges, peeled' },
        { quantity: '1', name: 'frozen banana' },
        { quantity: '2 tablespoons', name: 'ground flaxseeds' },
        { quantity: '1 teaspoon', name: 'vanilla extract' },
      ],
    },
    {
      name: 'Strawberry Acai Smoothie',
      instructions: 'Add all ingredients to a high-powered blender and blend until smooth.',
      ratings: randomRatings(),
      ingredients: [
        { quantity: '3.5 oz packet', name: 'frozen acai' },
        { quantity: '1', name: 'banana' },
        { quantity: '1 cup', name: 'strawberries' },
        { quantity: '3/4 cup', name: 'almond milk or cashew milk' },
      ],
    },
    {
      name: 'Peach Breakfast Smoothie',
      instructions: `
Add all ingredients except the chia seeds to a high-powered blender. Blend on high until smooth and creamy.

Divide the peach smoothie between two Le Parfait jars or Mason jars. Add one tablespoon of chia seeds, add the lid and shake until well combined.
      `,
      ratings: randomRatings(),
      ingredients: [
        { quantity: '3', name: 'peaches, pitted and quartered' },
        { quantity: '1 1/2 cups', name: 'milk, dairy or dairy-free' },
        { quantity: '1 cup', name: 'yogurt, dairy or dairy-free' },
        { quantity: '1 tsp', name: 'vanilla extract' },
        { quantity: 'sprinkle', name: 'cinnamon' },
        { quantity: 'sprinkle', name: 'ground ginger' },
        { quantity: '2 tbsp', name: 'chia seeds, divided' },
      ],
    },
    {
      name: 'Almond Orange Smoothie',
      ratings: randomRatings(),
      instructions:
        'Place all items in a high-powered blender and blend for 30 seconds. Serve immediately.',
      ingredients: [
        { quantity: '2', name: 'navel oranges, peeled' },
        { quantity: '2', name: 'cara cara oranges, peeled' },
        { quantity: '1', name: 'banana, peeled' },
        { quantity: '1 cup', name: 'water' },
        { quantity: '1', name: 'vanilla bean, scraped' },
        { quantity: '2 tbs', name: 'almond butter' },
      ],
    },
    {
      name: 'Post Workout Green Smoothie',
      ratings: randomRatings(),
      instructions:
        'Place all ingredients into a high powered blender. Blend for 30 seconds or until smooth.',
      ingredients: [
        { quantity: '2 cups', name: 'filtered water' },
        { quantity: '2 cups', name: 'baby spinach' },
        { quantity: '1', name: 'banana, sliced and frozen' },
        { quantity: '1', name: 'green apple' },
        { quantity: '1/4', name: 'avocado' },
        { quantity: '2 tbsp', name: 'collagen powder' },
        { quantity: '2 tbsp', name: 'protein powder' },
        { quantity: '2 tbsp', name: 'chia seeds' },
      ],
    },
    {
      ratings: randomRatings(),
      name: 'Blueberry Smoothie',
      instructions:
        'Blend coconut water, blueberries, banana, yogurt and flax seeds together in a high-powered blender for 30 seconds, or until creamy.',
      ingredients: [
        { quantity: '2 cups', name: 'coconut water' },
        { quantity: '2 cups', name: 'frozen blueberries' },
        { quantity: '1', name: 'frozen banana' },
        { quantity: '1/2 cup', name: 'greek yogurt' },
        { quantity: '1 tbsp', name: 'flax seeds' },
      ],
    },
    {
      ratings: randomRatings(),
      name: 'Pinapple Timeric Smoothie',
      instructions:
        'Add all of the ingredients to a blender and blend for 30 seconds on high, or until creamy.',
      ingredients: [
        { quantity: '1 cup', name: 'dairy-free milk' },
        { quantity: '2 cups', name: 'frozen pineapple chunks' },
        { quantity: '1', name: 'banana' },
        {
          quantity: '1 tablespoon',
          name: 'fresh turmeric, grated (or 1 teaspoon ground turmeric)',
        },
        { quantity: '1 teaspoon', name: 'fresh ginger, grated (or 1/3 teaspoon ground ginger)' },
      ],
    },
    {
      ratings: randomRatings(),
      name: 'Apple Carrot Beet Smoothie',
      instructions:
        'Place all ingredients in the pitcher of a high-powered blender, and blend until smooth, about 1-2 minutes. Use the tamper if needed.',
      ingredients: [
        { quantity: '1', name: 'red beet, medium, trimmed, cut into 2-inch chunks' },
        { quantity: '1', name: 'apple, any variety, cut into 2-inch chunks' },
        { quantity: '3', name: 'carrots, ends trimmed, cut into 2-inch chunks' },
        { quantity: '1', name: 'orange, juiced' },
        { quantity: '1', name: '2-inch piece fresh ginger, peeled' },
        { quantity: '1 cup', name: 'cold water' },
      ],
    },
    {
      ratings: randomRatings(),
      name: 'Persimmon smoothie',
      instructions: `
Wash the persimmons and slice off the stem. Add them along with all other ingredients to a high-powered blender and blend for one minute.

Optionally, garnish the inside of a glass with a thin persimmon slice.
      `,
      ingredients: [
        { quantity: '2', name: 'ripe fuyu persimmons' },
        { quantity: '1', name: 'banana, frozen' },
        { quantity: '1 cup', name: 'almond milk, cashew milk or other nut milk' },
        { quantity: '1/4 tsp', name: 'ginger' },
        { quantity: '1/4 tsp', name: 'cinnamon' },
      ],
    },
    {
      ratings: randomRatings(),
      name: 'Golden Beet Smoothie',
      instructions: `
Add all ingredients into a high-powered blender and blend until smooth.

Pour into glasses and add any optional toppings.
      `,
      ingredients: [
        { quantity: '2', name: 'golden beets, chopped' },
        { quantity: '1', name: 'large carrot, chopped' },
        { quantity: '1', name: 'banana, peeled, sliced and frozen' },
        { quantity: '4', name: 'mandarin oranges, peeled' },
        { quantity: '1', name: 'lemon, juiced' },
        { quantity: '1/4 tsp', name: 'turmeric powder' },
        { quantity: '1 1/2 cup', name: 'cold water' },
      ],
    },
  ];
};
export default getTestData;
