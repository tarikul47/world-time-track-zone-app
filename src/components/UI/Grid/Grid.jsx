import styled from 'styled-components';

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 30px;
grid-row-gap: 35px;
`;

export default Grid;