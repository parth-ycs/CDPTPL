
import localFont from "next/font/local";

export const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const baiJamjuree = localFont({
  src: [
    {
      path: "../public/fonts/BaiJamjuree/BaiJamjuree-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/BaiJamjuree/BaiJamjuree-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/BaiJamjuree/BaiJamjuree-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/BaiJamjuree/BaiJamjuree-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/BaiJamjuree/BaiJamjuree-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/BaiJamjuree/BaiJamjuree-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/BaiJamjuree/BaiJamjuree-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/BaiJamjuree/BaiJamjuree-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/BaiJamjuree/BaiJamjuree-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/BaiJamjuree/BaiJamjuree-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/BaiJamjuree/BaiJamjuree-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/BaiJamjuree/BaiJamjuree-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-bai",
  display: "swap",
});

export const noaVoren = localFont({
  src: "../public/fonts/NoaVorenDEMO-Regular.ttf",
  variable: "--font-noa",
  weight: "400",
  display: "swap",
});
