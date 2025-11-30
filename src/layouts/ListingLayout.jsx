/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";

import "../features/ListingPage/ListingPage.css";

import { Outlet, useLocation } from "react-router";

import FilterSidebar from "../features/ListingPage/components/FilterSidebar";

import toursData from "../Data/Tours";
import hotelsData from "../Data/Hotel";
import transportsData from "../Data/Transport";
import resturantsData from "../Data/Restaurant";
import ListingPage from "../features/ListingPage/ListingPage";

const ListingLayout = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [title]);

  const type = location.pathname.split("/").pop();

  const data = useMemo(() => {
    switch (type) {
      case "tours":
        return toursData;
      case "hotels":
        return hotelsData;
      case "transports":
        return transportsData;
      case "restaurants":
        return resturantsData;
      default:
        return [];
    }
  }, [type]);

  return (
    <div className="main-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <FilterSidebar type={type} />
          </div>
          <div className="col-lg-9">
            {/* <Outlet context={{ data }} /> */}
            <ListingPage data={data} type={type} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingLayout;
