import EventList from "@/components/events/event-list"
import { getFeaturedEvents } from "@/dummy-data"
import EventSearch from "@/components/events/event-search"
import { useRouter } from "next/router"

function HomePage() {
  const router = useRouter()
  const FeaturedEvents = getFeaturedEvents()
  console.log(FeaturedEvents)
  const findEventHandler = (year, month) => {
    console.log(year, month)
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={FeaturedEvents} />
    </>
  )
}
export default HomePage