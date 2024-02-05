import { Dimensions } from "react-native";

export const container = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export const color = {
  primary: "#7e22ce",
  secondary: "#9ca3af",
  white: "#fafafa",
  black: "#030712",
  success: "#22c55e",
  warning: "#fb923c",
  danger: "#b91c1c",
  info: "#2563eb",
};

export const fontsize = {
  small: (2.5 / 100) * container.width,
  medium: (3 / 100) * container.width,
  large: (4 / 100) * container.width,
  xlarge: (5 / 100) * container.width,
  pagetitle: (7 / 100) * container.width,
};

export const API_HELPER = async ( route_name, data, method = "POST" ) => {
  const URL = `http://192.168.0.100:3000/` + route_name;
  let return_api = {
    status_code: 200,
    status: "success",
    message: "ngamsoy",
    data: [],
  };
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(data);

    var requestOptions = {
      method: method,
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(URL, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        return_api.status_code = result.status_code;
        return_api.status = result.status;
        return_api.message = result.message;
        return_api.data = result.data;
      })
      .catch((error) => console.log("error", error));
  } catch (e) {
    console.log("SYSTEM ERROR:", e);

    return_api.status_code = 500;
    return_api.status = "Internal Server Error";
    return_api.message = "Internal Server Error. Please contact administrator.";
    return_api.data = [];
  }

  return return_api;
};
