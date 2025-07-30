import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";

function PageBreadcrumb({ children }) {
  return <div className="breadcrumb-header my-4">{children}</div>;
}

const titleMap = {
  "/cart/checkout": { icon: "📃", label: "Checkout Details" },
  "/cart/payment": { icon: "💳", label: "Payment Details" },
  "/cart/bookingSummary": { icon: "🏢", label: "Booking Summary" },
};

const breadcrumbMap = {
  "/cart/checkout": (
    <>
      <Link to="/">Home</Link> → <Link to="/cart">Cart</Link> → Checkout
    </>
  ),
  "/cart/payment": (
    <>
      <Link to="/">Home</Link> → <Link to="/cart">Cart</Link> →{" "}
      <Link to="/checkout">Checkout</Link> → Payment
    </>
  ),
  "/cart/bookingSummary": (
    <>
      <Link to="/">Home</Link> → <Link to="/cart">Cart</Link> → Booking Summary
    </>
  ),
};

PageBreadcrumb.Title = React.memo(function Title({ location }) {
  const title = useMemo(() => {
    const { icon, label } = titleMap[location.pathname] || {
      icon: "🗺️",
      label: "Tour Cart Summary",
    };
    return (
      <h2 className="breadcrumb-title">
        <i>{icon}</i> {label}
      </h2>
    );
  }, [location.pathname]);

  return title;
});

PageBreadcrumb.Breadcrumb = React.memo(function Breadcrumb({ location }) {
  const breadcrumb = useMemo(() => {
    return (
      <p className="page-breadcrumb">
        {breadcrumbMap[location.pathname] || (
          <>
            <Link to="/">Home</Link> → <Link to="/cart">Cart</Link>
          </>
        )}
      </p>
    );
  }, [location.pathname]);

  return breadcrumb;
});

PageBreadcrumb.Steps = React.memo(function Steps({ location }) {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const steps = useMemo(
    () => [
      { id: 1, link: "" },
      { id: 2, link: "checkout" },
      { id: 3, link: "payment" },
      { id: 4, link: "bookingSummary" },
    ],
    []
  );

  const handleStep = useCallback(
    (step) => {
      setStep(step.id);
      navigate(`/cart/${step.link}`);
    },
    [navigate]
  );

  useEffect(() => {
    const pathStepMap = {
      "/cart/checkout": 2,
      "/cart/payment": 3,
      "/cart/bookingSummary": 4,
    };
    setStep(pathStepMap[location.pathname] || 1);
  }, [location.pathname]);
  return (
    <div className={`d-flex justify-content-center gap-2 breadcrumb-steps`}>
      {steps.map((s) => (
        <span
          key={s.id}
          className={`step ${
            s.id < step ? "completed" : s.id === step ? "current" : ""
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => handleStep(s)}
        >
          {s.id === 4 ? "✓" : s.id}
        </span>
      ))}
    </div>
  );
});

export default PageBreadcrumb;
