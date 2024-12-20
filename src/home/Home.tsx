import styles from "./Home.module.scss";
import IconStar from "../assets/images/icon-star.svg";
import classNames from "classnames";
import { useState } from "react";
import IllustrationThankYou from "../assets/images/illustration-thank-you.svg";

const Home = () => {
  const ratings = [1, 2, 3, 4, 5];
  const [selectedRate, setSelectedRate] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = () => {
    if (!selectedRate) return;
    setSubmitted(true);
  };

  return (
    <main className={styles.main}>
      <div
        className={classNames({
          [styles.card]: true,
          [styles.ratingCard]: true,
          [styles.hide]: submitted,
        })}
      >
        <div className={styles.img}>
          <img src={IconStar} alt="icon-star" />
        </div>
        <div className={styles.text}>
          <h1>How did we do?</h1>
          <h2>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </h2>
        </div>
        <div className={styles.ratings}>
          {ratings.map((rating, index) => (
            <button
              key={index}
              className={classNames({
                [styles.active]: selectedRate === rating,
              })}
              onClick={() => setSelectedRate(rating)}
            >
              {rating}
            </button>
          ))}
        </div>
        <div className={styles.btn}>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      <div
        className={classNames({
          [styles.card]: true,
          [styles.thankYouCard]: true,
          [styles.show]: submitted,
        })}
      >
        <img src={IllustrationThankYou} alt="illustration-thank-you" />
        <span className={styles.ratingText}>
          You selected {selectedRate} out of 5
        </span>
        <h2>Thank you!</h2>
        <span className={styles.desc}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </span>
      </div>
    </main>
  );
};

export default Home;
