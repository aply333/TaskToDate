import { monthStyle } from "./calendarConst"

const MonthHeader = ({month}) => {
    return <h1 style={monthStyle}>{month}</h1>
}

export default MonthHeader;