import './product-form.css';
import {useState} from "react";

const ProductForm = ({saveProduct}) => {

  const [isAdding, setAdding] = useState(false)
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [amount, setAmount] = useState(0)
  const [price, setPrice] = useState(0)

  function openForm() {
    setAdding(true)
  }

  function closeForm() {
    setAdding(false)
  }

  function submit() {
    saveProduct({
      name: name,
      company: company,
      amount: amount,
      price: price
    })
    closeForm();
  }


  return <div>
    <button onClick={openForm}>Thêm mới</button>
    {
      isAdding ? <div className="form">
        <h2>Product Form</h2>
        <p>Tên:</p>
        <input type="text" onChange={e => setName(e.target.value)}/>
        <p>Nhãn hàng:</p>
        <input type="text" onChange={e => setCompany(e.target.value)}/>
        <p>Số lượng:</p>
        <input type="number"  onChange={e => setAmount(e.target.value)}/>
        <p>Giá tiền:</p>
        <input type="number"  onChange={e => setPrice(e.target.value)}/>
        <div className="submit">
          <button onClick={submit}>Thêm mới</button>
          <button onClick={closeForm}>Bỏ qua</button>
        </div>
      </div> : null
    }
  </div>
}

export default ProductForm
