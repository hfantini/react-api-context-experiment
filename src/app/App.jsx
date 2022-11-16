import * as moment from 'moment';
import React, { useEffect, useState } from 'react';
import './App.scss';
import DateContext from './context/DateContext';
import TextContext from './context/TextContext';
import TimeContext from './context/TimeContext';
import Level1BottomLeft from './views/level1-bottom-left/Level1BottomLeft';
import Level1BottomRight from './views/level1-bottom-right/Level1BottomRight';
import Level1Top from './views/level1-top/Level1Top';

function App() {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [text, setText] = useState("DEFAULT TEXT");

  let intervalID = null;

  useEffect(() => {

    intervalID = setInterval(() => {
      setDate(formatCurrentDate())
      setTime(formatCurrentTime())
    }, 100)

    return () => {
      clearInterval(intervalID);
    }
  }, [])

  const formatCurrentDate = () => {
    return moment().format("YYYY-MM-DD");
  }

  const formatCurrentTime = () => {
    return moment().format("HH:mm:ss");
  }

  return (
    <DateContext.Provider value={[date, setDate]}>
      <TimeContext.Provider value={[time, setTime]}>
        <TextContext.Provider value={[text, setText]}>
          <div className="APP">
            <div className="APP-TOP">
              <Level1Top />
            </div>
            <div className="APP-BOTTOM">
              <div className="APP-BOTTOM-LEFT">
                <Level1BottomLeft />
              </div>
              <div className="APP-BOTTOM-RIGHT">
                <Level1BottomRight />
              </div>
            </div>
          </div>
        </TextContext.Provider>
      </TimeContext.Provider>
    </DateContext.Provider>
  );
}

export default App;

