import { useState } from "react";
import Calendar from "react-calendar";


interface CalendarioProps {

}

export default function Calendario(props: CalendarioProps) {
    const [dataAtual, setDataAtual] = useState(new Date())

    return (
        <div className="bg-white text-black">
            <Calendar
                calendarType="US"
                value={dataAtual}
                onChange={setDataAtual}
            />
        </div>
    )
}
