import styled from 'styled-components';
import { CustomBtnContainer } from '../CustomBtn/CustomBtn-styled';

export const CollectionOverviewContainer = styled.div`
   display: flex;
   flex-direction: column;

   & > ${CustomBtnContainer} {
      width: 20%;
      min-width: 230px;
      align-self: center;
   }
`;