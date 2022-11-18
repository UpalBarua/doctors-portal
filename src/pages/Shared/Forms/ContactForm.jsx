import React from 'react';
import styles from './Forms.module.css';

const ContactForm = () => {
  return (
    <section className={`${styles.contactForm}`}>
      <div className="container flow">
        <h2 className="title-primary">contact us</h2>
        <p className="title-secondary">Stay connected with us</p>
        <form className={`${styles.form} | flow`}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              id="email"
              name="email"
              type="text"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="subject">
              Subject
            </label>
            <input
              className={styles.input}
              id="subject"
              name="subject"
              type="text"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              className={styles.input}
              name="message"
              id="message"></textarea>
          </div>
          <button className="btn-primary">submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
