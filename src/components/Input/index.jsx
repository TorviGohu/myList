import { StyleSheet, TextInput } from "react-native";
import { COLORS } from "../../theme/colors";

export default function Input({ ...rest }) {
  return (
    <TextInput
      style={styles.container}
      placeholder="Adicione algo a sua lista"
      placeholderTextColor={COLORS.gray300}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa todo o espaço disponivel
    backgroundColor: COLORS.gray700, // cor de fundo
    height: 54, //altura
    padding: 16, // espaçamento interno

    borderRadius: 6, //borda arredondada
    borderColor: COLORS.black700, //cor da borda
    borderWidth: 1, // largura da borda

    color: COLORS.white, // cor do texto
    fontSize: 16, //tamanho da fonte
  },
});
