import { Metadata } from "next";
import SingleProducts from "../../components/SingleProducts";

export default function SingleProductPage({params}:any) {
  return (
    <div>
      <SingleProducts id={params.id}/>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Single Product Page",
};
