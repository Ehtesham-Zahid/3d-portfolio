import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header/Header";
import MainPage from "./containers/MainPage/MainPage";

export default function App() {
  return (
    <div className=" bg-white w-screen  min-h-screen  flex justify-center m-0 p-0">
      <Header />
      <div className="w-screen ">
        <Routes>
          <Route path="/" element={<MainPage />} exact />
        </Routes>
      </div>
    </div>
  );
}
