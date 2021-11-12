export const reducer = (state, action) => {
  switch (action.type) {
    case 'FORM_TOGGLE':
      return { ...state, form_open: action.payload }
    default:
      return { ...state }
  }
}

export const initialData = {
  form_open: false,
}
