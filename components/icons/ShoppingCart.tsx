import React from "react";

interface Props {
  className?: string;
}

const ShoppingCart = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="65"
      height="65"
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.7913 24.375H35.208V16.25H43.333V10.8333H35.208V2.70831H29.7913V10.8333H21.6663V16.25H29.7913V24.375ZM18.958 48.75C15.9788 48.75 13.5684 51.1875 13.5684 54.1666C13.5684 57.1458 15.9788 59.5833 18.958 59.5833C21.9372 59.5833 24.3747 57.1458 24.3747 54.1666C24.3747 51.1875 21.9372 48.75 18.958 48.75ZM46.0413 48.75C43.0622 48.75 40.6518 51.1875 40.6518 54.1666C40.6518 57.1458 43.0622 59.5833 46.0413 59.5833C49.0205 59.5833 51.458 57.1458 51.458 54.1666C51.458 51.1875 49.0205 48.75 46.0413 48.75ZM19.4184 39.9479L19.4997 39.6229L21.9372 35.2083H42.1143C44.1455 35.2083 45.933 34.0979 46.8538 32.4187L57.308 13.4333L52.5955 10.8333H52.5684L49.5893 16.25L42.1143 29.7916H23.1018L22.7497 29.0604L16.683 16.25L14.1101 10.8333L11.5643 5.41665H2.70801V10.8333H8.12467L17.8747 31.3896L14.2184 38.025C13.7851 38.7833 13.5413 39.6771 13.5413 40.625C13.5413 43.6041 15.9788 46.0416 18.958 46.0416H51.458V40.625H20.0955C19.7434 40.625 19.4184 40.3271 19.4184 39.9479Z"
        fill="white"
      />
    </svg>
  );
};

export default ShoppingCart;
