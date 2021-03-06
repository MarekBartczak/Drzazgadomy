import * as actionsTypes from "../actions/actions";

const initialState = {
  btns: [
    {
      name: "Strona główna",
      style: "btn",
      positionName: "home",
    },
    {
      name: "O firmie",
      style: "btn",
      positionName: "shortAboutTop",
    },
    {
      name: "Galeria",
      style: "btn",
      positionName: "gallery",
    },
    {
      name: "Oferta",
      style: "btn",
      positionName: "offerTop",
    },
    {
      name: "Etapy budowy",
      style: "btn",
      positionName: "howWeBuild",
    },
  ],
  gallery: [
    { url: "./assets/gallery/pictures/00.jpeg" },
    { url: "./assets/gallery/pictures/01.jpeg" },
    { url: "./assets/gallery/pictures/02.jpeg" },
    { url: "./assets/gallery/pictures/03.jpeg" },
    { url: "./assets/gallery/pictures/04.jpeg" },
    { url: "./assets/gallery/pictures/05.jpeg" },
    { url: "./assets/gallery/pictures/06.jpeg" },
    { url: "./assets/gallery/pictures/07.jpeg" },
    { url: "./assets/gallery/pictures/08.jpeg" },
    { url: "./assets/gallery/pictures/09.jpeg" },
    { url: "./assets/gallery/pictures/10.jpeg" },
    { url: "./assets/gallery/pictures/11.jpeg" },
    // { url: "./assets/gallery/pictures/12.jpeg" },
  ],
  selectedPicture: {
    url: null,
  },
  showSelectedPictureFromGallery: false,
  items: [
    {
      picUrl: "./assets/offer/DM01/main.jpeg",
      side1Url: "./assets/offer/DM01/side1.jpeg",
      side2Url: "./assets/offer/DM01/side2.jpeg",
      number: "01",
      header: "Domek Letniskowy",
      animation: "paused",
      description: {
        size: "7x5 + taras 2m",
        price: "30750zł brutto",
        include: `montaż, 
        impregnacja wewnętrzna i zewnętrzna, 
        izolacja dachu, drzwi wejściowe, okna `,
      },
    },
    {
      picUrl: "./assets/offer/DM02/main.jpeg",
      side1Url: "./assets/offer/DM02/side1.jpeg",
      side2Url: "./assets/offer/DM02/side2.jpeg",
      number: "02",
      header: "Domek Letniskowy",
      animation: "paused",
      description: {
        size: "5.8x6",
        price: "48000zł brutto",
        include: `montaż, 
        impregnacja wewnętrzna i zewnętrzna, 
        izolacja dachu, drzwi wejściowe, okna `,
      },
    },
    {
      picUrl: "./assets/offer/DM03/main.jpeg",
      side1Url: "./assets/offer/DM03/side1.jpeg",
      side2Url: "./assets/offer/DM03/side2.jpeg",
      number: "03",
      header: "Domek Letniskowy",
      animation: "paused",
      description: {
        size: "4x5 + piętro (wysokośc 5m)",
        price: "78000zł brutto",
        include: `montaż, 
        impregnacja wewnętrzna i zewnętrzna, 
        izolacja dachu, drzwi wejściowe, okna `,
      },
    },
    {
      picUrl: "./assets/offer/DM04/main.jpeg",
      side1Url: "./assets/offer/DM04/side1.jpeg",
      side2Url: "./assets/offer/DM04/side2.jpeg",
      number: "04",
      header: "Domek Letniskowy",
      animation: "paused",
      description: {
        size: "4x6 + taras 2.3x4",
        price: "29500zł brutto",
        include: `montaż, 
        impregnacja wewnętrzna i zewnętrzna, 
        izolacja dachu, drzwi wejściowe, okna `,
      },
    },
  ],
  hamburgerMenu: {
    isClose: true,
  },
  componentsTop: {
    offerTop: 0,
    shortAboutTop: 0,
    home: 0,
    howWeBuild: 0,
    gallery: 0,
  },
  showModalSendEmail: false,
  howWeBuild: {
    picturesUrl: [
      "./assets/howWeBuild/00.jpeg",
      "./assets/howWeBuild/01.jpeg",
      "./assets/howWeBuild/02.jpeg",
      "./assets/howWeBuild/03.jpeg",
      "./assets/howWeBuild/04.jpeg",
      "./assets/howWeBuild/05.jpeg",
      "./assets/howWeBuild/06.jpeg",
    ],
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

    case actionsTypes.SAVE_OFFER_TOP: {
      return {
        ...state,
        componentsTop: {
          ...state.componentsTop,
          offerTop: action.saveTop,
        },
      };
    }
    case actionsTypes.SAVE_SHORT_ABOUT_TOP: {
      return {
        ...state,
        componentsTop: {
          ...state.componentsTop,
          shortAboutTop: action.saveTop,
        },
      };
    }
    case actionsTypes.SAVE_HOW_WE_BUILD_TOP: {
      return {
        ...state,
        componentsTop: {
          ...state.componentsTop,
          howWeBuild: action.saveTop,
        },
      };
    }
    case actionsTypes.SAVE_GALLERY_TOP: {
      return {
        ...state,
        componentsTop: {
          ...state.componentsTop,
          gallery: action.saveTop,
        },
      };
    }
    case actionsTypes.SHOW_MODAL_SEND_EMAIL: {
      return {
        ...state,
        showModalSendEmail: action.show,
      };
    }
    case actionsTypes.SHOW_GALLERY_PIC: {
      return {
        ...state,
        showSelectedPictureFromGallery: !state.showSelectedPictureFromGallery,
      };
    }
    case actionsTypes.SELECTED_PICTURE_URL: {
      return {
        ...state,
        selectedPicture: {
          ...state.selectedPicture,
          url: action.url,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
