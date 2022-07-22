import React from "react";
import Image from "next/image";
import One from "../../public/images/one.jpg";
import Two from "../../public/images/two.jpg";
import Three from "../../public/images/three.jpg";
import { ATENEO_NEWS, ATENE_SPOTLIGHT } from "../static/list";
import { Button } from "@nextui-org/react";

function SpotlightComponent() {
  return (
    <div className="ateneo-spotlight">
      <div className="sub-container ateneo-spotlight-main-container">
        <p className="ateneo-spotlight-title">Ateneo Spotlight</p>

        {/* BODY OF THE SPOTLIGHT */}
        <main className="ateneo-spotlight-container-body">
          {ATENE_SPOTLIGHT.map((spotlight, index) => {
            return (
              <div className="ateneo-spotlight-body-child" key={index}>
                <div className="ateneo-spotlight-item-image">
                  <Image
                    style={{
                      borderRadius: 20,
                      borderWidth: 5,
                    }}
                    src={spotlight.imageUrl}
                    alt={spotlight.title}
                    width={300}
                    height={450}
                  />
                </div>
                <h4 className="ateneo-spotlight-item-title">
                  {spotlight.title}
                </h4>
              </div>
            );
          })}
        </main>

        {/*MORE BUTTON*/}
        <div className="more-button">
          <button className="button-more-spotlight">Show More</button>
        </div>
      </div>
    </div>
  );
}

export default SpotlightComponent;
