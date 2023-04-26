import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import useTransactions from '../../useTransactions';
import useStyles from './styles';

//returning the details of income and expenses classes
const Details = ({ title }) => {
    const classes = useStyles();
    //de-structure the customHook
    const { total, chartData } = useTransactions(title);
    console.log(chartData)
    return (
        <Card className={title === "Income" ? classes.income : classes.expense}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant="h5">₹{total}</Typography>
                {}
                {}
            </CardContent>
        </Card>
    )
}

export default Details
