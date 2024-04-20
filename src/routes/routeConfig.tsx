import React,{lazy } from "react";
import Layout from "../views/Layout/index";
import Login from "../views/Login/index";
import OffRouter from "../views/OffRouter";
import LazyLoadingWrapper from '../component/LoadingWrapper'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const Home =lazy(()=>import( "../views/Home/index"));
const User =lazy(()=>import( "../views/User/index"));
// 自定义的路由配置项类型
interface r_props_meta {
  hidden?: boolean; //是否同时作为路由及侧边栏使用
  isNoPassAuth?: boolean; //是否不需要权限
}
interface asideItem {
  key: string;
  label?: string;
  icon?: React.ReactElement;
  meta?: r_props_meta;
  type?: "group";
}
interface NoIndexRouteItemBase {
  index?: false;
  path?: string;
  children?: CustomRouteItem[];
  component: React.ReactElement;
}
interface IndexRouteItemBase extends asideItem {
  index: true;
  path?: string;
  children?: undefined;
  component: React.ReactElement;
}

type CustomRouteItem = asideItem & (IndexRouteItemBase | NoIndexRouteItemBase);

// 自定义的路由配置数组
const route_items: CustomRouteItem[] = [
  {
    label: "控制台",
    key: "layout",
    path: "layout",
    icon: <AppstoreOutlined />,
    component: <Layout />,
    meta: {
      isNoPassAuth: true,
    },
    children: [
      {
        label: "用户",
        key: "user",
        path: "user",
        icon: <SettingOutlined />,
        component: LazyLoadingWrapper(<User />),
        children: [
          {
            label: "用户1",
            key: "user1",
            path: "user1",
            icon: <SettingOutlined />,
            component: LazyLoadingWrapper(<User />),
            meta: {
              isNoPassAuth: true,
            },
          },
          {
            label: "首页1",
            key: "home1",
            path: "home1",
            icon: <MailOutlined />,
            component: LazyLoadingWrapper(<Home />),
            meta: {
              isNoPassAuth: true,
              hidden: true,
            },
          },
        ],
      },
      {
        label: "首页",
        key: "home",
        // index:true,
        path: "home",
        icon: <MailOutlined />,
        component: LazyLoadingWrapper(<Home />),
      },
      {
        label: "用户2",
        key: "user2",
        index: true,
        icon: <MailOutlined />,
        component: LazyLoadingWrapper(<User />),
        meta: {
          hidden: true,
        },
      },
    ],
  },
  {
    label: "登录",
    key: "login",
    path: "login",
    component: <Login />,
    meta: {
      hidden: true,
      isNoPassAuth: true,
    },
  },
  {
    label: "404",
    key: "offRouter",
    path: "offRouter",
    component: <OffRouter />,
    meta: {
      hidden: true,
      isNoPassAuth: true,
    },
  },
];
export default route_items;
export type { CustomRouteItem };
