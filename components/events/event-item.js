
import Button from '../ui/button'
import classes from './event-item.module.css'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'

const EventItem = (props) => {
    console.log(props, "adfadsf")
    const { title, image, date, location, id } = props

    const formatedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const formatedAddress = location.replace(', ', '/n')
    return (
        <li className={classes.item}>
            <img src={image} alt='' />
            <div className={classes.content} >
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{formatedDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formatedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={`/event/${id}`}>
                        <span>Explore Event</span>
                        <span><ArrowRightIcon /></span>
                    </Button>
                </div>
            </div>

        </li>
    )
}
export default EventItem