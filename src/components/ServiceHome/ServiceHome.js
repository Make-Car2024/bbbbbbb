import React from "react";
import styles from "./ServiceHome.module.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ServiceHome = (props) => {
    return (
        <div className={`${styles.box} user-select-none`}>
            <div className={styles.iconCircle}>
                {typeof props.icon === 'string' ? (
                    <span className={styles.emojiIcon}>{props.icon}</span>
                ) : (
                    <img src={props.icon} alt="" className={styles.img} />
                )}
            </div>
            <p className={styles.heading}>{props.heading}</p>
            <p className={styles.text}>{props.content}</p>
            <Link to={`/individualService?id=${props.id}`}>
                <HiOutlineArrowNarrowRight
                    className={styles.to}
                    size="2rem"
                    color="#ff4c0a"
                />
            </Link>
        </div>
    );
};
export default ServiceHome;
