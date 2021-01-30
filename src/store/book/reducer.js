import { BookActions } from './action';

const MOCK_DATA = [
  {
    id: 1,
    name: "Can't Hurt Me: Master Your Mind and Defy the Odds",
    price: 22.99,
    category: 'Agricultural Food Science',
    description:
      "For David Goggins, childhood was a nightmare - poverty, prejudice, and physical abuse colored his days and haunted his nights. But through self-discipline, mental toughness, and hard work, Goggins transformed himself from a depressed, overweight young man with no future into a U.S. Armed Forces icon and one of the world's top endurance athletes....",
  },
  {
    id: 2,
    name: 'The Food Lab: Better Home Cooking Through Science',
    price: 55.6,
    category: 'Agricultural Food Science',
    description:
      "Ever wondered how to pan-fry a steak with a charred crust and an interior that's perfectly medium-rare from edge to edge when you cut into it? How to make homemade mac 'n' cheese that is as satisfyingly gooey and velvety-smooth as the blue box stuff, but far tastier? How to roast a succulent, moist turkey (forget about brining!)―and use a foolproof method that works every time?...",
  },
  {
    id: 3,
    name: "The Skin We're In: A Year of Black Resistance and Power",
    price: 24.75,
    category: 'Civil Rights',
    description:
      "A bracing, provocative, and perspective-shifting book from one of Canada's most celebrated and uncompromising writers, Desmond Cole. The Skin We're In will spark a national conversation, influence policy, and inspire activists.",
  },
];

export const bookInitialState = [...MOCK_DATA];

export const bookReducer = (state = bookInitialState, action) => {
  switch (action.type) {
    case BookActions.SET_BOOKS:
      return [...state, ...action.payload];
    case BookActions.ADD_BOOK:
      let id = Math.max(...state.map((book) => book.id)) + 1;
      return [
        ...state,
        {
          ...action.payload,
          id,
        },
      ];
    case BookActions.REMOVE_BOOK:
      const removedBookList = state.filter((book) => book.id !== action.payload);
      return [...removedBookList];

    case BookActions.UPDATE_BOOK:
      const updatedBookList = state.map((book) => (book.id === action.payload.id ? action.payload : book));
      return [...updatedBookList];
    default:
      return state;
  }
};
