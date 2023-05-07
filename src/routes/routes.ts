// Layouts

// Pages
import config from '../config';
import { HeaderOnly } from '../layouts';
import React, { ReactNode, lazy } from 'react';

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
    component: lazy(async () => await import('../pages/Home')),
  },
  {
    path: `${config.routes.product}/:slug`,
    component: lazy(async () => await import('../pages/Product')),
  },

  {
    path: config.routes.receiveNotify,
    component: lazy(async () => await import('../pages/Account')),
  },
  {
    path: config.routes.help,
    component: lazy(async () => await import('../pages/Policy')),
    layout: HeaderOnly,
  },
  {
    path: config.routes.partner,
    component: lazy(async () => await import('../pages/Account')),
  },
  {
    path: config.routes.cart,
    component: lazy(async () => await import('../pages/Cart')),
    layout: HeaderOnly,
  },
  {
    path: config.routes.payment,
    component: lazy(async () => await import('../pages/Payment')),
    layout: null,

    private: true,
  },
  {
    path: config.routes.login,
    component: lazy(async () => await import('../pages/Login')),
    layout: null,
  },
  {
    path: config.routes.register,
    component: lazy(async () => await import('../pages/Login')),
    layout: null,
  },
  {
    path: `${config.routes.collections}/:slugCollection`,
    component: lazy(async () => await import('../pages/Collection')),
  },
  {
    path: config.routes.search,
    component: lazy(async () => await import('../pages/Search')),
  },
  {
    path: config.routes.account,
    component: lazy(async () => await import('../pages/Account')),
    private: true,
  },
  {
    path: config.routes.order,
    component: lazy(async () => await import('../pages/Account')),
    private: true,
  },
  {
    path: `${config.routes.order}/:orderID`,
    component: lazy(async () => await import('../pages/Account')),
    private: true,
  },
  {
    path: config.routes.address,
    component: lazy(async () => await import('../pages/Account')),
    private: true,
  },
  {
    path: config.routes.recentlyViewed,
    component: lazy(async () => await import('../pages/Account')),
    private: true,
  },
  {
    path: '*',
    component: lazy(async () => await import('../pages/NoPageFound')),
  },
];
const privateRoutes: Array<routeType> = [];
export { publicRoutes, privateRoutes };
