
export const upAction = ()=>{
    return{type:UP_ACTION};
};
export const downAction = ()=>{
    return{type:DOWN_ACTION};
};
export const multiAction = ()=>{
    return{type:RESTART_COUNTER};
};
export const restartAction = ()=>{
    return{type:MULTIPLY_COUNTER};
};
export const dataAction = (data)=>{
    return{type:UPDATE_COUNTER};
};