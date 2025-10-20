import { useSelector } from "react-redux"
import { allTransactions } from "./transactionsSlice"
import RoundedDetail from "../../components/RoundedDetail";
import ManageTransaction from "../../containers/transactionsContainer";
import { totalTrans } from "./transactionsSlice";
import { ConvertToDecimal } from "../../helpers/helperFunction";

export default function Transactions () {

    const loadTransactions = useSelector(allTransactions);
    return (
        <>
            <div className="w-full">
                <div className="grid grid-cols-1 p-2 ">
                    <div className="flex justify-between">
                        <p className="text-white">Transactions</p>
                        <p className="text-white float-right">Total : {ConvertToDecimal(totalTrans)} </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {/* todo: to add default message if there's no transaction added */}
                        <RoundedDetail text='test' />
                        <RoundedDetail text='test' />
                        <RoundedDetail text='test' />
                        <RoundedDetail text='test' />
                        <ManageTransaction />

                </div>
                
                

            </div>
            
        </>
    )
}