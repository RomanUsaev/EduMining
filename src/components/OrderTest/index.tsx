import React, { Component, useState } from 'react';
import classNames from 'classnames';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

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
    const [isAnswerTrue, setAnswerTrue] = useState(false);

    (items.join() == array.join() && !isAnswerTrue) ? setAnswerTrue(true) : null; 

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