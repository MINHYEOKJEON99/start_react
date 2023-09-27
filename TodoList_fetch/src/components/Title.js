import classes from "./Title.module.css";

const Title = () => {
  const date = new Date();

  const array = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const koreaDate = date.getDay();
  return (
    <div>
      <h2 className={classes.title}>
        {year}년{month}월{day}일
      </h2>
      <p className={classes.paragraph}>{array[koreaDate]}</p>
    </div>
  );
};
export default Title;
