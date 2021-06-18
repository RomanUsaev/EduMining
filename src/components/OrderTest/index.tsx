import React, { Component, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { IRootState } from  '@/interfaces/IRootState';
import Serverclient from  '@/blockchain/serverclient.js';

import styles from './test.module.scss';

const SortableItem = SortableElement(({value, word, isAnswer}) => {
    return (
        <div className={ classNames(styles.simpleBlock, isAnswer ? ((word === value) ? styles.success : styles.danger) : styles.warning )}>
            <div className={styles.item}>
                { value }
            </div>
        </div>
    );
});


const SortableList = SortableContainer(({items, array, isAnswer}) => {
    const [isPointSaved, setPointSaved] = useState(false);
    const [isAnswerTrue, setAnswerTrue] = useState(false);

    const balance = useSelector((state: IRootState) => state.balance);
    const dispatch = useDispatch();
   
    (items.join() == array.join() && !isAnswerTrue) ? setAnswerTrue(true) : null; 

    
    if (isAnswer && isAnswerTrue && !isPointSaved) { 

        const serverClient = new Serverclient('glue senior among welcome ghost right need hazard prepare next collect quarter whip motion monster');
        const serverClientUser = new Serverclient('say blame rare eyebrow anchor tornado patrol gown rather deputy attract reject solve victory impose');
        
        serverClient
            .send('3MwPHX96Nu3fLT4RBuda5bBTeNdvyZRFGUV',100000000)
            .then((transactionData) => {
                console.log('transactionData', transactionData)
                //Здесь транзакция уже ушла в блокчейн, но возможно еще не исполнена

                setTimeout(() => {
                    let serverBalance = 0;
                    serverClientUser.getBalance()
                        .then((balance) => {
                            serverBalance = balance/100000000;;
                            dispatch({
                                type: 'SET_BALANCE',
                                balance: serverBalance,
                            });
                            setPointSaved(true);
                        });                    
                }, 5000);
        });

        
    }

    return (
        <div className={styles.container}>
            { items.map((value, index) => (
                <SortableItem key={`item-${value}`} index={index} value={value} word={array[index]} isAnswer={isAnswer}/>      
            )) }
        </div>
    );
});


const createState = (props) => {
    const { exercise } = props;
    const array = exercise.split('');
    const initialItems = exercise.split('');

    while (array[0] === initialItems[0]) {
        initialItems.sort(() => Math.random() - 0.5);
    }
    return initialItems;   
}


type ITest = {
    exercise: string;
}

type State = {
    items: string[],
    array: string[],
}
type Answer = {
    isAnswer: boolean,
}
type TypeOrderTest = ITest & Answer;
export class OrderTest extends Component<TypeOrderTest, State> {

    constructor(props) {
        super(props);
        this.state = { 
            items: createState(props),
            array: props.exercise.split(''),
        }
    }
   
    
    onSortEnd = ({oldIndex, newIndex}) => {
      this.setState(({ items }) => ({
        items: arrayMove(items, oldIndex, newIndex),
      }));
    };

    
    render() {
        const { items, array } = this.state; 
        const { isAnswer } = this.props; 
       
        return (
            <>  
                { items.length && 
                    <div className={ styles.container }>
                        <SortableList items={items} array={array} onSortEnd={this.onSortEnd} axis="xy" isAnswer={isAnswer}/>    
                    </div>
                }
            </>
        ) 
    }
  }