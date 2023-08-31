import { useState } from "react";
import user from "../../assets/user.png";
import {
    Sidebar as ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    return (
        <Box
            sx={{
                " &. pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                " &. pro-icon-wrapper": {
                    background: `transparent !important`,
                },
                " &. pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                " &. pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                " &. pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            {!isCollapsed && (
                <Box mb='25px'>
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <img
                            alt='profile-user'
                            width='100px'
                            height='100px'
                            src={user}
                            style={{ cursor: "pointer", borderRadius: "50%" }}
                        />
                    </Box>
                    <Box textAlign='center'>
                        <Typography
                            variant='h2'
                            colr={colors.grey[100]}
                            fontWeight='bold'
                            sx={{ m: "10px 0 0 0" }}
                        >
                            Elul Asfaha
                        </Typography>
                        <Typography>Vp Fancy Admin</Typography>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default Sidebar;
