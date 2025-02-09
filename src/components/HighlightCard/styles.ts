import styled from "styled-components/native";
import {Feather} from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
    type: 'up' | 'down' | 'total'
} 

export const Container = styled.View<TypeProps>`
    background-color: ${({theme, type}) => type === 'total' ? theme.colors.secondary : theme.colors.shape};
    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;
    margin-right: 16px;

    
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`; 

export const Title = styled.Text<TypeProps>`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};

` 

export const Icon = styled(Feather)<TypeProps>`
    font-size: ${RFValue(40)}px;
    ${props => props.type === 'up' && `color: ${props.theme.colors.success}`};
    ${props => props.type === 'down' && `color: ${props.theme.colors.attention}`};
    ${props => props.type === 'total' && `color: ${props.theme.colors.shape}`};
    ` 

export const Footer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 19px;
`;

export const Amount = styled.Text<TypeProps>`
    font-size: ${RFValue(32)}px;
    font-family: ${({theme}) => theme.fonts.medium};
    margin-top: 38px;
    color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};
` 

export const LastTransaction = styled.Text<TypeProps>`
    font-size: ${RFValue(12)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.text};
    `