import { ScrollView, View, Image, Text, StyleSheet } from "react-native";

import { globalStyles } from "../components/styles/globalStyles";

import { PostComponent } from "../components/PostComponent";

export const PostsScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={[globalStyles.container, styles.postsContainer]}>
        <View style={{ gap: 8, flexDirection: "row", marginBottom: 32 }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#F6F6F6",
              borderRadius: 16,
            }}
          >
            <Image source={require("../components/images/userPhoto.png")} />
          </View>
          <View style={{ marginTop: 16 }}>
            <Text
              style={{
                fontFamily: "Roboto-Medium",
                lineHeight: 15.23,
                fontSize: 13,
              }}
            >
              Natali Romanova
            </Text>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                lineHeight: 12.89,
                fontSize: 11,
                color: "#212121CC",
              }}
            >
              email@example.com
            </Text>
          </View>
        </View>
        <PostComponent
          way={require("../components/images/forest.jpg")}
          name={"Ліс"}
          commentsNumber={0}
          country={"Ivano-Frankivs'k Region, Ukraine"}
        />
        <PostComponent
          way={require("../components/images/sunset.jpg")}
          name={"Захід на Чорному морі"}
          commentsNumber={0}
          country={"Odessa, Ukraine"}
        />
        <PostComponent
          way={require("../components/images/house.jpg")}
          name={"Старий будиночок у Венеції"}
          commentsNumber={0}
          country={"Venece, Italy"}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  postsContainer: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
});
