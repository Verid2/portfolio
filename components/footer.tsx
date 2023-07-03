import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/footer.module.css'; // Import the CSS module

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Contact</p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        Email: gergely.ficsur@gmail.com
      </p>
      <p>&copy; 2023 Gergely Ficsúr. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
