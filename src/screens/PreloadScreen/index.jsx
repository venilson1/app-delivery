import { Container, LoadingIcon } from "./styles";
import Pizza from "../../../assets/icons/pizza.svg";

export default () => {
    return (
        <Container>
            <Pizza width={'100%'} height={160} />
            <LoadingIcon size="large" color="#ffffff"/>
        </Container>
    )
}