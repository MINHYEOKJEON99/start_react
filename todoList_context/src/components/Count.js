import classes from "./Count.module.css";

const Count = (props) => {
  return <div className={classes.count}>{`할 일은 총${props.remain}개!`}</div>;
};
export default Count;
