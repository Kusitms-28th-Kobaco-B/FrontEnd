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
    const response = await kobacoAxios.post(API, copy, {
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
    let data = { message: message };
    const response = await kobacoAxios.patch(API, data, {
      params: copyId,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const saveCopy = async (copyId: number) => {
  try {
    const memberId = 1;
    let API = `/api/v1/advertisement/copies/${memberId}/${copyId}`;
    const response = await kobacoAxios.post(API, "", {
      params: {
        memberId: memberId,
        advertisementCopyId: copyId,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const recentSavedCopy = async () => {
  try {
    const memberId = 1;
    let API = `/api/v1/copyGallery/recent-loaded/${memberId}`;
    const response = await kobacoAxios.get(API, {
      params: memberId,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
