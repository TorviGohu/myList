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
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [listConcluded, setListConcluded] = useState([]);

  const renderEmptyList = () => (
    <View style={styles.empty}>
      <Image source={EmptyIcon} />
      <Text style={styles.title}>Sua lista ainda está vazia</Text>
      <Text style={{ color: COLORS.gray300 }}>
        Adicione algo para se organizar
      </Text>
    </View>
  );

  function handleAddItem() {
    if (task.trim() === "") return;
    // se o input estiver vazio, não adiciona nada, return sai da função
    // trim() remove os espaços em branco do início e do fim da string

    if (list.includes(task)) {
      alert("Você já adicionou essa tarefa");
      return;
    }

    setList((currentState) => [...currentState, task]);
    //limpar input após adicionar
    setTask("");
  }

  function handleSelectTask(itemSelected) {
    // espera receber o item selecionado
    console.log("selecionou", itemSelected); // mostra no console o item selecionado

    setListConcluded((currentState) => [...currentState, itemSelected]); // adiciona o item selecionado na lista de concluidos
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Header />

      <View style={styles.input}>
        <Input
          defaultValue={task}
          onChangeText={(textoDoInput) => setTask(textoDoInput)}
        />
        <Button onPress={handleAddItem} />
      </View>

      <View style={styles.info}>
        <View style={styles.typeView}>
          <Text style={styles.type}>Criadas</Text>

          <View style={styles.qtdView}>
            <Text style={styles.qtdNumber}>{list.length}</Text>
          </View>
        </View>

        <View style={styles.typeView}>
          <Text style={[styles.type, { color: COLORS.blue500 }]}>
            Concluídas
          </Text>

          <View style={styles.qtdView}>
            {/* mostra a quantidade de itens concluidos */}
            <Text style={styles.qtdNumber}>{listConcluded.length}</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={list}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Item data={item} checked={handleSelectTask} /> //  checked é a função, enviada pro componente
        )}
        contentContainerStyle={{
          flexDirection: "column-reverse", // inverte a ordem da lista
          paddingTop: 8,
          paddingHorizontal: 24,
          paddingBottom: 48,
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
  typeView: {
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 32,
    marginHorizontal: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray500,
  },
  type: {
    color: COLORS.ciano,
    fontWeight: "bold",
  },
  qtdView: {
    backgroundColor: COLORS.gray500,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 99,
    marginLeft: 8,
  },
  qtdNumber: {
    fontSize: 13,
    color: COLORS.white,
    fontWeight: "bold",
  },
});
