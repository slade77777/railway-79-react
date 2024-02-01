import './App.css'
import ProductForm from "./components/ProductForm.jsx";
import {useState} from "react";

const Product = ({name, company, amount, price, isEvenLine}) => {
  const [isShowPrice, setShowPrice] = useState(true)
  // const [totalPrice, setTotalPrice] = useState(price * amount)

  const totalPrice = price * amount
  return <tr style={{ backgroundColor : isEvenLine ? 'blue' : 'red'}}>
    <td>
      {name}
    </td>
    <td>
      {company}
    </td>
    <td>
      {amount}
    </td>
    <td>
      {isShowPrice ? price : ''}
    </td>
    <td>
      {totalPrice}
    </td>
    <td>
      {
        isShowPrice ? <button onClick={() => setShowPrice(false)}>Ẩn Giá</button>
          : <button onClick={() => setShowPrice(true)}>Hiện giá</button>
      }
    </td>
    <td>
      <button>Tăng giá tiền</button>
      <button>Tăng số lượng</button>
    </td>
  </tr>
}

function App() {

  const [products, setProducts] = useState([])

  function saveProduct(newProduct) {
    setProducts([...products, newProduct])
  }

  console.log(products);
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
          <th>
            Tổng số tiền
          </th>
          <th />
          <th />
        </tr>
        </thead>
        <tbody>
        {
          products.map((item, index) => <Product isEvenLine={index % 2 === 1} name={item.name} price={item.price} amount={item.amount} company={item.company} />)
        }
        </tbody>
      </table>

    </div>
  )
}

export default App
