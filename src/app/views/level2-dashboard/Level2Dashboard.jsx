import { useContext } from 'react';
import DateContext from '../../context/DateContext';
import TextContext from '../../context/TextContext';
import TimeContext from '../../context/TimeContext';
import './Level2Dashboard.scss';

function Level2Dashboard() {

  const [date, setDate] = useContext(DateContext)
  const [time, setTime] = useContext(TimeContext)
  const [text, setText] = useContext(TextContext)

  return (
    <div className="LEVEL2-DASHBOARD">
      <div>The Date is: {date}</div>
      <div>The Time is: {time}</div>
      <br />
      <div>{text}</div>
    </div>
  );
}

export default Level2Dashboard;
