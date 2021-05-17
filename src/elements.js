import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Section = styled.section`
  box-shadow: 0px 7px 11px grey;
  background: #bcd2ee;
  border-radius: 30px;
  padding: 10pxpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  max-width: 700px;
  box-sizing: content-box;
`;

export const MemeImage = styled.img`
  max-width: 400px;
  max-height: 400px;
  border-radius: 10px;
  align-self: center;
  border: 2px solid #000080;
  margin: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  margin: 10px;
  border-radius: 10px;
  border: 2px solid #000080;
  font-size: 20px;
  text-align: left;
  padding: 10px;

  &::placeholder {
    color: rgba(160, 160, 160);
  }
`;

export const H1 = styled.h1`
  font-size: 50px;
  font-family: 'Chewy', cursive;
  text-align: center;
  color: #000080;
  text-shadow: 2px 2px #76e7cd;
`;

export const Select = styled.select`
  margin: 10px;
  border-radius: 10px;
  border: 2px solid #000080;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
`;

export const Label = styled.label`
  font-size: 20px;
  font-family: 'Chewy';
  color: #000080;
`;

export const Button = styled.button`
  font-family: 'Chewy';
  font-size: 30px;
  background-color: #52050a;
  color: #76e7cd;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;

  &:active {
    background-color: #000080;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const ButtonDiv = styled.div`
  align-content: space-between;
`;

export const Span = styled.span`
  display: flex;
  align-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
`;
