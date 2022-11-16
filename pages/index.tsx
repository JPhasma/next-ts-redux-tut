import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  selectValue,
} from '../slices/counterSlice';
// import type { RootState } from '../store';

const Home: NextPage = () => {
  const count = useSelector(selectValue);

  const dispatch = useDispatch();

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <h1>The value of count is {count}</h1>
        <button
          onClick={() => dispatch(increment())}
          className='w-full h-10 bg-green-400/50'
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className='w-full h-10 bg-red-400/50'
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(10))}
          className='w-full h-10 bg-purple-400/50'
        >
          Increment by 10
        </button>
      </main>
    </div>
  );
};

export default Home;
