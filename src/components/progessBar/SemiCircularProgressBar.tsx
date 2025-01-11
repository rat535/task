
import React, { ReactNode, useEffect, useState } from 'react';
import { Animated, View, Text, StyleSheet, ViewProps } from 'react-native';

interface CustomSemiCircleProgressProps {
  children?: ReactNode;
  animationSpeed?: number;
  skillProgressText?: string;
  initialPercentage?: number;
  percentage?: number;
  minValue?: number;
  maxValue?: number;
  currentValue?: number;
  circleRadius?: number;
  progressShadowColor?: string;
  progressColor?: string;
  progressWidth?: number;
  interiorCircleColor?: string;
  exteriorCircleStyle?: ViewProps;
  interiorCircleStyle?: ViewProps;
}

const CustomSemiCircleProgress: React.FC<CustomSemiCircleProgressProps> = ({
  children,
  animationSpeed = 2,
  initialPercentage = 0,
  percentage = 90,
  skillProgressText='hi',
  minValue,
  maxValue,
  currentValue,
  circleRadius = 60,
  progressShadowColor = "#F46F1666",
  progressColor = "#F46F16",
  progressWidth = 10,
  interiorCircleColor = "#FFFFFF",
  exteriorCircleStyle = {},
  interiorCircleStyle = {},
}) => {
  const [rotationAnimation, setRotationAnimation] = useState(
    new Animated.Value(initialPercentage)
  );

  useEffect(() => {
    animate();
  }, [percentage]);

  const animate = () => {
    const toValue = percentage;
    const speed = animationSpeed;

    Animated.spring(rotationAnimation, {
      toValue,
      speed,
      useNativeDriver: true,
    }).start();
  };

  const getStyles = () => {
    const interiorCircleRadius = circleRadius - progressWidth; // Adjusting with padding

    return StyleSheet.create({
      exteriorCircle: {
        width: circleRadius * 2,
        height: circleRadius,
        borderRadius: circleRadius,
        backgroundColor: progressShadowColor,
      },
      rotatingCircleWrap: {
        width: circleRadius * 2,
        height: circleRadius,
        top: circleRadius,
      },
      rotatingCircle: {
        width: circleRadius * 2,
        height: circleRadius,
        borderRadius: circleRadius,
        backgroundColor: rotationAnimation.interpolate({
          inputRange: [0, 100],
          outputRange: ["#F46F16", progressColor], // Transition of color
        }) as any,
        transform: [
          { translateY: -circleRadius / 2 },
          {
            rotate: rotationAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: ["0deg", "180deg"],
            }),
          },
          { translateY: circleRadius / 2 },
        ],
      },
      interiorCircle: {
        width: interiorCircleRadius * 2,
        height: interiorCircleRadius,
        borderRadius: interiorCircleRadius,
        backgroundColor: interiorCircleColor,
        top: progressWidth,  
        justifyContent: "center",
        alignItems: "center",
      },
      percentageText: {
        fontSize:22,
        fontWeight: "bold",
        color:"#F46F16",
        top: '30%',
      },
  
    });
  };

  const styles = getStyles();
  return (
    <View
      style={[
        defaultStyles.exteriorCircle,
        styles.exteriorCircle,
        exteriorCircleStyle,
      ]}
    >
      <View
        style={[
          defaultStyles.rotatingCircleWrap,
          styles.rotatingCircleWrap,
        ]}
      >
        <Animated.View
          style={[
            defaultStyles.rotatingCircle,
            styles.rotatingCircle,
          ]}
        />
      </View>
      <View
        style={[
          defaultStyles.interiorCircle,
          styles.interiorCircle,
          interiorCircleStyle,
        ]}
      >
        <View style={{flex:1}}>
        <Text style={styles.percentageText}>
          {percentage}
         <Text style={{fontSize:16}}>%</Text> 
        </Text>
        </View>
        {children}
      </View>

    </View>
  );
};

export default CustomSemiCircleProgress;

const defaultStyles = StyleSheet.create({
  exteriorCircle: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: "center",
    overflow: "hidden",
    marginLeft: "30%",
     paddingBottom: -5, 
  },
  rotatingCircleWrap: {
    position: "absolute",
    left: 0,
  },
  rotatingCircle: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
  },
  interiorCircle: {
    overflow: "hidden",
    justifyContent: "center",
    alignSelf: "center",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});
