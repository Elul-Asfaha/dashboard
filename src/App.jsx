import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import { Route, Routes } from "react-router-dom";
import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import Faq from "./scenes/faq";
// import Geography from "./scenes/Geography";
// import Calendar from "./scenes/calendar";

function App() {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box display='flex' className='app'>
                    <Sidebar />
                    <main className='content'>
                        <Box>
                            <Topbar />
                            <Routes>
                                <Route path='/' element={<Dashboard />} />
                                <Route path='/team' element={<Team />} />
                                {/* 
                            <Route path='/invoices' element={<Invoices />} />
                            <Route path='/contacts' element={<Contacts />} />
                            <Route path='/bar' element={<Bar />} />
                            <Route path='/form' element={<Form />} />
                            <Route path='/line' element={<Line />} />
                            <Route path='/pie' element={<Pie />} />
                            <Route path='/faq' element={<Faq />} />
                            <Route path='/geography' element={<Geography />} />
                            <Route path='/Calendar' element={<Calendar />} /> */}
                            </Routes>
                        </Box>
                    </main>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;