import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { changeNumber, changeType } from '../../redux/generatorApp';
import "./content.css";

function Content() {
  const dispatch = useDispatch();
  const [data, setData] = useState()
  const [parasnumber, setParasnumber] = useState(useSelector((state)=>state.parasNumber));
  const [parasType, setParasType] = useState(useSelector((state)=>state.parasType));


  useEffect(() => {
    dispatch(changeNumber(parasnumber))
    dispatch(changeType(parasType))
  }, [parasnumber,parasType, dispatch]);

  useEffect(()=>{
     axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${parasnumber}&format=${parasType}`)
    .then(function (response){
      setData(response.data)
    })
  },[parasnumber,parasType])

 

  

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-xs-12">
          <div className="mt-5">
            <label className="mb-5"> Paragraph Number:
            <input className="form-control mt-2 w-50" type="number" value={parasnumber} onChange={(e) => {
              setParasnumber(e.target.value)
            }} /> 
            </label>
            <label> Select Text Type:
              <br />
            <select className="mt-2 form-select" onChange={(e)=>
              {setParasType(e.target.value)}}>
              <option value="html">Html</option>
              <option value="text">Text</option>
            </select>
            </label>
          </div>
        </div>
        <div className="col-lg-10 col-xs-12">
          <div className="mt-5">
            <p> {data} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
