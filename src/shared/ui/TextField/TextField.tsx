import { FC, InputHTMLAttributes } from "react";
import styles from "./TextField.module.scss";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
}

export const TextField: FC<TextFieldProps> = (props) => {
  const { className = "", error, ...rest } = props;

  return (
    <input
      className={
        styles.TextField +
        (className ? ` ${className} ` : "") +
        (error ? ` ${styles.error}` : "")
      }
      type="text"
      {...rest}
    />
  );
};
