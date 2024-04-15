import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import route_items from "../../routes/routeConfig";
// 定义侧边栏组件
const Aside: React.FC = () => {
  const [asideData,] = useState<MenuProps['items']>(route_items);
  const [defaultSelectedKeys,]=useState(sessionStorage.getItem('defaultSelectedKeys')??'');
  const [defaultOpenKeys]=useState(JSON.parse(sessionStorage.getItem('defaultOpenKeys')??'[]'));
  const navigate = useNavigate();
  const onClick: MenuProps['onClick'] = (e) => {
    const path=e.keyPath.reverse().join('/');
    const defaultOpenKeysGet=JSON.parse(JSON.stringify(e.keyPath));
    console.log('点击：', e,path,defaultOpenKeysGet);
    sessionStorage.setItem('defaultOpenKeys',JSON.stringify(defaultOpenKeysGet.slice(0,-1)));
    sessionStorage.setItem('defaultSelectedKeys',e.key);
    navigate(`/${path}`);//需要使用绝对路径，以/开头为绝对路径，相对路径会在原路径上添加
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: '200px' }}
      defaultSelectedKeys={[defaultSelectedKeys]}
      defaultOpenKeys={defaultOpenKeys}
      mode="inline"
      items={asideData}
      theme="dark"
    />
  );
};

export default Aside;