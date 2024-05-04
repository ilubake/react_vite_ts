import React, { useState,useEffect } from "react";
import { NodeExpandOutlined } from "antd";
  interface SelectItemType {
    catId: number;
    hasPrivilege: boolean;
    itemName: string;
    level: number;
    clickFun?:React.FC;
    icon?:React.ReactElement;
    subCategoryTreeItemList?: SelectItemType[];
  }
  const mock: SelectItemType = {
    catId: 100004477,
    hasPrivilege: false,
    itemName: "农用设备",
    level: 1,
    subCategoryTreeItemList: [
      {
        catId: 1000044772,
        hasPrivilege: false,
        itemName: "农用设备1",
        level: 2,
      },
      {
        catId: 1000044773,
        hasPrivilege: false,
        itemName: "农用设备2",
        level: 2,
      },
    ],
  };

function User() {
  const [navList, setnavList] = useState<string[]>([]);
  const [showSelect, setnavList] = useState<string[]>([]);
const c_selector=function (params:SelectItemType):JSX.Element {
    if (navList.length === 0) {
        return <span>全部</span>;
      } else {
        return <ul>
          {
              navList.map((v,i)=>{
                  return(<li>{v}</li>)
              })
          }
        </ul>;
      }
}
  useEffect(()=>{

  },[]);
  function name() {
    if (navList.length === 0) {
      return <span>全部</span>;
    } else {
      return <ul>
        {
            navList.map((v,i)=>{
                return(<li>{v}</li>)
            })
        }
      </ul>;
    }
  }
  return (
    <>
      <h1></h1>
      {name()}
      <div>


      </div>
    </>
  );
}
export default User;
