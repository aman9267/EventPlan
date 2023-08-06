import Button from "../ui/button"
import classes from './events-search.module.css'
import { useRef } from "react"

const EventSearch = (props) => {

    const yearInputRef = useRef()
    const monthInputRef = useRef()

    // Handle Submit Function
    const SumbitHandler = (event) => {
        event.preventDefault()
        const selectedYear = yearInputRef.current.value
        const selectedMonth = monthInputRef.current.value

        props.onSearch(selectedYear, selectedMonth)
    }
    return (
        <form className={classes.form} onSubmit={SumbitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInputRef}>
                        <option value={'2021'}>2021</option>
                        <option value={'2022'}>2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthInputRef}>
                        <option value='1'>Janueary</option>
                        <option value='2'>February</option>
                        <option value='3'>March</option>
                        <option value='4'>April</option>
                        <option value='5'>May</option>
                        <option value='6'>June</option>
                        <option value='7'>July</option>
                        <option value='8'>August</option>
                        <option value='9'>September</option>
                        <option value='10'>Octuber</option>
                        <option value='11'>November</option>
                        <option value='12'>December</option>ß
                    </select>
                </div>
            </div>
            <Button >Find Event</Button>
        </form>
    )
}
export default EventSearch