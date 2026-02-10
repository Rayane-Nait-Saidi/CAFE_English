import { Clock } from "lucide-react";
import "./OpeningHours.css";
const OpeningHours = () => {
  const hours = [
    { day: "Saturday - Thursday", time: "8:00 AM - 10:00 PM" },
    { day: "Friday", time: "2:00 PM - 10:00 PM" },
  ];
  return (
    <section className="opening-hours">
      <div className="opening-hours__container">
        <div className="opening-hours__card">
          <div className="opening-hours__header">
            <Clock className="opening-hours__icon" />
            <h3 className="opening-hours__title">Opening Hours</h3>
          </div>
          <div className="opening-hours__list">
            {hours.map((schedule) => (
              <div key={schedule.day} className="opening-hours__row">
                <span className="opening-hours__day">{schedule.day}</span>
                <span className="opening-hours__time">{schedule.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default OpeningHours;