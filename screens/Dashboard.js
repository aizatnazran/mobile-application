import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { fontsize } from "../constant";

export default function Dashboard() {
  const tranfer_again = [
    {
      id: "1",
      name: "Add new",
      icon: require("../assets/plus.png"),
    },
    {
      id: "2",
      name: "Aizat",
      icon: require("../assets/image1.jpg"),
    },
    {
      id: "3",
      name: "Abu",
      icon: require("../assets/image2.jpg"),
    },
    {
      id: "4",
      name: "Amin",
      icon: require("../assets/image3.jpg"),
    },
    {
      id: "5",
      name: "Ali",
      icon: require("../assets/image4.jpg"),
    },
    {
      id: "6",
      name: "Aminah",
      icon: require("../assets/image5.jpg"),
    },
  ];

  const trasanction = [
    {
      id: 1,
      type: "Withdraw",
      description: "Cardless withdraw",
      amount: 232.8,
      date: new Date().toLocaleDateString(),
      icon: require("../assets/withdraw-black.png"),
    },
    {
      id: 2,
      type: "Bank Transfer",
      description: "to Greg Stan",
      amount: 170.8,
      date: new Date().toLocaleDateString(),
      icon: require("../assets/paper-plane.png"),
    },
    {
      id: 3,
      type: "Deposit",
      description: "Cardless withdraw",
      amount: 32.8,
      date: new Date().toLocaleDateString(),
      icon: require("../assets/deposit-black.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* HEADER & PROFILE */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            alignItems: "center",
          }}
        >
          {/* LEFT SECTION */}
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: fontsize.pagetitle,
              }}
            >
              Aizat Nazran's
            </Text>
          </View>

          {/* RIGHT SECTION*/}
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => console.log("Rewards icon pressed")}
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 7,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                //source={{uri: 'https://www.downloadclipart.net/medium/19773-add-button-white-clip-art.png'}}
                source={require("../assets/gift-box.png")}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
              <Text style={{ fontWeight: "bold", marginLeft: 5 }}>rewards</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginLeft: 5,
                backgroundColor: "white",
                padding: 10,
                borderRadius: 7,
              }}
            >
              <Image
                //source={{uri: 'https://www.downloadclipart.net/medium/19773-add-button-white-clip-art.png'}}
                source={require("../assets/bell.png")}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* CARD TOTAL BALANCE */}
        <TouchableOpacity
          style={{
            backgroundColor: "#6b21a8",
            //height: 200,
            borderRadius: 16,
            margin: 20,
            paddingBottom: 20,
            borderRightWidth: 5,
            borderBottomWidth: 5,
            borderColor: "gray",
          }}
        >
          {/* TOP SECTION */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* LEFT */}
            <View
              style={{
                padding: 16,
              }}
            >
              <Text style={{ color: "white", fontSize: 11 }}>
                Total Balance
              </Text>
              <Text
                style={{ color: "white", fontSize: 28, fontWeight: "bold" }}
              >
                $2,108.22
              </Text>
            </View>

            {/* RIGHT */}
            <View
              style={{
                padding: 16,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 7,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 11 }}>
                  6.350 points {`>`}{" "}
                </Text>
              </View>
            </View>
          </View>

          {/* BOTTOM SECTION */}
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {/* FIRST ICON */}
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://www.downloadclipart.net/medium/19773-add-button-white-clip-art.png",
                }}
                //source={require()}
                style={{
                  width: 22,
                  height: 22,
                }}
              />
              <Text style={{ color: "white", fontSize: 11, marginTop: 5 }}>
                Top Up
              </Text>
            </View>

            {/* SECOND ICON */}
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                //source={{uri: 'https://www.downloadclipart.net/medium/19773-add-button-white-clip-art.png'}}
                source={require("../assets/send.png")}
                style={{
                  width: 22,
                  height: 22,
                }}
              />
              <Text style={{ color: "white", fontSize: 11, marginTop: 5 }}>
                Transfer
              </Text>
            </View>

            {/* THIRD ICON */}
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                //source={{uri: 'https://www.downloadclipart.net/medium/19773-add-button-white-clip-art.png'}}
                source={require("../assets/withdraw.png")}
                style={{
                  width: 22,
                  height: 22,
                }}
              />
              <Text style={{ color: "white", fontSize: 11, marginTop: 5 }}>
                Withdraw
              </Text>
            </View>

            {/* FOURTH ICON */}
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                //source={{uri: 'https://www.downloadclipart.net/medium/19773-add-button-white-clip-art.png'}}
                source={require("../assets/history.png")}
                style={{
                  width: 22,
                  height: 22,
                }}
              />
              <Text style={{ color: "white", fontSize: 11, marginTop: 5 }}>
                History
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* UPGRADE ACCOUNT SECTION */}
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              "Are you sure to upgrade account?",
              "Upgrade  account may enable special features.",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ]
            );
          }}
          style={{
            borderWidth: 0.5,
            borderColor: "#d1d5db",
            height: 90,
            backgroundColor: "white",
            marginHorizontal: 20,
            borderRadius: 16,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* LEFT ICON SECTION */}
          <View
            style={{
              padding: 20,
            }}
          >
            <Image
              //source={{uri: 'https://www.downloadclipart.net/medium/19773-add-button-white-clip-art.png'}}
              source={require("../assets/startup.png")}
              style={{
                width: 40,
                height: 40,
              }}
            />
          </View>

          {/* RIGHT TEXT SECTION */}
          <View>
            <Text style={{ fontWeight: "bold" }}>Upgrade Account</Text>
            <Text style={{ fontSize: 14, color: "gray", marginTop: 5 }}>
              Upgrade account for more features.
            </Text>
          </View>
        </TouchableOpacity>

        {/* SECTION WHITE CARD */}
        {/* <View
style = {{
  backgroundColor: 'white',
  borderRadius: 16,
  marginTop: 20,
  height: 200,
}}> */}

        {/* TRANSFER AGAIN & SCROLLVIEW SECTION */}
        <View style={{ marginTop: 20, paddingLeft: 20 }}>
          {/* SECTION LABEL */}
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Transfer again
            </Text>
          </View>

          {/*  HORIZONTAL SCROLLVIEW SECTION*/}
          <View
            style={{
              paddingTop: 20,
            }}
          >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {tranfer_again.length > 0 &&
                tranfer_again.map((data, index) => (
                  <TouchableOpacity
                    style={{
                      marginRight: 20,
                    }}
                    key={index}
                  >
                    <View
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 35,
                        backgroundColor: "#e5e7eb",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        source={data.icon}
                        style={{
                          width: data.id === "1" ? 22 : 70,
                          height: data.id === "1" ? 22 : 70,
                          borderRadius: 35,
                        }}
                      />
                    </View>
                    <View style={{ marginTop: 7, alignItems: "center" }}>
                      <Text>
                        {data.name.length > 10
                          ? data.name.substring(0, 7) + "..."
                          : data.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
            </ScrollView>
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
            paddingHorizontal: 22,
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Latest Transaction
            </Text>
          </View>
          <View
            style={{
              paddingTop: 0,
            }}
          >
            <ScrollView>
              {trasanction.length > 0 &&
                trasanction.map((data, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      paddingVertical: 16,
                      //backgroundColor: 'white',
                      borderBottomWidth: 0.5,
                      borderColor: "#d4d4d4",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 7,
                      //justifyContent: 'flex-end'
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <View>
                        <Image
                          source={data.icon}
                          style={{
                            width: 25,
                            height: 25,
                          }}
                        />
                      </View>
                    </View>

                    <View
                      style={{
                        flex: 1,
                        paddingLeft: 12,
                      }}
                    >
                      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                        {data.type}
                      </Text>
                      <Text style={{ fontSize: 14, color: "gray" }}>
                        {data.description}
                      </Text>
                    </View>

                    <View style={{}}>
                      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                        ${data.amount}
                      </Text>
                      <Text style={{ fontSize: 14, color: "gray" }}>
                        {data.date}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingTop: 20,
  },
});
