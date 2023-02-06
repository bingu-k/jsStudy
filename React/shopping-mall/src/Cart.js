import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "./store/userSlice.js";

function Cart() {
	let samples = useSelector((state) => state.sample );
	let dispatch = useDispatch();
	
	return (
		<div>
		<Table striped bordered hover variant="dark">
			<thead>
				<tr>
					<th>#</th>
					<th>상품명</th>
					<th>수량</th>
					<th>변경하기</th>
				</tr>
			</thead>
			<tbody>
			{
				samples.map((sample, idx)=>{
					return (
							<tr key={idx}>
								<td>{sample.id}</td>
								<td>{sample.title}</td>
								<td>{sample.count}</td>
								<td>
									<button onClick={() => {
										dispatch(addCount(idx))
									}}>+</button>
								</td>
							</tr>
					)
				})
			}
			</tbody>
		</Table>
		</div>
	)
}

export default Cart;