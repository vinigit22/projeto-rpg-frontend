import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StatusBar,
  Alert,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import BarraNavegacao from "@/components/BarraNavegacao";

const AMIGOS = [
  { id: "1", cor: "#fff" },
  { id: "2", cor: "#fff" },
  { id: "3", cor: "#fff" },
  { id: "4", cor: "#fff" },
  { id: "5", cor: "#fff" },
];

const BUILDS = [
  {
    id: "1",
    nome: "Build de Druida – TOP 1",
    icones: [
      require("../assets/wow.png"),
      require("../assets/dagger.png"),
      require("../assets/elder.png"),
      require("../assets/ALBIONONLINE.png"),
      require("../assets/tormenta.png"),
    ],
  },
  {
    id: "2",
    nome: "Build de evoker – dps",
    icones: [
      require("../assets/DeD.png"),
      require("../assets/rpgdocellbit.png"),
      require("../assets/tormenta.png"),
      require("../assets/wow.png"),
      require("../assets/elder.png"),
    ],
  },
];

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
          router.replace("/");
        },
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
        contentContainerStyle={[estilos.scroll, { paddingTop: insets.top + 10, paddingBottom: 110 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Botões topo */}
        <View style={estilos.headerBotoes}>
          <TouchableOpacity style={estilos.btnVermelho} onPress={() => router.push("/config" as any)}>
            <Ionicons name="options-outline" size={16} color="#FFF" />
            <Text style={estilos.btnTexto}>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.btnVermelho} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={16} color="#FFF" />
            <Text style={estilos.btnTexto}>Log-out</Text>
          </TouchableOpacity>
        </View>

        {/* Header do perfil */}
        <View style={estilos.perfilHeader}>
          {/* Avatar com imagem de fundo */}
          <View style={estilos.avatarWrapper}>
            <ImageBackground
              source={require("../assets/fundoperfil.png")}
              style={estilos.avatarFundo}
              imageStyle={{ borderRadius: 45 }}
              resizeMode="cover"
            >
              <View style={estilos.avatarOverlay} />
              <Ionicons name="person" size={50} color="#D4AF37" />
            </ImageBackground>
            <TouchableOpacity style={estilos.lapisBotao}>
              <Ionicons name="pencil" size={14} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Nome + Bio */}
          <View style={estilos.textosContainer}>
            <Text style={estilos.tituloUsuario}>
              {user?.usuario ? user.usuario.toUpperCase() : "USUÁRIO TESTE"}
            </Text>
            <View style={estilos.cardBio}>
              <Text style={estilos.txtBio}>
                Jogador veterano de WOW, personagem maior nível sendo Druida. No meu perfil tem minhas builds com alguns tutoriais para jogadores novatos.
              </Text>
            </View>
          </View>
        </View>

        {/* AMIGOS */}
        <Text style={estilos.secaoTitulo}>AMIGOS</Text>
        <View style={estilos.linhaAmigos}>
          {AMIGOS.map((a) => (
            <Ionicons key={a.id} name="person-circle" size={52} color={a.cor} />
          ))}
        </View>

        {/* RPG'S FAVORITOS */}
        <Text style={estilos.secaoTitulo}>RPG'S FAVORITOS</Text>
        <View style={estilos.caixaFavoritos}>
          {/* WoW */}
          <View style={estilos.favoritoItem}>
            <Image source={require("../assets/wow.png")} style={estilos.favoritoImagem} resizeMode="contain" />
          </View>
          <View style={estilos.divisorVertical} />
          {/* Daggerheart */}
          <View style={estilos.favoritoItem}>
            <Image source={require("../assets/dagger.png")} style={estilos.favoritoImagem} resizeMode="contain" />
          </View>
        </View>

        {/* SUGESTÃO DO PERFIL */}
        <Text style={estilos.secaoTitulo}>SUGESTÃO DO PERFIL</Text>

        {BUILDS.map((build) => (
          <View key={build.id} style={estilos.buildBloco}>
            <Text style={estilos.buildNome}>{build.nome}</Text>
            <View style={estilos.buildIcones}>
              {build.icones.map((icone, i) => (
                <Image key={i} source={icone} style={estilos.buildIcone} resizeMode="cover" />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Navbar fixo no fundo */}
      <View style={estilos.footerNav}>
        <BarraNavegacao />
      </View>
    </ImageBackground>
  );
}

const estilos = StyleSheet.create({
  fundo:   { flex: 1 },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(13,18,26,0.92)" },
  scroll:  { paddingHorizontal: 22 },

  // Topo
  headerBotoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  btnVermelho: {
    flexDirection: "row",
    backgroundColor: "#C21807",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 6,
    alignItems: "center",
    gap: 5,
  },
  btnTexto: { color: "#FFF", fontWeight: "bold", fontSize: 12 },

  // Perfil header
  perfilHeader: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 22,
    alignItems: "center",
  },
  avatarWrapper: { position: "relative" },
  avatarFundo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#444",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  avatarOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 45,
  },
  lapisBotao: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 5,
  },
  textosContainer: { flex: 1 },
  tituloUsuario: {
    color: "#E8D5A3",
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    letterSpacing: 1,
    marginBottom: 6,
  },
  cardBio: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
  },
  txtBio: {
    color: "#000",
    fontSize: 10,
    fontWeight: "700",
    lineHeight: 15,
  },

  // Amigos
  secaoTitulo: {
    color: "#E8D5A3",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    letterSpacing: 1,
  },
  linhaAmigos: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  // Favoritos
  caixaFavoritos: {
    flexDirection: "row",
    backgroundColor: "#C5B391",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 22,
    height: 80,
    alignItems: "center",
  },
  favoritoItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  favoritoImagem: {
    width: "90%",
    height: 60,
  },
  divisorVertical: {
    width: 1,
    height: "70%",
    backgroundColor: "rgba(0,0,0,0.25)",
  },

  // Builds
  buildBloco: { marginBottom: 20 },
  buildNome: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 8,
  },
  buildIcones: {
    flexDirection: "row",
    gap: 8,
  },
  buildIcone: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "#555",
  },

  footerNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});