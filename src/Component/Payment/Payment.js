import classNames from "classnames/bind";
import style from './Payment.modules.css'
import General from "../General/General";
import DataPayment from "../../utils/Data/Payment";
import { DeleteIcon, EditIcon } from "../Icons";
import Button from "../Button/Button";
const cx = classNames.bind(style)
export function Payment(props) {
    let createNewPayment = ()=>{
        console.log("add payment")
    }
    let data = [
        {
            No:"1",
            AccountName:"test_admin",
            BankName:"BIDV",
            AcountNumber:"1",
            Type:"Admin"
        },
        {
            No:"2",
            AccountName:"test_user",
            BankName:"Argibank",
            AcountNumber:"2",
            Type:"User"
        },
        {
            No:"3",
            AccountName:"test_user1",
            BankName:"LpBank",
            AcountNumber:"3",
            Type:"User"
        }
    ]
    let RenderTableData = ({data})=>{
        if (data.length !== 0) {
            return (
                <>
                {
                    data.map((item,index)=>{
                        return (
                        <tr>
                            <td className={`${cx("item")}`}>
                                {item.No}
                            </td>
                            <td className={`${cx("item")}`}>
                                {item.AccountName}
                            </td>
                            <td className={`${cx("item")}`}>
                                {item.BankName}
                            </td>
                            <td className={`${cx("item")}`}>
                                {item.AcountNumber}
                            </td>
                            <td className={`${cx("item")}`}>
                                {
                                    item.Type === "User" ? 
                                        <div className={`${cx("type_user")}`}>
                                            User
                                        </div>
                                        :
                                        <div className={`${cx("type_admin")}`}>
                                            Admin
                                        </div>
                                }
                            </td>
                            <td className={`${cx("item")}`}>
                                <div>
                                    <EditIcon
                                        className={`${cx("editIcon")}`}
                                    />
                                    <DeleteIcon
                                        className={`${cx("deleteIcon")}`}
                                    />
                                </div>
                            </td>
                          
                        </tr>    
                        )
                   
                    })
                }
                </>
            );
        } else {
            let lengthHeader = Object.keys(DataPayment().headers).length
            return (
                <tr>
                    <td colSpan={lengthHeader} style={{ textAlign: "center" }}>
                        No Data
                    </td>
                </tr>
            )
        }
    }
    return (
        <>
            <General
                className ={cx("btn-create-newPayment")}
                dataHeaders={DataPayment().headers}
                noActions
                isAddPaymentBtn = {true}
                addPaymentBtn = {
                    <Button
                        className={`${cx("btn-create-payment")}`}
                        classNameTitle = {`${cx("btn-create-payment-title")}`}
                        buttonName="New Payment"
                        isProcess = {false}
                        icon ={
                            <span className={`${cx("plus-icon")}`}>+</span>
                        }
                        onEnter = {createNewPayment}         
                        // isValue={props.isValue}       
                        // isProcess ={props.isProcess}
                        // setIsProcess = {props.setIsProcess}
                    />
                }
            >
                <RenderTableData
                    data={data}  
                />
            </General>
          
        </>
    )
}