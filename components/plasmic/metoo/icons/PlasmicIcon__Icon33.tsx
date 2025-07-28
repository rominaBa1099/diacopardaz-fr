/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon33Icon(props: Icon33IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M7 13.334a6.2 6.2 0 0 1-2.474-.5 6.4 6.4 0 0 1-2.009-1.35 6.4 6.4 0 0 1-1.35-2.009A6.2 6.2 0 0 1 .667 7q0-1.316.5-2.475a6.4 6.4 0 0 1 1.35-2.008 6.4 6.4 0 0 1 2.009-1.35A6.2 6.2 0 0 1 7 .667a6.2 6.2 0 0 1 2.476.5 6.4 6.4 0 0 1 2.008 1.35 6.4 6.4 0 0 1 1.35 2.008q.5 1.159.5 2.475t-.5 2.475a6.4 6.4 0 0 1-1.35 2.009 6.4 6.4 0 0 1-2.008 1.35 6.2 6.2 0 0 1-2.476.5m0-1q2.234 0 3.784-1.55T12.334 7A5.28 5.28 0 0 0 11.1 3.6l-7.5 7.5q.717.6 1.592.917A5.3 5.3 0 0 0 7 12.334M2.9 10.4l7.5-7.5A5.28 5.28 0 0 0 7 1.667q-2.234 0-3.783 1.55Q1.667 4.767 1.667 7A5.27 5.27 0 0 0 2.9 10.4"
        }
      ></path>
    </svg>
  );
}

export default Icon33Icon;
/* prettier-ignore-end */
