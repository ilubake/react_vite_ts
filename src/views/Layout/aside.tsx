import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import route_items from "../../routes/routeConfig";
// 定义侧边栏组件
const Aside: React.FC = () => {
  const [asideData,] = useState<MenuProps['items']>(route_items);

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