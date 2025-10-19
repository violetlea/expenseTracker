import RoundedDetail from "../components/RoundedDetail";
import { useSelector } from "react-redux";
import { allTransactions } from "../features/transactions/transactionsSlice";
import { useDispatch } from "react-redux";
import { removeTransaction } from "../features/transactions/transactionsSlice";
import { editBudget } from "../features/budgets/budgetsSlice";
import { ConvertToDecimal } from "../helpers/helperFunction";

export default function ManageTransaction (props) {

    //const {values,index,handleRemoveItem} = props;

    const loadTransactions = useSelector(allTransactions);
    const dispatch = useDispatch();

    const handleRemoveItem = (index,transaction) => {
        dispatch(removeTransaction(index));
        const payloadForRemoval = {
            Category: transaction.Category,
			Amount: ConvertToDecimal(transaction.Amount) ,
			isRemoval: true
        };
        dispatch(editBudget(payloadForRemoval));

    }


    return (
        <>
            
            <div className="w-full p-2">
                <p className="text-white m-1">Transactions</p>
                
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <RoundedDetail text='test' />
                    <RoundedDetail text='test' />
                    <RoundedDetail text='test' />
                    <RoundedDetail text='test' />
                    {
                        loadTransactions.map((transaction,index) => (
                            <RoundedDetail 
                            text={`${transaction.Category} 
                            - (${transaction.Description}) - ${ConvertToDecimal(transaction.Amount) }`} 
                            key={index}
                            handleRemoveAction={() => handleRemoveItem(index,transaction)} />
                        ))
                    }
                    
                </div>
                <div>
                    <p className="text-white">Total</p>

                </div>
                
						


			</div>
        </>
    );
}