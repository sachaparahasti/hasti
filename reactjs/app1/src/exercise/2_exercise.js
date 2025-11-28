import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const match = (
  <div className="header1">
    <h1>T20 World Cup 2026 (Men)</h1>

    {/* Opening Match */}
    <h2>Opening Match</h2>
    <table border="1">
      <thead>
        <tr>
          <th>Date</th>
          <th>Match</th>
          <th>Venue</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10 Feb 2026</td>
          <td>India vs Sri Lanka</td>
          <td>Ahmedabad</td>
        </tr>
      </tbody>
    </table>

    {/* Group Stage */}
    <h2>Group Stage (Sample)</h2>
    <table border="1">
      <thead>
        <tr>
          <th>Date</th>
          <th>Match</th>
          <th>Venue</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>11 Feb 2026</td>
          <td>Pakistan vs South Africa</td>
          <td>Mumbai</td>
        </tr>
        <tr>
          <td>12 Feb 2026</td>
          <td>Australia vs New Zealand</td>
          <td>Bengaluru</td>
        </tr>
        <tr>
          <td>13 Feb 2026</td>
          <td>England vs West Indies</td>
          <td>Chennai</td>
        </tr>
        <tr>
          <td>14 Feb 2026</td>
          <td>Bangladesh vs Afghanistan</td>
          <td>Colombo</td>
        </tr>
        <tr>
          <td>15 Feb 2026</td>
          <td>India vs Bangladesh</td>
          <td>Delhi</td>
        </tr>
        <tr>
          <td>16 Feb 2026</td>
          <td>Sri Lanka vs Afghanistan</td>
          <td>Kandy</td>
        </tr>
        <tr>
          <td>17 Feb 2026</td>
          <td>Pakistan vs New Zealand</td>
          <td>Hyderabad</td>
        </tr>
        <tr>
          <td>18 Feb 2026</td>
          <td>Australia vs England</td>
          <td>Pune</td>
        </tr>
        <tr>
          <td>19 Feb 2026</td>
          <td>South Africa vs West Indies</td>
          <td>Jaipur</td>
        </tr>
        <tr>
          <td>20 Feb 2026</td>
          <td>India vs Pakistan</td>
          <td>Ahmedabad</td>
        </tr>
      </tbody>
    </table>

    {/* Super 8 */}
    <h2>Super 8 (Sample)</h2>
    <table border="1">
      <thead>
        <tr>
          <th>Date</th>
          <th>Match</th>
          <th>Venue</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>24 Feb 2026</td>
          <td>Super 8 - Match 1</td>
          <td>Mumbai</td>
        </tr>
        <tr>
          <td>25 Feb 2026</td>
          <td>Super 8 - Match 2</td>
          <td>Chennai</td>
        </tr>
        <tr>
          <td>26 Feb 2026</td>
          <td>Super 8 - Match 3</td>
          <td>Bengaluru</td>
        </tr>
        <tr>
          <td>27 Feb 2026</td>
          <td>Super 8 - Match 4</td>
          <td>Delhi</td>
        </tr>
        <tr>
          <td>28 Feb 2026</td>
          <td>Super 8 - Match 5</td>
          <td>Colombo</td>
        </tr>
        <tr>
          <td>01 Mar 2026</td>
          <td>Super 8 - Match 6</td>
          <td>Kandy</td>
        </tr>
      </tbody>
    </table>

    {/* Semi-Finals */}
    <h2>Semi-Finals</h2>
    <table border="1">
      <thead>
        <tr>
          <th>Date</th>
          <th>Match</th>
          <th>Venue</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>03 Mar 2026</td>
          <td>Semi-Final 1 (Super 8 - 1st vs 4th)</td>
          <td>Ahmedabad</td>
        </tr>
        <tr>
          <td>04 Mar 2026</td>
          <td>Semi-Final 2 (Super 8 - 2nd vs 3rd)</td>
          <td>Colombo</td>
        </tr>
      </tbody>
    </table>

    {/* Final */}
    <h2>Final</h2>
    <table border="1">
      <thead>
        <tr>
          <th>Date</th>
          <th>Match</th>
          <th>Venue</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>08 Mar 2026</td>
          <td>T20 World Cup 2026 Final</td>
          <td>Mumbai</td>
        </tr>
      </tbody>
    </table>
  </div>
);

root.render(match);
