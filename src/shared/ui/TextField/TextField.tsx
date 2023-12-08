import { FC, InputHTMLAttributes } from "react";
import styles from "./TextField.module.scss";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const TextField: FC<TextFieldProps> = ({ className = "", ...rest }) => {
  return (
    <input
      className={styles.TextField + (className ? ` ${className}` : "")}
      type="text"
      {...rest}
    />
  );
};
