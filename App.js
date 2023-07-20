import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "./src/components/Header";
import { COLORS } from "./src/theme/colors";
import Input from "./src/components/Input";
import Button from "./src/components/Button";
import EmptyIcon from "./src/assets/clipboard.png";
import Item from "./src/components/Item";

export default function App() {
  const list = ["Marcos", "Vitor", "Nicholas"];

  const renderEmptyList = () => (
    <View style={styles.empty}>
      <Image source={EmptyIcon} />
      <Text style={styles.title}>Sua lista ainda está vazia</Text>
      <Text style={{ color: COLORS.gray300 }}>
        Adicione algo para se organizar
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Header />

      <View style={styles.input}>
        <Input />
        <Button />
      </View>

      <FlatList
        data={list}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Item data={item} />}
        contentContainerStyle={{
          paddingTop: 16,
          paddingHorizontal: 24,
          gap: 8,
        }}
        ListEmptyComponent={() => renderEmptyList()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black900,
  },
  input: {
    flexDirection: "row",
    marginHorizontal: 24,
    marginTop: -27,
    gap: 4,
  },
  empty: {
    alignItems: "center",
    marginTop: 72,
  },
  title: {
    color: COLORS.gray300,
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 16,
  },
});
