import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./style";

interface Props extends TouchableOpacityProps{
    title:string;
    onPress?: ()=>void;
}

export function Button({title, onPress}:Props){
    return(
        <Container onPress={onPress}>
            <Title>{title}</Title>
        </Container>
    )
}