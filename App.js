//redux işlemleleri için düzenleme yapıyoruz.
import React from 'react'
import RootNavigation from './src/navigation/rootNavigation';
import { Provider  } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return (//ikinci store bizim reduxtan gelen değer ilki provider in sabit değişkeni
   <Provider store={store}>
      <RootNavigation/>
   </Provider> 
  )
}

export default App

