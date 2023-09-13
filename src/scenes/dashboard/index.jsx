import { Box, IconButton, Typography, useTheme, Button } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeoChart from "../../components/GeoChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m='20px'>
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
            >
                <Header
                    title='DASHBOARD'
                    subtitle='Welcome to your dashboard'
                />
                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        DOWNLOAD REPORTS
                    </Button>
                </Box>
            </Box>

            {/*GRID & CHARTS*/}
            <Box
                display='grid'
                gridTemplateColumns='repeat(12,1fr)'
                gridAutoRows='140px'
                gap='20px'
            >
                {/*row 1*/}
                <Box
                    gridColumn='span 3'
                    backgroundColor={colors.primary[400]}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <StatBox
                        title='12,361'
                        subtitle='Emails Sent'
                        progress='0.75'
                        increase='+14%'
                        icon={
                            <EmailIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn='span 3'
                    backgroundColor={colors.primary[400]}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <StatBox
                        title='431,225'
                        subtitle='Sales Obtained'
                        progress='0.5'
                        increase='+21%'
                        icon={
                            <PointOfSaleIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn='span 3'
                    backgroundColor={colors.primary[400]}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <StatBox
                        title='12,361'
                        subtitle='New Clients'
                        progress='0.3'
                        increase='+5%'
                        icon={
                            <PersonAddIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn='span 3'
                    backgroundColor={colors.primary[400]}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <StatBox
                        title='1,325,134'
                        subtitle='Traffice Inbound'
                        progress='0.8'
                        increase='+43%'
                        icon={
                            <TrafficIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>
                {/*Row Two */}
                <Box
                    gridColumn='span 8'
                    gridRow='span 2'
                    backgroundColor={colors.primary[400]}
                >
                    <Box
                        mt='25px'
                        p=' 0 30px'
                        display='flex'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Box>
                            <Typography
                                variant='h5'
                                fontWeight='600'
                                color={colors.grey[100]}
                            >
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant='h3'
                                fontWeight='bold'
                                color={colors.greenAccent[500]}
                            >
                                $5,934,232
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{
                                        fontSize: "26px",
                                        color: colors.greenAccent[500],
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height='250px' mt='-20px'>
                        <LineChart isDashBoard={true} />
                    </Box>
                </Box>

                {/* Transactions */}
                <Box
                    gridColumn='span 4'
                    gridRow='span 2'
                    backgroundColor={colors.primary[400]}
                    overflow='auto'
                >
                    <Box
                        disply='flex'
                        justifyContent='space-between'
                        alignItems='center'
                        broderBottom={`4px solid ${colors.primary[500]} `}
                        colors={colors.grey[100]}
                        p='15px'
                    >
                        <Typography
                            colors={colors.grey[500]}
                            variant='h5'
                            fontWeight='600'
                        >
                            Recent Transactions
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display='flex'
                            justifyContent='space-between'
                            alignItems='center'
                            broderBottom={`4px solid ${colors.primary[500]} `}
                            p='15px'
                        >
                            <Box>
                                <Typography
                                    colors={colors.greenAccent[500]}
                                    variant='h5'
                                    fontWeight='600'
                                >
                                    {transaction.txId}
                                </Typography>
                                <Typography
                                    colors={colors.grey[100]}
                                    variant='h5'
                                    fontWeight='600'
                                >
                                    {transaction.user}
                                </Typography>
                            </Box>
                            <Box color={colors.grey[100]}>
                                {transaction.date}
                            </Box>
                            <Box
                                backgroundColor={colors.greenAccent[500]}
                                p='5px 10px'
                                borderRadius='4px'
                            >
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>
                {/* Row 3 */}
                <Box
                    gridColumn='span 4'
                    gridRow='span 2'
                    backgroundColor={colors.primary[400]}
                    px='30px'
                >
                    <Typography variant='h5' fontWeight='600'>
                        Campaign
                    </Typography>
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='Center'
                        mt='25px'
                    >
                        <ProgressCircle size='125' />
                        <Typography
                            variant='h5'
                            color={colors.greenAccent[500]}
                            sx={{ mt: "15px" }}
                        >
                            $48,352 revenue generated
                        </Typography>
                        <Typography variant='h5' fontWeight='600'>
                            Includes extra misc expenditures and costs
                        </Typography>
                    </Box>
                </Box>
                <Box
                    gridColumn='span 4'
                    gridRow='span 2'
                    backgroundColor={colors.primary[400]}
                >
                    <Typography
                        variant='h5'
                        fontWeight='600'
                        sx={{ p: "30px 30px 0 30px" }}
                    >
                        Sales Qunatity
                    </Typography>
                    <Box height='250px' mt='-20px'>
                        <BarChart isDashBoard={true} />
                    </Box>
                </Box>
                <Box
                    gridColumn='span 4'
                    gridRow='span 2'
                    backgroundColor={colors.primary[400]}
                    p='30px'
                >
                    <Typography
                        variant='h5'
                        fontWeight='600'
                        sx={{ mb: "15px" }}
                    >
                        Geography Based Traffic
                    </Typography>
                    <Box height='200px' mt='-20px'>
                        <GeoChart isDashBoard={true} />
                    </Box>
                </Box>
                {/* */}
            </Box>
        </Box>
    );
};

export default Dashboard;
