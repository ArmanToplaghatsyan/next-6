import { Metadata } from "next";
import Users from "../components/Users";

export default function UsersPage() {
  return (
    <div>
      <Users/>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Users Page",
};
