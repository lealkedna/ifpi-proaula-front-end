import { useState } from "react";
import Calendar from "react-calendar";

export default function Calendario() {
    const [dataAtual, setDataAtual] = useState(new Date())

    return (
        <div className="bg-white text-black">
            <Calendar
                calendarType="US"
                value={dataAtual}
                onChange={setDataAtual}
                showNeighboringMonth={false}
            />
        </div>
    )
}
