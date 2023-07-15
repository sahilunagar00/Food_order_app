import { createSlice} from '@reduxjs/toolkit'
import { it } from 'react-dom/client';

const cartSlice = createSlice({
        name:'cart',
        initialState:{
            items:[],
            totalItems:0,
            totalPrice:0,
        },
        reducers:{
            addItem: (state,action)=>{
                
                const items_index=state.items.findIndex((item)=>{
                   return item.id===action.payload?.id
                })
                if(items_index>=0){
                    // console.log(action.payload);
                    state.items[items_index].quantity+=1;
                    // console.log(action.payload);
                }else{
                    action.payload={...action.payload,quantity:1}
                    state.items.push(action.payload);
                }
                // console.log(state.items);
               
            },
            increment_item:(state,action)=>{
                const increment_id=state.items.findIndex((item)=>{
                    return item.id===action.payload.id
                })
                state.items[increment_id].quantity+=1;
            },
            decrement_item:(state,action)=>{
                const decrease_id=state.items.findIndex((item)=>{
                    return item.id===action.payload.id
                })
                // console.log(decrease_id);
                if(state.items[decrease_id].quantity>1){
                    state.items[decrease_id].quantity-=1;
                }else{
                     const new_array=state.items.filter((item)=>{
                        return item.id!=action.payload.id;
                     })
                     state.items=new_array;
                }
                
            },
            remove:(state,action)=>{
                const new_array=state.items.filter((item)=>{
                    return item.id!=action.payload.id;
                 })
                 state.items=new_array;

            },
            total_ammount:(state)=>{
                const ammount =state.items.reducer((past , item)=>{
                    return past+=item.price*item.quantity;

                })
                return ammount;
            }
        }
})

export const {addItem , decrement_item ,increment_item,remove ,  total_ammount} = cartSlice.actions;
export default cartSlice.reducer;