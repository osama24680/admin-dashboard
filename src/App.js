import { ColorModeContext, useMode } from "./Theme"
import { Routes, Route } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"
import Topbar from "./Pages/Global/Topbar"
import SidebarComp from "./Pages/Global/SidebarComp"
import Dashboard from "./Pages/Dashboard"
import Team from "./Pages/Team"
import Contacts from "./Pages/Contacts"
import Form from "./Pages/Form"
import Calendar from "./Pages/Calendar"
import FAQ from "./Pages/FAQ"
import Bar from "./Pages/Bar"
import Pie from "./Pages/Pie"
import Line from "./Pages/Line"
import Geography from "./Pages/Geography"
import Invoices from "./Pages/Invoices"


function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarComp />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/Team" element={<Team />}></Route>
              <Route path="/Contacts" element={<Contacts />}></Route>
              <Route path="/Form" element={<Form />}></Route>
              <Route path="/Calendar" element={<Calendar />}></Route>
              <Route path="/FAQ" element={<FAQ />}></Route>
              <Route path="/Bar" element={<Bar />}></Route>
              <Route path="/Pie" element={<Pie />}></Route>
              <Route path="/Line" element={<Line />}></Route>
              <Route path="/Geography" element={<Geography />}></Route>
              <Route path="/Invoices" element={<Invoices />}></Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
