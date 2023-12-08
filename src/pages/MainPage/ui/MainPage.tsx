import { FC, useState } from "react";
import styles from "./MainPage.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { UserItem } from "@/entities/user/UserItem";
import { UsersSearch } from "@/features/UsersSearch";
import { useDebouncedCallback } from "use-debounce";

const MainPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = useDebouncedCallback((value: string) => {
    setSearchQuery(value);
  }, 300);

  const searchedItems = [];

  return (
    <div>
      <div className={styles.head}>
        <h1 className={styles.title}>Команда</h1>
        <div className={styles.search_block}>
          <UsersSearch onSearchQuery={handleSearchQuery} />
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
