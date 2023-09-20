"use client";
import React from "react";
import * as St from "../styles/styles";
import Image from "next/image";
import Spinner from "/Users/gim.goya/Desktop/Hanghae99/Mini/kanban/public/Spinner.gif";

export const Loading = () => {
  return (
    <St.Background>
      <Image src={Spinner} alt="spinner"></Image>
    </St.Background>
  );
};

export default Loading;
