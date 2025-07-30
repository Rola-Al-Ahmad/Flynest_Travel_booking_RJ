import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { toast } from "react-toastify";

export const BookingContext = createContext();

const stored = localStorage.getItem("Flynest-bookingInfo");

const storedTour = localStorage.getItem("Flynest-Tour");

const initialState = {
  bookingInfo: stored ? JSON.parse(stored) : [],
  Tour: storedTour ? JSON.parse(storedTour) : {},
};

export const BookingProvider = ({ children }) => {
  const [bookingInfo, setBookingInfo] = useState(initialState.bookingInfo);

  const [tourData, setTourData] = useState(initialState.Tour);

  useEffect(() => {
    localStorage.setItem("Flynest-Tour", JSON.stringify(tourData));
  }, [tourData]);

  useEffect(() => {
    localStorage.setItem("Flynest-bookingInfo", JSON.stringify(bookingInfo));
  }, [bookingInfo]);

  const findBookingById = useCallback(
    (id) => {
      return bookingInfo.find((item) => item.tourID === id);
    },
    [bookingInfo]
  );

  const findSelectedTourInBooking = useCallback(
    (id, type) => {
      return bookingInfo
        .map((item) => item.selectedTour)
        .find((item) => item.id === id && item.type === type);
    },
    [bookingInfo]
  );

  // const removeBookingItem = useCallback((id) => {
  //   setBookingInfo((prev) => prev.filter((item) => item.id !== id));
  // }, []);

  const addBookingItem = useCallback((item) => {
    setBookingInfo((prev) => [...prev, ...item]);
  }, []);

  const updateBookingData = useCallback((newData, id) => {
    setBookingInfo((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...newData } : item))
    );
  }, []);

  const onSubmit = useCallback(
    (data, navigate) => {
      const exists = findBookingById(data.tourID);
      if (exists) {
        toast.info(
          `This booking already exists: ${exists.selectedTour.name} (Check-in: ${exists.checkInDate})`,
          { autoClose: 2500 }
        );
        // setTourData({});
        return;
      }
      setBookingInfo((prev) => [...prev, data]);
      setTourData({});
      toast.success("Booking added successfully", { autoClose: 2500 });
      if (navigate) navigate("/cart");
    },
    [findBookingById]
  );

  const TourPrices = useMemo(() => {
    const { selectedTour = {} } = tourData;
    const { price = 0, guidePrice = 0, dinnerPrice = 0 } = selectedTour;

    const tourSubTotal = price + guidePrice + dinnerPrice;
    const Tax = Math.round(tourSubTotal * 0.05);
    const tourTotal = tourSubTotal + Tax;

    return { tourSubTotal, Tax, tourTotal };
  }, [tourData]);

  const handleSetTour = useCallback(
    ({
      tourID,
      selectedTour,
      checkInDate,
      checkOutDate,
      personalDetails,
    } = {}) => {
      setTourData((prev) => ({
        ...prev,
        ...(tourID && { tourID }),
        ...(selectedTour && { selectedTour }),
        ...(checkInDate && { checkInDate }),
        ...(checkOutDate && { checkOutDate }),
        ...(personalDetails && { personalDetails }),
      }));
    },
    []
  );

  return (
    <BookingContext.Provider
      value={{
        bookingInfo,
        updateBookingData,
        addBookingItem,
        onSubmit,
        handleSetTour,
        TourPrices,
        ...tourData,
        tourData,
        findSelectedTourInBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
