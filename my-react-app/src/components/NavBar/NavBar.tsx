import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

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

  return (
    <div className="nav-container">
      <div className="inner-nav">
        <Link to={ROUTES.HOME} className="logo-link">
          FlightTrack
        </Link>

        <div className="button-container">
          {navItems.map((item) => (
            <Link
              key={item.route}
              to={item.route}
              className={`nav-button ${
                activeRoute === item.route ? "active" : "inactive"
              }`}
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
