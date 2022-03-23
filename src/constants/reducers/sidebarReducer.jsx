const initialState = [];

export default (state=initialState, action) => {
  switch (action.type) {
    case "sideBar":
      return {
        sidebarOpen: action.payload,
      };
    default:
      return state;
  }
};
