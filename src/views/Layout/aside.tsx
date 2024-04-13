import React from 'react';
import { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps  } from 'antd';
import { Menu } from 'antd';
const [asideDate, setAsideDate] = useState([
    {label:'首页',
        key:'home',
        icon: <MailOutlined />,
        children:[]},
    {label:'用户页' ,
            key:'user',
            icon:<AppstoreOutlined />,
            children:[
                {label:'用户1' ,
            key:'user1',
            icon:<AppstoreOutlined />,},{
                label:'用户2' ,
            key:'user2',
            icon:<SettingOutlined />,
            }
            ]}
])
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

// 定义 c_menu 函数，其中 date 参数的 label 属性具有默认值
function c_menu(date: {
  label?: string; // 将 label 声明为可选属性
  key: string;
  icon: React.ReactNode;
  children?: { label: string, key: string, icon: React.ReactNode }[];
  type?: 'group'; // 可选属性，默认值为 'group'
}): MenuItem {
  // 如果 date 对象的 label 属性未定义，则使用默认值 '未命名'
  const label = date.label ?? '未命名';

  // 如果存在子菜单项，则递归调用 c_menu 并传递子菜单项
  if (date.children && date.children.length) {
    return {
      label,
      key: date.key,
      icon:date.icon as React.ReactNode,
      children: date.children?.map(child => c_menu(child)), // 递归处理子菜单项
      type: date.type || 'group', // 如果 'type' 属性不存在，则使用默认值 'group'
    };
  } else {
    // 如果没有子菜单项，则返回一个只包含当前项的对象
    return {
      label,
      key: date.key,
      icon: date.icon,
      children: undefined, // 没有子菜单项，所以设置为 undefined
      type: date.type || 'group', // 如果 'type' 属性不存在，则使用默认值 'group'
    };
  }
}
const items: MenuProps['items'] = asideDate.map((v)=>{
    return c_menu(v)
});
const aside: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default aside;