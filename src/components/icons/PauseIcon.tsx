import { SVGProps } from "react";

export default function PauseCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="64"
      height="64"
      viewBox="0 0 26 26"
      style="color: rgb(74, 85, 101);"
    >
      <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
        <path d="M11 17V9a1 1 0 0 0-2 0v8a1 1 0 1 0 2 0M10 7a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V9a2 2 0 0 0-2-2m7 10V9a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0M16 7a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V9a2 2 0 0 0-2-2"></path>
        <path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></path>
      </g>
    </svg>
  );
}
