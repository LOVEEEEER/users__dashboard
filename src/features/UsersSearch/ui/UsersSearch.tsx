import { FC, useState } from "react";
import styles from "./UsersSearch.module.scss";
import searchIcon from "@/shared/assets/icons/search.svg";
import { TextField } from "@/shared/ui/TextField/TextField";

interface UsersSearchProps {
  onSearchQuery: (newValue: string) => void;
}

export const UsersSearch: FC<UsersSearchProps> = ({ onSearchQuery }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <div className={styles.search_container}>
      <img
        src={searchIcon}
        id="search-icon"
        alt="search"
        onClick={handleOpen}
      />
      <TextField
        type="text"
        id="search-input"
        placeholder="Поиск по Email"
        className={`${styles.input} ${open ? styles.open : ""}`}
        onChange={(e) => onSearchQuery(e.target.value)}
      />
    </div>
  );
};
