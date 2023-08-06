import EventList from "@/components/events/event-list"
import { getFilteredEvents } from "@/dummy-data"
import { useRouter } from "next/router"
const FilteredEventPage = () => {
    const router = useRouter()
    // console.log(router.query)
    const filterUrl = router.query.slug
    const filteredYear = filterUrl?.[0]
    const filteredMonth = filterUrl?.[1]
    const numYear = +filteredYear
    const numMonth = +filteredMonth
    const filterData = getFilteredEvents({
        year: numYear,
        month: numMonth
    })
    console.log(filterData)

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth > 12 || numMonth < 1) {
        return (<p>Invalid Filter Please adjust your value</p>)
    }
    if (!filterData) {
        return (<p className="center">Loading...</p>)
    }
    if(filterData.length === 0){
        return(<p>No Any Event Find</p>)
    }
    return (
        <div>
            <EventList items={filterData} />
        </div>
    )
}
export default FilteredEventPage