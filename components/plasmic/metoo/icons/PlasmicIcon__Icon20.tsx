/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon20Icon(props: Icon20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#a)"}>
        <mask
          id={"b"}
          width={"24"}
          height={"24"}
          x={"0"}
          y={"0"}
          maskUnits={"userSpaceOnUse"}
          style={{
            maskType: 'alpha"',
          }}
        >
          <path fill={"#9C6565"} d={"M24 0H0v24h24z"}></path>
        </mask>

        <g fill={"#9C6565"} mask={"url(#b)"}>
          <path
            d={
              "M12 14.5c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75m0 3.249c-.06 0-.13-.01-.2-.02a.6.6 0 0 1-.18-.06.8.8 0 0 1-.18-.09l-.15-.12c-.18-.19-.29-.45-.29-.71s.11-.52.29-.71l.15-.12q.09-.06.18-.09.09-.045.18-.06c.13-.03.27-.03.39 0 .07.01.13.03.19.06q.09.03.18.09l.15.12c.18.19.29.45.29.71s-.11.52-.29.71l-.15.12q-.09.06-.18.09c-.06.03-.12.05-.19.06-.06.01-.13.02-.19.02"
            }
          ></path>

          <path
            d={
              "M17.63 22H6.366c-1.812 0-3.197-.699-3.904-1.959-.697-1.26-.604-2.884.28-4.567l5.63-10.728C9.303 2.974 10.585 2 11.998 2s2.696.974 3.625 2.746l5.633 10.738c.883 1.683.985 3.298.279 4.567C20.828 21.301 19.443 22 17.63 22M11.999 3.476c-.874 0-1.729.709-2.407 1.989L3.967 16.203c-.632 1.2-.734 2.303-.297 3.1s1.403 1.23 2.705 1.23H17.64c1.302 0 2.259-.433 2.705-1.23s.335-1.89-.297-3.1L14.406 5.465c-.679-1.28-1.534-1.989-2.408-1.989"
            }
          ></path>
        </g>
      </g>

      <defs>
        <clipPath id={"a"}>
          <path fill={"#fff"} d={"M0 0h24v24H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon20Icon;
/* prettier-ignore-end */
