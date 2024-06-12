import { Metadata } from "next";
import Profile from "../components/Profile";

export default function ProfilePage() {
  return (
    <div>
      <Profile/>
    </div>
  );
}

export const metadata: Metadata = {
  title: "ProfilePage",
};
