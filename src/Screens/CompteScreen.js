import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Data from '../datas/data.json'
import { Picker } from '@react-native-picker/picker'
import { Card, List, Modal, Portal, Paragraph } from 'react-native-paper';



const selectId = (id) => {
    return Data.find(item => item._id === id)
}



/* show all incomes and expenses in list with the comments and categoty and date compared id */
const GestionScreen = () => {
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
        <ScrollView>
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
                    }
                    }>
                    {Data.map((item, index) => {
                        return <Picker.Item label={item.user} value={item._id} key={item._id} />
                    }
                    )}
                </Picker>
                <Card style={styles.card}>
                    <Card.Title title="Revenus" />
                    <List.Section>
                        {incomes.map((item, index) => {
                            return (
                                <List.Accordion
                                    title={item.category}
                                    description={item.amount}
                                    left={props => <List.Icon {...props}/>}
                                    key={item._id}
                                >
                                    <List.Item title={item.date} />
                                    <List.Item titleNumberOfLines={2} title={item.comments} />
                                </List.Accordion>
                            )
                        }
                        )}
                    </List.Section>
                </Card>
                <Card style={styles.card}>
                    <Card.Title title="Depenses" />
                    <List.Section>
                        {expenses.map((item, index) => {
                            return (
                                <List.Accordion
                                    title={item.category}
                                    description={item.amount}
                                    left={props => <List.Icon {...props}/>}
                                    key={item._id}
                                >
                                    <List.Item title={item.date} />
                                    <List.Item titleNumberOfLines={2} title={item.comments} />
                                </List.Accordion>
                            )
                        }
                        )}
                    </List.Section>
                </Card>
                <Card style={styles.card}>

                    <Card.Title title="Balance" />
                    <List.Item
                        title={`${totalBalance} €`}
                        description={`${totalIncome} € - ${totalExpenses} €`}
                        right={props => <List.Icon {...props} icon="arrow-right" />}
                    />
                </Card>
            </View>
        </ScrollView>
    )
}
export default GestionScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200,
        marginBottom: 200,
        marginLeft: 200,
        marginRight: 200,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 20,
        width: '100%',
        height: '100%',
    },
})

