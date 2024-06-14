import { Metadata } from "next";
import Categories from "../components/Categories";

export default function CategoriesPage() {
  return (
    <div>
      <Categories/>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Categories Page",
};
