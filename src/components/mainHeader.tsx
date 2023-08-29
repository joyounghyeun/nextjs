"use client";
import React from "react";
import styled from "styled-components";

function MainHeader() {
  return (
    <HeaderBackground>
      <SearchArea>
        <div style={{ width: "100px", height: "100px", background: "red" }}>
          로고
        </div>
        <div style={{ width: "100px", height: "100px", background: "red" }}>
          서치
        </div>
        <div style={{ width: "100px", height: "100px", background: "red" }}>
          유저 정보
        </div>
      </SearchArea>
      <CategoryBox>
        <div style={{ width: "80px", height: "80px", background: "green" }}>
          메인
        </div>
        <div style={{ width: "80px", height: "80px", background: "green" }}>
          분류
        </div>
        <div style={{ width: "80px", height: "80px", background: "green" }}>
          랭킹
        </div>
      </CategoryBox>
    </HeaderBackground>
  );
}

export default MainHeader;

const HeaderBackground = styled.div`
  background: white;
  width: 100%;
  height: 500px;
`;

const SearchArea = styled.div`
  display: flex;
  justify-content: space-around;
`;
const CategoryBox = styled.div`
  background: #a6e3e7;
  display: flex;
  justify-content: space-around;
`;
