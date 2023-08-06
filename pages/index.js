import EventList from "@/components/events/event-list"
import { getFeaturedEvents } from "@/dummy-data"
// import { EventList } from '@/components/events/event-list

function HomePage() {

  const FeaturedEvents = getFeaturedEvents()
  console.log(FeaturedEvents)
  return (
    <div>
        <EventList items={FeaturedEvents} />
    </div>
  )
}
export default HomePage