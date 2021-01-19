import { createContext } from 'react';
import SHOP_DATA from './shopData';

const CollectionContexts = createContext(SHOP_DATA);

export default CollectionContexts;