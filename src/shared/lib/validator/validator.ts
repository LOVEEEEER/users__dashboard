export interface Data {
  [key: string]: any;
}

export interface ValidatorConfig {
  [key: string]: {
    [key: string]: {
      message: string;
      params?: number;
    };
  };
}

export function validator(data: Data, config: ValidatorConfig) {
  const errors: Data = {};
  function validate(
    validateMethod: string,
    data: string,
    config: { message: string }
  ) {
    let statusValidate;

    switch (validateMethod) {
      case "isRequired":
        if (typeof data === "string" && data.trim() === "") {
          statusValidate = config.message;
        }
        break;
      case "isEmail":
        if (!/^\S+@\S+\.\S+$/g.test(data)) {
          statusValidate = config.message;
        }
        break;

      default:
        statusValidate = config.message;
    }
    return statusValidate;
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (!errors[fieldName] && error) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
