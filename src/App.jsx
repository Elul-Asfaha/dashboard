import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import { Route, Routes } from "react-router-dom";
import Team from "./scenes/team";
import Invoices from "./scenes/Invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
// import Bar from "./scenes/bar";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import Faq from "./scenes/faq";
// import Geography from "./scenes/Geography";
import Calendar from "./scenes/calendar";

function App() {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box display='flex' className='app'>
                    <Sidebar />
                    <main className='content' style={{ width: "100%" }}>
                        <Box>
                            <Topbar />
                            <Routes>
                                <Route path='/' element={<Dashboard />} />
                                <Route path='/team' element={<Team />} />
                                <Route
                                    path='/contacts'
                                    element={<Contacts />}
                                />
                                <Route
                                    path='/invoices'
                                    element={<Invoices />}
                                />
                                <Route path='/form' element={<Form />} />
                                <Route
                                    path='/Calendar'
                                    element={<Calendar />}
                                />
                                {/* 
                            <Route path='/bar' element={<Bar />} />
                            <Route path='/line' element={<Line />} />
                            <Route path='/pie' element={<Pie />} />
                            <Route path='/faq' element={<Faq />} />
                            <Route path='/geography' element={<Geography />} />
                         */}
                            </Routes>
                        </Box>
                    </main>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
