import { View, Image, Text, StyleSheet } from "react-native";

import { CommentIcon, LocationIcon } from "../components/icons/icons";

export const PostComponent = ({ way, name, country, commentsNumber }) => {
  return (
    <View style={{ marginBottom: 32 }}>
      <View style={{ marginBottom: 8 }}>
        <Image
          source={way}
          resizeMode={"cover"}
          style={{ width: "100%", height: 240, borderRadius: 8 }}
        />
      </View>
      <Text
        style={{
          marginBottom: 8,
          fontFamily: "Roboto-Medium",
          fontSize: 16,
          lineHeight: 18.75,
          color: "#212121",
        }}
      >
        {name}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <CommentIcon />
          <Text
            style={[
              styles.text,
              {
                color: "#BDBDBD",
              },
            ]}
          >
            {commentsNumber}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <LocationIcon />
          <Text
            style={[
              styles.text,
              {
                color: "#212121",
                textDecorationLine: "underline",
              },
            ]}
          >
            {country}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
  },
});
