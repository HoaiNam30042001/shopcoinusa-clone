import { RefreshIcon } from '../Icons';
import styles from './BuyCoin.module.css'
import className from 'classnames/bind'
import Image from '../Image/Image';
import FormInput from '../FormInput/FormInput';
import { useState } from 'react';
import Button from '../Button/Button';
const cx = className.bind(styles);
export default function BuyCoin({props}) {
    const [amount,setAmount] = useState("")
    const checkoutAmount = ()=>{

    }
    return(
        <div className={`${cx("container")}`}>
            <div className={`${cx("container-btn")}`}>
                <button className={`${cx("btn")}`}>
                    <RefreshIcon className={`${cx("icon")}`}/>
                    <a className={`${cx("btn-text")}`}>
                        Refresh Page
                    </a>
                </button>
            </div>
            <div className={`${cx("container-content")}`}>
                    <span className={`${cx("general-button-text")}`}>
                        <Image 
                            src="https://api.shopcoinusa.com/images/1668066926257-ETH.png"
                            // alt={props.url}
                            className={`${cx('image-coin')}`}
                        />
                    </span>
                    <div className={`${cx("container-content-form")}`}>
                        <div className={`${cx("container-content-symbol")}`}>
                            <div className={`${cx("symbol-label")}`}>
                                Symbol
                            </div>
                            <div className={`${cx("symbol-value")}`}>
                                ETH
                            </div>
                        </div>
                        <div className={`${cx("container-content-symbol")}`}>
                            <span className={`${cx("symbol-label")}`}>
                                Price
                            </span>
                            <span className={`${cx("symbol-value-price")}`}>
                                1232132
                            </span>
                        </div>
                        <FormInput
                            className={`${cx('form-input')}`}
                            placeholder="Enter amount by"
                            type="number"
                            label="Amount by"
                            setInput = {setAmount}
                            checkInput = {checkoutAmount}
                        />
                        <div className={`${cx("suggetAmount")}`}>
                            Suggest Amount
                        </div>
                        <div className={`${cx("min")}`}>
                            Min
                        </div>
                        <div className={`${cx("max")}`}>
                            Max
                        </div>
                        <div className={`${cx("amount")}`}>
                            Amount
                        </div>
                        <div className={`${cx("container-content-btn")}`}>
                            <Button
                                buttonName="Submit"        
                                className={`${cx("btn-input-buyCoin")}`}
                                classNameTitle = {`${cx("btn-title")}`}
                                isProcess = {true}
                                // onEnter = {props.onEnter}         
                                // isValue={props.isValue}       
                                // isProcess ={props.isProcess}
                                // setIsProcess = {props.setIsProcess}
                            />
                        </div>
                        </div>
            </div>               
        </div>
    )
}