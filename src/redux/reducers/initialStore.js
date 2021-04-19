export const initialAccountState = {
  accountFetch: false,
  isLoggedIn: false,
  accountError: "",
  accountData: {
    user_id: "",
    email: "",
    username: "",
  },
};

export const initialColorsState = {
  colorFetch: false,
  colorError: "",
  colors: [
    {
      color_id: 1,
      color_name: "orange",
      colorhex: "#FFCA8C",
      pallete_name: "pastel",
    },
    {
      color_id: 2,
      color_name: "red",
      colorhex: "#FFBABA",
      pallete_name: "pastel",
    },
    {
      color_id: 3,
      color_name: "purple",
      colorhex: "#B2B0FF",
      pallete_name: "pastel",
    },
    {
      color_id: 4,
      color_name: "green",
      colorhex: "#B9E8C3",
      pallete_name: "pastel",
    },
    {
      color_id: 5,
      color_name: "pink",
      colorhex: "#FF73B6",
      pallete_name: "pastel",
    },
    {
      color_id: 6,
      color_name: "yellow",
      colorhex: "#FFF7AB",
      pallete_name: "pastel",
    },
  ],
};

export const initialTaskState = {
  taskFetch: false,
  taskPost: false,
  taskError: "",
  tasks: [],
};

export const initialAgendasState = {
  agendasFetch: false,
  agendasError: "",
  agendas: [],
};

export const appInitialState = {
  month: "Month",
  monthDelta: 0,
  desktop: {
    popState: false,
    popDate: "",
    popAgendas: [],
  }
};
