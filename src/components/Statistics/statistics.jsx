export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>Statistic</p>
      <ul className="list-feedback">
        <li>Good {good}</li>
        <li>Neutral {neutral}</li>
        <li>Bad {bad}</li>
        <li>Total {total} </li>
        <li>Positive feedback: {total !== 0 ? positivePercentage : 0}%</li>
      </ul>
    </div>
  );
};
