import { BookingIntro } from "./contents/BookingIntro";
import { BookingOption } from "./contents/BookingOption";

export const Booking = () => {
  return (
    <div className="Booking">
      <BookingIntro></BookingIntro>
      <BookingOption></BookingOption>
    </div>
  );
};
