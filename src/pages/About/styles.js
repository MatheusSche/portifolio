import styled from 'styled-components';

import pic from '../../assets/images/pic.jpg';

export const Container = styled.section`
  background: url(${pic}) no-repeat left;
  background-size: 55%;
  background-color: #fdfdfd;
  overflow: hidden;
  padding: 100px 0;
  
  margin-left: 150px; 
  
`;

export const DivInner = styled.div`
   width: 55%;
   float: right;
   background-color: #fdfdfd;
   padding: 90px;
   margin-top: 50px;

   h1 {
     margin-bottom: 30px;
     font-size: 30px;
     font-weight: 900;
   }

   p {
     font-size: 13px;
     color: #545454;
     line-height: 30px;
     text-align: justify;
     margin-bottom: 40px;
   }
`;

export const DivSkills = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 13px;
`;
