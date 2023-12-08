import { FC } from "react";
import styles from "./Sidebar.module.scss";
import analyticsIcon from "@/shared/assets/icons/analytics.png";
import profileIcon from "@/shared/assets/icons/profile.svg";
import moderationIcon from "@/shared/assets/icons/moderation.svg";
import chatsIcon from "@/shared/assets/icons/chats.svg";
import bannersIcon from "@/shared/assets/icons/banners.svg";
import teamIcon from "@/shared/assets/icons/team.svg";
import blogIcon from "@/shared/assets/icons/blog.svg";
import exchangeRatesIcon from "@/shared/assets/icons/exchange-rates.svg";
import logoutIcon from "@/shared/assets/icons/logout.svg";
import userIcon from "@/shared/assets/icons/user.png";
import logoIcon from "@/shared/assets/icons/logo.svg";

const sidebarItems = [
  {
    icon: analyticsIcon,
    name: "Аналитика",
  },
  {
    icon: profileIcon,
    name: "Профиль",
  },
  {
    icon: moderationIcon,
    name: "Модерация",
  },
  {
    icon: chatsIcon,
    name: "Чаты",
  },
  {
    icon: bannersIcon,
    name: "Баннеры",
  },
  {
    icon: teamIcon,
    name: "Команда",
  },
  {
    icon: blogIcon,
    name: "Блог",
  },
  {
    icon: exchangeRatesIcon,
    name: "Курс валют",
  },
  {
    icon: logoutIcon,
    name: "Выйти",
  },
];

export const Sidebar: FC = () => {
  return (
    <aside className={styles.Sidebar}>
      <img className={styles.logo} src={logoIcon} alt="logo" />
      <div className={styles.user}>
        <img className={styles.user_icon} src={userIcon} alt="user" />
        <div className={styles.user_info}>
          <h3 className={styles.user_name}>Артем Иванов</h3>
          <span className={styles.user_job}>Собственник</span>
        </div>
      </div>
      <ul className={styles.list}>
        {sidebarItems.map((item) => (
          <li className={styles.item} key={item.name}>
            <img className={styles.item_icon} src={item.icon} alt={item.name} />
            <span className={styles.item_name}>{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};
