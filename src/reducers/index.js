import { combineReducers } from 'redux';
import HomeReducers from './HomeReducers';
import CategoryReducers from './CategoryReducers';
import FavoriteReducers from './FavoriteReducers';
import MarketReducers from './MarketReducers';
import ProductReducers from './ProductReducers';
import UserReducers from './UserReducers';


export default combineReducers({
    homeResponse: HomeReducers,
    categoryResponse: CategoryReducers,
    marketResponse: MarketReducers,
    favoriteResponse: FavoriteReducers,
    productResponse: ProductReducers,
    userResponse: UserReducers,
})