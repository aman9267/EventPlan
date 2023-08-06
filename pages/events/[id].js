import { useRouter } from "next/router"
import { getEventById } from "@/dummy-data"
import EventSummary from "@/components/event-detail/event-summary"
import EventLogistics from "@/components/event-detail/event-logistics"
import EventContent from "@/components/event-detail/event-content"
const EventDetailPage = () => {
    const router = useRouter()
    const eventId = router.query.id
    const EventDetail = getEventById(eventId)
    console.log(EventDetail)

    if (!EventDetail) {
        return (<p>Event Not Found</p>)
    }
    return (
        <>
            <EventSummary title={EventDetail.title} />
            <EventLogistics date={EventDetail.date} address={EventDetail.location} image={EventDetail.image} imageAlt={EventDetail.title} />
            <EventContent><p>{EventDetail.description}</p></EventContent>
        </>
    )
}
export default EventDetailPage