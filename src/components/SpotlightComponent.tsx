import React from "react";
import Image from "next/image";
import One from "../../public/images/one.jpg";
import Two from "../../public/images/two.jpg";
import Three from "../../public/images/three.jpg";
import { ATENE_SPOTLIGHT } from "../static/list";
import { Button } from "@nextui-org/react";

function SpotlightComponent({
  spotlights,
}: {
  spotlights: SpotlightInterfaceComponent;
}) {
  return (
    <div className="ateneo-spotlight">
      <div className="sub-container ateneo-spotlight-main-container">
        <p className="ateneo-spotlight-title">Ateneo Spotlight</p>

        {/* BODY OF THE SPOTLIGHT */}
        <main className="ateneo-spotlight-container-body">z</main>

        {/*MORE BUTTON*/}
        <div className="more-button">
          <button className="button-more-spotlight">Show More</button>
        </div>
      </div>
    </div>
  );
}

export default SpotlightComponent;
