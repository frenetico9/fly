import React from 'react';
import {
  FighterJetMapIcon,
  ReconMapIcon,
  DroneMapIcon,
  TransportPlaneMapIcon,
  BombMapIcon,
  TargetMapIcon,
  SwordsMapIcon,
} from './icons/MapMarkerIcons';
import { IconProps } from './icons/IconProps';

const LegendItem: React.FC<{ icon?: React.ReactElement<IconProps>; colorBoxClass?: string; alertDot?: boolean; label: string; iconClassName?: string }> = ({ icon, colorBoxClass, alertDot, label, iconClassName }) => (
  <div className="legend-item">
    {icon && React.cloneElement(icon, { className: `w-4 h-4 ${iconClassName || ''}` })}
    {colorBoxClass && <div className={`color-box ${colorBoxClass}`}></div>}
    {alertDot && <div className="alert-dot"></div>}
    <span>{label}</span>
  </div>
);

// Define country colors for the legend
// These should ideally match or be derived from the colors used in MapDisplay.tsx
const aircraftCountryColors: Record<string, {label: string, colorClass: string}> = {
  'ucrânia': { label: 'Ucrânia', colorClass: 'bg-sky-400' },
  'eua': { label: 'EUA', colorClass: 'bg-blue-500' },
  'irã': { label: 'Irã', colorClass: 'bg-lime-500' },
  'reino unido': { label: 'Reino Unido', colorClass: 'bg-red-500' },
  'rússia': { label: 'Rússia', colorClass: 'bg-rose-600' },
  'china': { label: 'China', colorClass: 'bg-yellow-400' },
  'índia': { label: 'Índia', colorClass: 'bg-orange-500' },
  'frança': { label: 'França', colorClass: 'bg-indigo-400' },
  'alemanha': { label: 'Alemanha', colorClass: 'bg-amber-500' },
  'turquia': { label: 'Turquia', colorClass: 'bg-teal-400' },
  'outros': { label: 'Outros/Não Especificado', colorClass: 'bg-gray-400' },
};


const MapLegend: React.FC = () => {
  return (
    <div>
      <div className="legend-section">
        <h4>Aeronaves</h4>
        <LegendItem icon={<FighterJetMapIcon />} label="Caça (Fighter)" iconClassName="text-gray-200" />
        <LegendItem icon={<ReconMapIcon />} label="Reconhecimento (Recon)" iconClassName="text-gray-200" />
        <LegendItem icon={<DroneMapIcon />} label="Drone" iconClassName="text-gray-200" />
        <LegendItem icon={<TransportPlaneMapIcon />} label="Transporte" iconClassName="text-gray-200" />
      </div>

      <div className="legend-section">
        <h4>Cores (Países - Aeronaves)</h4>
        {Object.entries(aircraftCountryColors).map(([key, {label, colorClass}]) => (
            <LegendItem key={key} colorBoxClass={colorClass} label={label} />
        ))}
      </div>

      <div className="legend-section">
        <h4>Zonas de Conflito</h4>
        <LegendItem icon={<BombMapIcon />} label="Ataque Aéreo" iconClassName="text-red-500" />
        <LegendItem icon={<TargetMapIcon />} label="Artilharia" iconClassName="text-orange-500" />
        <LegendItem icon={<SwordsMapIcon />} label="Confronto" iconClassName="text-yellow-500" />
      </div>

      <div className="legend-section">
        <h4>Alertas</h4>
        <LegendItem alertDot={true} label="Alerta Crítico" />
      </div>
    </div>
  );
};

export default MapLegend;