import { useState } from "react";
import { View, Text, Input } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Index({ children }) {
  const [value, setValue] = useState("");

  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View style={{ display: "flex" }}>
      <Input
        value={value}
        onInput={(e) => {
          setValue(e.detail.value);
        }}
        focus={false}
        placeholder="请输入"
      ></Input>
      {value && (
        <Text
          onClick={() => {
            setValue("");
          }}
        >
          Clear
        </Text>
      )}
      <View>{children}</View>
    </View>
  );
}
