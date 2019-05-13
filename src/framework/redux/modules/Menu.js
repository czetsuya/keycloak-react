import Dispatch from '../Dispatch';
import menuContent from '../data/menu-config';

const GET_MENU_CONTENT = 'menu/GET_MENU_CONTENT';
const SET_MENU_SCROLLER = 'menu/SET_MENU_SCROLLER';
const TOGGLE = 'menu/TOGGLE';
const TOGGLE_CLICKED = 'menu/TOGGLE_CLICKED';

const initialState = {
  toggle: {
    layout: 'static',
    profile: 'inline',
    overlayMenuActive: false,
    staticMenuDesktopInactive: false,
    staticMenuMobileActive: false,
    rotateMenuButton: false,
    topbarMenuActive: false,
    activeTopbarItem: null,
    darkMenu: false,
    rightPanelActive: false,
    menuActive: false,
  },
  clicked: {
    menu: false,
    topbarItem: false,
    rightPanel: false,
  },
  menu: [],
  menuScroller: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Dispatch.successAction(TOGGLE_CLICKED): {
      return {
        ...state,
        clicked: {
          ...state.clicked,
          ...action.data,
        },
      };
    }
    case Dispatch.successAction(GET_MENU_CONTENT): {
      return {
        ...state,
        menu: [
          ...action.data.menu,
        ],
      };
    }
    case Dispatch.successAction(SET_MENU_SCROLLER): {
      return {
        ...state,
        menuScroller: action.data,
      };
    }
    case Dispatch.successAction(TOGGLE): {
      return {
        ...state,
        toggle: {
          ...state.toggle,
          ...action.data,
        },
      };
    }
    default:
      return state;
  }
}

export const toggleClicked = clickedComponent => dispatch => {
  Dispatch.success(dispatch, TOGGLE_CLICKED, { ...clickedComponent });
};

export const getMenuContent = () => dispatch => {
  const menu = menuContent(dispatch, toggle);
  Dispatch.success(dispatch, GET_MENU_CONTENT, { menu });
};

export const setMenuScroller = menuScroller => dispatch => {
  Dispatch.success(dispatch, SET_MENU_SCROLLER, menuScroller);
};

export const toggle = toggledState => dispatch => {
  Dispatch.success(dispatch, TOGGLE, { ...toggledState });
};
