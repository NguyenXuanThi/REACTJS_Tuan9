import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import counterReducer2 from './counterSlice2';
import todoReducer from './todoSlice';
import themeReducer from './themeSlice';
import cartReducer from './cartSlice';
import authReducer from './authSlice';
import usersReducer from './usersSlice';
import formReducer from './formSlice';
import eventReducer from './eventSlice';
import productReducer from './productSlice';
const store = configureStore({
  reducer: {
    counter: counterReducer, 
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer,
    users: usersReducer,
    counter2: counterReducer2,
    form: formReducer,
    event: eventReducer,
    product: productReducer,
  },
});

export default store;
