const state = {
    funds: 1000,
    stocks: []
};
const mutations = {
    'BUY_STOCKS'(state, {stockId, quantity, stockPrice}){
        const record = state.stocks.find(element => element.id == stockId);
        if(record){
            record.quantity += quantity;
        }else{
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCKS'(state, {stockId, quantity, stockPrice}){
        const record = state.stocks.find(element => element.id == stockId);
        if(record.quantity > quantity){
            record.quantity -= quantity;
        }else{
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds =+ stockPrice * quantity;
    },
    'SET_PORTFOLIO'(state, portfolio){
        state.funds = portfolio. funds;
        state.stock = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};
const getters = {
       stockPortfolio(state, getters){
           return state.stocks.map(stock => {
               const record = getters.stocks.find(element => element.id == stock.id);
               return {
                   id: stock.id,
                   name: record.name,
                   quantity: stock.quantity,
                   price: record.price

               }
           });
       },
       funds(state) {
           return state.funds; 
         }       
};
export default {
    state,
    mutations,
    actions,
    getters
}