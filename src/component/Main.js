import React from "react";
import EachTable from "./EachTable";

const time=["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"
,"18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
const duration=["+1","+3","+6"];

const Main = () => {
  return (
    <div>
      <EachTable 
        time={time} 
        duration={duration} 
        tableNum={1}
      />
      <EachTable 
        time={time} 
        duration={duration} 
        tableNum={2}
      />
      <EachTable 
        time={time} 
        duration={duration} 
        tableNum={3}
      />
    </div>
  )
}

export default Main;