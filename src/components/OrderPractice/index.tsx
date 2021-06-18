import React, { Component, useState } from 'react';
import classNames from 'classnames';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

import styles from './practice.module.scss';



const SortableItem = SortableElement(({value, word}) => {
    return (
        <div className={ classNames(styles.simpleBlock, word === value ? styles.success : styles.danger )}>
            <div className={styles.item}>
                { value }
            </div>
        </div>
    );
});


const SortableList = SortableContainer(({items, array}) => {
    return (
        <div className={styles.container}>
            { items.map((value, index) => (
                <SortableItem key={`item-${value}`} index={index} value={value} word={array[index]} />      
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

type TypeOrderTest = ITest;

export class OrderPractice extends Component<TypeOrderTest, State> {

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
       
        return (
            <>  
                { items.length && 
                    <div className={ styles.container }>
                        <SortableList items={items} array={array} onSortEnd={this.onSortEnd} axis="xy"/>    
                    </div>
                }
            </>
        ) 
    }
  }