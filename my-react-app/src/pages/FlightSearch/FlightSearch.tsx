import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FlightSearch.css";

interface FormErrors {
  flightNumber?: boolean;
  date?: boolean;
  arrivalAirport?: boolean;
  driveTime?: boolean;
}

export default function FlightSearch() {
  const navigate = useNavigate();

  const [flightNumber, setFlightNumber] = useState("");
  const [date, setDate] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [driveTime, setDriveTime] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};

    if (!flightNumber) newErrors.flightNumber = true;
    if (!date) newErrors.date = true;
    if (!arrivalAirport) newErrors.arrivalAirport = true;
    if (!driveTime) newErrors.driveTime = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const flightId = flightNumber.replace(/\s+/g, "").toUpperCase();
    navigate(`/flight/${flightId}`);
  };

  return (
    <div className="search-card">
      <h2 className="search-title">Enter flight details</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Flight number (e.g. DL 451)"
            value={flightNumber}
            onChange={(e) => {
              setFlightNumber(e.target.value);
              if (errors.flightNumber)
                setErrors({ ...errors, flightNumber: false });
            }}
            className={`search-input ${errors.flightNumber ? "error" : ""}`}
          />
          {errors.flightNumber && (
            <span className="error-text">Flight number is required</span>
          )}
        </div>

        <div className="input-group">
          <input
            type="text"
            placeholder="Date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              if (errors.date) setErrors({ ...errors, date: false });
            }}
            className={`search-input ${errors.date ? "error" : ""}`}
          />
          {errors.date && <span className="error-text">Date is required</span>}
        </div>

        <div className="input-group">
          <input
            type="text"
            placeholder="Arrival airport"
            value={arrivalAirport}
            onChange={(e) => {
              setArrivalAirport(e.target.value);
              if (errors.arrivalAirport)
                setErrors({ ...errors, arrivalAirport: false });
            }}
            className={`search-input ${errors.arrivalAirport ? "error" : ""}`}
          />
          {errors.arrivalAirport && (
            <span className="error-text">Arrival airport is required</span>
          )}
        </div>

        <div className="input-group">
          <input
            type="number"
            placeholder="Drive time (min)"
            value={driveTime}
            onChange={(e) => {
              setDriveTime(e.target.value);
              if (errors.driveTime) setErrors({ ...errors, driveTime: false });
            }}
            className={`search-input ${errors.driveTime ? "error" : ""}`}
          />
          {errors.driveTime && (
            <span className="error-text">Drive time is required</span>
          )}
        </div>

        <button type="submit" className="submit-button">
          Track flight
        </button>
      </form>
    </div>
  );
}
