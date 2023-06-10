export const initialState = {
  functionKey: null,
  specialityKey: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case "update":
      return { ...state, [action.field]: action.value };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}
