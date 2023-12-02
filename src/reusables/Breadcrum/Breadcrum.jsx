import styles from "./Breadcrum.module.css";
function Breadcrum({ data, customClass }) {
  return (
    <div className={styles.container}>
      {data.map((dt, i) => {
        if (i === 0)
          return (
            <a
              href={dt.link}
              key={i}
              className={`${styles.item} ${customClass}`}
            >
              {dt.title}
            </a>
          );

        return (
          <>
            <i className="las la-angle-right"></i>
            <a
              href={dt.link}
              key={i}
              className={`${styles.item} ${customClass}`}
            >
              {dt.title}
            </a>
          </>
        );
      })}
    </div>
  );
}

export default Breadcrum;
