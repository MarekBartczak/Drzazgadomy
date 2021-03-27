import * as actionsTypes from "../actions/actions";

const initialState = {
  items: [
    {
      picUrl: "../../../assets/mainSection/pexels-max-vakhtbovych-7173668.jpeg",
      header: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quiaiste provident temporibus. Laboriosam hic sapiente repudiandae! Repellendus qui architecto necessitatibus, hic harum facere in at,similique mollitia aliquam officiis.",
    },
    {
      picUrl: "../../../assets/mainSection/pexels-max-vakhtbovych-7174398.jpeg",
      header: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quiaiste provident temporibus. Laboriosam hic sapiente repudiandae! Repellendus qui architecto necessitatibus, hic harum facere in at,similique mollitia aliquam officiis.",
    },
    {
      picUrl: "../../../assets/mainSection/pexels-max-vakhtbovych-7195289.jpeg",
      header: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quiaiste provident temporibus. Laboriosam hic sapiente repudiandae! Repellendus qui architecto necessitatibus, hic harum facere in at,similique mollitia aliquam officiis.",
    },
    {
      picUrl: "../../../assets/mainSection/pexels-max-vakhtbovych-7195299.jpeg",
      header: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quiaiste provident temporibus. Laboriosam hic sapiente repudiandae! Repellendus qui architecto necessitatibus, hic harum facere in at,similique mollitia aliquam officiis.",
    },
    {
      picUrl: "../../../assets/mainSection/pexels-max-vakhtbovych-7195338.jpeg",
      header: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quiaiste provident temporibus. Laboriosam hic sapiente repudiandae! Repellendus qui architecto necessitatibus, hic harum facere in at,similique mollitia aliquam officiis.",
    },
    {
      picUrl: "../../../assets/mainSection/pexels-max-vakhtbovych-7195537.jpeg",
      header: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quiaiste provident temporibus. Laboriosam hic sapiente repudiandae! Repellendus qui architecto necessitatibus, hic harum facere in at,similique mollitia aliquam officiis.",
    },
    {
      picUrl: "../../../assets/mainSection/pexels-max-vakhtbovych-7195551.jpeg",
      header: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quiaiste provident temporibus. Laboriosam hic sapiente repudiandae! Repellendus qui architecto necessitatibus, hic harum facere in at,similique mollitia aliquam officiis.",
    },
    {
      picUrl: "../../../assets/mainSection/pexels-max-vakhtbovych-7195559.jpeg",
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
