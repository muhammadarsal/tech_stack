// reducer must not return undefined. thats why state = null
export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;

    default:
      return state;
  }
};
