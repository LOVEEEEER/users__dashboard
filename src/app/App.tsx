import { AppRouter } from "./providers/router";
import { Layout } from "@/shared/ui/layout";
import "./styles/index.scss";

const App = () => {
  return (
    <div className="app">
      <Layout>
        <AppRouter />
      </Layout>
    </div>
  );
};

export default App;
