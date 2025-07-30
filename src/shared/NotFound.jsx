import React, { useMemo, useCallback } from "react";
import { Plane, AlertTriangle, Wifi, Server, FileX } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import "animate.css";

const NotFound = ({ errorType = "404", customMessage, customTitle }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const errorConfigs = useMemo(
    () => ({
      404: {
        icon: Plane,
        title: "Oops! Page Not Found",
        message:
          "It looks like the page you're trying to visit flew off somewhere. Don't worry—we'll guide you back to a better path.",
        buttonText: "Back to Home 🛫",
        buttonLink: "/",
      },
      403: {
        icon: AlertTriangle,
        title: "Access Denied",
        message:
          "Sorry, you don't have permission to access this page. Please contact support if you believe this is an error.",
        buttonText: "Go Back",
        buttonLink: -1,
      },
      500: {
        icon: Server,
        title: "Server Error",
        message:
          "Something went wrong on our end. Our team has been notified and is working to fix the issue. Please try again later.",
        buttonText: "Try Again",
        buttonLink: location.pathname,
      },
      network: {
        icon: Wifi,
        title: "Network Error",
        message:
          "It seems you've lost connection to the internet. Please check your network connection and try again.",
        buttonText: "Retry",
        buttonLink: location.pathname,
      },
      maintenance: {
        icon: Server,
        title: "Under Maintenance",
        message:
          "We're currently performing some maintenance to improve your experience. Please check back in a few minutes.",
        buttonText: "Check Status",
        buttonLink: "/",
      },
      file: {
        icon: FileX,
        title: "File Not Found",
        message:
          "The file or resource you're looking for doesn't exist or has been moved. Please check the URL and try again.",
        buttonText: "Back to Home",
        buttonLink: "/",
      },
    }),
    [location.pathname]
  );

  const config = useMemo(
    () => errorConfigs[errorType] || errorConfigs["404"],
    [errorType, errorConfigs]
  );

  const IconComponent = config.icon;

  const title = useMemo(
    () => customTitle || config.title,
    [customTitle, config.title]
  );
  const message = useMemo(
    () => customMessage || config.message,
    [customMessage, config.message]
  );

  const handleButtonClick = useCallback(() => {
    if (config.buttonLink === -1) {
      navigate(-1);
    }
  }, [config.buttonLink, navigate]);

  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center vh-100 bg-section-light text-center px-3"
      role="alert"
      aria-label={`${errorType} Error Page`}
    >
      <div
        className="animate__animated animate__fadeIn border rounded-4 shadow-sm p-4 w-100"
        style={{
          maxWidth: "600px",
          backgroundColor: "var(--border-color) !important",
          borderColor: "var(--border-color) !important",
        }}
      >
        <IconComponent
          size={64}
          className="text-secondary mb-4 animate__animated animate__fadeInDown"
          aria-hidden="true"
        />

        <h1
          className="display-1 fw-bold text-white kaushan-font mb-2"
          style={{ fontFamily: "var(--kaushan-font)" }}
        >
          {errorType.toUpperCase()}
        </h1>

        <h2
          className="fw-semibold text-white mb-3"
          style={{ fontFamily: "var(--lora-font)" }}
        >
          {title}
        </h2>

        <p
          className="mx-auto mb-4"
          style={{
            maxWidth: "500px",
            color: "var(--primary-para)",
            fontFamily: "var(--lora-font)",
          }}
        >
          {message}
        </p>

        {config.buttonLink === -1 ? (
          <button
            onClick={handleButtonClick}
            className="btn btn-secondary back-to-home px-4 py-2 rounded-pill"
            style={{ fontFamily: "var(--lora-font)" }}
          >
            {config.buttonText}
          </button>
        ) : (
          <Link
            to={config.buttonLink}
            className="btn btn-secondary back-to-home px-4 py-2 rounded-pill"
            style={{ fontFamily: "var(--lora-font)" }}
          >
            {config.buttonText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default React.memo(NotFound);
