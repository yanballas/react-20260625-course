import type { Review } from "../types";

import styles from "./review.module.css";

type ReviewProps = { reviews: Review[] };

export default function Review({ reviews }: ReviewProps) {
  if (!reviews.length) {
    return null;
  }

  return (
    <ol>
      {reviews.map((review: Review) => (
        <li key={review.id} className={styles.review}>
          <ul>
            <li>{review.user}</li>
            <li>{review.text}</li>
            <li>{review.rating}</li>
          </ul>
        </li>
      ))}
    </ol>
  );
}
