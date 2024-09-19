import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";


const ProductList = () => {
     const [data, setData] = useState(productRows);

     const handleDelete = (id) => {
       setData(data.filter((item) => item.id !== id));
     };

     const columns = [
       { field: "id", headerName: "ID", width: 90 },
       {
         field: "product",
         headerName: "Product",
         width: 250,
         editable: true,
         renderCell: (params) => {
           return (
             <div className="productListItem">
               <img src={params.row.img} alt="" className="userListImg" />
               {params.row.name}
             </div>
           );
         },
       },
       {
         field: "stock",
         headerName: "Stock",
         width: 200,
         editable: true,
       },
       {
         field: "status",
         headerName: "Status",
         width: 150,
         editable: true,
       },
       {
         field: "price",
         headerName: "Price",
         width: 260,
         editable: true,
       },
       {
         field: "action",
         headerName: "Action",
         width: 150,
         editable: true,
         renderCell: (params) => {
           return (
             <div className="productListAction">
               <Link to={"/product/" + params.row.id}>
                 <button className="productListEdit">Edit</button>
               </Link>
               <DeleteOutline
                 className="productListIcon"
                 onClick={() => handleDelete(params.row.id)}
               />
             </div>
           );
         },
       },
     ];


  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSizeOptions={[8]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default ProductList
