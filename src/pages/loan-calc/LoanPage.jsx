
import {useSelector,useDispatch} from 'react-redux'
import { calcInterest,interestBy } from './loanpage.slice'

import { useEffect } from 'react'
import { div } from '../counter/counter.slice'

export default function LoanPage(){

    const count = useSelector((state) => state.counter.count)
    const principalAmt = useSelector((state) => state.loanData.principalAmt)
    const interestRate = useSelector((state)=> state.loanData.interestRate)

    const dispatch = useDispatch()

    return <div>
        <h2> LoanPage </h2>
        <p> Previous counter : {count} </p>
        <p> Principal Amt - {principalAmt} </p>
        <p> Interest Rate - {interestRate} </p>
        <button onClick={() => dispatch(calcInterest())}> Calc Interest </button>
        <button onClick={() => dispatch(interestBy({"percentage":9}))}> Cal by 9 percentage </button>
    </div>
}