
import React from 'react';
import { IconProps } from './IconProps';

export const CriticalAlertIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.7 10.2 20 8.9 20 6.5A4.5 4.5 0 0 0 15.5 2a4.5 4.5 0 0 0-3.28 1.22"></path>
    <path d="m9 9 4-4"></path>
    <path d="M14.8 15.2c-1.3.3-2.5.8-3.6 1.6C7.6 19.8 4 22 4 22s2.2-3.6 5.2-7.2c.8-1 1.3-2.3 1.6-3.6"></path>
    <path d="M10 18a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"></path>
  </svg>
);
