import { Map, type StyleSpecification } from "maplibre-gl";

import styleLight from "./styles/mapstyle.json";
import styleSatellite from "./styles/satellite.json";
import "maplibre-gl/dist/maplibre-gl.css";

import "./style.css";

const mapDiv = document.querySelector<HTMLDivElement>("#map")!;
const layerToggle = document.querySelector<HTMLButtonElement>("#layer-toggle")!;
const toggleImg = layerToggle.querySelector("img")!;

let currentStyle = "basic";

const map = new Map({
  container: mapDiv,
  style: styleLight as StyleSpecification,
  center: [10, 53], // starting position [lng, lat]
  zoom: 3,
  hash: true,
});

layerToggle.addEventListener("click", () => {
  currentStyle = currentStyle === "basic" ? "satellite" : "basic";

  // Update map style
  map.setStyle(
    currentStyle === "basic"
      ? (styleLight as StyleSpecification)
      : (styleSatellite as StyleSpecification),
  );

  // Update button content using public folder path
  toggleImg.src = `/${currentStyle === "basic" ? "satellite" : "basic"}.png`;
  toggleImg.alt = `Switch to ${
    currentStyle === "basic" ? "satellite" : "basic"
  }`;

  layerToggle.prepend(toggleImg);
});
