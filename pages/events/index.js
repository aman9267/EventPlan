import { getAllEvents } from "@/dummy-data"
import EventList from "@/components/events/event-list"
import EventSearch from "@/components/events/event-search"
import { useRouter } from "next/router"

const Event = () => {
    const allEvent = getAllEvents()
    const router = useRouter()

    const findEventHandler = (year, month) => {
        console.log(year, month)
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }
    return (
        <>
            <EventSearch onSearch={findEventHandler} />
            <EventList items={allEvent} />
        </>
    )
}
export default Event