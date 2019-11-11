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
        return { ...state, [action.payload.name]: action.payload.value };
      case FORM_HEIGHT_CHANGE:
        return { ...state, [action.payload.name]: action.payload.value };
      case FORM_SUBMIT:
        return initialState;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(formReducer, initialState);

  const nameHandleChange = ({ target: { name, value } }) =>
  {console.log(name,"name")
    dispatch({ type: FORM_CHANGE, payload: { name, value } })}

  const handleSubmit = e => {
    e.preventDefault();
    console.log(callback,"callback");
    callback();
    dispatch({ type: FORM_SUBMIT });
  };

  const ageHandleChange = ({ target: { name, value } }) =>
  {console.log(name,"age")
    dispatch({ type: FORM_CHANGE, payload: { name, value } })}

  const ageHandleSubmit = e => {
    e.preventDefault();
    console.log(callback);
    callback();
    dispatch({ type: FORM_SUBMIT });
  };

  const heightHandleChange = ({ target: { name, value } }) =>
    dispatch({ type: FORM_CHANGE, payload: { name, value } });

  const heightHandleSubmit = e => {
    e.preventDefault();
    console.log(callback);
    callback();
    dispatch({ type: FORM_SUBMIT });
  };

  return [
    state,
    nameHandleChange,
    ageHandleChange,
    heightHandleChange,
    handleSubmit,
    // ageHandleSubmit,
    // heightHandleSubmit
  ];
};
