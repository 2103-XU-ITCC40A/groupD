import React from "react";
import Image from "next/image";
import One from "../../public/images/one.jpg";
import Two from "../../public/images/two.jpg";
import Three from "../../public/images/three.jpg";
import { ATENEO_NEWS, ATENE_SPOTLIGHT } from "../static/list";
import { Button, Modal, Popover, Text } from "@nextui-org/react";

function SpotlightComponent() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="ateneo-spotlight">
      <div className="sub-container ateneo-spotlight-main-container">
        <p className="ateneo-spotlight-title">Ateneo Spotlight</p>

        {/* BODY OF THE SPOTLIGHT */}
        <main className="ateneo-spotlight-container-body">
          {ATENE_SPOTLIGHT.map((spotlight, index) => {
            return (
              <div className="ateneo-spotlight-body-child" key={index}>
                <div
                  className="ateneo-spotlight-item-image"
                  onClick={() => setIsModalOpen(true)}
                >
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
          <Popover>
            <Popover.Trigger>
              {/* <Button auto flat>
                Show More
              </Button> */}
              <button className="button-more-spotlight">See More</button>
            </Popover.Trigger>
            <Popover.Content>
              <Text css={{ p: "$10" }}>No data available at the moment.</Text>
            </Popover.Content>
          </Popover>
        </div>

        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <Modal.Header>
            <h3>No data</h3>
          </Modal.Header>
          <Modal.Footer />
        </Modal>
      </div>
    </div>
  );
}

export default SpotlightComponent;
