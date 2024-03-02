// Import Bootstrap Css
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import BookingResponse from "./screens/BookingResponse";
import LandingPage from "./screens/LandingPage";
import NoRouteError from "./screens/NoRouteError";

function App() {
  const [
    methodToScrollIntoReservationSectView,
    setMethodToScrollIntoReservationSectView,
  ] = useState(null);
  const appTitle = `PLATO`;
  window.scrollTo({
    top: "0",
    behaviour: "smooth",
  });
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                setScrollMethod={setMethodToScrollIntoReservationSectView}
              />
            }
          />
          <Route
            path="/seatsbooking"
            element={
              <BookingResponse
                appTitle={appTitle}
                scrollMethod={methodToScrollIntoReservationSectView}
              />
            }
          />
          <Route
            path="*"
            element={
              // <BookingResponse
              //   appTitle={appTitle}
              //   scrollMethod={methodToScrollIntoReservationSectView}
              // />
              <NoRouteError />
            }
          />
        </Routes>
      </BrowserRouter>
      {/* */}
    </div>
  );
}

export default App;
