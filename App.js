import { useState, useEffect } from "react";
import { View, StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import { getApi } from "./src/api";
import { Cards } from "./src/Cards";

export default function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getApi().then((res) => setList(res));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {console.log(list)}
      <View>
        <Text style={styles.title}>Popular Movies</Text>
        {list && (
          <FlatList
            keyExtractor={(item) => item.id}
            data={list}
            renderItem={({ item }) => <Cards list={item} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 10,
    fontSize: 24,
    textAlign: "center",
  },
});
