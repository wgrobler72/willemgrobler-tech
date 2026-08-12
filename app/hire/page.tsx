import type { Metadata } from "next";
import RecruiterView from "./RecruiterView";

export const metadata: Metadata = {
  title: "Recruiter Overview",
  description: "Recruiter overview for Willem Grobler: Senior Infrastructure Engineer, Microsoft 365, Azure, Windows Server, Hyper-V, MSP and IT operations."
};

export default function HirePage() {
  return <RecruiterView />;
}
