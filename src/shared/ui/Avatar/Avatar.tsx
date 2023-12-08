import { FC } from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  src: string;
  className?: string;
}

export const Avatar: FC<AvatarProps> = ({ src, className = "" }) => {
  return (
    <img
      className={styles.Avatar + (className ? ` ${className}` : "")}
      src={src}
      alt="user-image"
    />
  );
};
