import { TouchableOpacityProps } from "react-native";
import { Container,Icon, Title, Button } from "./style";

interface Props extends TouchableOpacityProps{
    title:string;
    type: "up"|"down"
    isActivity : boolean
}

const icons ={
    up:"arrow-up-circle",
    down:"arrow-down-circle"
}

export function TransactionTypeButton({title,type, isActivity, ...rest}:Props){
    return(
        <Container type={type}  isActivity={isActivity}>
            <Button {...rest}>
            <Icon name={icons[type]} type={type} />
            <Title>{title}</Title>
            </Button>
        </Container>
    )
}