import { Metadata } from "next";
import Settings from "../components/Settings";

export default function SettingsPage() {
  return (
    <div>
      <Settings/>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Settings Page",
};
