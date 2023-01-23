import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, FlatList } from "react-native";
import { getTweets } from "./api";

export default function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getTweets().then((res) => {
      setTweets(res);
    });
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Text>{item.data.text}</Text>}
      />
    </SafeAreaView>
  );
}
