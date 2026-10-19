import { useState, type FC } from "react";
import styles from "./styles.module.css";

interface AddEventModalProps {
  date: Date;
}

const AddEventModal: FC<AddEventModalProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={styles.button}
        onClick={() => setIsOpen(true)}
        type="button"
      >
        +
      </button>
      <div
        className={`${styles.modalWrapper} ${isOpen ? "" : styles.hiddenModal}`}
      >
        <div className={styles.modalBody}>
          <button
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
            type="button"
          >
            X
          </button>
          <form className={styles.form}>
            <h2>Add Event</h2>
            <label>Select device</label>
            <select></select>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEventModal;
