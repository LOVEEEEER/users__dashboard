import { FC } from "react";
import styles from "./MainPage.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import searchIcon from "@/shared/assets/icons/search.svg";
import { UserItem } from "@/entities/user/UserItem";

const MainPage: FC = () => {
  return (
    <div>
      <div className={styles.head}>
        <h1 className={styles.title}>Команда</h1>
        <div>
          <img className={styles.search_icon} src={searchIcon} alt="search" />
          <Button>Добавить пользователя</Button>
        </div>
      </div>
      <div className={styles.list}>
        <UserItem
          name="Артем Иванов"
          email="nikitademyanenko000@gmail.com"
          options={["Модерация объявлений", "блог"]}
        />
        <UserItem
          name="Артем Иванов"
          email="nikitademyanenko000@gmail.com"
          options={["Модерация объявлений", "блог"]}
        />
        <UserItem
          name="Артем Иванов"
          email="nikitademyanenko000@gmail.com"
          options={["Модерация объявлений", "блог"]}
        />
      </div>
    </div>
  );
};

export default MainPage;
