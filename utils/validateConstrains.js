import validate from "validate.js";

export const validateString = (id, value) => {
  const constraints = { presence: { allowEmpty: false } };

  if (value !== "") {
    constraints.format = {
      pattern: "[a-z]+",
      flag: 1,
      message: "Value can only contain letters",
    };
  }

  const validateResults = validate({ [id]: value }, { [id]: constraints });

  return validateResults && validateResults[id];
};

export const validateEmail = (id, value) => {
  const constraints = { presence: { allowEmpty: false } };

  if (value !== "") {
    constraints.email = true;
  }

  const validateResults = validate({ [id]: value }, { [id]: constraints });

  return validateResults && validateResults[id];
};

export const validatePassword = (id, value) => {
  const constraints = { presence: { allowEmpty: false } };

  if (value !== "") {
    constraints.length = {
      minimum: 6,
      message: "must be minimum of 6 characters",
    };
  }

  const validateResults = validate({ [id]: value }, { [id]: constraints });

  return validateResults && validateResults[id];
};
