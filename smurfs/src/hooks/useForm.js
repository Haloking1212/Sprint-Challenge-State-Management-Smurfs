import { useReducer } from "react";

export const useForm = (initialState, callback) => {
  const FORM_CHANGE = "FORM_CHANGE";
  const FORM_SUBMIT = "FORM_SUBMIT";
  const FORM_AGE_CHANGE = "FORM_AGE_CHANGE";
  const FORM_HEIGHT_CHANGE = "FORM_HEIGHT_CHANGE";

  const formReducer = (state, action) => {
    switch (action.type) {
      case FORM_CHANGE:
        return { ...state, [action.payload.name]: action.payload.value };
      case FORM_AGE_CHANGE:
        return { ...state, [action.payload.age]: action.payload.value };
      case FORM_HEIGHT_CHANGE:
        return { ...state, [action.payload.hieght]: action.payload.value };
      case FORM_SUBMIT:
        return initialState;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(formReducer, initialState);

  const nameHandleChange = ({ target: { name, value } }) =>
    dispatch({ type: FORM_CHANGE, payload: { name, value } });

  const nameHandleSubmit = e => {
    e.preventDefault();
    console.log(callback);
    callback();
    dispatch({ type: FORM_SUBMIT });
  };

  const ageHandleChange = ({ target: { age, value } }) =>
    dispatch({ type: FORM_CHANGE, payload: { age, value } });

  const ageHandleSubmit = e => {
    e.preventDefault();
    console.log(callback);
    callback();
    dispatch({ type: FORM_SUBMIT });
  };

  const heightHandleChange = ({ target: { height, value } }) =>
    dispatch({ type: FORM_CHANGE, payload: { height, value } });

  const heightHandleSubmit = e => {
    e.preventDefault();
    console.log(callback);
    callback();
    dispatch({ type: FORM_SUBMIT });
  };

  return [
    state,
    nameHandleChange,
    nameHandleSubmit,
    ageHandleChange,
    ageHandleSubmit,
    heightHandleChange,
    heightHandleSubmit
  ];
};
