import { useState } from 'react'

import { useAppSelector, useAppDispatch } from '@/store/hook'
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    selectCount,
} from '@/store/counterSlice'
import styles from './Counter.module.css'

function Counter() {
    const dispatch = useAppDispatch()
    const count = useAppSelector(selectCount)
    const [incrementAmount, setIncrementAmount] = useState('2')

    const incrementValue = Number(incrementAmount) || 0

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementByAmount(incrementValue))}
                >
                    加{incrementAmount}
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={() => dispatch(incrementAsync(incrementValue))}
                >
                    异步加1
                </button>
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementIfOdd(incrementValue))}
                >
                    基数加1
                </button>
            </div>
        </div>
    )
}

export default Counter
