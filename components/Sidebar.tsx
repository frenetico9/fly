
import React from 'react';
import { NewsItem, MapLayerKey, MapLayerToggle } from '../types';
import { GlobeIcon } from './icons/GlobeIcon';
import { MilitaryAircraftIcon } from './icons/MilitaryAircraftIcon';
import { ConflictZoneIcon } from './icons/ConflictZoneIcon';
import { CriticalAlertIcon } from './icons/CriticalAlertIcon';

interface SidebarProps {
  newsItems: NewsItem[];
  activeLayers: Record<MapLayerKey, boolean>;
  onToggleLayer: (layerKey: MapLayerKey) => void;
}

const layerTogglesConfig: MapLayerToggle[] = [
  { id: MapLayerKey.AIRCRAFT, label: 'Aeronaves Militares', icon: MilitaryAircraftIcon, colorClass: 'blue' },
  { id: MapLayerKey.CONFLICTS, label: 'Zonas de Conflito', icon: ConflictZoneIcon, colorClass: 'orange' },
  { id: MapLayerKey.ALERTS, label: 'Alertas Críticos', icon: CriticalAlertIcon, colorClass: 'red' },
];


const Sidebar: React.FC<SidebarProps> = ({ newsItems, activeLayers, onToggleLayer }) => {
  return (
    <aside className="w-full md:w-96 h-screen bg-gray-900/80 backdrop-blur-sm z-[1000] border-r border-gray-700 flex flex-col p-4 shadow-2xl absolute md:relative">
      <div className="flex items-center mb-4 pb-4 border-b border-gray-700">
        <GlobeIcon className="text-blue-400 mr-3" />
        <h1 className="text-xl font-bold text-white">Radar Global</h1>
      </div>
      
      <div className="flex-grow overflow-y-auto">
        {/* Map Layers Toggle */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 text-blue-300">Camadas do Mapa</h2>
          <div className="space-y-3">
            {layerTogglesConfig.map((toggle) => {
              const IconComponent = toggle.icon;
              return (
                <label key={toggle.id} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors">
                  <span className="flex items-center">
                    <IconComponent className={`w-5 h-5 mr-3 text-${toggle.colorClass}-400`} />
                    {toggle.label}
                  </span>
                  <input 
                    type="checkbox" 
                    id={`toggle-${toggle.id}`}
                    checked={activeLayers[toggle.id]}
                    onChange={() => onToggleLayer(toggle.id)}
                    className={`form-checkbox h-5 w-5 bg-gray-700 border-gray-600 text-${toggle.colorClass}-500 rounded focus:ring-${toggle.colorClass}-500`} 
                  />
                </label>
              );
            })}
          </div>
        </div>

        {/* Live News Feed */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-blue-300">Feed de Eventos</h2>
          <div id="news-feed" className="space-y-3 pr-2 h-[calc(100vh-420px)] md:h-[calc(100vh-380px)] overflow-y-auto"> {/* Adjusted height */}
            {newsItems.length > 0 ? newsItems.map((item, index) => (
              <div key={index} className="p-3 bg-gray-800/50 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-sm text-white">{item.title}</p>
                <div className="flex justify-between items-center mt-2 text-xs text-gray-400">
                  <span>{item.source}</span>
                  <span>{item.timestamp}</span>
                </div>
              </div>
            )) : (
              <p className="text-gray-500 text-sm">Nenhum evento no feed.</p>
            )}
          </div>
        </div>
      </div>
      
      <div className="text-xs text-gray-500 mt-4 pt-4 border-t border-gray-700">
        <p>Fontes de dados simuladas para demonstração. Integração com ADSBExchange, ACLED, GDELT, etc., necessária para dados reais.</p>
      </div>
    </aside>
  );
};

export default Sidebar;
