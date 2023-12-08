import { FC } from "react";
import styles from "./UserItem.module.scss";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import userIcon from "@/shared/assets/icons/user.png";

interface UserItemProps {
  name: string;
  email: string;
  options: string[];
}

export const UserItem: FC<UserItemProps> = ({ name, email, options }) => {
  return (
    <div className={styles.UserItem}>
      <Avatar src={userIcon} className={styles.avatar} />
      <div>
        <div className={styles.bio}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.email}>{email}</span>
        </div>
        <ul className={styles.options}>
          {options.map((option) => (
            <li className={styles.option} key={option}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
