import { Routes, Route } from "react-router-dom";
import { Directory } from "./Directory";
import { About } from "./components/About";
import { TermsOfUse } from "./components/TermsOfUse";
import { PrivacyPolicy } from "./components/PrivacyPolicy";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Directory />} />
      <Route path="/about" element={<About />} />
      <Route path="/terms" element={<TermsOfUse />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}
