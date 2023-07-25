import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function AddIcon(props) {
  return (
    <Svg
      width={13}
      height={13}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.5 0.5H6.5V6.5H0.5V7.5H6.5V13.5H7.5V7.5H13.5V6.5H7.5V0.5Z"
        fill="white"
        {...props}
      />
    </Svg>
  );
}

export function GridIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3H10V10H3V3Z" stroke="#212121" {...props} />
      <Path d="M14 3H21V10H14V3Z" stroke="#212121" {...props}></Path>
      <Path d="M14 14H21V21H14V14Z" stroke="#212121" {...props}></Path>
      <Path d="M3 14H10V21H3V14Z" stroke="#212121" {...props}></Path>
    </Svg>
  );
}

export function UserIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
        stroke="#212121"
        {...props}
      />
      <Path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke="#212121"
        {...props}
      ></Path>
    </Svg>
  );
}

export function LogoutIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
        stroke="#BDBDBD"
      />
      <Path d="M17 16L21 12L17 8" stroke="#BDBDBD"></Path>
      <Path d="M21 12H9" stroke="#BDBDBD" />
    </Svg>
  );
}

export function LeftIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 12H4" stroke="#212121" {...props} />
      <Path d="M10 18L4 12L10 6" stroke="#212121" {...props}></Path>
    </Svg>
  );
}

export function CommentIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3 11.5C2.99656 12.8199 3.30493 14.1219 3.9 15.3C5.33904 18.1793 8.28109 19.9988 11.5 20C12.8199 20.0034 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0034 12.8199 20 11.5C19.9988 8.28109 18.1793 5.33904 15.3 3.9C14.1219 3.30493 12.8199 2.99656 11.5 3H11C6.68419 3.2381 3.2381 6.68419 3 11V11.5V11.5Z"
        stroke="#BDBDBD"
        {...props}
      />
    </Svg>
  );
}

export function LocationIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z"
        stroke="#BDBDBD"
        {...props}
      />
      <Path
        d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
        stroke="#BDBDBD"
        {...props}
      ></Path>
    </Svg>
  );
}
