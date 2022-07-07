import React from "react";
import { Modal } from "./Modal";

export const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  return (
    <div>
      <h2>Modals</h2>

      <button>Modal 1</button>
      <Modal>
        <h3>Modal 1</h3>
        <p>Modal 1 content</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      <button>Modal 2</button>
      <Modal>
        <h3>Modal 2</h3>
        <p>Modal 2 content</p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature" />
      </Modal>
    </div>
  );
};
