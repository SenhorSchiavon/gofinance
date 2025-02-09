import { Button } from "../../components/Forms/Button";
import { CategorySelectButton } from "../../components/Forms/CategorySelect";
import { Input } from "../../components/Forms/Input";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { Container, Header, Title,Form, Fields,TransactionTypes } from "./styles";
import { useState } from "react";
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from "react-native";
import { CategorySelect } from "../CategorySelect";
import { InputForm } from "../../components/Forms/InputForm";
import { useForm } from "react-hook-form";
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

interface FormData{
    name:string;
    amount:string;
}

const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório!'),
    amount: Yup.number()
        .typeError("Informe um valor numérico")
        .positive("O valor não pode ser negativo")
        .required("O valor é obrigatório!"),
});



export function Register(){
    const [transactionType, setTransactionType] = useState("")
    const [categoryModalOpen, setCategoryModalOpen] =useState(false)
    const [category, setCategory] = useState({
        key:"category",
        name:"Categoria",
    })
    const {control, handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(schema)}
    )
    function handleCLoseSelectCategoryModal() {
        console.log("Fechando modal..."); // Debug
        setCategoryModalOpen(false);
    }
    
    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true)
    }
    function handleTransactionsTypeSelect(type:'up'|'down'){
        setTransactionType(type);
    }

    function handleRegister(form: FormData){
        if(!transactionType){
            return Alert.alert("Erro!!!", "Selecione o tipo da transação!")
        }
        if(category.key==="category"){
            return Alert.alert("Erro!!!","Selecione a categoria!")
        }

        const data ={
            name : form.name,
            amount: form.amount,
            transactionType,
            category:category.key
        }
        console.log(data)
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            <Header>
                <Title>
                    Cadastro
                </Title>
            </Header>
        <Form>
            <Fields>
            <InputForm name="name" control={control} placeholder="Digite um nome." autoCapitalize="sentences"
            autoCorrect = {false} error={errors.name?.message}/>
            <InputForm name="amount" control={control} placeholder="Digite um preço." keyboardType="numeric"
            error={ errors.amount?.message}/>
            <TransactionTypes>
            <TransactionTypeButton 
  type="up" 
  title="Ganho" 
  onPress={() => handleTransactionsTypeSelect("up")} 
  isActivity={transactionType === "up"} 
/>

<TransactionTypeButton 
  type="down" 
  title="Gasto" 
  onPress={() => handleTransactionsTypeSelect("down")} 
  isActivity={transactionType === "down"} 
/>

            </TransactionTypes>
            <CategorySelectButton title={category.name || "Categoria"} onPress={handleOpenSelectCategoryModal}/>
            </Fields>
            <Button title="Enviar" onPress={handleSubmit(handleRegister)}/>
        </Form>
        <Modal visible={categoryModalOpen}>
            <CategorySelect category={category} setCategory={setCategory} closeSelectCategory={handleCLoseSelectCategoryModal}/>
        </Modal>
        </Container>
        </TouchableWithoutFeedback>
    )
}