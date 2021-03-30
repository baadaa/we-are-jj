import React from 'react';

const SignJ = props => (
  <svg viewBox="0 0 313 222" {...props} xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M156.3 33.2a110.6 110.6 0 01156.3-.1l.1.1-78.1 78.2-78.2 78.1a110.6 110.6 0 01-156.4 0l78.2-78.1 78.1-78.2z"
    />
  </svg>
);

const Rectangle = props => (
  <svg viewBox="0 0 166 166" {...props} xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h166v166H0z" />
  </svg>
);

const Circle = props => (
  <svg viewBox="0 0 173 173" {...props} xmlns="http://www.w3.org/2000/svg">
    <circle cx="86.5" cy="86.5" r="86.5" />
  </svg>
);

const IconMedical = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 60l12-12"
      stroke="#1F637A"
      strokeWidth="4"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M34 18l12 12M16 48l4-16L47.2 4.8a4 4 0 015.7 0l6.3 6.3a4 4 0 010 5.7L32 44l-16 4zM44 8l12 12"
      stroke="#1F637A"
      strokeWidth="4"
      strokeMiterlimit="10"
    />
  </svg>
);

const IconSW = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 34l-4 4 4 4M42 34l4 4-4 4M28 46l8-16M10 13h4M20 13h4M43 13h11M2 20h60"
      stroke="#1F637A"
      strokeWidth="4"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M62 6H2v52h60V6z"
      stroke="#1F637A"
      strokeWidth="4"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

const IconFinance = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M39 37H25v24h14V37zM16 49H2v12h14V49zM62 25H48v36h14V25z"
      stroke="#1F637A"
      strokeWidth="4"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M10 27l12-12 10 10L54 3"
      stroke="#1F637A"
      strokeWidth="4"
      strokeMiterlimit="10"
    />
    <path
      d="M40 3h14v14"
      stroke="#1F637A"
      strokeWidth="4"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

const IconMedia = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 41V13a5 5 0 015-5h40a5 5 0 015 5v28M40 47v4H24v-4H2v1a8 8 0 008 8h44a8 8 0 008-8v-1H40z"
      stroke="#1F637A"
      strokeWidth="4"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M27 21v14l12-7-12-7z"
      stroke="#1F637A"
      strokeWidth="4"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

const IconCreative = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M62 18h-8v8h8v-8zM26 54h-8v8h8v-8zM62 54h-8v8h8v-8zM54 58H26M58 26v28M42 22h12M22 54V42M10 2H2v8h8V2zM46 2h-8v8h8V2zM10 38H2v8h8v-8zM46 38h-8v8h8v-8zM38 42H10M42 10v28M10 6h28M6 38V10"
      stroke="#1F637A"
      strokeWidth="4"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

const IconEnvironment = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 44v6h24V20H10v30"
      stroke="#1F637A"
      strokeWidth="4"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M61 49V13a8 8 0 00-8-8h-2v36h2a8 8 0 018 6 8 8 0 01-8 10H3V13h43"
      stroke="#1F637A"
      strokeWidth="4"
      strokeMiterlimit="10"
    />
    <path
      d="M28 20v14h-8"
      stroke="#1F637A"
      strokeWidth="4"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

export {
  SignJ,
  IconMedical,
  IconSW,
  IconFinance,
  IconMedia,
  IconCreative,
  IconEnvironment,
  Rectangle,
  Circle,
};
