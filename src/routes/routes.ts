// Layouts

// Pages
import config from '../config';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Account from '../pages/Account';
import Cart from '../pages/Cart';
import Payment from '../pages/Payment/Payment';
import Login from '../pages/Login/Login';
import Collection from '../pages/Collection';
import { HeaderOnly } from '../layouts';
import Policy from '../pages/Policy';
import React, { ReactNode } from 'react';
import NoPageFound from '../pages/NoPageFound';
import Search from '../pages/Search';
// import NoPageFound from '../pages/NoPageFound';

type routeType = {
  path: string;
  component: React.FC<any>;
  layout?: React.FC<{ children: ReactNode }> | null;
  private?: boolean;
};
// public routes
const publicRoutes: Array<routeType> = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: `${config.routes.product}/:slug`,
    component: Product,
  },

  {
    path: config.routes.receiveNotify,
    component: Account,
  },
  {
    path: config.routes.help,
    component: Policy,
    layout: HeaderOnly,
  },
  {
    path: config.routes.partner,
    component: Account,
  },
  {
    path: config.routes.cart,
    component: Cart,
    layout: HeaderOnly,
  },
  {
    path: config.routes.payment,
    component: Payment,
    layout: null,

    private: true,
  },
  {
    path: config.routes.login,
    component: Login,
    layout: null,
  },
  {
    path: config.routes.register,
    component: Login,
    layout: null,
  },
  {
    path: `${config.routes.collections}/:slugCollection`,
    component: Collection,
  },
  {
    path: config.routes.search,
    component: Search,
  },
  {
    path: config.routes.account,
    component: Account,
    private: true,
  },
  {
    path: config.routes.order,
    component: Account,
    private: true,
  },
  {
    path: `${config.routes.order}/:orderID`,
    component: Account,
    private: true,
  },
  {
    path: config.routes.address,
    component: Account,
    private: true,
  },
  {
    path: config.routes.recentlyViewed,
    component: Account,
    private: true,
  },
  {
    path: '*',
    component: NoPageFound,
  },
];
const privateRoutes: Array<routeType> = [];
export { publicRoutes, privateRoutes };
