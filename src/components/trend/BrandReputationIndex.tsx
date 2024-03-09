import { styled } from "styled-components";
import Image from "next/image";

const rankData = ["이병헌", "조승우", "김수현"];

const BrandReputationIndex = () => {
  return (
    <>
      <Label>
        영화배우 부문 <span>4위</span>
      </Label>
      <Layout>
        <Genre>영화배우 부문</Genre>
        <LineBox>
          <Image src="/trend/line1.svg" alt="line" width={50} height={30} />
          <Image src="/trend/line2.svg" alt="line" width={50} height={30} />
          <Image src="/trend/line3.svg" alt="line" width={50} height={30} />
        </LineBox>
        <RankBox>
          {rankData.map((name, index) => (
            <Rank>
              <span>{index + 1}위</span> {name}
            </Rank>
          ))}
        </RankBox>
      </Layout>
    </>
  );
};

export default BrandReputationIndex;

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
`;

const Label = styled.div`
  color: ${({ theme }) => theme.colors.grey5};
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 0.78rem;
  span {
    color: ${({ theme }) => theme.colors.main};
  }
`;

const Genre = styled.div`
  color: ${({ theme }) => theme.colors.grey5};
  font-size: 1.2rem;
  font-weight: 700;
  background: ${({ theme }) => theme.colors.main};
  border-radius: 100px;
  width: 40%;
  text-align: center;
  padding: 0.6rem 0;
  margin-left: 0.78rem;
`;

const LineBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RankBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-right: 2rem;
`;

const Rank = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.white};
  span {
    color: ${({ theme }) => theme.colors.mainLight1};
  }
`;
