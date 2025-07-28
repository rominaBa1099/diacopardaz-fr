/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon25Icon(props: Icon25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <mask
        id={"a"}
        width={"24"}
        height={"24"}
        x={"0"}
        y={"0"}
        maskUnits={"userSpaceOnUse"}
        style={{
          maskType: 'alpha"',
        }}
      >
        <path fill={"currentColor"} d={"M24 0H0v24h24z"}></path>
      </mask>

      <g mask={"url(#a)"}>
        <path
          fill={"currentColor"}
          d={
            "M12 21.5a9.3 9.3 0 0 1-3.712-.75 9.6 9.6 0 0 1-3.013-2.025 9.6 9.6 0 0 1-2.025-3.013A9.3 9.3 0 0 1 2.5 12q0-1.975.75-3.713a9.6 9.6 0 0 1 2.025-3.012A9.6 9.6 0 0 1 8.288 3.25 9.3 9.3 0 0 1 12 2.5a9.3 9.3 0 0 1 3.713.75 9.6 9.6 0 0 1 3.012 2.025 9.6 9.6 0 0 1 2.025 3.012A9.3 9.3 0 0 1 21.5 12q0 1.975-.75 3.712a9.6 9.6 0 0 1-2.025 3.013 9.6 9.6 0 0 1-3.012 2.025A9.3 9.3 0 0 1 12 21.5m0-1.5q3.35 0 5.675-2.325T20 12a7.9 7.9 0 0 0-1.85-5.1L6.9 18.15a7.9 7.9 0 0 0 2.388 1.375A7.9 7.9 0 0 0 12 20m-6.15-2.9L17.1 5.85A7.9 7.9 0 0 0 12 4Q8.65 4 6.325 6.325T4 12q0 1.4.475 2.712A7.9 7.9 0 0 0 5.85 17.1"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon25Icon;
/* prettier-ignore-end */
