import { Sidebar } from "@/widgets/Sidebar";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";

const App = () => {
  return (
    <>
      <AppRouter />
      <Sidebar />
    </>
  );
};

export default App;
