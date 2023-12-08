import { FC, useState } from "react";
import styles from "./MainPage.module.scss";
import { UsersSearch } from "@/features/UsersSearch";
import { useDebouncedCallback } from "use-debounce";
import { UsersList } from "@/entities/user";
import { CreateUser } from "@/features/CreateUser";

const MainPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = useDebouncedCallback((value: string) => {
    setSearchQuery(value);
  }, 300);

  return (
    <div>
      <div className={styles.head}>
        <h1 className={styles.title}>Команда</h1>
        <div className={styles.search_block}>
          <UsersSearch onSearchQuery={handleSearchQuery} />
          <CreateUser />
        </div>
      </div>
      <UsersList
        users={[
          {
            name: "Артем Иванов",
            email: "artem@gmail.com",
            permissions: ["Блог", "Аналитика"],
            image:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          },
          {
            name: "Лена Новикова",
            email: "lenkan@gmail.com",
            permissions: ["Администратор"],
            image:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
          },
        ]}
      />
    </div>
  );
};

export default MainPage;
