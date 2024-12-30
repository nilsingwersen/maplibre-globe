import { Map, type StyleSpecification } from "maplibre-gl";

import style from "./styles/mapstyle.json";
import "maplibre-gl/dist/maplibre-gl.css";

import "./style.css";

const mapDiv = document.querySelector<HTMLDivElement>("#map")!;

const map = new Map({
  container: mapDiv,
  style: style as StyleSpecification,
  center: [10, 53], // starting position [lng, lat]
  zoom: 3,
  hash: true,
});
