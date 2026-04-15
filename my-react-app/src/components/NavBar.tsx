import React from "react";
import { Link, useLocation } from "react-router-dom";

const ROUTES = {
  HOME: "/",
  MY_FLIGHTS: "/my-flights",
  MY_PICKUPS: "/my-pickups",
  GATE_TIMER: "/gate-timer",
} as const;

type RouteType = (typeof ROUTES)[keyof typeof ROUTES];

interface NavItem {
  label: string;
  route: RouteType;
}

const navItems: NavItem[] = [
  { label: "Find current flight", route: ROUTES.HOME },
  { label: "My flights", route: ROUTES.MY_FLIGHTS },
  { label: "My pickups", route: ROUTES.MY_PICKUPS },
  { label: "Track gate distances", route: ROUTES.GATE_TIMER },
];

const FlightTrackNavBar: React.FC = () => {
  const location = useLocation();
  const activeRoute = location.pathname;

  const containerStyle: React.CSSProperties = {
    backgroundColor: "#e6f2ff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    fontFamily: "sans-serif",
    marginTop: "20px",
    marginBottom: "20px",
  };

  const innerNavStyle: React.CSSProperties = {
    backgroundColor: "white",
    padding: "10px 20px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #ddd",
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    gap: "15px",
  };

  const baseButtonStyle: React.CSSProperties = {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.2s ease",
    fontWeight: "normal",
    color: "#333",
    textDecoration: "none",
    display: "inline-block",
  };

  const activeButtonStyle: React.CSSProperties = {
    ...baseButtonStyle,
    backgroundColor: "#fff",
    borderColor: "#3a7bd5",
    fontWeight: "bold",
    boxShadow: "0 2px 4px rgba(58, 123, 213, 0.2)",
  };

  const inactiveButtonStyle: React.CSSProperties = {
    ...baseButtonStyle,
    backgroundColor: "#f9f9f9",
  };

  return (
    <div style={containerStyle}>
      <div style={innerNavStyle}>
        <Link
          to={ROUTES.HOME}
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            color: "#333",
            textDecoration: "none",
          }}
        >
          FlightTrack
        </Link>

        <div style={buttonContainerStyle}>
          {navItems.map((item) => (
            <Link
              key={item.route}
              to={item.route}
              style={
                activeRoute === item.route
                  ? activeButtonStyle
                  : inactiveButtonStyle
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightTrackNavBar;
