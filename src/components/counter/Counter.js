import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, setCustom } from "../../redux/state/counter/counterSlice";

function Counter() {
    let cus_num = useRef()
    const val = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="card">
            <div className="card-header">
                <h2>My Counter App</h2>
            </div>
            <div className="card-body">
                <h3>{val}</h3>
                <div>
                    <button onClick={()=>dispatch(increment())} className="btn btn-danger">Increase</button>
                    <button onClick={()=>dispatch(decrement())} className="mx-2 btn btn-success">Decrease</button>
                </div>
                <div className="my-4">
                  <div className="row">
                    <div className="col-3">
                      <input ref={cus_num} type="number" className="form-control"/>
                    </div>
                    <div className="col-5">
                      <button onClick={()=>dispatch(setCustom(cus_num.current.value))} className="btn btn-primary">Set Custom </button>
                    </div>
                  </div>
                </div>
            </div>
            
        </div>
    );
}

export default Counter;
