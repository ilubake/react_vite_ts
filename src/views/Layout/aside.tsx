import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

// 定义侧边栏组件
const Aside: React.FC = () => {
  const [asideData,] = useState<MenuProps['items']>([
    {
      label: '首页',
      key: 'home',
      icon: <MailOutlined />,
      // children: [],
    },
    {
      label: '控制台',
      key: 'layout',
      icon: <AppstoreOutlined />,
      children: [
        {
          label: '用户',
          key: 'user',
          icon: <SettingOutlined />,
        },
      ],
    },
  ]);

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('点击：', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: '200px' }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={asideData}
      theme="dark"
    />
  );
};

export default Aside;