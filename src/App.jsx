import { Navbar } from "../src/components/index";
import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="w-full flex flex-col items-center px-1">
      <div className="max-w-7xl w-full ">
        <Navbar />
        <main>
          <Outlet />
        </main>
        footer
      </div>
    </div>
  );
}

export default App;
