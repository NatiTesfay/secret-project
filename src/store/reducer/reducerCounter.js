import { UP_ACTION,
    DOWN_ACTION,
    RESTART_COUNTER,
    MULTIPLY_COUNTER,
    UPDATE_COUNTER 
} from '../actions/counter-types'


const reducerCounters = (state,action)=>{
    switch (action.type) {
        case UP_ACTION.type:
        return state + 1;
            
         
    
        case DOWN_ACTION.type:
        return state -1 ;
            
         
    
        case RESTART_COUNTER.type:
        return 0;
            
         
    
        case MULTIPLY_COUNTER.type:
        return state * 2;            
         
    
        case UPDATE_COUNTER.type:
        return action.data;
        default:
            return state;
    }

}
