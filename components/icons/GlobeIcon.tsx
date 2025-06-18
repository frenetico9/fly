
import React from 'react';
import { IconProps } from './IconProps';

export const GlobeIcon: React.FC<IconProps> = ({ size = 28, className, ...props }) => (
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
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
    <path d="M12 2a10 10 0 0 1 7.071 2.929"></path>
    <path d="M2 12a10 10 0 0 1 2.929-7.071"></path>
    <path d="M12 22a10 10 0 0 1-7.071-2.929"></path>
    <path d="M22 12a10 10 0 0 1-2.929 7.071"></path>
  </svg>
);
