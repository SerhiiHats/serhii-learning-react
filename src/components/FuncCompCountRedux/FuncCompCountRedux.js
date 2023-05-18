import styles from "../FuncComp/FuncComp.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {DecActCreator, IncActCreator, INCREMENT, ResetActCreator, RndActCreator} from "./countReduxActionForFuncComp";

const FuncCompCountRedux = () => {
  const dispatch = useDispatch();
  const countForFuncComp = useSelector( (store) => store.countForFuncComp);


  return (
    <div>

      <p>{countForFuncComp}</p>
      <button className={`${styles.btnCounter} ${styles.btnCounterFirst}`}
              onClick={()=>dispatch(IncActCreator())}>++ counter From Redux</button>
      <button className={`${styles.btnCounter} ${styles.btnCounterSecond}`}
              onClick={()=>dispatch(DecActCreator())}>-- counter FFrom Redux</button>
      <button className={styles.btnCounter}
              onClick={()=>dispatch(RndActCreator())}>RND From Redux</button>
      <button className={styles.btnCounter}
              onClick={()=>dispatch(ResetActCreator())}>reset From Redux</button>
    </div>
  );
};

export default FuncCompCountRedux;