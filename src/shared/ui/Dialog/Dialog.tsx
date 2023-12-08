import { FC, PropsWithChildren } from "react";
import styles from "./Dialog.module.scss";

interface DialogProps {
  active: boolean;
  setActive: (val: boolean) => void;
}

export const Dialog: FC<PropsWithChildren<DialogProps>> = (props) => {
  const { active, setActive, children } = props;
  return (
    <div
      className={`${styles.modal} ${active ? styles.active : ""}`}
      onClick={() => setActive(false)}
    >
      <div
        className={`${styles.modal__content} ${active ? styles.active : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
