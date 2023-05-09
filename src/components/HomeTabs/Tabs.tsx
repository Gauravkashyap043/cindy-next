'use client'
import React, { useState, ReactNode } from "react";
type TabProps = {
  label: string;
  colorLabel:string;
  activeTab?: string;
  onClick: (tab: string) => void;
};

const Tab = ({ label, activeTab, onClick,colorLabel }: TabProps) => {
  const isActive = activeTab === label;

  return (
    <li className={isActive ? "active border-[3px] border-transparent border-b-[#008ECC] text-[#666666]" : "border-[3px] border-transparent border-b-[#C1C1C1]  text-[#C1C1C1]"}>
      <button onClick={() => onClick(label)} className={`h-[46px] text-[24px] font-[700] flex  items-center gap-1 border-3 border-blue-500 pr-4`}>
        {label}  {" "}<span className={isActive ?"text-[#008ECC]" : "text-[#C1C1C1]"}>{colorLabel}</span>
      </button>
    </li>
  );
};

type TabContentProps = {
  children?: ReactNode;
  activeTab?: string;
  label: string;
  colorLabel:string;
};

export const TabContent = ({ children, activeTab, label }: TabContentProps) => {
  if (activeTab !== label) return null;
  return <div>{children}</div>;
};

type TabsProps = {
  children: ReactNode;
};

export const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(
    (children as React.ReactElement<TabContentProps>[])[0].props.label
  );

  const onClickTabItem = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="">
      <ul className="tab-list flex border border-transparent border-b-[#B4B3B3]  justify-between bg-[#F3F1F1] my-[50px]">
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null;

          const { label,colorLabel } = child.props;
          return (
            <Tab
              key={child.props.label}
              activeTab={activeTab}
              onClick={onClickTabItem}
              label={label}
              colorLabel={colorLabel}
            />
          );
        })}
      </ul>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null;

        const { label } = child.props;
        if (label !== activeTab) return null;

        return <div key={label}>{child.props.children}</div>;
      })}
    </div>
  );
};
