import React, {useState} from "react";

const Reserve = ({time,duration, tableNum, closeModal}) => {
  const [name, setName]=useState("");
  const [using ,setUsing]=useState("");
  const [startTime, setStartTime]=useState(0);
  const [durationTime, setDurationTime]=useState(0);
  const finsihTime=startTime+durationTime>23?23:startTime+durationTime;

  const onChangeName = (e) => {
    setName(e.target.value);
  }
  const onChangeUsing = (e) => {
    setUsing(e.target.value);
  }
  const onClickStartTime = (t) => {
    setStartTime(parseInt(t));
  }
  const onClickDuration = (d) => {
    setDurationTime((prev)=>prev+parseInt(d));
  }
  const onReset = () => {
    setStartTime(0);
    setDurationTime(0);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    let list={
      name: name,
      tableNum: tableNum,
      startTime: startTime,
      finishTime: finsihTime,
      totalTime: finsihTime-startTime,
      date: new Date(),
      using: using,
      isReserve: false
    };
    console.log(list);
    alert("예약완료");
    closeModal(false);
  }
  return (
    <form onSubmit={onSubmit}>
      <span>시작시간</span>
      {time.map((item, index)=>(
        <div style={{width: 40, border: "1px solid black", cursor:"pointer"}} key={index} onClick={()=>onClickStartTime(item)}>{item}</div>
      ))}
      <hr />
      <span>몇시간동안?</span>
      {duration.map((item, index)=>(
        <div style={{width: 20, border: "1px solid black", cursor:"pointer"}} key={index} onClick={()=>onClickDuration(item)}>{item}</div> 
      ))}
      <hr />
      {`${startTime}:00 ~ ${finsihTime}:00`}
      <div style={{width: 50, border: "1px solid black", cursor: "pointer"}} onClick={onReset}>초기화</div>
      <hr />
      <input value={name} onChange={onChangeName} />
      <hr />
      <select onChange={onChangeUsing}>
        <option value="">목적 선택</option>
        <option value="공부">공부</option>
        <option value="스터디">스터디</option>
        <option value="프로젝트">프로젝트</option>  
      </select>
      <button>예약하기</button>
    </form>
  )
}


export default Reserve;