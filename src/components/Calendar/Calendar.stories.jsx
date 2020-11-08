import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Calendar from "./js/Calendar";
import "./css/Calendar.css";
import "../../App.css";

export default {
  title: "Calendar",
  decorators: [withKnobs]
};

export const Default = () => (
  <>
    <label htmlFor="calendar_id">
      Calendar title
      <input id="calendar_id"
             className="input"
             type="calendar"
             name="calendar"
             value="10.10.2020"
             onChange={() => {
               alert("onChange");
             }}
             onBlur />
    </label>
  </>
);
