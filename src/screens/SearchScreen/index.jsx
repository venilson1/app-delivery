import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

export default () => {

    const navigation = useNavigation();

    return (
        <Container>
            <Text>Search</Text>
        </Container>
    )
}