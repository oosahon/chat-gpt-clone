"use client";

import {
  Box,
  Divider,
  Drawer,
  DrawerProps,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Fragment, ReactNode } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { palette } from "@/theme";

type TMenuItem = {
  title: string;
  route: string;
  Icon: typeof SvgIcon;
  hide?: boolean;
};

export type AppDrawerProps = DrawerProps & {
  menuItems: TMenuItem[];
  isDesktop: boolean;
  feedbackMenuitemNode?: ReactNode;
  logoutMenuItemNode?: ReactNode;
};

export const AppDrawer = ({
  isDesktop,
  feedbackMenuitemNode,
  logoutMenuItemNode,
  menuItems,
  ...drawerProps
}: AppDrawerProps) => {
  return (
    <>
      <Box width={270} /> {/* mere position placeholder */}
      <Drawer
        {...drawerProps}
        variant={isDesktop ? "permanent" : "temporary"}
        sx={{
          ".MuiDrawer-paper": {
            width: 270,
            bgcolor: palette.bg.main,
          },
        }}
      >
        <Stack
          sx={{
            overflowY: "auto",
            height: "100vh",
            minHeight: "800px",
          }}
          justifyContent="space-between"
          pb={2}
        >
          <div>
            {isDesktop && (
              <Box m={2}>
                <AcUnitIcon fontSize="large" />
              </Box>
            )}

            <Stack mt={6}>
              {menuItems.map((item) => {
                if (item.hide) return <Fragment key={item.route} />;

                const Icon = item.Icon;
                const isActive = location.pathname.startsWith(item.route);
                const color = isActive ? "secondary" : "disabled";
                const fontWeight = isActive ? "bold" : "regular";

                return (
                  <Box
                    component={Link}
                    key={item.route}
                    href={item.route}
                    onClick={() => {
                      drawerProps?.onClose?.({}, "backdropClick");
                    }}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      px: 0.5,
                    }}
                  >
                    <MenuItem
                      sx={{
                        bgcolor: isActive ? "#F5FFF5" : "",
                        borderRadius: "12px",
                        borderColor: "#F4C874",
                        width: "95%",
                        "&:hover": {
                          bgcolor: isActive ? "#B8F8B4" : "#F7F8F9",
                        },
                      }}
                    >
                      <ListItemAvatar
                        color="primary"
                        sx={{
                          minWidth: "auto",
                          mr: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          my: 1,
                        }}
                      >
                        <Icon color={color} />
                      </ListItemAvatar>
                      <ListItemText>
                        <Typography
                          color={isActive ? "text.primary" : "text.secondary"}
                          fontWeight={fontWeight}
                        >
                          {item.title}
                        </Typography>
                      </ListItemText>
                    </MenuItem>
                    {isActive && isDesktop && (
                      <img src="/yellow-line.svg" height="100%" />
                    )}
                  </Box>
                );
              })}
            </Stack>
          </div>

          <Stack spacing={2} pb={5}>
            <Divider />
            {feedbackMenuitemNode ?? null}
            {logoutMenuItemNode ?? null}
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
};
