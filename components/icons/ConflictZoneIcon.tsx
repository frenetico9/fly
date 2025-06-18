
import React from 'react';
import { IconProps } from './IconProps';

export const ConflictZoneIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
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
    <path d="m14.5 15.5 5-5-3-3-5 5-3.5 3.5 3 3z"></path>
    <path d="m2 22 3-3"></path>
    <path d="m11.5 6.5 5-5-3-3-5 5-3.5 3.5 3 3z"></path>
    <path d="m22 2-3 3"></path>
  </svg>
);
