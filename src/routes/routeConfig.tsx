import React from 'react';
import Layout from "../views/Layout/index";
import Home from "../views/Home/index";
import User from "../views/User/index";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

// 自定义的路由配置项类型
  interface CustomRouteItem {
    label: string;
    key: string;
    icon: React.ReactElement;
    component: React.ReactElement;
    children?: CustomRouteItem[];
  }
  // 自定义的路由配置数组
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
              icon: <MailOutlined />,
              component:<Home />,
            },
          ],
        },
        {
          label: '首页',
          key: 'home',
          icon: <MailOutlined />,
          component:<Home />,
        },
      ],
    },
  ];
  export default route_items;
  export type { CustomRouteItem }