import * as actionsTypes from "../actions/actions";

const initialState = {
  items: [
    {
      picUrl: "./assets/offer/DM01/main.jpeg",
      side1Url: "./assets/offer/DM01/side1.jpeg",
      side2Url: "./assets/offer/DM01/side2.jpeg",
      number: "01",
      header: "Domek Letniskowy",
      description: {
        size: "7x5 + taras 2m",
        price: "30750zł brutto",
        include: `montaż, 
        impregnacja wewnętrzna i zewnętrzna, 
        izolacja dachu, drzwi wejściowe, 2 okna `,
      },
    },
    {
      picUrl: "./assets/offer/DM02/main.jpeg",
      side1Url: "./assets/offer/DM02/side1.jpeg",
      side2Url: "./assets/offer/DM02/side2.jpeg",
      number: "02",

      header: "Domek Letniskowy",
      description: {
        size: "5.8x6",
        price: "48000zł brutto",
        include: `montaż, 
        impregnacja wewnętrzna i zewnętrzna, 
        izolacja dachu, drzwi wejściowe, 2 okna `,
      },
    },
    {
      picUrl: "./assets/offer/DM03/main.jpeg",
      side1Url: "./assets/offer/DM03/side1.jpeg",
      side2Url: "./assets/offer/DM03/side2.jpeg",
      number: "03",

      header: "Domek Letniskowy",
      description: {
        size: "4x5 + piętro (wysokośc 5m)",
        price: "78000zł brutto",
        include: `montaż, 
        impregnacja wewnętrzna i zewnętrzna, 
        izolacja dachu, drzwi wejściowe, 2 okna `,
      },
    },
    {
      picUrl: "./assets/offer/DM04/main.jpeg",
      side1Url: "./assets/offer/DM04/side1.jpeg",
      side2Url: "./assets/offer/DM04/side2.jpeg",
      number: "04",

      header: "Domek Letniskowy",
      description: {
        size: "4x6 + taras 2.3x4",
        price: "29500zł brutto",
        include: `montaż, 
        impregnacja wewnętrzna i zewnętrzna, 
        izolacja dachu, drzwi wejściowe, 2 okna `,
      },
    },
  ],
  hamburgerMenu: {
    isClose: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.GET_ITEM:
      return {
        ...state,
      };

    case actionsTypes.HAMBURGER_MENU_TOGGLE:
      return {
        ...state,
        hamburgerMenu: {
          ...state.hamburgerMenu,
          isClose: !state.hamburgerMenu.isClose,
        },
      };
    default:
      return state;
  }
};

export default reducer;
