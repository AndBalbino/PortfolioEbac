import styled from 'styled-components'

export const Botao = styled.button`
  font-size: 10px;
  padding: 10px;
  border-radius: 12px;
  color: ${(props) => props.theme.corEscritaBotao};
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  border: none;
  cursor: pointer;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
