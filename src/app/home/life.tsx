import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { WebView } from "react-native-webview";

const Life = () => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="white" />
        </View>
      )}

      <WebView
        source={{ uri: "https://capitalistltdparty.com/" }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Optional: keeps a white background while loading
    zIndex: 1,
  },
});

export default Life;
