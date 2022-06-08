import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Data from '../datas/data.json'
import { Picker } from '@react-native-picker/picker'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

/* Select _id */
const selectId = (id) => {
    return Data.find(item => item._id === id)
}


/* target first id from data.json and show name user */
const HomeScreen = ({navigation}) => {
    const [id, setId] = React.useState(Data[0]._id)
    const [user, setUser] = React.useState(Data[0].user)
    const [incomes, setIncomes] = React.useState(Data[0].incomes)
    const [expenses, setExpenses] = React.useState(Data[0].expenses)
    const [date, setDate] = React.useState(Data[0].date)
    const [amount, setAmount] = React.useState(Data[0].amount)
    const [category, setCategory] = React.useState(Data[0].category)
    const [comments, setComments] = React.useState(Data[0].comments)
    const [_id_income, set_id_income] = React.useState(Data[0]._id_income)

    /* calculate total incomes with the amount  */
    const totalIncome = incomes.map(item => item.amount.replace('€', '').replace(',', '')).reduce((acc, item) => parseFloat(acc) + parseFloat(item), 0).toFixed(2)

    /* calculate total expenses with the amount  */
    const totalExpenses = expenses.map(item => item.amount.replace('€', '').replace(',', '')).reduce((acc, item) => parseFloat(acc) + parseFloat(item), 0).toFixed(2)

    /* calculate total balance with the amount  */
    const totalBalance = (parseFloat(totalIncome) - parseFloat(totalExpenses)).toFixed(2)

    

    return (
        /* select id with picker */
        <View style={styles.container}>
            <Picker
                selectedValue={id}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) => {
                    setId(itemValue)
                    setUser(selectId(itemValue).user)
                    setIncomes(selectId(itemValue).incomes)
                    setExpenses(selectId(itemValue).expenses)
                    setDate(selectId(itemValue).date)
                    setAmount(selectId(itemValue).amount)
                    setCategory(selectId(itemValue).category)
                    setComments(selectId(itemValue).comments)
                    set_id_income(selectId(itemValue)._id_income)
                }}>
                {Data.map(item => <Picker.Item label={item.user} value={item._id} key={item._id} />)}
            </Picker>
            <View style={styles.container}>
                <Card style={{width: '100%', height: '50%'}}>
                    <Card.Title title={user} subtitle="Information du compte" />
                    <Card.Content>
                        <Paragraph style={[totalBalance > 0 ? {color: 'green'} : {color: 'red'},styles.paragraph]}>Solde du compte: {totalBalance}</Paragraph>
                        <Paragraph style={styles.paragraphplus}>Total des revenus: +{totalIncome}</Paragraph>
                        <Paragraph style={styles.paragraphless}>Total des dépenses: -{totalExpenses}</Paragraph>
                    </Card.Content>
                </Card>
            </View>
            <Button style={styles.button} icon="bank-transfer-out" mode="contained" onPress={() => navigation.navigate('Gestion')}>
                Ajoutez une depense
            </Button>
            <Button style={styles.button} icon="bank-transfer-in" mode="contained" onPress={() => navigation.navigate('Gestion')}>
                Ajoutez un revenu
            </Button>
        </View>
    )
}



export default HomeScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    paragraphplus: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'green'
    },
    paragraphless: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'red'
    }
})