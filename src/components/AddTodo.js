import React, { useContext } from "react";
import TopNav from "../Utils/TopNav";
import FormInputs from "../Utils/FormInputs";
import DataContext from "../context/DataContext";
import returnAllThemes from "../constants/Data";

const AddTodo = () => {
  const { data, setData, setAddNotification, setAddNotificationTitle } =
    useContext(DataContext);

  let themeFromLocalStorage = localStorage.getItem("theme");
  if (themeFromLocalStorage === null) {
    localStorage.setItem("theme", "purple");
  }
  const allThemes = returnAllThemes();

  return (
    <div
      className={
        " w-full relative min-h-screen bg-" +
        allThemes.find((val) => val.name === themeFromLocalStorage).colors[5]
      }
    >
      <div className=" max-w-[1300px] px-10 max-md:px-5 m-auto">
        <div>
          <TopNav title={"Add New Todo"} />
          <FormInputs
            data={data}
            setData={setData}
            setAddNotification={setAddNotification}
            setAddNotificationTitle={setAddNotificationTitle}
          />
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
