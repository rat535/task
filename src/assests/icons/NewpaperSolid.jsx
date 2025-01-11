import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Rect,
} from "react-native-svg";
const NewPaperSolid = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_4224_12768)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18C2.25 18.7956 2.56607 19.5587 3.12868 20.1213C3.69129 20.6839 4.45435 21 5.25 21H20.25C19.4544 21 18.6913 20.6839 18.1287 20.1213C17.5661 19.5587 17.25 18.7956 17.25 18V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75C11.8011 9.75 11.6103 9.82902 11.4697 9.96967C11.329 10.1103 11.25 10.3011 11.25 10.5C11.25 10.6989 11.329 10.8897 11.4697 11.0303C11.6103 11.171 11.8011 11.25 12 11.25H13.5C13.6989 11.25 13.8897 11.171 14.0303 11.0303C14.171 10.8897 14.25 10.6989 14.25 10.5C14.25 10.3011 14.171 10.1103 14.0303 9.96967C13.8897 9.82902 13.6989 9.75 13.5 9.75H12ZM11.25 7.5C11.25 7.30109 11.329 7.11032 11.4697 6.96967C11.6103 6.82902 11.8011 6.75 12 6.75H13.5C13.6989 6.75 13.8897 6.82902 14.0303 6.96967C14.171 7.11032 14.25 7.30109 14.25 7.5C14.25 7.69891 14.171 7.88968 14.0303 8.03033C13.8897 8.17098 13.6989 8.25 13.5 8.25H12C11.8011 8.25 11.6103 8.17098 11.4697 8.03033C11.329 7.88968 11.25 7.69891 11.25 7.5ZM6 12.75C5.80109 12.75 5.61032 12.829 5.46967 12.9697C5.32902 13.1103 5.25 13.3011 5.25 13.5C5.25 13.6989 5.32902 13.8897 5.46967 14.0303C5.61032 14.171 5.80109 14.25 6 14.25H13.5C13.6989 14.25 13.8897 14.171 14.0303 14.0303C14.171 13.8897 14.25 13.6989 14.25 13.5C14.25 13.3011 14.171 13.1103 14.0303 12.9697C13.8897 12.829 13.6989 12.75 13.5 12.75H6ZM5.25 16.5C5.25 16.3011 5.32902 16.1103 5.46967 15.9697C5.61032 15.829 5.80109 15.75 6 15.75H13.5C13.6989 15.75 13.8897 15.829 14.0303 15.9697C14.171 16.1103 14.25 16.3011 14.25 16.5C14.25 16.6989 14.171 16.8897 14.0303 17.0303C13.8897 17.171 13.6989 17.25 13.5 17.25H6C5.80109 17.25 5.61032 17.171 5.46967 17.0303C5.32902 16.8897 5.25 16.6989 5.25 16.5ZM6 6.75C5.80109 6.75 5.61032 6.82902 5.46967 6.96967C5.32902 7.11032 5.25 7.30109 5.25 7.5V10.5C5.25 10.914 5.586 11.25 6 11.25H9C9.19891 11.25 9.38968 11.171 9.53033 11.0303C9.67098 10.8897 9.75 10.6989 9.75 10.5V7.5C9.75 7.30109 9.67098 7.11032 9.53033 6.96967C9.38968 6.82902 9.19891 6.75 9 6.75H6Z"
        fill="url(#paint0_linear_4224_12768)"
      />
      <Path
        d="M18.75 6.75H20.625C21.246 6.75 21.75 7.254 21.75 7.875V18C21.75 18.3978 21.592 18.7794 21.3107 19.0607C21.0294 19.342 20.6478 19.5 20.25 19.5C19.8522 19.5 19.4706 19.342 19.1893 19.0607C18.908 18.7794 18.75 18.3978 18.75 18V6.75Z"
        fill="url(#paint1_linear_4224_12768)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_4224_12768"
        x1={-1.00984}
        y1={21}
        x2={20.25}
        y2={21}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.253333} stopColor="#F97316" />
        <Stop offset={1} stopColor="#FAA729" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_4224_12768"
        x1={18.2067}
        y1={19.5}
        x2={21.75}
        y2={19.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.253333} stopColor="#F97316" />
        <Stop offset={1} stopColor="#FAA729" />
      </LinearGradient>
      <ClipPath id="clip0_4224_12768">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default NewPaperSolid;