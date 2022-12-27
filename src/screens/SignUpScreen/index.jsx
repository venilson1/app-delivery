import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { 
    ContainerScroll, 
    CustomButtom, 
    CustomButtomText, 
    InputArea, 
    PizzaIconArea, 
    SignMessageButton, 
    SignMessageText, 
    SignMessageTextBold
 } from "./styles";
 import SignInput from "../../components/SignInput";

import Pizza from "../../../assets/icons/pizza.svg";
import EmailIcon from "../../../assets/icons/email.svg";
import LockIcon from "../../../assets/icons/lock-closed.svg";
import LocationSharpIcon from "../../../assets/icons/location-sharp.svg";
import MapIcon from "../../../assets/icons/map.svg";
import PersonIcon from "../../../assets/icons/person.svg";
import FingerPrintIcon from "../../../assets/icons/finger-print.svg";
import LogoWhatsAppIcon from "../../../assets/icons/logo-whatsapp.svg";
import StoreFrontIcon from "../../../assets/icons/storefront.svg";



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
            routes: [{ name: 'SignIn' }]
        });
    }

    return (
            <ContainerScroll>
                <PizzaIconArea>
                    <Pizza width={'100%'} height={160} />
                </PizzaIconArea>

                <InputArea>
                    <Controller
                    control={control}
                    name="first_name"
                    rules={{
                        required: "Primeiro nome é obrigatório",
                    }}
                        render={({ field: { value, onChange }}) => (
                            <SignInput 
                                IconSvg={PersonIcon} 
                                placeholder={"Digite seu primeiro nome *"} 
                                value={value || ''} 
                                onChangeText={onChange} 
                                autoCapitalize="none" />
                        )}
                    />

                    <Controller
                    control={control}
                    name="last_name"
                    rules={{
                        required: "Último nome é obrigatório",
                    }}
                        render={({ field: { value, onChange }}) => (
                            <SignInput 
                                IconSvg={PersonIcon} 
                                placeholder={"Digite seu último nome * "} 
                                value={value || ''} 
                                onChangeText={onChange} 
                                autoCapitalize="none" />
                        )}
                    />
                    

                    <Controller
                    control={control}
                    name="address"
                    rules={{
                        required: "Endereço é obrigátorio",
                    }}
                    
                        render={({ field: { value, onChange }}) => (
                            <SignInput 
                                IconSvg={LocationSharpIcon} 
                                placeholder={"Digite seu endereço *"} 
                                value={value || ''} 
                                onChangeText={onChange} 
                             />
                        )}
                    />

                    <Controller
                    control={control}
                    name="complement"
                        render={({ field: { value, onChange }}) => (
                            <SignInput 
                                IconSvg={MapIcon} 
                                placeholder={"Digite o complemento"} 
                                value={value || ''} 
                                onChangeText={onChange} 
                             />
                        )}
                    />

                    <Controller
                    control={control}
                    name="reference_point"
                        render={({ field: { value, onChange }}) => (
                            <SignInput 
                                IconSvg={StoreFrontIcon} 
                                placeholder={"Digite um ponto de referência"} 
                                value={value || ''} 
                                onChangeText={onChange} 
                             />
                        )}
                    />

                    <Controller
                    control={control}
                    name="cpf"
                    rules={{
                        required: "Cpf é obrigátorio",
                    }}
                    
                        render={({ field: { value, onChange }}) => (
                            <SignInput 
                                IconSvg={FingerPrintIcon} 
                                placeholder={"Digite seu cpf *"} 
                                value={value || ''} 
                                onChangeText={onChange} 
                            />
                        )}
                    />

                    <Controller
                    control={control}
                    name="cell_phone"
                    rules={{
                        required: "Telefone é obrigátorio",
                        // pattern: {
                        //     message: "TESTE", 
                        //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        // }
                    }}
                        render={({ field: { value, onChange }}) => (
                            <SignInput 
                                IconSvg={LogoWhatsAppIcon} 
                                placeholder={"Digite seu telefone"} 
                                value={value || ''} 
                                onChangeText={onChange} 
                                autoCapitalize="none" />
                        )}
                    />

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
                        <CustomButtomText>Cadastrar</CustomButtomText>
                    </CustomButtom>
                </InputArea>

                <SignMessageButton onPress={handleMessageButtonClick}>
                    <SignMessageText>Possui uma conta ?</SignMessageText>
                    <SignMessageTextBold>Login</SignMessageTextBold>
                </SignMessageButton>
                
            </ContainerScroll>
    )
}