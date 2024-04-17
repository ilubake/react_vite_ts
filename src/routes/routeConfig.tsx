import React from 'react';
import Layout from "../views/Layout/index";
import Home from "../views/Home/index";
import User from "../views/User/index";
import Login from "../views/Login/index";
import OffRouter from "../views/OffRouter";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

// 自定义的路由配置项类型
interface r_props_meta{
  permissionAuth?:boolean;
}
interface CustomRouteItem {
    label?: string;
    key: string;
    hidden?:boolean;
    index?:boolean|undefined;
    icon?: React.ReactElement;
    component: React.ReactElement;
    children?: CustomRouteItem[];
    meta?:r_props_meta;
  }
  // 自定义的路由配置数组(使用路由路径作为key)
  const route_items: CustomRouteItem[] = [
    {
      label: '控制台',
      key: 'layout',
      icon: <AppstoreOutlined />,
      component: <Layout />,
      children: [
        {
          label: '用户',
          key: 'user',
          icon: <SettingOutlined />,
          component: <User />,
          children: [
            {
              label: '用户1',
              key: 'user1',
              icon: <SettingOutlined />,
              component: <User />,
            },
            {
              label: '首页1',
              key: 'home1',
              hidden:true,
              icon: <MailOutlined />,
              component:<Home />,
            },
          ],
        },
        {
          label: '首页',
          index:true,
          key: 'home',
          icon: <MailOutlined />,
          component:<Home />,
        },
      ],
    },{
      label: '登录',
      key: 'login',
      component: <Login />,
      hidden:true,
      meta:{
        permissionAuth:true,
      }
    },{
      label: '404',
      key: 'offRouter',
      component: <OffRouter />,
      hidden:true,
      meta:{
        permissionAuth:true,
      }
    }
  ];
  export default route_items;
  export type { CustomRouteItem }