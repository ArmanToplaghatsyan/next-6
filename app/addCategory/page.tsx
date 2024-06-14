import { Metadata } from "next";
import AddCategory from "../components/AddCategory";

export default function AddCategoryPage() {
  return (
    <div>
      <AddCategory/>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Add Category Page",
};
