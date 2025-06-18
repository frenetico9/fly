import React, { useEffect, useRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import L, { DivIconOptions, Map as LeafletMap, LayerGroup } from 'leaflet';
import 'leaflet-providers'; // Import to make tile providers available
import { AircraftData, ConflictData, AlertData, MapLayerKey } from '../types';
import { 
  FighterJetMapIcon, 
  ReconMapIcon, 
  DroneMapIcon, 
  TransportPlaneMapIcon,
  BombMapIcon,
  TargetMapIcon,
  SwordsMapIcon,
  PulseMapIcon
} from './icons/MapMarkerIcons';
import MapLegend from './MapLegend'; // Import the legend component

interface MapDisplayProps {
  aircraftData: AircraftData[];
  conflictData: ConflictData[];
  alertData: AlertData[];
  activeLayers: Record<MapLayerKey, boolean>;
}

const createLeafletIconFromReact = (reactElement: React.ReactElement, options: DivIconOptions = {}) => {
  const html = ReactDOMServer.renderToString(reactElement);
  return L.divIcon({
    html: html,
    className: '', 
    iconSize: [24, 24], 
    iconAnchor: [12, 12], 
    popupAnchor: [0, -12], 
    ...options,
  });
};


const MapDisplay: React.FC<MapDisplayProps> = ({ aircraftData, conflictData, alertData, activeLayers }) => {
  const mapRef = useRef<LeafletMap | null>(null);
  const aircraftLayerRef = useRef<LayerGroup>(L.layerGroup());
  const conflictsLayerRef = useRef<LayerGroup>(L.layerGroup());
  const alertsLayerRef = useRef<LayerGroup>(L.layerGroup());
  const legendControlRef = useRef<L.Control | null>(null);


  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([35, 35], 4);
      (L.tileLayer as any).provider('CartoDB.DarkMatter').addTo(mapRef.current);

      // Add Legend Control
      if (!legendControlRef.current) {
        const LegendControl = L.Control.extend({
            onAdd: function(map) {
                const div = L.DomUtil.create('div', 'info legend');
                const legendContent = ReactDOMServer.renderToString(<MapLegend />);
                div.innerHTML = legendContent;
                // Disable map interactions on the legend
                L.DomEvent.disableClickPropagation(div);
                L.DomEvent.disableScrollPropagation(div);
                return div;
            },
            onRemove: function(map) {
                // Nothing to do here
            }
        });
        legendControlRef.current = new LegendControl({ position: 'bottomright' });
        legendControlRef.current.addTo(mapRef.current);
      }
    }
    
    if (activeLayers[MapLayerKey.AIRCRAFT] && mapRef.current) aircraftLayerRef.current.addTo(mapRef.current);
    if (activeLayers[MapLayerKey.CONFLICTS] && mapRef.current) conflictsLayerRef.current.addTo(mapRef.current);
    if (activeLayers[MapLayerKey.ALERTS] && mapRef.current) alertsLayerRef.current.addTo(mapRef.current);

    return () => {
      if (legendControlRef.current && mapRef.current) {
        mapRef.current.removeControl(legendControlRef.current);
        legendControlRef.current = null;
      }
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  // Update aircraft layer
  useEffect(() => {
    const layer = aircraftLayerRef.current;
    layer.clearLayers();
    if (activeLayers[MapLayerKey.AIRCRAFT]) {
      aircraftData.forEach(ac => {
        let IconComponent;
        
        switch(ac.type) {
            case 'fighter': IconComponent = FighterJetMapIcon; break;
            case 'recon': IconComponent = ReconMapIcon; break;
            case 'drone': IconComponent = DroneMapIcon; break;
            case 'transport': IconComponent = TransportPlaneMapIcon; break;
            default: IconComponent = TransportPlaneMapIcon; 
        }

        let colorClass = 'text-gray-400'; 
        switch(ac.country.toLowerCase()) {
            case 'ucrânia': colorClass = 'text-sky-400'; break;
            case 'eua': colorClass = 'text-blue-500'; break;
            case 'irã': colorClass = 'text-lime-500'; break;
            case 'reino unido': colorClass = 'text-red-500'; break;
            case 'rússia': colorClass = 'text-rose-600'; break;
            case 'china': colorClass = 'text-yellow-400'; break;
            case 'índia': colorClass = 'text-orange-500'; break;
            case 'frança': colorClass = 'text-indigo-400'; break;
            case 'alemanha': colorClass = 'text-amber-500'; break;
            case 'turquia': colorClass = 'text-teal-400'; break;
            default: colorClass = 'text-gray-400';
        }

        const icon = createLeafletIconFromReact(
          <div style={{ transform: `rotate(${ac.heading-90}deg)`}}>
            <IconComponent className={`w-6 h-6 ${colorClass}`} />
          </div>
        );
        const popupContent = `
            <div class="w-56">
                <p class="text-sm mb-0.5"><strong class="text-blue-300 font-semibold">Modelo:</strong> ${ac.model}</p>
                <p class="text-xs mb-0.5"><strong class="text-gray-300">Tipo:</strong> <span class="capitalize">${ac.type}</span></p>
                <p class="text-xs mb-1.5"><strong class="text-gray-300">Origem:</strong> ${ac.country}</p>
                <hr class="border-gray-600 my-1.5">
                <ul class="text-xs space-y-0.5">
                    <li><strong>Altitude:</strong> ${ac.altitude.toLocaleString()} ft</li>
                    <li><strong>Velocidade:</strong> ${ac.speed.toLocaleString()} kts</li>
                    <li><strong>Proa:</strong> ${ac.heading}°</li>
                </ul>
            </div>`;
        L.marker([ac.lat, ac.lng], { icon }).bindPopup(popupContent).addTo(layer);
      });
      if (mapRef.current && !mapRef.current.hasLayer(layer)) {
        layer.addTo(mapRef.current);
      }
    } else {
      if (mapRef.current && mapRef.current.hasLayer(layer)) {
        mapRef.current.removeLayer(layer);
      }
    }
  }, [aircraftData, activeLayers[MapLayerKey.AIRCRAFT]]);

  // Update conflicts layer
  useEffect(() => {
    const layer = conflictsLayerRef.current;
    layer.clearLayers();
    if (activeLayers[MapLayerKey.CONFLICTS]) {
      conflictData.forEach(event => {
        let IconComponent;
        let colorClass = 'text-yellow-500';
        switch(event.type) {
           case 'airstrike': IconComponent = BombMapIcon; colorClass = 'text-red-500'; break;
           case 'artillery': IconComponent = TargetMapIcon; colorClass = 'text-orange-500'; break;
           case 'clash': IconComponent = SwordsMapIcon; colorClass = 'text-yellow-500'; break;
           default: IconComponent = SwordsMapIcon;
        }
        const icon = createLeafletIconFromReact(<IconComponent className={`w-5 h-5 ${colorClass}`} />, {iconSize: [20,20], iconAnchor: [10,10], popupAnchor: [0, -10]});
        const popupContent = `
            <div class="w-60">
                <p class="text-sm mb-0.5"><strong class="text-orange-300 font-semibold">Tipo de Evento:</strong> <span class="capitalize">${event.type.replace('-', ' ')}</span></p>
                <p class="text-xs mb-1.5"><strong class="text-gray-300">Localização:</strong> ${event.location}</p>
                <hr class="border-gray-600 my-1.5">
                <p class="text-xs mb-1"><strong class="text-gray-300">Detalhes:</strong></p>
                <p class="text-xs leading-relaxed mb-1.5">${event.details}</p>
                <p class="text-right text-xs text-gray-500 mt-1.5"><strong>Fonte:</strong> ${event.source}</p>
            </div>`;
        L.marker([event.lat, event.lng], { icon }).bindPopup(popupContent).addTo(layer);
      });
      if (mapRef.current && !mapRef.current.hasLayer(layer)) {
        layer.addTo(mapRef.current);
      }
    } else {
      if (mapRef.current && mapRef.current.hasLayer(layer)) {
        mapRef.current.removeLayer(layer);
      }
    }
  }, [conflictData, activeLayers[MapLayerKey.CONFLICTS]]);

  // Update alerts layer
  useEffect(() => {
    const layer = alertsLayerRef.current;
    layer.clearLayers();
    if (activeLayers[MapLayerKey.ALERTS]) {
      alertData.forEach(alert => {
        const icon = createLeafletIconFromReact(<PulseMapIcon />, {className: 'pulse-icon-wrapper', iconSize: [16,16], iconAnchor: [8,8], popupAnchor: [0, -8]});
        const popupContent = `
            <div class="w-60">
                <p class="text-sm mb-0.5"><strong class="text-red-400 font-semibold">Tipo de Alerta:</strong> <span class="capitalize">${alert.type.replace('-', ' ')}</span></p>
                <p class="text-xs mb-1.5"><strong class="text-gray-300">Localização:</strong> ${alert.location}</p>
                <hr class="border-gray-600 my-1.5">
                <p class="text-xs mb-1"><strong class="text-gray-300">Detalhes:</strong></p>
                <p class="text-xs leading-relaxed mb-1.5">${alert.details}</p>
                <p class="text-right font-bold text-base mt-1.5"><strong class="text-red-500">SEVERIDADE:</strong> ${alert.severity.toUpperCase()}</p>
            </div>`;
        L.marker([alert.lat, alert.lng], { icon, zIndexOffset: 1000 }).bindPopup(popupContent).addTo(layer);
      });
      if (mapRef.current && !mapRef.current.hasLayer(layer)) {
        layer.addTo(mapRef.current);
      }
    } else {
      if (mapRef.current && mapRef.current.hasLayer(layer)) {
        mapRef.current.removeLayer(layer);
      }
    }
  }, [alertData, activeLayers[MapLayerKey.ALERTS]]);


  return <div id="map-container" className="flex-1 h-screen"><div id="map"></div></div>;
};

export default MapDisplay;