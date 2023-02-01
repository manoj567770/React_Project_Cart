import { useState, useEffect } from "react";
import ListItems from "./ListItems/ListItems";
import axios from "axios";
import Loader from "../UI/Loader";

const Products = ({ onAddItems, onRemoveItems }) => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    /* fetch('https://react-first-project-498dd-default-rtdb.firebaseio.com/items.json')
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
    })
    .catch(error=>{
      console.log(error)
    })*/
    async function fetchItems() {
      try {
        const response = await axios
          .get(
            `https://react-first-project-498dd-default-rtdb.firebaseio.com/items.json`
          )
          .then((response) => {
            const data = response.data;
            const transformData = data.map((item, index) => {
              return {
                ...item,
                id: index,
              };
            });
            // setLoader(false);
            setItems(transformData);
          });
      } catch (error) {
        //setLoader(false);
        alert("Oppppsss!!!!!!!");
      } finally {
        setLoader(false);
      }
    }
    fetchItems();
  }, []);

  const handleAddItems = (id) => {
    console.log(id);
  };

  const handleRemoveItems = (id) => {
    console.log(id);
  };
  return (
    <>
      <div className={"product-list"}>
        <div className={"product-list--wrapper"}>
          {/*<ListItems data={items[0]}></ListItems>
                <ListItems data={items[1]}></ListItems>*/}
          {items.map((ele) => {
            return (
              <ListItems
                key={ele.id}
                data={ele}
                onAdd={handleAddItems}
                onRemove={handleRemoveItems}
              />
            );
          })}
        </div>
      </div>
      {loader && <Loader />}
    </>
  );
};
export default Products;
