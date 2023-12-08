import { useEffect, useState } from "react";
import { Data, ValidatorConfig, validator } from "../validator/validator";

interface FakeEvent {
  target: {
    name: string;
    value: any;
  };
}

export default function useForm<T extends Data>(
  initialState: T,
  config: ValidatorConfig
) {
  const [data, setData] = useState<T>(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement> | FakeEvent) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  useEffect(() => {
    if (config) {
      validate();
    }
  }, [data]);

  const validate = () => {
    if (config) {
      const errors = validator(data, config);
      const userErrors: Data = {};
      Object.keys(data).forEach((item) => {
        if (errors[item] && data[item]) {
          userErrors[item] = errors[item];
        }
      });
      setErrors(userErrors);
      return Object.keys(errors).length === 0;
    }
  };

  const validateBySubmit = () => {
    if (config) {
      const errors = validator(data, config);
      setErrors(errors);
      return Object.keys(errors).length === 0;
    }
  };

  return { data, handleChange, errors, setData, setErrors, validateBySubmit };
}
