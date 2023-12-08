import { FC } from "react";
import { User } from "../../types/types";
import styles from "./UsersList.module.scss";
import { UserItem } from "../UserItem/UserItem";

interface UsersListProps {
  users: User[];
}

export const UsersList: FC<UsersListProps> = ({ users }) => {
  return (
    <div className={styles.list}>
      {users.map((user) => (
        <UserItem key={user.email + "_" + user.name} {...user} />
      ))}
    </div>
  );
};
