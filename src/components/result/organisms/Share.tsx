import styled from '@emotion/styled';
import Button from '../atoms/Button';
import ShareButton from '../atoms/ShareButton';

const ShareContainer = styled.section`
  margin-top: 105px;
  height: 377px;
  display: flex;
  flex-direction: column;

  font-weight: 500;
  font-size: 15px;
  line-height: 150%;

  color: #514e4e;
  background: ${(props) => props.color};
`;

const ShareTitle = styled.div`
  margin: auto auto 17px;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 12px;
`;

interface IShare {
  bgColor: string;
  color: string;
}

const Share = ({ bgColor, color }: IShare) => {
  return (
    <ShareContainer color={bgColor}>
      <ShareTitle>결과 공유하기</ShareTitle>
      <ShareButton color={color} />
      <ButtonContainer>
        <Button color={color} text="다른 유형 보기" type="defult" />
        <Button color={color} text="테스트 다시하기" type="reverse" />
      </ButtonContainer>
    </ShareContainer>
  );
};

export default Share;
