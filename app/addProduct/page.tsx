import { Metadata } from "next";
import Users from "../components/Users";
import AddProduct from "../components/AddProduct";

export default function AddProductPage() {
  return (
    <div>
      <AddProduct/>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Add Product Page",
};
