"use client";

import { palette } from "@/theme";
import { FC, PropsWithChildren } from "react";

const style = {
  backgroundColor: palette.bg.neutral,
};

export const Body: FC<PropsWithChildren> = ({ children }) => {
  return <body style={style}>{children}</body>;
};
