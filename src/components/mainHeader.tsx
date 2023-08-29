"use client";
import category from "@/app/category/page";
import { usePathname, useRouter } from "next/navigation";

import React from "react";
import styled from "styled-components";

function MainHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const handleCateotryClick = (url: string) => {
    router.push(url);
  };

  const categorys: Array<{ title: string; url: string }> = [
    { title: "메인", url: "/main" },
    { title: "분류", url: "/category" },
    { title: "랭킹", url: "/ranking" },
  ];

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
        {categorys.map((category: { title: string; url: string }) => {
          return (
            <div
              style={{ width: "80px", height: "80px", background: "green" }}
              onClick={() => handleCateotryClick(category.url)}
            >
              {category.title}
            </div>
          );
        })}
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
