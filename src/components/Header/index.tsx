import logoImg from "../../assets/logo.svg";
import { Container, Content, Button } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt-money" />
        <Button>Nova transação</Button>
      </Content>
    </Container>
  );
}
