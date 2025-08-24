import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { SvgProps, SvgXml } from "react-native-svg";

import React from "react";
import tw from "../tailwind";

interface IButton {
  containerStyle?: {};
  titleStyle?: {};
  icon?: React.ReactNode;
  svg?: string;
  svg2?: string;
  title?: string;
  firstSvgTitleTogether?: boolean;
  onPress?: () => void;
  isLoading?: boolean;
  loadingColor?: string;
  disabled?: boolean;
  svgProps?: SvgProps;
  svg2Props?: SvgProps;
}

const IwtButton = ({
  containerStyle,
  icon,
  svg,
  title,
  titleStyle,
  onPress,
  disabled,
  isLoading,
  loadingColor,
  svg2,
  firstSvgTitleTogether,
  svgProps,
  svg2Props,
}: IButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading || disabled}
      activeOpacity={0.5}
      style={[
        tw`bg-primary h-13  flex-row justify-center items-center gap-3 rounded-full   ${
          disabled ? "opacity-60" : "opacity-100"
        }`,
        containerStyle,
      ]}
    >
      {firstSvgTitleTogether ? (
        <View style={tw`flex-row justify-center items-center gap-2`}>
          {isLoading ? (
            <ActivityIndicator color={loadingColor ? loadingColor : "white"} />
          ) : (
            <>
              {icon ? (
                icon
              ) : (
                <SvgXml
                  xml={
                    svg
                      ? svg
                      : `<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.3337 1.54972e-05L0.666992 0V19.3333C0.666992 19.5896 0.813889 19.8232 1.04487 19.9342C1.27584 20.0452 1.55001 20.014 1.75012 19.8539L8.00033 14.8538L14.2505 19.8539C14.4506 20.014 14.7248 20.0452 14.9558 19.9342C15.1868 19.8232 15.3337 19.5896 15.3337 19.3333V1.54972e-05Z" fill="white"/>
    </svg>
     `
                  }
                  {...svgProps}
                />
              )}
            </>
          )}

          {title && (
            <Text
              style={[
                tw`text-white font-DegularDisplaySemibold text-base `,
                titleStyle,
              ]}
            >
              {title}
            </Text>
          )}
        </View>
      ) : (
        <>
          {isLoading ? (
            <ActivityIndicator color={loadingColor ? loadingColor : "white"} />
          ) : (
            <>
              {icon ? (
                icon
              ) : (
                <SvgXml
                  xml={
                    svg
                      ? svg
                      : `<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.3337 1.54972e-05L0.666992 0V19.3333C0.666992 19.5896 0.813889 19.8232 1.04487 19.9342C1.27584 20.0452 1.55001 20.014 1.75012 19.8539L8.00033 14.8538L14.2505 19.8539C14.4506 20.014 14.7248 20.0452 14.9558 19.9342C15.1868 19.8232 15.3337 19.5896 15.3337 19.3333V1.54972e-05Z" fill="white"/>
    </svg>
     `
                  }
                  {...svgProps}
                />
              )}
            </>
          )}

          {title && (
            <Text
              style={[
                tw`text-white font-DegularDisplaySemibold text-base `,
                titleStyle,
              ]}
            >
              {title}
            </Text>
          )}
        </>
      )}
      <>
        {svg2 && (
          <SvgXml
            xml={
              svg2
                ? svg2
                : `<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.3337 1.54972e-05L0.666992 0V19.3333C0.666992 19.5896 0.813889 19.8232 1.04487 19.9342C1.27584 20.0452 1.55001 20.014 1.75012 19.8539L8.00033 14.8538L14.2505 19.8539C14.4506 20.014 14.7248 20.0452 14.9558 19.9342C15.1868 19.8232 15.3337 19.5896 15.3337 19.3333V1.54972e-05Z" fill="white"/>
    </svg>
     `
            }
            {...svgProps}
            {...svg2Props}
          />
        )}
      </>
    </TouchableOpacity>
  );
};

export default IwtButton;
