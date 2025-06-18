
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MapDisplay from './components/MapDisplay';
import { MOCK_AIRCRAFT_DATA, MOCK_CONFLICT_DATA, MOCK_ALERT_DATA, MOCK_NEWS_DATA } from './constants';
import { MapLayerKey } from './types';

const App: React.FC = () => {
  const [activeLayers, setActiveLayers] = useState<Record<MapLayerKey, boolean>>({
    [MapLayerKey.AIRCRAFT]: true,
    [MapLayerKey.CONFLICTS]: true,
    [MapLayerKey.ALERTS]: true,
  });

  const handleToggleLayer = (layerKey: MapLayerKey) => {
    setActiveLayers(prev => ({ ...prev, [layerKey]: !prev[layerKey] }));
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200">
      <Sidebar 
        newsItems={MOCK_NEWS_DATA}
        activeLayers={activeLayers}
        onToggleLayer={handleToggleLayer}
      />
      <MapDisplay 
        aircraftData={MOCK_AIRCRAFT_DATA}
        conflictData={MOCK_CONFLICT_DATA}
        alertData={MOCK_ALERT_DATA}
        activeLayers={activeLayers}
      />
    </div>
  );
};

export default App;
