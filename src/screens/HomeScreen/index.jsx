import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default () => {

    const navigation = useNavigation();

    return (
        <Container>
            <span>Home</span>
        </Container>
    )
}