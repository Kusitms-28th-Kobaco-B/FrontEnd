"use client";

import styled from "styled-components";
import { Button } from "../common/ButtonStyle";
import { colors } from "@/styles/theme";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import Link from "next/link";
import { editCopy, getCopy, recentSavedCopy, saveCopy } from "@/lib/action";
import { toneENUM, toneOption } from "@/lib/data";
import { useRecoilState } from "recoil";
import { createCopyState } from "@/context/recoilContext";

interface CopyItem {
  advertisementCopyId: number;
  service: string;
  tone: string;
  message: string;
}

const CopyResult = () => {
  const size = useWindowSize();

  const [created, setCreated] = useRecoilState(createCopyState);

  const [copy, setCopy] = useState<CopyItem[]>();
  const fetchCopyList = async () => {
    getCopy().then(async (result) => {
      await setCopy(result);
      console.log(result);
      setEditingStates(
        result.map((data: any) => ({ isEditing: false, text: data.message }))
      );
    });
  };
  useEffect(() => {
    fetchCopyList();
  }, [created]);

  useEffect(() => {
    setCopy(undefined);
    recentSavedCopy().then((result) => {
      setCurrentSave(result);
    });
  }, []);

  // 전체인지 최근 저장인지
  const [categoryIndex, setCategoryIndex] = useState(0);

  // 수정 함수
  const [editingStates, setEditingStates] = useState(
    copy?.map((data) => ({ isEditing: false, text: data.message }))
  );

  const handleEditClick = (index: number) => {
    setEditingStates((prevStates) =>
      prevStates?.map((state, i) =>
        i === index ? { ...state, isEditing: !state.isEditing } : state
      )
    );
  };

  const handleCancelClick = (index: number) => {
    setEditingStates((prevStates) =>
      prevStates?.map((state, i) =>
        i === index ? { ...state, isEditing: false } : state
      )
    );
  };

  const handleSaveClick = async (index: number, advertisementId: number) => {
    if (editingStates && editingStates[index]) {
      if (copy && copy[index] && copy[index].advertisementCopyId) {
        await editCopy(
          copy[index].advertisementCopyId,
          editingStates[index].text
        );
        fetchCopyList();
      }
      await setEditingStates((prevStates) =>
        prevStates?.map((state, i) =>
          i === index ? { ...state, isEditing: false } : state
        )
      );
    }
  };

  const handleTextChange = (index: number, newText: string) => {
    setEditingStates((prevStates) =>
      prevStates?.map((state, i) =>
        i === index ? { ...state, text: newText } : state
      )
    );
  };

  // 북마크 함수
  const [currentSave, setCurrentSave] = useState<CopyItem[]>([]);

  const handleBookmarkClick = (copyId: number) => {
    saveCopy(copyId).then(() => {
      recentSavedCopy().then((result) => {
        setCurrentSave(result);
      });
    });
  };

  return (
    <BoxWrapper>
      <BoxHeader>
        <CategoryBox>
          <Category
            onClick={() => setCategoryIndex(0)}
            active={categoryIndex == 0}
          >
            전체
          </Category>
          <Category
            onClick={() => setCategoryIndex(1)}
            active={categoryIndex == 1}
          >
            최근 저장한 항목
          </Category>
        </CategoryBox>
        <Link href="/adCopy/copyGallery">
          <Button text={colors.white} background={colors.main}>
            카피 갤러리 바로가기
            <Image
              src={"/main/arrow-right.svg"}
              alt="right-arrow"
              width={18}
              height={18}
            />
          </Button>
        </Link>
      </BoxHeader>
      {categoryIndex == 0 ? (
        <BoxContents style={{ height: size.height * 0.65 }}>
          {copy?.map((v, i) => (
            <CopyWrapper key={i}>
              <TagWrapper>
                <Tag
                  color={v.service == "HEAD" ? colors.main : colors.secondary}
                  background={
                    v.service == "HEAD"
                      ? colors.mainLight6
                      : colors.secondaryLight3
                  }
                >
                  {v.service == "HEAD" ? "헤드카피" : "바디카피"}
                </Tag>
                <Tag color={colors.grey1} background={colors.grey5}>
                  {toneOption[toneENUM.indexOf(v.tone)]}
                </Tag>
              </TagWrapper>
              <Message>
                {editingStates?.[i].isEditing ? (
                  <div>
                    <EditBox
                      value={editingStates[i].text}
                      onChange={(e) => handleTextChange(i, e.target.value)}
                    />
                  </div>
                ) : (
                  <div>‘{v.message}’</div>
                )}
              </Message>
              <EditWrapper>
                {editingStates?.[i].isEditing ? (
                  <>
                    <BottomText
                      onClick={() => handleCancelClick(i)}
                      color={colors.grey1}
                    >
                      취소
                    </BottomText>
                    <BottomText
                      onClick={() => handleSaveClick(i, v.advertisementCopyId)}
                      color={colors.main}
                    >
                      완료
                    </BottomText>
                  </>
                ) : (
                  <>
                    <Image
                      src="/adCopy/edit.svg"
                      alt="edit"
                      width={24}
                      height={24}
                      onClick={() => handleEditClick(i)}
                      style={{ cursor: "pointer" }}
                    />
                    <Image
                      src={
                        currentSave.some(
                          (savedCopy) =>
                            savedCopy.advertisementCopyId ===
                            v.advertisementCopyId
                        )
                          ? "/adCopy/bookmarkRed.svg"
                          : "/adCopy/bookmark.svg"
                      }
                      alt="save"
                      width={24}
                      height={24}
                      onClick={() => handleBookmarkClick(v.advertisementCopyId)}
                      style={{ cursor: "pointer" }}
                    />
                  </>
                )}
              </EditWrapper>
            </CopyWrapper>
          ))}
        </BoxContents>
      ) : (
        <BoxContents style={{ height: size.height * 0.65 }}>
          {currentSave.map((v, i) => (
            <CopyWrapper key={i}>
              <TagWrapper>
                <Tag
                  color={v.service == "HEAD" ? colors.main : colors.secondary}
                  background={
                    v.service == "HEAD"
                      ? colors.mainLight6
                      : colors.secondaryLight3
                  }
                >
                  {v.service == "HEAD" ? "헤드카피" : "바디카피"}
                </Tag>
                <Tag color={colors.grey1} background={colors.grey5}>
                  {toneOption[toneENUM.indexOf(v.tone)]}
                </Tag>
              </TagWrapper>
              <Message>
                {editingStates?.[i].isEditing ? (
                  <div>
                    <EditBox
                      value={editingStates?.[i].text}
                      onChange={(e) => handleTextChange(i, e.target.value)}
                    />
                  </div>
                ) : (
                  <div>‘{v.message}’</div>
                )}
              </Message>
              <EditWrapper>
                {editingStates?.[i].isEditing ? (
                  <>
                    <BottomText
                      onClick={() => handleCancelClick(i)}
                      color={colors.grey1}
                    >
                      취소
                    </BottomText>
                    <BottomText
                      onClick={() => handleSaveClick(i, v.advertisementCopyId)}
                      color={colors.main}
                    >
                      완료
                    </BottomText>
                  </>
                ) : (
                  <>
                    <Image
                      src="/adCopy/edit.svg"
                      alt="edit"
                      width={24}
                      height={24}
                      onClick={() => handleEditClick(i)}
                      style={{ cursor: "pointer" }}
                    />
                    <Image
                      src={
                        currentSave.some(
                          (savedCopy) =>
                            savedCopy.advertisementCopyId ===
                            v.advertisementCopyId
                        )
                          ? "/adCopy/bookmarkRed.svg"
                          : "/adCopy/bookmark.svg"
                      }
                      alt="save"
                      width={24}
                      height={24}
                      onClick={() => handleBookmarkClick(v.advertisementCopyId)}
                      style={{ cursor: "pointer" }}
                    />
                  </>
                )}
              </EditWrapper>
            </CopyWrapper>
          ))}
          <MoreRegion>
            <Link href="/user">
              <Button
                text={"#b4b4b4"}
                background={"#252525"}
                style={{ height: "2.75rem", border: "none" }}
              >
                더보기
              </Button>
            </Link>
          </MoreRegion>
        </BoxContents>
      )}
    </BoxWrapper>
  );
};

export default CopyResult;

const BoxWrapper = styled.div`
  width: 60%;
  padding-left: 1.38rem;
`;
const BoxHeader = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.875rem;
`;
const CategoryBox = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;
const Category = styled.div<{ active: boolean }>`
  color: ${(props) => (props.active ? colors.main : colors.grey1)};
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0.75rem;
  cursor: pointer;
`;
const BoxContents = styled.div`
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow-y: auto;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding-right: 0.875rem;
  &::-webkit-scrollbar-track {
    margin: 1rem;
    border-radius: 10px;
    background-color: ${colors.grey0};
  }
  &::-webkit-scrollbar {
    width: 0.375rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${colors.main};
  }
`;
const CopyWrapper = styled.div`
  display: flex;
  width: 49%;
  height: 12.5rem;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.875rem;
  background: ${colors.grey0};
  padding: 1rem;
  color: ${colors.white};
  text-align: center;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  margin-bottom: 2%;
`;
const TagWrapper = styled.div`
  display: inline-flex;
  gap: 0.5rem;
`;
const Tag = styled.div<{ color: string; background: string }>`
  padding: 0.375rem 0.875rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.375rem;
  border: 1px solid ${(props) => props.color};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const EditWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: end;
  gap: 0.62rem;
`;
const BottomText = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
const EditBox = styled.textarea`
  resize: none;
  height: 4.125rem;
  background-color: ${colors.grey0};
  border: none;
  outline: none;
  color: ${colors.white};
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`;
const MoreRegion = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Message = styled.div`
  height: 4.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
