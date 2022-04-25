  import React, { Component } from 'react'
import { View ,Text ,Button } from "react-native";
import Counter from './android/redux/counter' 
import { Provider } from 'react-redux';
import { store } from './android/redux/store';
const App = (props)=>{ 
	return(
		<View>  
			<Provider store={store}>
		<Counter/></Provider>
		</View>
	)
}
	
export default App;