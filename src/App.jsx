import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [count, setCount] = useState(0);
  const data = {
    drones: [
      { id: "asdasad", loc: [77.15136491349341, 28.584226093734458] },
      { id: "asascfd", loc: [77.15246651186004, 28.583581205256507] },
      { id: "asdasdf", loc: [77.15377210992267, 28.583939477121277] },
      { id: "vdfbrff", loc: [77.1531601108307, 28.58347372345939] },
    ],
    gsd: 0.00001,
    hatchAngle: 90,
    th: 200000,
    geojson: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            coordinates: [
              [
                [77.15181371282802, 28.58365285972745],
                [77.15340491046663, 28.58365285972745],
                [77.15340491046663, 28.58605325627731],
                [77.15181371282802, 28.58605325627731],
                [77.15181371282802, 28.58365285972745],
              ],
            ],
            type: "Polygon",
          },
        },
      ],
    },
  };
  console.log(JSON.stringify(data, null, 2));
  useEffect(() => {
    axios
      .post("http://localhost:9898/api/v3/multi_drone", data)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
