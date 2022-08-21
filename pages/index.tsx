import type { NextPage } from "next";
import Main from "../components/main";
import Sidebar from "../components/sidebar";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex w-100 bg-blue-800 dark:bg-gray-800">
        <div className="sidebar w-1/5 p-5">
          <Sidebar />
        </div>
        <div className="main w-3/4 h-100">
          <Main />
        </div>
      </div>
    </>
  );
};

export default Home;
