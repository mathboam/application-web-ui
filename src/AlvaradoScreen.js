import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";


const AlvaradoScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F6FAFF" }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 80,
          alignItems: "center",
          paddingHorizontal: 20,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 20, color: "#A6B9DB" }}>Hello,</Text>
          <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 5 }}>
            Alvarado!
          </Text>
        </View>
        <View>
          <Image
            source={{uri:"https://images.unsplash.com/photo-1599577180453-fb52b29d72a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80"}}
            style={{
              width: 70,
              height: 70,
              borderRadius: 40,
            }}
          />
        </View>
      </View>

      <View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 20,
            height: 60,
            // width: width / 1.2,
            marginHorizontal: 20,
            borderRadius: 10,
            padding: 20,
            shadowColor: "#c7c7c7",
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.48,
            shadowRadius: 11.95,

            elevation: 18,
          }}
        >
          <TextInput placeholder="Search friend" />
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 40,
              marginLeft: 20,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <Feather name="plus" size={26} color="#A6B9DB" />
          </View>

          <View>
            <Image
              source={{uri:"https://images.unsplash.com/photo-1599577180453-fb52b29d72a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80"}}
              style={{
                width: 70,
                height: 70,
                borderRadius: 40,
                marginLeft: 20,
                borderColor: "red",
                borderWidth: 1,
              }}
            />
          </View>

          <View>
            <Image
              source={{uri:"https://images.unsplash.com/photo-1511806754518-53bada35f930?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"}}
              style={{
                width: 70,
                height: 70,
                borderRadius: 40,
                marginLeft: 20,
                borderColor: "red",
                borderWidth: 1,
              }}
            />
          </View>

          <View>
            <Image
              source={require("../assets/six.jpeg")}
              style={{
                width: 70,
                height: 70,
                borderRadius: 40,
                marginLeft: 20,
                borderColor: "red",
                borderWidth: 1,
              }}
            />
          </View>

            <View>
            <Image
              source={{uri:"https://images.unsplash.com/photo-1511806754518-53bada35f930?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"}}
              style={{
                width: 70,
                height: 70,
                borderRadius: 40,
                marginLeft: 20,
                borderColor: "red",
                borderWidth: 1,
              }}
            />
          </View>

            <View>
            <Image
              source={{uri:"https://images.unsplash.com/photo-1599577180453-fb52b29d72a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80"}}
              style={{
                width: 70,
                height: 70,
                borderRadius: 40,
                marginLeft: 20,
                borderColor: "red",
                borderWidth: 1,
              }}
            />
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          backgroundColor: "white",
          width: 350,
          height: 400,
          marginTop: 20,
          marginLeft: 20,
          borderRadius: 10,
          shadowColor: "#c7c7c7",
          shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.48,
          shadowRadius: 11.95,

          elevation: 18,
        }}
      >
        <Image
          source={{uri:"https://images.unsplash.com/photo-1600181957705-92f267a2740e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80"}}
          style={{
            width: 350,
            height: 320,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
        />

        <View style={{ flexDirection: "row", marginTop: 15, marginLeft: 10 }}>
          <View style={{ marginLeft: 10 }}>
            <Image
              source={{uri:"https://images.unsplash.com/photo-1532657832750-94e2c663ef77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"}}
              style={{ width: 50, height: 50, borderRadius: 30 }}
            />
          </View>

          <View style={{ justifyContent: "center", paddingLeft: 20 }}>
            <Text>Shane Robertson</Text>
            <Text style={{ marginTop: 5, color: "#A6B9DB" }}>32m ago</Text>
          </View>

          <View style={{ paddingLeft: 120, justifyContent: "center" }}>
            <Feather name="more-vertical" size={24} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AlvaradoScreen;
