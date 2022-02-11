import React,{useState} from "react";
import Modal from "react-modal";
import Reserve from "./Reserve";
const EachTable = ({time, duration, tableNum}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //const [isHovering, setIsHovering] = useState(false);

  // const onMouseOver = () => {
  //   setIsHovering(prev=>!prev);
  // }
  const closeModal = (b) => {
    setModalIsOpen(b);
  }
  return (
   <>
    <div
      style={{
        backgroundColor: "lightcoral",
        width: 200,
        height: 200,
        border: "1px solid black",
        fontSize: 100,
        textAlign: "center",
        cursor: "pointer",
        margin: 10
      }} 
      onClick={()=>setModalIsOpen(true)}
      //onMouseOver={onMouseOver}
    >
      {tableNum}
    </div>
    <Modal 
      isOpen={modalIsOpen}
      onRequestClose={()=>setModalIsOpen(false)}
    >
     <Reserve time={time} duration={duration} tableNum={tableNum} closeModal={closeModal}/>
    </Modal>
   </>
  )
}

export default EachTable;

// const EachTable = ({time,duration, tableNum}) => {
//   const [name, setName]=useState("");
//   const [using ,setUsing]=useState("");
//   const [startTime, setStartTime]=useState(0);
//   const [durationTime, setDurationTime]=useState(0);
//   const onChangeName = (e) => {
//     setName(e.target.value);
//   }
//   const onChangeUsing = (e) => {
//     setUsing(e.target.value);
//   }
//   const onClickStartTime = (t) => {
//     setStartTime(parseInt(t));
//   }
//   const onClickDuration = (d) => {
//     setDurationTime((prev)=>prev+parseInt(d));
//   }
//   const onSubmit = (e) => {
//     e.preventDefault();
//     let list={
//       name: name,
//       tableNum: tableNum,
//       startTime: startTime,
//       finishTime: startTime+durationTime,
//       totalTime: durationTime,
//       date: new Date(),
//       using: using,
//       isReserve: false
//     };
//     console.log(list);
//   }
//   return (
//     <form onSubmit={onSubmit}>
//       <span>시작시간</span>
//       {time.map((item, index)=>(
//         <button key={index} onClick={()=>onClickStartTime(item)}>{item}</button>
//       ))}
//       <hr />
//       <span>몇시간동안?</span>
//       {duration.map((item, index)=>(
//         <button key={index} onClick={()=>onClickDuration(item)}>{item}</button>
//       ))}
//       <hr />
//       <input value={name} onChange={onChangeName} />
//       <hr />
//       <select onChange={onChangeUsing}>
//         <option value="">목적 선택</option>
//         <option value="공부">공부</option>
//         <option value="스터디">스터디</option>
//         <option value="프로젝트">프로젝트</option>  
//       </select>
//       <button>예약하기</button>
//     </form>
//   )
// }


// export default EachTable;