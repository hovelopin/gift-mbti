import styled from '@emotion/styled';
import React from 'react';

const LoadingWrapper = styled.div`
  position: relative;
`;
const LoadingTitle = styled.p`
  position: absolute;
  top: 274px;
  left: 115px;
  width: 144px;
  height: 46px;
  font-weight: 800;
  font-size: 20px;
  text-align: center;
  margin: 0 auto;
`;

const LoadingImg = styled.img`
  position: absolute;
  top: 354px;
  left: 135px;
`;

const loading = () => {
  return (
    <LoadingWrapper>
      <LoadingTitle>선물 유형을 분석 중입니다...</LoadingTitle>
      <LoadingImg src="/img/loading.svg" />
    </LoadingWrapper>
  );
};

export default loading;
