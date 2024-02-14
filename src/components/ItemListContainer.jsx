import { useState } from "react";
import arrayProductos from "./json/productos.json";
import { useEffect } from "react";
import ItemList from "./ItemList";
import Carousel from "./Carousel";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000);
        })
        promesa.then(data => {
            setItems(data);
        })
    }, [id]);

    return (
        <>
            {id ? "" : <Carousel />}
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer;