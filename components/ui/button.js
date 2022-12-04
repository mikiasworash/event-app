import Link from "next/link";
import styles from "./button.module.css";

export default function Button(props) {
  return (
    <Link href={props.link} className={styles.btn}>
      {props.children}
    </Link>
  );
}
