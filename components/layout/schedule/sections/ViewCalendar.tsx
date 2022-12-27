import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const ViewCalendar = () => {
  const [eventsData, setEventsData] = useState([
    {
      id: "1243601e-1399-42b5-90f7-01bb9ba621eb",
    //   title: "data1",
      start: new Date(2022, 12, 25, 1, 30),
      end: new Date(2022, 8, 12, 25),
      allDay: false,
    },
    {
      id: "1243601e-1399-42bckjsankjc",
      start: new Date(2022, 8, 12, 25, 20),
      end: new Date(2022, 8, 12, 25),
      allDay: false,
    },
    {
      id: "1243601ekjcbs-90f7-01bb9ba621eb",
      start: new Date(2022, 8, 12, 25, 20),
      end: new Date(2022, 8, 12, 25),
      allDay: false,
    },
    {
      id: "kcjbsalj-1399-42b5-90f7-01bb9ba621eb",
      start: new Date(2022, 8, 12, 25, 30),
      end: new Date(2022, 8, 12, 25),
      allDay: false,
    },
    {
      id: "12436,hagsvckhb9ba621eb",
      start: new Date(2022, 12, 25, 1, 30),
      end: new Date(2022, 12, 25, 2),
      allDay: false,
    },
    {
      id: "12436,hagsvsadfg1eb",
    //   title: "data6",
      start: new Date(2022, 12, 25, 2, 20),
      end: new Date(2022, 12, 25, 3, 10),
      allDay: false,
    },
    {
      id: "12dsfdghjfghagsvckhb9ba621eb",
      start: new Date(2022, 12, 25, 5, 10),
      end: new Date(2022, 12, 25, 6),
      allDay: false,
      color:""
    },
  ]);

  return (
    <div className="">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "",
          center: "prev,title,next",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        // selectable={true}
        // eventClick={handleEventClick}
        editable={false}
        navLinks={true}
        dayMaxEvents={3}
        events={eventsData}
        // events={bookedDateToView}
      />
    </div>
  );
};
export default ViewCalendar;
