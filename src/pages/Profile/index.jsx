import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";

import { Container, Form } from "./styles";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha Atual" type="password" icon={FiLock} />
        <Input placeholder="Senha Nova" type="password" icon={FiLock} />
      </Form>
    </Container>
  );
}
