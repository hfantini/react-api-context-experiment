import { useContext } from 'react';
import DateContext from '../../context/DateContext';
import TimeContext from '../../context/TimeContext';
import './Level2DateTime.scss';

function Level2DateTime() {

  const [date, setDate] = useContext(DateContext)
  const [time, setTime] = useContext(TimeContext)

  return (
    <div className="LEVEL2-DATETIME">
      {date} - {time}
    </div>
  );
}

export default Level2DateTime;
