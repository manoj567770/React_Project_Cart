import { useEffect, useState } from "react";
import ListItem from "./ListItems/ListItem";
import axios from "axios";
import Loader from "../UI/Loader";
import { useLocation, useParams } from "react-router-dom";

const Products = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const params = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search).get("search");

  useEffect(() => {
    async function fetchItems() {
      try {
        let slug = `items.json`;
        if (params.category) {
          slug = `${params.category}.json`;
        }
        if (queryParams) {
          slug += `?search=${queryParams}`;
        }
        const response = await axios.get(
          `https://react-first-project-498dd-default-rtdb.firebaseio.com/${slug}`
        );
        const data = response.data;
        const transformedData = data.map((item, index) => {
          return {
            ...item,
            id: index,
          };
        });

        setItems(transformedData);
      } catch (error) {
        console.log("Error: ", error);
        alert("Some error occurred");
      } finally {
        setLoader(false);
      }
    }

    fetchItems();
    return () => {
      setItems([]);
      setLoader(true);
    };
  }, [params.category, queryParams]);

  return (
    <>
      <div className={"product-list"}>
        <div className={"product-list--wrapper"}>
          {items.map((item) => {
            return <ListItem key={item.id} data={item} />;
          })}
        </div>
      </div>
      {loader && <Loader />}
    </>
  );
};

export default Products;
