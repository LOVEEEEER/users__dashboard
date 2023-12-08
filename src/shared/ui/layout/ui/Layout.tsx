import { FC, PropsWithChildren } from "react";
import { Sidebar } from "@/widgets/Sidebar";
import styles from "./Layout.module.scss";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Sidebar />
      <main className={styles.page}>
        <div className={styles.child}>{children}</div>
      </main>
    </div>
  );
};
