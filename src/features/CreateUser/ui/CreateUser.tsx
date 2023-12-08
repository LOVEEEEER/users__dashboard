import { FC, useState } from "react";
import { Button } from "@/shared/ui/Button/Button";
import { Dialog } from "@/shared/ui/Dialog/Dialog";
import { TextField } from "@/shared/ui/TextField/TextField";
import { validatorConfig } from "../lib/validatorConfig";
import Select, { MultiValue } from "react-select";
import useForm from "@/shared/lib/useForm/useForm";
import styles from "./CreateUser.module.scss";

const selectOptions: any = [
  { label: "Все", value: "all" },
  { label: "Модерация объявлений", value: "moderation" },
  { label: "Блог", value: "blog" },
  { label: "Тех. Поддержка", value: "support" },
  { label: "Обращения клиентов", value: "help" },
  { label: "Аналитика", value: "analytics" },
  { label: "Акции", value: "stock" },
];

export const CreateUser: FC = () => {
  const [activeDialog, setActiveDialog] = useState(false);
  const { data, errors, handleChange } = useForm(
    { email: "", permissions: [] },
    validatorConfig
  );

  const handlePermissionChange = (
    selectedOptions: MultiValue<{
      value: never;
      label: never;
    }>
  ) => {
    const fakeEvent = {
      target: {
        name: "permissions",
        value: selectedOptions,
      },
    };
    handleChange(fakeEvent);
  };

  return (
    <>
      <Button onClick={() => setActiveDialog(true)}>
        Добавить пользователя
      </Button>
      <Dialog active={activeDialog} setActive={setActiveDialog}>
        <h2 className={styles.title}>Отправьте приглашение</h2>
        <form>
          <TextField
            name="email"
            placeholder="Email"
            error={errors.email}
            value={data.email}
            className={styles.input}
            onChange={handleChange}
          />
          <Select
            options={selectOptions}
            isMulti
            value={data.permissions}
            onChange={(e) => handlePermissionChange(e)}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderRadius: "10px",
                padding: "1px 5px",
                fontSize: "18px",
                marginBottom: "8px",
                border: state.isFocused
                  ? "1px solid black"
                  : "1px solid #c1c1cb",
                outline: state.isFocused
                  ? "1px solid #c1c1cb"
                  : "1px solid #c1c1cb",
              }),
            }}
          />
          <Button className={styles.button}>Отправить приглашение</Button>
        </form>
      </Dialog>
    </>
  );
};
