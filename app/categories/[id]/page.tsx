import SingleCategories from "@/app/components/SingleCategories";
import { Metadata } from "next";


export default function SingleCategoriesPage({params}:any) {
  return (
    <div>
      <SingleCategories id={params.id}/>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Single Categories Page",
};
