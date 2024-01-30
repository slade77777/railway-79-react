import './App.css'
import ProductForm from "./components/ProductForm.jsx";
import {useState} from "react";

function App() {

  const [products, setProducts] = useState([])

  function saveProduct(newProduct) {
    setProducts([...products, newProduct])
  }

  return (
    <div className="container">
      <ProductForm saveProduct={saveProduct}/>
      <p>Danh sách sản phẩm</p>
      <table>
        <thead>
        <tr>
          <th>
            Tên
          </th>
          <th>
            Nhãn hàng
          </th>
          <th>
            Số lượng
          </th>
          <th>
            Giá tiền
          </th>
        </tr>
        </thead>
        <tbody>
        {
          products.map(item => <tr>
            <td>
              {item.name}
            </td>
            <td>
              {item.company}
            </td>
            <td>
              {item.amount}
            </td>
            <td>
              {item.price}
            </td>
          </tr>)
        }
        </tbody>
      </table>

    </div>
  )
}

export default App
