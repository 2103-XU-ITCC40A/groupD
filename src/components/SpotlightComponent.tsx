import React from "react";
import Image from "next/image";
import One from "../../public/images/one.jpg";
import Two from "../../public/images/two.jpg";
import Three from "../../public/images/Three.jpg";
import { ATENE_SPOTLIGHT } from "../static/list";
import { Button } from "@nextui-org/react";

function SpotlightComponent() {
  return (
    <div className="ateneo-spotlight">
      <div className="sub-container ateneo-spotlight-main-container">
        <p className="ateneo-spotlight-title">Ateneo Spotlight</p>

        {/* BODY OF THE SPOTLIGHT */}
        <main className="ateneo-spotlight-container-body">
          {ATENE_SPOTLIGHT.map((spotlight) => (
            <div className="ateneo-spotlight-item" key={spotlight.id}>
              <div className="ateneo-spotlight-item-image">
                <Image
                  src={spotlight.image}
                  alt={spotlight.title}
                  width={260}
                  height={400}
                  style={{
                    borderRadius: "10px",
                  }}
                />
              </div>
              <p className="ateneo-spotlight-item-title">{spotlight.title}</p>
            </div>
          ))}
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
