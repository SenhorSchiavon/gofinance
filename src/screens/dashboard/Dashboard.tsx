import React from "react";
import { Container, Header, UserInfo, Photo, User, UserGreeting, UserName, UserWrapper,LogoutButton, Icon, HighlightCards, Transactions, Title, TransactionList } from "./styles";
import { Text, View } from "react-native";
import {Feather} from '@expo/vector-icons'
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionsCardProps } from "../../components/TransactionCard";

export interface DataListProps extends TransactionsCardProps{
  id:string;
}
export function Dashboard() {
  const transactions: DataListProps[] = [
    { id: "1", type: "positive", title: "Trabalho", amount: "R$ 12.000,00", category: { name: "Vendas", icon: "dollar-sign" }, date: "13/04/2020" },
    { id: "2", type: "negative", title: "Compra de equipamentos", amount: "-R$ 3.500,00", category: { name: "Despesas", icon: "shopping-cart" }, date: "10/04/2020" },
    { id: "3", type: "positive", title: "Freelance", amount: "R$ 2.800,00", category: { name: "Trabalho", icon: "briefcase" }, date: "09/04/2020" },
    { id: "4", type: "negative", title: "Conta de internet", amount: "-R$ 120,00", category: { name: "Contas", icon: "wifi" }, date: "05/04/2020" }
  ];
   
  


  return (
        <Container> 
            <Header>
            <UserWrapper>
              <UserInfo>
                <Photo source={require("../../../assets/gabriel.png")} /> 
                <User>
                  <UserGreeting>Olá,</UserGreeting>
                  <UserName>Gabriel</UserName>
                </User>
              </UserInfo>
              <LogoutButton onPress={()=>{}}>
                <Icon name="power"/>
              </LogoutButton>
              </UserWrapper>
            </Header>
            <HighlightCards>
                <HighlightCard title="Entradas" amount="R$17.400,00" lastTransaction="Última entrada dia 13 de abril" type="up"/>
                <HighlightCard title="Saídas" amount="R$1.259,00" lastTransaction="Última saída dia 03 de abril" type="down"/>
                <HighlightCard title="Total" amount="R$16.141,00" lastTransaction="01 à 16 de abril" type="total"/>
            </HighlightCards>

            <Transactions>
              <Title>Listagem</Title>

              <TransactionList 
               data={transactions}
              keyExtractor={(item:DataListProps) => item.id}
              renderItem={({ item }: { item: DataListProps }) => <TransactionCard data={item} />}
/>

            </Transactions>
        </Container>
    )
}

