import { Container, LoadingIcon } from "./styles";
import Pizza from "../../../assets/icons/pizza.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default () => {

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
    
            if(!token) return navigation.navigate('SignIn');
        }
        checkToken();
    }, [])


    return (
        <Container>
            <Pizza width={'100%'} height={160} />
            <LoadingIcon size="large" color="#ffffff"/>
        </Container>
    )
}