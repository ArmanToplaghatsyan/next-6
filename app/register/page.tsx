import { Metadata } from "next";
import Register from "../components/Register";

export default function RegisterPage() {
  return (
    <div>
      <Register/>
    </div>
  );
}

export const metadata: Metadata = {
  title: "RegisterPage",
};
