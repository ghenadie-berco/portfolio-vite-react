import "./App.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

export interface Tab {
  id: string;
  title: string;
}

const tabs: Tab[] = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "tech-skills", title: "Tech Skills" },
  { id: "contact", title: "Contact" },
];

function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  const handleChange = (_event: React.SyntheticEvent, tabId: string) => {
    setSelectedTab(tabId);
  };

  return (
    <Tabs
      value={selectedTab}
      onChange={handleChange}
      className="zzz"
      aria-label="basic tabs example"
    >
      {tabs.map((tab) => (
        <Tab key={tab.id} label={tab.title} value={tab.id}></Tab>
      ))}
    </Tabs>
  );
}

export default App;
