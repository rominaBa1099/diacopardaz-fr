/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon15Icon(props: Icon15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M10 14.75q.325 0 .538-.212A.73.73 0 0 0 10.75 14V9.725q0-.3-.212-.513A.73.73 0 0 0 10 9a.73.73 0 0 0-.75.75v4.275a.73.73 0 0 0 .75.725m0-7.45q.35 0 .575-.238a.82.82 0 0 0 .225-.587.79.79 0 0 0-.8-.8.79.79 0 0 0-.8.8.82.82 0 0 0 .225.587Q9.65 7.3 10 7.3m0 12.2a9.3 9.3 0 0 1-3.712-.75 9.6 9.6 0 0 1-3.013-2.025 9.6 9.6 0 0 1-2.025-3.013A9.3 9.3 0 0 1 .5 10q0-1.975.75-3.713a9.6 9.6 0 0 1 2.025-3.012A9.6 9.6 0 0 1 6.288 1.25 9.3 9.3 0 0 1 10 .5a9.3 9.3 0 0 1 3.713.75 9.6 9.6 0 0 1 3.012 2.025 9.6 9.6 0 0 1 2.025 3.012A9.3 9.3 0 0 1 19.5 10q0 1.975-.75 3.712a9.6 9.6 0 0 1-2.025 3.013 9.6 9.6 0 0 1-3.012 2.025A9.3 9.3 0 0 1 10 19.5m0-1.5q3.325 0 5.663-2.337T18 10q0-3.325-2.337-5.663T10 2Q6.675 2 4.338 4.337 2 6.675 2 10t2.338 5.663Q6.675 18 10 18"
        }
      ></path>
    </svg>
  );
}

export default Icon15Icon;
/* prettier-ignore-end */
