import styled from "styled-components";

export const OtherPiusWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PrincipalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  img {
    object-fit: cover;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    margin: 1.5rem;
  }
`;

export const FirstName = styled.p`
  margin-right: 58rem;
`;

export const Arroba = styled.p`
  margin-right: 1rem;
  margin-top: 4rem;
`;
export const PiuTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Text = styled.p`
  font-size: 2rem;
  height: 12rem;
  margin: 2rem 0 0 2rem;
`;
export const InterationsWrapper = styled.div`
  display: flex;
  margin: 2rem;
  justify-content: space-between;
  p {
    font-size: 2rem;
  }
  input {
      padding: -40rem;
  }
`;
export const ReplieWrapper = styled.div`
  display: flex;
  margin-right: -27rem;
  padding-right: 5rem;
  p {
      margin-left: 1rem;
  }

`;
export const RepiuWrapper = styled.div`
  display: flex;
  margin-right: -22rem;
  img {
      height: 3rem;
  }
`;
export const LikeWrapper = styled.div`
  display: flex;
  img {
      height: 3rem;
  }
  p{
      margin-left: 1rem;
  }
`;

export const Buttons = styled.div`
    display: flex;
    button {
        color: white;
        height: 3rem;
        width: 9rem;
        margin: 1rem;
        background-color: var(--red-default);
        border-radius: 3rem;
        cursor:pointer;
    }
`
export const DeletePiu = styled.button<{delete: boolean}>`
    display:${props => props.delete? 'initial':'none'}
`