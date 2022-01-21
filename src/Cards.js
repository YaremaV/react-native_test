import { View, StyleSheet, Text, Image } from "react-native";

export function Cards({ list }) {
  return (
    <>
      <View style={styles.text}>
        <Text>{list.title}</Text>
        <Text style={styles.wrap}>{list.release_date.slice(0, 4)}</Text>
      </View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `https://www.themoviedb.org/t/p/w500${list.poster_path}`,
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 18,
    marginBottom: 5,
  },
  wrap: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "orange",
    color: "white",
    borderRadius: 5,
  },
  tinyLogo: {
    width: 350,
    height: 500,
    marginBottom: 15,
    borderRadius: 10,
  },
});
