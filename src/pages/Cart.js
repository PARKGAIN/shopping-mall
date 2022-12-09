import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
function Cart() {
  let a = useSelector((state) => {
    return state;
  });
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{a.item[0].name}</td>
            <td>{a.item[0].count}</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>{a.item[1].name}</td>
            <td>{a.item[1].count}</td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default Cart;
