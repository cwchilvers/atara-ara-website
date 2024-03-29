import { FC } from "react";

interface LogoProps {
  color: string;
}

const Logo: FC<LogoProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 1782 396"
      version="1.1"
      viewBox="0 0 1782 396"
      xmlSpace="preserve"
    >
      <path d="M153 99c0 36.6-3.6 66.1-9.6 89.9H90.1v54H121c-28.9 45-66.9 45-66.9 45v54s84.1 0 127.6-99h61.4v-54h-44.5c2.3-11.2 4.3-23.1 5.7-36h83.8v135h-45v54h99v-189L342 99M612 99V54h-54v45H396v99h54v-45h108s0 135-135 135h-27v54h27s189 0 189-189h72V99h-72z" fill={color}></path>
      <path d="M738 0H0v396h1782V0H738zm0 378H18V18h720v360zm315-225v189h-54v-27H846v27h-54V99h261v54zm295.4 185.8c-43.9-19.5-77.6-41.1-106.2-67.8l35.5-38c24.2 22.6 53.4 41.1 91.8 58.2l-21.1 47.6zm14.8-108c-21.6-4-37-12-48.1-21.4 9-15.5 16.3-34.1 20.9-56.4h-103v36c0 153-126 153-126 153v-54c72 0 72-99 72-99v-36h-72V99h72V54h54v45h162s0 67.8-31.8 131.8zM1728 153v189h-99v-54h45V153h-83.8c-1.4 12.8-3.3 24.8-5.7 36h44.5v54h-61.4c-43.5 99-127.6 99-127.6 99v-54s38 0 66.9-45H1476v-54h53.3c6-23.8 9.7-53.4 9.7-90h189v54z" fill={color}></path>
      <path d="M846 153H999V261H846z" fill={color}></path>
    </svg>
  );
};

export default Logo;
