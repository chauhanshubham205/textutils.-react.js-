import { useState } from "react";
import "./App.css";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleBtn = () => {
    if (mode === "light") {
      console.log("hii");
      setMode("dark");
      document.body.style.backgroundColor = "#003870";
      showAlert("dark mode has been enabled", "success");
      document.title = "Textutils-dark mode";
      // setInterval(() => {
      //   document.title="Textutils-Made by react"
      // }, 500);
      // setInterval(() => {
      //   document.title= "Use react now"

      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "Textutils-light mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          mode={mode}
          toggleBtn={toggleBtn}
          title="TextUtils"
          aboutText="about TextUtils"
        />
        <Alerts alert={alert} />
        <div className="container"></div>
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm
              heading="This is heading for textarea"
              showAlert={showAlert}
              mode={mode}
            />
          </Route>
        </Switch>
        {/* <About/> */}
      </Router>
    </>
  );
}

export default App;
