import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import SubLayout from "../components/SubLayout";
import {
  addCount,
  decreaseCount,
  deleteItem,
} from "../store";

import "./Cart.css";

function Cart() {
  const dispatch = useDispatch();
  const { user, cart } = useSelector((state) => state);

  // 총 금액 계산
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  // 배송비 (임시값)
  const deliveryFee = 3000;

  // 최종 결제금액
  const finalPrice = totalPrice + deliveryFee;

  return (
    <SubLayout title="장바구니" desc="선택하신 메뉴를 확인하고 주문하세요">
      <div className="cart-layout">
        {/* ================= LEFT ================= */}
        <div className="cart-list">
          <h5 className="cart-user">{user.name}님의 장바구니</h5>

          {cart.length === 0 ? (
            <div className="cart-empty">
              장바구니에 담긴 상품이 없습니다.
            </div>
          ) : (
            cart.map(({ id, img, name, count, price }) => (
              <div className="cart-item" key={id}>
                {/* 이미지 */}
                <Link to={`/menu/${id}`} className="cart-img">
                  <img src={img} alt={name} />
                </Link>

                {/* 상품 정보 */}
                <div className="cart-info">
                  <strong className="cart-name">{name}</strong>

                  <div className="cart-qty">
                    <span>수 량 : </span>
                    <button onClick={() => dispatch(decreaseCount(id))}>−</button>
                    <span>{count}</span>
                    <button onClick={() => dispatch(addCount(id))}>+</button>
                  </div>
                </div>

                {/* 가격 영역 */}
                <div className="cart-price-box">
                  <div className="cart-unit-price">
                    메뉴 가격 <span>{price.toLocaleString()}원</span>
                  </div>
                  <div className="cart-total-price">
                    주문 금액 <strong>{(price * count).toLocaleString()}원</strong>
                  </div>
                </div>

                {/* 삭제 */}
                <button
                  className="cart-delete"
                  onClick={() => dispatch(deleteItem(id))}
                >
                  ✕
                </button>
              </div>
            ))
          )}

          <div className="cart-actions">
            <Link to="/menu" className="btn-continue">
              메뉴 더 보기 →
            </Link>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="cart-summary">
          <h4>결제정보</h4>

          <ul>
            <li>
              <span>상품 수</span>
              <strong>{cart.length}개</strong>
            </li>
            <li>
              <span>상품 금액</span>
              <strong>{totalPrice.toLocaleString()}원</strong>
            </li>
            <li>
              <span>배송비</span>
              <strong>{deliveryFee.toLocaleString()}원</strong>
            </li>
          </ul>

          <div className="cart-total">
            <span>총 결제금액</span>
            <strong>{finalPrice.toLocaleString()}원</strong>
          </div>

          <Button className="btn-buy">주문하기</Button>
        </div>
      </div>
    </SubLayout>
  );
}

export default Cart;
