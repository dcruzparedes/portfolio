import { Instrument_Sans, JetBrains_Mono } from "next/font/google";

export const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const fontClass = `${instrument.variable} ${jetbrains.variable}`;
