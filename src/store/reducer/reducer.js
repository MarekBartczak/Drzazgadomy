import * as actionsTypes from "../actions/actions";

const initialState = {
  items: [
    {
      picUrl: "../../../assets/offer/0.jpeg",
      number: "01",
      header: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quiaiste provident temporibus. Laboriosam hic sapiente repudiandae! Repellendus qui architecto necessitatibus, hic harum facere in at,similique mollitia aliquam officiis.",
    },
    {
      picUrl: "../../../assets/offer/1.jpeg",
      number: "02",

      header: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quiaiste provident temporibus. Laboriosam hic sapiente repudiandae! Repellendus qui architecto necessitatibus, hic harum facere in at,similique mollitia aliquam officiis.",
    },
    {
      picUrl: "../../../assets/offer/2.jpeg",
      number: "03",

      header: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quiaiste provident temporibus. Laboriosam hic sapiente repudiandae! Repellendus qui architecto necessitatibus, hic harum facere in at,similique mollitia aliquam officiis.",
    },
    {
      picUrl: "../../../assets/offer/3.jpeg",
      number: "04",

      header: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quiaiste provident temporibus. Laboriosam hic sapiente repudiandae! Repellendus qui architecto necessitatibus, hic harum facere in at,similique mollitia aliquam officiis.",
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
