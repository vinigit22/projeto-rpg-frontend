import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StatusBar,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import BarraNavegacao from "@/components/BarraNavegacao";

export default function Perfil() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    Alert.alert("Sair", "Deseja realmente encerrar sua sessão?", [
      { text: "Cancelar", style: "cancel" },
      { 
        text: "Sair", 
        style: "destructive", 
        onPress: async () => {
          await signOut();
          router.replace("/login");
        } 
      },
    ]);
  };

  return (
    <ImageBackground
      source={require("../assets/fundoperfil.png")}
      style={estilos.fundo}
      resizeMode="cover"
    >
      <View style={estilos.overlay} />
      <StatusBar barStyle="light-content" />

      <ScrollView
        contentContainerStyle={[
          estilos.scroll,
          { paddingTop: insets.top + 10, paddingBottom: 150 },
        ]}
        showsVerticalScrollIndicator={false}
      >
     
        <View style={estilos.headerBotoes}>
          <TouchableOpacity style={estilos.btnVermelho}>
            <Ionicons name="options-outline" size={18} color="#FFF" />
            <Text style={estilos.btnTexto}>Configurações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.btnVermelho} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={18} color="#FFF" />
            <Text style={estilos.btnTexto}>Log-out</Text>
          </TouchableOpacity>
        </View>

      
        <View style={estilos.perfilHeader}>
          <View style={estilos.avatarWrapper}>
            <View style={estilos.bordaAvatar}>
              <Ionicons name="person" size={55} color="#D4AF37" />
            </View>
            <TouchableOpacity style={estilos.lapisBotao}>
              <Ionicons name="pencil" size={16} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={estilos.textosContainer}>
            <Text style={estilos.tituloUsuario}>
              {user?.usuario ? user.usuario.toUpperCase() : "USUÁRIO TESTE"}
            </Text>
            
            <View style={estilos.cardBioBranco}>
              <Text style={estilos.txtBio}>
                Jogador veterano de WOW, personagem maior nível sendo Druida. No meu perfil tem minhas builds com alguns tutoriais para jogadores novatos.
              </Text>
            </View>
          </View>
        </View>

      
        <Text style={estilos.secaoTitulo}>AMIGOS</Text>
        <View style={estilos.linhaAmigos}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Ionicons 
              key={i} 
              name="person-circle" 
              size={50} 
              color={i === 2 ? "#FF3B30" : i === 1 ? "#D4AF37" : "#FFF"} 
            />
          ))}
        </View>

      
        <Text style={estilos.secaoTitulo}>RPG'S FAVORITOS</Text>
        <View style={estilos.caixaFavoritos}>
          <View style={estilos.itemFavorito}>
             <Text style={estilos.wowTxt}>WORLD OF</Text>
             <Text style={estilos.wowTxtBold}>WARCRAFT</Text>
          </View>
          <View style={estilos.linhaVertical} />
          <View style={estilos.itemFavorito}>
            <Text style={estilos.daggerTexto}>DAGGERHEART</Text>
          </View>
        </View>

       
        <Text style={estilos.secaoTitulo}>SUGESTÃO DO PERFIL</Text>
        
       
        <View style={estilos.sessaoBuild}>
          <Text style={estilos.nomeBuild}>Build de Druida – TOP 1</Text>
          <View style={estilos.linhaIconesBuild}>
            {[1, 2, 3, 4, 5].map((i) => (
              <View key={i} style={estilos.circuloBranco}>
                <Ionicons name="person" size={24} color={i === 1 ? "#D4AF37" : "#A0A0A0"} />
              </View>
            ))}
          </View>
        </View>

    
        <View style={estilos.sessaoBuild}>
          <Text style={estilos.nomeBuild}>Build de evoker – dps</Text>
          <View style={estilos.linhaIconesBuild}>
            {[1, 2, 3, 4, 5].map((i) => (
              <View key={i} style={estilos.circuloBranco}>
                <Ionicons name="person" size={24} color={i <= 2 ? "#C21807" : "#A0A0A0"} />
              </View>
            ))}
          </View>
        </View>

      </ScrollView>

    
      <View style={estilos.footerNav}>
        <BarraNavegacao />
      </View>
    </ImageBackground>
  );
}

const estilos = StyleSheet.create({
  fundo: { flex: 1 },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(13, 18, 26, 0.95)" },
  scroll: { paddingHorizontal: 25 },
  headerBotoes: { flexDirection: "row", justifyContent: "space-between", marginVertical: 15 },
  btnVermelho: {
    flexDirection: "row",
    backgroundColor: "#C21807",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    alignItems: "center",
    gap: 5,
  },
  btnTexto: { color: "#FFF", fontWeight: "bold", fontSize: 12 },
  perfilHeader: { flexDirection: "row", gap: 15, marginBottom: 25, alignItems: 'center' },
  avatarWrapper: { position: "relative" },
  bordaAvatar: { width: 90, height: 90, borderRadius: 45, borderWidth: 2, borderColor: "#333", backgroundColor: '#111', justifyContent: 'center', alignItems: 'center' },
  lapisBotao: { position: "absolute", bottom: 0, right: 0, backgroundColor: "#FFF", borderRadius: 15, padding: 4 },
  textosContainer: { flex: 1 },
  tituloUsuario: { color: "#E8D5A3", fontSize: 22, fontWeight: "900", textAlign: 'center', letterSpacing: 1 },
  cardBioBranco: { backgroundColor: "#FFF", borderRadius: 8, padding: 10, marginTop: 5 },
  txtBio: { color: "#000", fontSize: 10, fontWeight: "800", lineHeight: 14 },
  secaoTitulo: { color: "#E8D5A3", fontSize: 18, fontWeight: "bold", marginVertical: 15, letterSpacing: 1 },
  linhaAmigos: { flexDirection: "row", justifyContent: "space-between" },
  caixaFavoritos: { flexDirection: "row", backgroundColor: "#C5B391", borderRadius: 10, padding: 12, alignItems: "center", height: 80 },
  itemFavorito: { flex: 1, alignItems: 'center' },
  wowTxt: { fontSize: 8, fontWeight: '700', color: '#4E3B31' },
  wowTxtBold: { fontSize: 11, fontWeight: '900', color: '#4E3B31' },
  linhaVertical: { width: 1, height: "80%", backgroundColor: "rgba(0,0,0,0.2)", marginHorizontal: 5 },
  daggerTexto: { fontWeight: "900", color: "#FFF", fontSize: 12 },
  sessaoBuild: { marginBottom: 20 },
  nomeBuild: { color: "#FFF", fontSize: 14, fontWeight: "600", marginBottom: 10 },
  linhaIconesBuild: { flexDirection: "row", gap: 10 },
  circuloBranco: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF", 
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD"
  },
  footerNav: { position: 'absolute', bottom: 0, left: 0, right: 0 }
});