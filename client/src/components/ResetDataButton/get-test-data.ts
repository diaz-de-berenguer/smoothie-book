import { NewSmoothie } from '../../graphql/schema';

const getTestData = (): Array<NewSmoothie> => {
  return [
    // 1
    {
      name: 'Test from UI',
      ingredients: [
        {
          name: 'Bananas',
          quantity: '2',
        },
      ],
      instructions: 'Mix it all up',
    },
    {
      name: 'Test from UI, 2',
      ingredients: [
        {
          name: 'Apples',
          quantity: '40',
        },
      ],
      instructions: 'Shake it all up',
    },
  ];
};
export default getTestData;
