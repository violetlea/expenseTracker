import RoundedDetail from "../components/RoundedDetail";
import { useSelector } from "react-redux";
import { allTransactions } from "../features/transactions/transactionsSlice";
import { useDispatch } from "react-redux";
import { removeTransaction } from "../features/transactions/transactionsSlice";

export default function ManageTransaction (props) {

    //const {values,index,handleRemoveItem} = props;

    const loadTransactions = useSelector(allTransactions);
    const dispatch = useDispatch();

    const handleRemoveItem = (index) => {
        dispatch(removeTransaction(index));
    }


    return (
        <>
            
            <div className="w-full p-2">
                <p className="text-white m-1">Transactions</p>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    {
                        loadTransactions.map((transaction,index) => (
                            <RoundedDetail 
                            text={`${transaction.Category} 
                            - (${transaction.Description}) - ${transaction.Amount}`} 
                            key={index}
                            handleRemoveAction={() => handleRemoveItem(index)} />
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