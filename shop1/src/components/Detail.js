import React from 'react';
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap'
import { useState } from 'react';
import { useEffect } from "react";


function Detail(props) {
    let { paramId } = useParams();// paramId는 문자열로 오기 때문에 숫자로 바꿔줘야 한다.
    let [tap, setTap] = useState(0);   

    // console.log(paramId);

    // const { imgUrl, title, content, price } = props.fruit[paramId];

    // props.fruit 배열에서 id가 paramId와 일치하는 상품을 찾아 item 변수에 저장
    // paramId는 문자열이므로 parseInt를 사용해 숫자로 변환
    let item = props.fruit.find(f => f.id === parseInt(paramId));

    const { imgUrl, title, content, price } = item;

    let [fade2, setFade2] = useState('')
    useEffect(()=>{
        setFade2('end')
        return ()=>{
            setFade2('')
        }
    },[])


    return (
        //<div className="container">
        <div className={'container start ' + fade2}>
            <div className="row">
                <div className="col-md-6">
                <img src={'/' + imgUrl} width="100%"  alt={title} />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{title}</h4>
                    <p>{content}</p>
                    <p>{price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0" style={{marginTop:"50px"}}>
                <Nav.Item>
                <Nav.Link  onClick={()=>{ setTap(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={()=>{ setTap(1) }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link  onClick={()=>{ setTap(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tap={tap}/>
        </div>
    )
}


function TabContent({tap}){
    let [fade, setFade] = useState('')
    useEffect( ()=>{
        setTimeout(()=>{ setFade('end')},100)
        return ()=>{
            setFade('')
        }
    } ,[tap])

    return (
        <div className={'start ' + fade}>
            { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tap] }
        </div>
    )
}

export default Detail;