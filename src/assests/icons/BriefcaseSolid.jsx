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
const BriefCaseSolid = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_4412_93)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 5.25C7.5 4.45435 7.81607 3.69129 8.37868 3.12868C8.94129 2.56607 9.70435 2.25 10.5 2.25H13.5C14.2956 2.25 15.0587 2.56607 15.6213 3.12868C16.1839 3.69129 16.5 4.45435 16.5 5.25V5.455C17.433 5.54 18.357 5.652 19.274 5.789C20.728 6.007 21.75 7.272 21.75 8.706V11.739C21.75 12.95 21.016 14.091 19.814 14.491C17.2938 15.3275 14.6554 15.7526 12 15.75C9.27 15.75 6.643 15.308 4.186 14.491C2.984 14.091 2.25 12.95 2.25 11.739V8.706C2.25 7.272 3.272 6.006 4.726 5.789C5.64729 5.65122 6.57234 5.53984 7.5 5.455V5.25ZM15 5.25V5.34C13.0018 5.21865 10.9982 5.21865 9 5.34V5.25C9 4.85218 9.15804 4.47064 9.43934 4.18934C9.72064 3.90804 10.1022 3.75 10.5 3.75H13.5C13.8978 3.75 14.2794 3.90804 14.5607 4.18934C14.842 4.47064 15 4.85218 15 5.25ZM12 13.5C12.1989 13.5 12.3897 13.421 12.5303 13.2803C12.671 13.1397 12.75 12.9489 12.75 12.75C12.75 12.5511 12.671 12.3603 12.5303 12.2197C12.3897 12.079 12.1989 12 12 12C11.8011 12 11.6103 12.079 11.4697 12.2197C11.329 12.3603 11.25 12.5511 11.25 12.75C11.25 12.9489 11.329 13.1397 11.4697 13.2803C11.6103 13.421 11.8011 13.5 12 13.5Z"
        fill="url(#paint0_linear_4412_93)"
      />
      <Path
        d="M3 18.4V15.604C3.22782 15.7287 3.46646 15.8324 3.713 15.914C6.38569 16.8014 9.18385 17.2525 12 17.25C14.892 17.25 17.68 16.782 20.287 15.915C20.539 15.831 20.777 15.726 21 15.604V18.4C21 19.852 19.953 21.128 18.477 21.323C16.357 21.605 14.195 21.75 12 21.75C9.83395 21.7504 7.67024 21.6078 5.523 21.323C4.047 21.128 3 19.852 3 18.4Z"
        fill="url(#paint1_linear_4412_93)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_4412_93"
        x1={-1.2815}
        y1={15.75}
        x2={21.75}
        y2={15.75}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.253333} stopColor="#F97316" />
        <Stop offset={1} stopColor="#FAA729" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_4412_93"
        x1={-0.259842}
        y1={21.75}
        x2={21}
        y2={21.75}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.253333} stopColor="#F97316" />
        <Stop offset={1} stopColor="#FAA729" />
      </LinearGradient>
      <ClipPath id="clip0_4412_93">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BriefCaseSolid;