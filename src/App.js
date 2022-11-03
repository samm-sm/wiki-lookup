import './App.css';
import Calendar from 'react-calendar';
import React, {useState} from 'react';
//import 'react-calendar/dist/Calendar.css';

function App() {
  const [defaultWikiDate, changeDate] = useState(new Date(Date.now() - 86400000));

   return (
     <div className="App">
       <Calendar
         className="WikiCalendar"
         value = {defaultWikiDate}
         onClickDay = {(value) => changeDate(value)}
         calendarType="US"
       />
       Results
       &nbsp;
       <select
            onChange = {}
            defaultValue={"100"}
       >
            <option value={"25"}>25</option>
            <option value={"50"}>50</option>
            <option value={"75"}>75</option>
            <option value={"100"}>100</option>
            <option value={"200"}>200</option>
       </select>
     </div>
   );
}



export default App;
