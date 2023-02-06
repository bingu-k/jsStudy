import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';

import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

import Btn from './Button.js';
import { addSample } from "./store/userSlice.js";

function Detail(props) {
  let [t, setT] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {setT(true)}, 2000);
    return () => { clearTimeout(timer) }
  }, []);

  let [num, setNum] = useState('');
  useEffect(() => {
    if (isNaN(num) == true) {
      alert('그러지 마셈')
    }
  }, [num]);

  let [count, setCount] = useState(0);
  let {id} = useParams();

  let shoe = props.shoes.find((s) => { return s.id == id } );

  let [page, setPage] = useState("");
  useEffect(()=> {
    let timer = setTimeout(()=>{setPage("end")}, 10)
    return (()=>{
      clearTimeout(timer)
      setPage('')
    })
  }, [id])
  
  let dispatch = useDispatch();

	if (shoe)
	{
		return (
			<Container className={`start ${page}`}>
				{
					t == true ? null : <div className='alert alert-warning'> 2초 이내 구매시 할인 </div>
				}
				<Row>
					<Col>
						<img src={`https://codingapple1.github.io/shop/shoes${shoe.id + 1}.jpg`} width="100%" />
					</Col>
				</Row><Row>
					<Col>
						<h4 className='pt-5'>{ shoe.title }</h4>
						<p>{ shoe.content }</p>
						<p>Price : {shoe.price.toLocaleString('ko-KR')}원</p>
						<Btn bg='blue'>구매하기</Btn>
						<Btn bg='blue'>장바구니</Btn>
						<Btn bg='grey' onClick={() => setCount(count + 1)}>Like { count }</Btn>
					</Col>
				</Row>
				<TapUI shoe={shoe}></TapUI>
			</Container>
		)
	}
	return (
		<h4 className={`start ${page}`}>없는 상품입니다.</h4>
	)
}

function TapUI(props){
    let [tapUI, setTapUI] = useState(0);
    
    return (
        <Container>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={() => setTapUI(0)}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => setTapUI(1)}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => setTapUI(2)}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tabcontent tapUI={tapUI} shoe={props.shoe}/>
        </Container>
    )
}

function Tabcontent(props){
    let [fade, setFade] = useState("");
    useEffect(()=> {
        let timer = setTimeout(()=>{setFade("end")}, 10)
        return (()=>{
            clearTimeout(timer)
            setFade('')
        })
    }, [props.tapUI])

    return ( 
        <div className={`start ${fade}`}>
            { [ <div>{props.shoe.title}</div>, <div>{props.shoe.content}</div>, <div>{props.shoe.price}</div> ][props.tapUI] }
        </div>
    )
}

export default Detail;