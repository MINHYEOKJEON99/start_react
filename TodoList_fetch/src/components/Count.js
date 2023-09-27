import classes from "./Count.module.css";

const Count = (props) => {
  return <div className={classes.count}>{`할 일 ${props.remain}개남음`}</div>;
};
export default Count;
