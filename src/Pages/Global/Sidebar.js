import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";
import "../../assets/styles.css"
import { tokens } from "../../Theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Osama from "../../images/osama.jpg"


const dataArray = [
    { title: "Manage Team", to: "/team", icon: PeopleOutlinedIcon },
    { title: "Contacts Information", to: "/contacts", icon: ContactsOutlinedIcon },
    { title: "Invoices Balances", to: "/invoices", icon: ReceiptOutlinedIcon },
]
const pagesArray = [
    { title: "Profile Form", to: "/form", icon: PersonOutlinedIcon },
    { title: "Calendar", to: "/calendar", icon: CalendarTodayOutlinedIcon },
    { title: "FAQ Page", to: "/faq", icon: HelpOutlineOutlinedIcon },
]

const chartsArray = [
    { title: "Bar Chart", to: "/bar", icon: BarChartOutlinedIcon },
    { title: "Pie Chart", to: "/pie", icon: PieChartOutlineOutlinedIcon },
    { title: "Line Chart", to: "/line", icon: TimelineOutlinedIcon },
    { title: "Geography Chart", to: "/geography", icon: MapOutlinedIcon },
]


const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMINIS
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="120px"
                                    height="120px"
                                    src={Osama}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h3"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 10px 0" }}
                                >
                                    Osama Meghaed
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    VP  Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />



                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Data
                        </Typography>
                        {dataArray.map((el, index) => (
                            <Item
                                title={el.title}
                                to={el.to}
                                icon={<el.icon />}
                                selected={selected}
                                setSelected={setSelected}
                                key={index}
                            />
                        ))}


                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Pages
                        </Typography>
                        {pagesArray.map((el, index) => (
                            <Item
                                title={el.title}
                                to={el.to}
                                icon={<el.icon />}
                                selected={selected}
                                setSelected={setSelected}
                                key={index}
                            />
                        ))}


                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Charts
                        </Typography>
                        {chartsArray.map((el, index) => (
                            <Item
                                title={el.title}
                                to={el.to}
                                icon={<el.icon />}
                                selected={selected}
                                setSelected={setSelected}
                                key={index}
                            />
                        ))}
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;