import styled, { css } from 'styled-components';

const ItemWidth = css`
   width: 23%;
`;

export const CheckoutItemContainer = styled.div`
   width: 100%;
   display: flex;
   min-height: 100px;
   border-bottom: 1px solid darkgrey;
   padding: 15px 0;
   font-size: 20px;
   align-items: center;
`;

export const ImageContainer = styled.div`
   ${ItemWidth}
   padding-right: 15px;

   img {
   width: 100%;
   height: 100%;
   }
`;

// section container is for .name and .price
export const SectionContainer = styled.span`
   ${ItemWidth}
`;

export const QuantityContainer = styled.span`
   ${ItemWidth}
   display: flex;
`;

export const ValueContainer = styled.span`
   margin: auto 10px;
`;

export const ArrayContainer = styled.div`
   cursor: pointer;
   user-select: none;
`;

export const RemoveBtnContainer = styled.div`
   padding-left: 12px;
   cursor: pointer;
`;