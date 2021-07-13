import React from "react";
import {
  outDoorGrid,
  outDoorGridItems,
  outDoorHeading,
  outDoorSection,
} from "./e.index";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import AdbIcon from "@material-ui/icons/Adb";

function Outdoor() {
  return (
    <section className={outDoorSection}>
      <div className="container">
        <div className={outDoorHeading}>
          <h3>Experinece</h3>
          <h1>The thrilling outdoors</h1>
          <p>Loarm door sit outDoor. construct your world</p>
        </div>

        <div className={outDoorGrid}>
          <div className={outDoorGridItems}>
            <AccessibilityNewIcon />
            <h1>Star gazing</h1>
            <p>
              Loarm door sit outDoor. construct your world.Loarm door sit
              outDoor. construct your world.Loarm door sit outDoor. construct
              your world.Loarm door sit outDoor. construct your world.Loarm door
              sit outDoor. construct your world
            </p>
          </div>

          <div className={outDoorGridItems}>
            <AddPhotoAlternateIcon />
            <h1>hiking</h1>
            <p>
              Loarm door sit outDoor. construct your world.Loarm door sit
              outDoor. construct your world.Loarm door sit outDoor. construct
              your world.Loarm door sit outDoor. construct your world.Loarm door
              sit outDoor. construct your world
            </p>
          </div>

          <div className={outDoorGridItems}>
            <AdbIcon />
            <h1>Star gazing</h1>
            <p>
              Loarm door sit outDoor. construct your world.Loarm door sit
              outDoor. construct your world.Loarm door sit outDoor. construct
              your world.Loarm door sit outDoor. construct your world.Loarm door
              sit outDoor. construct your world
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Outdoor;
