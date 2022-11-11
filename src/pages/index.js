import dayGrid from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";

import UserModalTable from '../components/user/user-table_time'
import { useEffect, useRef, useState } from "react";




const Calendar = () => {

  const nowdate = new Date().toISOString().split('T')[0];

  const [select_date,setSelectDate] = useState('');


  const [events, setEvents] = useState([

    { id: 123, title: 'event 2', date: '2022-11-02' },
    { title: 'event 2  ', date: '2022-11-06' },
    { title: 'event 2', date: '2022-11-06' },
    { title: 'event 2', date: '2022-11-06' },
    { title: 'event 2', date: '2022-11-06' },
    { title: 'event 2', date: '2022-11-06' },
    { title: 'event 2', date: '2022-11-06' },
    { title: 'event 2', date: '2022-11-06' },
  ])

  const handleDateClick = (info) => {

    var select_objDate = String(info.date).split(' ');
    var select_month = select_objDate[1];

    var now_objDate = document.getElementsByClassName("fc-toolbar-title");
    setSelectDate(`${select_objDate[2]} de ${now_objDate[0].innerText}  `)

    console.log(now_objDate)
    document.getElementsByClassName('modalbutton')[0].click();

  
  };







  return (<>
     <button
        type="button"
        style={{display:'none'}}
        className="btn btn-primary modalbutton"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        id="modal"
      >
      </button>
    
    <UserModalTable  data={select_date}/>
    
    <div className={`container p-3 `}>
      <div className={`row h-5 calender `}>
        <FullCalendar
          plugins={[dayGrid, interactionPlugin]}
          themeSystem='bootstrap5'
          editable
          locale='pt-br'
          dateClick={handleDateClick}
          height='auto'
          buttonText={{
            today: 'Hoje'
          }}

          viewRender={function (view, element) {
            var currentdate = view.intervalStart;
          }}
          dayMaxEventRows={true}
          events={events}
        />
      </div>
    </div>


  </>);
};

export default Calendar;