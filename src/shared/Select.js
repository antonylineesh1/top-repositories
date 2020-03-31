import React from "react";
import {Select} from "antd";


const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

export default function CustomSelect(props) {

  const createdOptions=props.cities.map((city,index)=>{
  return (<Option key={index} value={city}>{city}</Option>)
  });

  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder={props.placeHolder}
      optionFilterProp="children"
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onSearch={props.onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
    {createdOptions}
    </Select>
  );
}
