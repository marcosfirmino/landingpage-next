import { FiCheckCircle } from "react-icons/fi";
import Button from "../button";
import styles from "./styles.module.scss";

export function SuccessModal({ closeModal }) {
  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modalContainer}>
        <FiCheckCircle />
        <p>E-mail enviado com sucesso!</p>
        <div className={styles.okButtonContainer} onClick={closeModal}>
          <Button title="Fechar"/>
        </div>
      </div>
    </div>
  );
}