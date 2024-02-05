//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import { color, fontsize, container, API_HELPER } from "../constant";

// create a component
const Transaction = () => {
  const [loading, setLoading] = useState(true);
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    _fetchData();
  }, []);

  const _fetchData = async () => {
    let panggil_api = await API_HELPER("transaction", {});
    console.log("API AKU : ", panggil_api);
    setTransaction(panggil_api.data);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <View
            style={{
              padding: (5 / 100) * container.width,
            }}
          >
            <Text
              style={{
                fontSize: fontsize.pagetitle,
                fontWeight: "bold",
                color: color.black,
              }}
            >
              Transaction
            </Text>
          </View>

          <View
            style={{
              padding: (5 / 100) * container.width,
            }}
          >
            <TextInput
              placeholder="Search"
              placeholderTextColor={"#94a3b8"}
              style={{
                backgroundColor: "#f1f5f9",
                padding: (3 / 100) * container.width,
                borderWidth: 0.5,
                borderColor: "#374151",
                borderRadius: (2 / 100) * container.width,
              }}
            />
          </View>

          <View style={{ padding: (3 / 100) * container.width }}>
            {loading === true ? (
              <ActivityIndicator
                size={(7 / 100) * container.width}
                color={color.primary}
              />
            ) : (
              <Text>{JSON.stringify(transaction)}</Text>
            )}
            <Text>Latest Transaction</Text>
            <View
              style={{
                paddingTop: 20,
              }}
            >
              <ScrollView>
                {transaction.length > 0 &&
                  transaction.map((data, index) => (
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
                          {data.transaction_status}
                        </Text>
                        <Text style={{ fontSize: 14, color: "gray" }}>
                          {data.transaction_number}
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
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "color.white",
  },
});

//make this component available to the app
export default Transaction;
