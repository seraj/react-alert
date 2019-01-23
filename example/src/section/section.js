import React from "react";

import styles from "./section.css"

export default function Section({ title, examples, details, code }) {
    return (
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <section className={`${styles.section}`} >
                <h2>{title}</h2>
                <div className={styles.demoSection}>{examples}</div>
                <div className={styles.details}>{details}</div>
                <div className={styles.code}>{code}</div>
            </section>
        </div>
    );
}