"use client";
import { kobacoAxios } from "@/apis/axios";

interface ValuesProps {
  service: string; // 서비스 선택: 헤드/바디
  projectName: string; // 프로젝트명
  productName: string; // 상품/서비스명
  targetGender: string; // 성별
  targetAge: string; // 연령대
  keyword: string[]; //키워드
  tone: string; // 톤앤매너
}

export const createCopy = async (copy: ValuesProps) => {
  try {
    const memberId = 1;
    let API = `/api/v1/advertisement/copies/${memberId}`;
    //console.log(copy);
    const response = await kobacoAxios.post(API, {
      data: copy,
      params: memberId,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getCopy = async () => {
  try {
    const memberId = 1;
    let API = `/api/v1/advertisement/copies/recent/${memberId}`;
    const response = await kobacoAxios.get(API, {
      params: memberId,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const editCopy = async (copyId: number, message: string) => {
  try {
    let API = `/api/v1/advertisement/copies/${copyId}`;
    const response = await kobacoAxios.patch(API, {
      body: message,
      params: copyId,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
