import React, { useCallback, useMemo } from "react";

import { useLocation } from "react-router";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";

import InvoiceDocument from "./components/InvoiceDocument";
import InvoiceSummary from "./components/InvoiceSummary";
import GetInvoice from "./components/GetInvoice";
import useBookingContext from "../Cart/hooks/useBookingContext";

const BookingConfirmation = () => {
  const { state } = useLocation();

  const { checkInDate, selectedTour, TourPrices, personalDetails } =
    useBookingContext();

  const bookingData = useMemo(() => {
    return {
      date: state?.date || checkInDate,
      location: state?.location || selectedTour?.location || "",
      name: state?.name || selectedTour?.name || "",
      adults: state?.adults ?? personalDetails?.adults ?? 0,
      children: state?.children ?? personalDetails?.child ?? 0,
      tourGuide: state?.tourGuide ?? selectedTour?.guidePrice ?? 0,
      dinner: state?.dinner ?? selectedTour?.dinnerPrice ?? 0,
      tax: state?.tax ?? TourPrices?.Tax ?? 0,
      subTotal: state?.subTotal ?? TourPrices?.tourSubTotal ?? 0,
      total: state?.total ?? TourPrices?.tourTotal ?? 0,
      transport: state?.transport || { title: "", cost: 0 },
      restaurant: state?.restaurant || { title: "", cost: 0 },
      hotel: state?.hotel || { title: "", cost: 0 },
      showInvoiceButton: state?.showInvoiceButton ?? true,
    };
  }, [state, checkInDate, selectedTour, TourPrices, personalDetails]);

  const handleDownloadInvoice = useCallback(async () => {
    const blob = await pdf(<InvoiceDocument data={bookingData} />).toBlob();
    saveAs(blob, "invoice.pdf");
  }, [bookingData]);

  return (
    <div className="text-white py-4">
      <div className="container">
        <div className="row gx-5 align-items-start">
          <InvoiceSummary {...bookingData} selectedTour={selectedTour} />
          <GetInvoice handleDownloadInvoice={handleDownloadInvoice} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(BookingConfirmation);
