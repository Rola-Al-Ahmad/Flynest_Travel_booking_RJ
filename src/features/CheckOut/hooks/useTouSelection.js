import { useEffect, useReducer, useCallback, useMemo } from "react";
import useCartContext from "../../Cart/hooks/useCartContext";
import useBookingContext from "../../Cart/hooks/useBookingContext";

const initialState = (cartItems, Tour) => ({
    checkInDate: Tour.checkInDate || new Date().toISOString().split("T")[0],
    checkOutDate: Tour.checkOutDate || new Date().toISOString().split("T")[0],
    selectedTour: Tour.selectedTour || cartItems[0] || null,
});

function reducer(state, action) {
    switch (action.type) {
        case "SET_CHECKIN_DATE":
            return { ...state, checkInDate: action.payload };
        case "SET_CHECKOUT_DATE":
            return { ...state, checkOutDate: action.payload };
        case "SET_SELECTED_TOUR":
            return { ...state, selectedTour: action.payload };
        default:
            return state;
    }
}

export const useTourSelection = () => {
    const { cartItems } = useCartContext();
    const { handleSetTour, checkInDate, checkOutDate, selectedTour } = useBookingContext();
    const Tour = useMemo(() => ({ checkInDate, checkOutDate, selectedTour }),
        [checkInDate, checkOutDate, selectedTour]);

    const [state, dispatch] = useReducer(
        reducer,
        cartItems,
        (items) => initialState(items, Tour)
    );

    // const { tourID } = state;

    // const handleSetID = useCallback(() => {
    //     dispatch({ type: "SET_TOUR_ID", payload: `${selectedTour?.id}-${checkInDate}-${checkOutDate}` });
    //     handleSetTour({ tourID: `${selectedTour?.id}-${checkInDate}-${checkOutDate}` });
    // }, [checkInDate, checkOutDate, selectedTour, handleSetTour]);

    // Generic update for date fields
    const handleDateChange = useCallback(
        (type) => (e) => {
            const value = e.target.value;
            dispatch({ type, payload: value });
            // handleSetID();
            handleSetTour({ tourID: `${selectedTour?.id}-${selectedTour?.name}-${checkInDate}-${checkOutDate}`, [type === "SET_CHECKIN_DATE" ? "checkInDate" : "checkOutDate"]: value });
            // handleSetTour({ tourID: `${selectedTour.id}-${checkInDate}-${checkOutDate}` });
        },
        [handleSetTour, checkInDate, checkOutDate, selectedTour]
    );

    const checkInDateOnChange = handleDateChange("SET_CHECKIN_DATE");
    const checkOutDateOnChange = handleDateChange("SET_CHECKOUT_DATE");

    // Tour selection
    const selectedTourOnChange = useCallback(
        (e) => {
            const value = e.target.value;
            const id = parseInt(value.split("-")[0]);
            const type = value.split("-")[1];
            const tour = cartItems.find((item) => item.id === id && item.type === type);
            dispatch({ type: "SET_SELECTED_TOUR", payload: tour });
            // handleSetID();
            handleSetTour({ tourID: `${selectedTour?.id}-${selectedTour?.name}-${checkInDate}-${checkOutDate}`, selectedTour: tour });
            // handleSetTour({ tourID: `${selectedTour?.id}-${checkInDate}-${checkOutDate}` });
        },
        [cartItems, handleSetTour, checkInDate, checkOutDate, selectedTour]
    );


    // Sync once on mount
    useEffect(() => {
        handleSetTour({
            tourID: `${state.selectedTour.id}-${selectedTour?.name}-${state.checkInDate}-${state.checkOutDate}`,
            selectedTour: state.selectedTour,
            checkInDate: state.checkInDate,
            checkOutDate: state.checkOutDate,
            personalDetails: state.personalDetails,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        handleSetTour({
            tourID: `${state.selectedTour.id}-${selectedTour?.name}-${state.checkInDate}-${state.checkOutDate}`
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    // Memoize return object to avoid re-creating it unnecessarily
    return useMemo(() => ({
        checkInDate: state.checkInDate,
        checkOutDate: state.checkOutDate,
        selectedTour: state.selectedTour,
        selectedTourOnChange,
        checkInDateOnChange,
        checkOutDateOnChange,
    }), [
        state,
        selectedTourOnChange,
        checkInDateOnChange,
        checkOutDateOnChange,
    ]);
};
