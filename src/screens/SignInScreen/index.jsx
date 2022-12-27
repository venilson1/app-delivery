import { Controller, useForm } from "react-hook-form";
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
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export default () => {

    const navigation = useNavigation();

    const { handleSubmit, control, formState : { errors } } = useForm();

    useEffect(() => console.log({ email: errors?.email, senha: errors?.password}));

    const onSubmit = (data) => {
        console.log(data);
        //recebo os dados dos inputs aqui
    };

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'SignUp' }]
        });
    }

    return (
        <Container>
            <Pizza width={'100%'} height={160} />

            <InputArea>

                <Controller
                control={control}
                name="email"
                rules={{
                    required: "E-mail é obrigátorio",
                    pattern: {
                        message: "E-mail inválido", 
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    }
                }}
                    render={({ field: { value, onChange }}) => (
                        <SignInput 
                            IconSvg={EmailIcon} 
                            placeholder={"Digite seu e-mail"} 
                            value={value || ''} 
                            onChangeText={onChange} 
                            autoCapitalize="none" />
                    )}
                />

                <Controller
                control={control}
                name="password"
                rules={{
                    required: "Senha é obrigátorio",
                }}
                
                    render={({ field: { value, onChange }}) => (
                        <SignInput 
                            IconSvg={LockIcon} 
                            placeholder={"Digite sua senha"} 
                            value={value || ''} 
                            onChangeText={onChange} 
                            secureTextEntry />
                    )}
                />

                <CustomButtom onPress={handleSubmit(onSubmit)}>
                    <CustomButtomText>Entrar</CustomButtomText>
                </CustomButtom>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageText>Ainda não possui uma conta ?</SignMessageText>
                <SignMessageTextBold>Cadastre-se</SignMessageTextBold>
            </SignMessageButton>
            
        </Container>
    )
}