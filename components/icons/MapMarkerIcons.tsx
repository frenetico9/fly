
import React from 'react';
import { IconProps } from './IconProps';

export const FighterJetMapIcon: React.FC<IconProps> = ({ size = 24, className, style }) => (
  <svg style={style} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15.25 2.023A2.5 2.5 0 0 0 13.5 2h- effiziente-5a2.5 2.5 0 0 0-1.768.732L4.056 6.882A2 2 0 0 0 3 8.52V10.5a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5V8.52a2 2 0 0 0-1.056-1.64L15.25 2.023Z"/>
    <path d="m14 13-1.6 2.4a2 2 0 0 1-3.2-.4L8.5 14H8a2 2 0 0 0-2 2v2.5a2.5 2.5 0 0 0 2.5 2.5h0a2.5 2.5 0 0 0 2.5-2.5V16a2 2 0 0 0-2-2h-.5"/>
    <path d="M16 13h2"/>
    <path d="M20 15h-4l-1.5-2"/>
    <path d="M4 15h4l1.5-2"/>
    <line x1="8" x2="16" y1="6" y2="6"/>
  </svg>
);

export const ReconMapIcon: React.FC<IconProps> = ({ size = 24, className, style }) => (
  <svg style={style} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/>
    <path d="M4 6h.01"/>
    <path d="M2.29 9.62A10 10 0 0 0 3.34 19.01"/>
    <path d="M7.38 21.71A10 10 0 0 0 16.66 22"/>
    <path d="M12 18h.01"/>
    <path d="M17.65 16.22A10 10 0 0 0 22 12.18"/>
    <path d="M22 8.13A10 10 0 0 0 15.87 3.01"/>
    <path d="M12 12a6 6 0 1 0-5.46-3.41"/>
  </svg>
);

export const DroneMapIcon: React.FC<IconProps> = ({ size = 24, className, style }) => (
  <svg style={style} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 18.5A2.5 2.5 0 0 1 9.5 21a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 9.5 16a2.5 2.5 0 0 1 2.5 2.5Z"/>
    <path d="M12 5.5A2.5 2.5 0 0 0 9.5 3a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 9.5 8a2.5 2.5 0 0 0 2.5-2.5Z"/>
    <path d="M12 11.5a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 7 6.5a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 12 11.5Z"/>
    <path d="M20 12h-4"/>
    <path d="M20 4h-4"/>
    <path d="M4 8h4"/>
    <path d="M14.5 18.5h-5"/>
    <path d="M14.5 5.5h-5"/>
    <path d="M12 8V6.5"/>
    <path d="m12 18.5-.5-2.5"/>
    <path d="m9.5 5.5-.5 2.5"/>
  </svg>
);


export const TransportPlaneMapIcon: React.FC<IconProps> = ({ size = 24, className, style }) => (
  <svg style={style} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
  </svg>
);

export const BombMapIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15.5 8.5c1.5-1.5 4-1.5 4 1.5s-2.5 3-4 1.5"/>
    <path d="M19.95 13.2A8.34 8.34 0 0 1 17 14l-8-1s-1.57.5-1.5-1S9 10 9 10"/>
    <path d="M14 18l-3.5-2"/>
    <path d="M13 9.5l2-2.5"/>
    <path d="M15 13.5c0 2-2 3.5-4 3.5s-4-1.5-4-3.5c0-.5.5-2.5 3.5-3s3.5.5 3.5 3Z"/>
    <path d="M2.5 11c0 7.5 7.5 7.5 7.5 7.5S18.5 17.5 17 10l-4.5-1.5"/>
  </svg>
);

export const TargetMapIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

export const SwordsMapIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m14.5 15.5 5-5-3-3-5 5-3.5 3.5 3 3z"></path>
    <path d="m2 22 3-3"></path>
    <path d="m11.5 6.5 5-5-3-3-5 5-3.5 3.5 3 3z"></path>
    <path d="m22 2-3 3"></path>
  </svg>
);

// Generic Pulsing div for alert icon, actual styling in index.html <style>
export const PulseMapIcon: React.FC = () => (
  <div></div> // The animation targets this div when wrapped by L.divIcon
);
