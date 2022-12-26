import { useForm } from "react-hook-form";
import { 
    Container, 
    CustomButtom, 
    CustomButtomText, 
    InputArea, 
    SignMessageButton, 
    SignMessageText, 
    SignMessageTextBold
 } from "./styles";
import Pizza from "../../../assets/icons/pizza.svg";
import SignInput from "../../components/SignInput";

import EmailIcon from "../../../assets/icons/email.svg";
import LockIcon from "../../../assets/icons/lock-closed.svg";

export default () => {

    return (
        <Container>
            <Pizza width={'100%'} height={160} />

            <InputArea>
                <SignInput IconSvg={EmailIcon} placeholder={"Digite seu e-mail"} />
                <SignInput IconSvg={LockIcon} placeholder={"Digite sua senha"} />

                <CustomButtom>
                    <CustomButtomText>Entrar</CustomButtomText>
                </CustomButtom>
            </InputArea>

            <SignMessageButton>
                <SignMessageText>Ainda não possui uma conta ?</SignMessageText>
                <SignMessageTextBold>Cadastre-se</SignMessageTextBold>
            </SignMessageButton>
            
        </Container>
    )
}