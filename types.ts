
export interface AircraftData {
  id: string;
  type: 'fighter' | 'recon' | 'drone' | 'transport';
  country: string;
  lat: number;
  lng: number;
  altitude: number;
  speed: number;
  heading: number;
  model: string;
}

export interface ConflictData {
  id: string;
  type: 'airstrike' | 'artillery' | 'clash';
  location: string;
  lat: number;
  lng: number;
  details: string;
  source: string;
}

export interface AlertData {
  id: string;
  type: string; // E.g., 'missile-launch'
  location: string;
  lat: number;
  lng: number;
  severity: 'Alta' | 'Média' | 'Baixa';
  details: string;
}

export interface NewsItem {
  title: string;
  source: string;
  timestamp: string;
}

export enum MapLayerKey {
  AIRCRAFT = 'aircraft',
  CONFLICTS = 'conflicts',
  ALERTS = 'alerts',
}

export interface MapLayerToggle {
  id: MapLayerKey;
  label: string;
  icon: React.FC<{ className?: string }>;
  colorClass: string; // Tailwind color class for checkbox and icon accents
}
