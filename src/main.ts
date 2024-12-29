import { Map, type StyleSpecification } from "maplibre-gl";

import style from "./styles/mapstyle.json";

import "./style.css";

const mapDiv = document.querySelector<HTMLDivElement>("#map")!;

const map = new Map({
  container: mapDiv,
  style: style as StyleSpecification,
  center: [10, 53], // starting position [lng, lat]
  zoom: 3,
  hash: true,
  attributionControl: false,
});

map.on("style.load", () => {
  map.setProjection({
    type: "globe", // Set projection to globe
  });
});
