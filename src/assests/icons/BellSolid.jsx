import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.603 3.799C9.02496 3.31223 9.54673 2.92196 10.1329 2.65468C10.719 2.38741 11.3558 2.24939 12 2.25C13.357 2.25 14.573 2.85 15.397 3.799C16.0397 3.75311 16.6847 3.84609 17.2883 4.07161C17.8919 4.29713 18.4399 4.64992 18.895 5.106C19.3509 5.56106 19.7036 6.10888 19.9291 6.71226C20.1546 7.31564 20.2477 7.96047 20.202 8.603C20.6886 9.02505 21.0787 9.54686 21.3458 10.133C21.6129 10.7191 21.7507 11.3559 21.75 12C21.7506 12.6442 21.6126 13.281 21.3453 13.8671C21.078 14.4533 20.6878 14.975 20.201 15.397C20.2467 16.0395 20.1536 16.6844 19.9281 17.2877C19.7026 17.8911 19.3499 18.4389 18.894 18.894C18.4389 19.3499 17.8911 19.7026 17.2877 19.9281C16.6844 20.1536 16.0395 20.2467 15.397 20.201C14.975 20.6878 14.4533 21.078 13.8671 21.3453C13.281 21.6126 12.6442 21.7506 12 21.75C11.3558 21.7506 10.719 21.6126 10.1329 21.3453C9.54673 21.078 9.02496 20.6878 8.603 20.201C7.96038 20.247 7.31538 20.1542 6.71181 19.9289C6.10824 19.7035 5.56023 19.3509 5.105 18.895C4.64897 18.4398 4.29622 17.8919 4.0707 17.2883C3.84518 16.6847 3.75218 16.0397 3.798 15.397C3.31141 14.9749 2.92133 14.4531 2.65423 13.867C2.38713 13.2809 2.24927 12.6441 2.25 12C2.25 10.643 2.85 9.427 3.799 8.603C3.75326 7.96047 3.8463 7.31562 4.07182 6.71222C4.29734 6.10883 4.65005 5.56103 5.106 5.106C5.56103 4.65005 6.10883 4.29734 6.71222 4.07182C7.31562 3.8463 7.96047 3.75326 8.603 3.799ZM15.61 10.186C15.67 10.1061 15.7134 10.0149 15.7377 9.91795C15.762 9.82098 15.7666 9.72014 15.7514 9.62136C15.7361 9.52257 15.7013 9.42783 15.6489 9.3427C15.5965 9.25757 15.5276 9.18378 15.4463 9.12565C15.3649 9.06753 15.2728 9.02624 15.1753 9.00423C15.0778 8.98222 14.9769 8.97992 14.8785 8.99746C14.7801 9.01501 14.6862 9.05205 14.6023 9.10641C14.5184 9.16077 14.4462 9.23135 14.39 9.314L11.154 13.844L9.53 12.22C9.38783 12.0875 9.19978 12.0154 9.00548 12.0188C8.81118 12.0223 8.62579 12.101 8.48838 12.2384C8.35097 12.3758 8.27226 12.5612 8.26883 12.7555C8.2654 12.9498 8.33752 13.1378 8.47 13.28L10.72 15.53C10.797 15.6069 10.8898 15.6662 10.992 15.7036C11.0942 15.7411 11.2033 15.7559 11.3118 15.7469C11.4202 15.738 11.5255 15.7055 11.6201 15.6519C11.7148 15.5982 11.7967 15.5245 11.86 15.436L15.61 10.186Z"
      fill="url(#paint0_linear_4604_13664)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_4604_13664"
        x1={-1.2815}
        y1={21.75}
        x2={21.75}
        y2={21.75}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.253333} stopColor="#F97316" />
        <Stop offset={1} stopColor="#FAA729" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SVGComponent;