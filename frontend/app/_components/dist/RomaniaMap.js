"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var mapbox_gl_1 = require("mapbox-gl");
mapbox_gl_1["default"].accessToken = 'pk.eyJ1Ijoicm9oaXRpaWMiLCJhIjoiY2t2eGkyanJ3Y2c2azMwczdtOGppa3N5ZyJ9.G4VtowYp1GEpWxvh3nRFVQ';
var RomaniaMap = function () {
    var mapContainer = react_1.useRef(null);
    var map = react_1.useRef(null);
    var _a = react_1.useState(77.378), lng = _a[0], setLng = _a[1];
    var _b = react_1.useState(28.624), lat = _b[0], setLat = _b[1];
    var _c = react_1.useState(12), zoom = _c[0], setZoom = _c[1];
    var start = [lng, lat];
    react_1.useEffect(function () {
        if (map.current)
            return; // initialize map only once
        map.current = new mapbox_gl_1["default"].Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        map.current.on('move', function () {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
        route();
    }, [map.current]);
    var locate = function () {
        map.current.addControl(new mapbox_gl_1["default"].GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            style: {
                right: 10,
                top: 10
            },
            position: 'bottom-left',
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
        }));
    };
    var route = function () {
        locate();
        map.current.on('load', function () {
            // make an initial directions request that
            // starts and ends at the same location
            // getRoute(start);
            // Add starting point to the map
            map.current.addLayer({
                id: 'point',
                type: 'circle',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: [
                            {
                                type: 'Feature',
                                properties: {},
                                geometry: {
                                    type: 'Point',
                                    coordinates: start
                                }
                            }
                        ]
                    }
                },
                paint: {
                    'circle-radius': 10,
                    'circle-color': '#3887be'
                }
            });
            map.current.on('click', function (event) {
                var coords = Object.keys(event.lngLat).map(function (key) { return event.lngLat[key]; });
                var end = {
                    type: 'FeatureCollection',
                    features: [
                        {
                            type: 'Feature',
                            properties: {},
                            geometry: {
                                type: 'Point',
                                coordinates: coords
                            }
                        }
                    ]
                };
                if (map.current.getLayer('end')) {
                    map.current.getSource('end').setData(end);
                }
                else {
                    map.current.addLayer({
                        id: 'end',
                        type: 'circle',
                        source: {
                            type: 'geojson',
                            data: {
                                type: 'FeatureCollection',
                                features: [
                                    {
                                        type: 'Feature',
                                        properties: {},
                                        geometry: {
                                            type: 'Point',
                                            coordinates: coords
                                        }
                                    }
                                ]
                            }
                        },
                        paint: {
                            'circle-radius': 10,
                            'circle-color': '#f30'
                        }
                    });
                }
                getRoute(coords);
            });
        });
    };
    function getRoute(end) {
        return __awaiter(this, void 0, void 0, function () {
            var query, json, data, route, geojson, instructions, steps, tripInstructions, _i, steps_1, step;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://api.mapbox.com/directions/v5/mapbox/cycling/" + start[0] + "," + start[1] + ";" + end[0] + "," + end[1] + "?steps=true&geometries=geojson&access_token=" + mapbox_gl_1["default"].accessToken, { method: 'GET' })];
                    case 1:
                        query = _a.sent();
                        return [4 /*yield*/, query.json()];
                    case 2:
                        json = _a.sent();
                        data = json.routes[0];
                        route = data.geometry.coordinates;
                        geojson = {
                            type: 'Feature',
                            properties: {},
                            geometry: {
                                type: 'LineString',
                                coordinates: route
                            }
                        };
                        // if the route already exists on the map, we'll reset it using setData
                        if (map.current.getSource('route')) {
                            map.current.getSource('route').setData(geojson);
                        }
                        // otherwise, we'll make a new request
                        else {
                            map.current.addLayer({
                                id: 'route',
                                type: 'line',
                                source: {
                                    type: 'geojson',
                                    data: geojson
                                },
                                layout: {
                                    'line-join': 'round',
                                    'line-cap': 'round'
                                },
                                paint: {
                                    'line-color': '#3887be',
                                    'line-width': 5,
                                    'line-opacity': 0.75
                                }
                            });
                        }
                        instructions = document.getElementById('instructions');
                        steps = data.legs[0].steps;
                        tripInstructions = '';
                        for (_i = 0, steps_1 = steps; _i < steps_1.length; _i++) {
                            step = steps_1[_i];
                            tripInstructions += "<li>" + step.maneuver.instruction + "</li>";
                        }
                        instructions.innerHTML = "<p><strong>Trip duration: " + Math.floor(data.duration / 60) + " min \uD83D\uDEB4 </strong></p><ol>" + tripInstructions + "</ol>";
                        return [2 /*return*/];
                }
            });
        });
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { ref: mapContainer, className: "map-container" }),
        react_1["default"].createElement("div", { id: "instructions", className: "instructions" })));
};
exports["default"] = RomaniaMap;
