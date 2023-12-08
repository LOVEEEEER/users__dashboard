import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { children, className = "", ...rest } = props;
  return (
    <button
      className={styles.Button + (className ? ` ${className}` : "")}
      {...rest}
    >
      {children}
    </button>
  );
};
