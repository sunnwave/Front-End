import moment from "moment";
import { Price, Seller, CreatedAt, Name } from "./FetchProducts.styles";

export default function FetchProductsUI(props) {
  return (
    <>
      {props.data?.fetchProducts.map((el) => (
        <div key={el._id}>
          <span>
            <input type="checkbox" style={{ margin: "10px" }} />
          </span>
          <Name>{el.name}</Name>
          <Price>{el.price}</Price>
          <Seller>{el.seller}</Seller>
          <CreatedAt>
            {moment(el.createdAt).format("YYYY-MM-DD hh:mm:ss")}
          </CreatedAt>
          <span>
            <button id={el._id} onClick={props.onClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
    </>
  );
}
