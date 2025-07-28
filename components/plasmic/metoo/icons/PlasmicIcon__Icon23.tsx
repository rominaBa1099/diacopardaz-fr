/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon23Icon(props: Icon23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <mask
        id={"a"}
        width={"16"}
        height={"16"}
        x={"0"}
        y={"0"}
        maskUnits={"userSpaceOnUse"}
        style={{
          maskType: 'alpha"',
        }}
      >
        <path fill={"#D9D9D9"} d={"M0 0h16v16H0z"}></path>
      </mask>

      <g mask={"url(#a)"}>
        <path
          fill={"#8F8F8F"}
          d={
            "M8 14.334a6.2 6.2 0 0 1-2.474-.5 6.4 6.4 0 0 1-2.009-1.35 6.4 6.4 0 0 1-1.35-2.009A6.2 6.2 0 0 1 1.667 8q0-1.316.5-2.475a6.4 6.4 0 0 1 1.35-2.008 6.4 6.4 0 0 1 2.009-1.35A6.2 6.2 0 0 1 8 1.667a6.2 6.2 0 0 1 2.476.5 6.4 6.4 0 0 1 2.008 1.35 6.4 6.4 0 0 1 1.35 2.008q.5 1.159.5 2.475t-.5 2.475a6.4 6.4 0 0 1-1.35 2.009 6.4 6.4 0 0 1-2.008 1.35q-1.16.5-2.476.5m0-1q2.234 0 3.784-1.55T13.334 8A5.28 5.28 0 0 0 12.1 4.6l-7.5 7.5q.717.6 1.592.917A5.3 5.3 0 0 0 8 13.334M3.9 11.4l7.5-7.5A5.28 5.28 0 0 0 8 2.667q-2.234 0-3.783 1.55Q2.667 5.767 2.667 8A5.27 5.27 0 0 0 3.9 11.4"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon23Icon;
/* prettier-ignore-end */
