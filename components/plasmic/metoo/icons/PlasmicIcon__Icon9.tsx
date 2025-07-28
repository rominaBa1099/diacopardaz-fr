/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon9Icon(props: Icon9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      data-name={"Layer 1"}
      viewBox={"0 0 307.1 306.78"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <linearGradient
          id={"a"}
          x1={"44.34"}
          x2={"261.77"}
          y1={"263.02"}
          y2={"45.59"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop offset={"0"} stopColor={"#b06600"}></stop>

          <stop offset={".23"} stopColor={"#d7a000"}></stop>

          <stop offset={".42"} stopColor={"#f4ca00"}></stop>

          <stop offset={".51"} stopColor={"#ffdb00"}></stop>

          <stop offset={".85"} stopColor={"#c88900"}></stop>

          <stop offset={".99"} stopColor={"#b06600"}></stop>
        </linearGradient>
      </defs>

      <path
        fill={"#fff"}
        d={
          "M199.6 104.4c-1.99.41-4.17 1.96-5.75 3.24l-60.99 61.08c-.75.67-1.21.4-1.98 0-4.59-2.36-12.71-14.52-18.06-18.01-13.78-9-29.14 6.31-20.78 19.78 2.14 3.45 27.34 28.73 30.9 31.1 5.29 3.53 10.86 3.6 16.46.59 2.47-1.33 8.35-7.52 11-10 9.61-8.97 18.79-18.8 28-28 10.51-10.49 25.51-23.42 34.5-34.5 10.39-12.82 2.18-28.5-13.3-25.29Z"
        }
      ></path>

      <path
        fill={"url(#a)"}
        d={
          "M147.66.44c35.08-4.23 34.72 23.16 57.95 31.5 22.21 7.97 40.81-8.51 60.69 17.31 14.37 18.66 2.05 33.89 9.41 52.59 7.83 19.92 29.39 22.51 31.22 46.78 2.73 36.24-25.37 34.66-32.08 57.99-5.71 19.86 6.27 36.29-11.96 55.04-19.56 20.11-38.29 5.4-59 14-15.59 6.48-19.49 23.19-36.21 28.79-11.75 3.93-24.37 2.99-35.1-3.46-11.47-6.9-15.3-19.68-28.69-25.31-19.37-8.14-36.41 5.41-56.01-10.99-22.64-18.94-8.74-35.4-14.66-56.34-7.36-26.06-40.1-26.23-31.88-64.24 4.46-20.59 20.98-22.5 28.95-38.05 11.32-22.08-7.07-43.38 18.13-63.87 20.42-16.59 37.13-1.95 57.15-11.85 16.54-8.18 19.68-27.19 42.09-29.89M199.6 104.4c-1.99.41-4.17 1.96-5.75 3.24l-60.99 61.08c-.75.67-1.21.4-1.98 0-4.59-2.36-12.71-14.52-18.06-18.01-13.78-9-29.14 6.31-20.78 19.78 2.14 3.45 27.34 28.73 30.9 31.1 5.29 3.53 10.86 3.6 16.46.59 2.47-1.33 8.35-7.52 11-10 9.61-8.97 18.79-18.8 28-28 10.51-10.49 25.51-23.42 34.5-34.5 10.39-12.82 2.18-28.5-13.3-25.29Z"
        }
      ></path>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
