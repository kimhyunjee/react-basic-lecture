// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux";


const BucketList = (props) => {
  const history = useHistory();
  // console.log(props);
  // const my_lists = props.list;
  const my_lists = useSelector((state) => state.bucket.list); //state.bucket.list 왜안댐
  // (스토어가 가지고 있는 전체 데이터)=> 리턴되는값()
  // console.log(data);

  // return null;
  
  return (
    <ListStyle>
      {my_lists.map((list, index) => {
        return (
          <ItemStyle className="list_item" key={index} onClick={() => {
            history.push("/detail/"+index)

          }}>
            {list}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
`;

export default BucketList;