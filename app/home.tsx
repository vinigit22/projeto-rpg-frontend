import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import BarraNavegacao from "@/components/BarraNavegacao";
import { useAuth } from "@/context/AuthContext";

const EVENTOS = [
  {
    id: "1",
    titulo: "Fase do estilo",
    descricao:
      "Throw e pôr seus ambrosia e participam de uma competição de moda de proporções surrealmante fazem com um NPC de transmogrificação em qualquer cidade principal para participar da Prova de Estilo.",
    duracao: "até 06/08/2026",
    imagem: require("../assets/elder.png"),
  },
];

const RAIDS = [
  { id: "1", nome: "Den of Nalorakh", nivel: "Nível mínimo: 60 · 5 vagas, buscando", membros: 4 },
];

export default function Home() {
  const margens = useSafeAreaInsets();
  const { user } = useAuth();

  return (
    <ImageBackground
      source={require("../assets/fundo1.png")}
      style={estilos.fundo}
      resizeMode="cover"
    >
      <View style={estilos.overlay} />
      <StatusBar barStyle="light-content" />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[estilos.rolagem, { paddingTop: margens.top + 12 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Saudação */}
        <Text style={estilos.saudacao}>Olá, {user?.usuario ?? "Aventureiro"} ⚔️</Text>

        {/* EVENTOS */}
        <Text style={estilos.secaoTitulo}>EVENTOS</Text>
        {EVENTOS.map((evento) => (
          <View key={evento.id} style={estilos.eventoCard}>
            <Image source={evento.imagem} style={estilos.eventoImagem} resizeMode="cover" />
            <View style={estilos.eventoInfo}>
              <Text style={estilos.eventoNome}>{evento.titulo}</Text>
              <Text style={estilos.eventoDesc} numberOfLines={4}>{evento.descricao}</Text>
              <Text style={estilos.eventoDuracao}>Duração: {evento.duracao}</Text>
            </View>
          </View>
        ))}

        {/* RAIDS */}
        <Text style={[estilos.secaoTitulo, { marginTop: 24 }]}>RAIDS</Text>
        {RAIDS.map((raid) => (
          <View key={raid.id} style={estilos.raidCard}>
            <View style={estilos.raidInfo}>
              <Text style={estilos.raidNome}>{raid.nome}</Text>
              <Text style={estilos.raidNivel}>{raid.nivel}</Text>
              <View style={estilos.raidMembros}>
                {Array.from({ length: raid.membros }).map((_, i) => (
                  <View key={i} style={estilos.avatarCirculo}>
                    <Ionicons name="person" size={14} color="#D4AF37" />
                  </View>
                ))}
                <TouchableOpacity style={estilos.raidBtnAdicionar}>
                  <Ionicons name="add" size={20} color="#D4AF37" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        <View style={{ height: 20 }} />
      </ScrollView>

      <BarraNavegacao />
    </ImageBackground>
  );
}

const estilos = StyleSheet.create({
  fundo:   { flex: 1 },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.55)" },
  rolagem: { paddingHorizontal: 16, paddingBottom: 10 },
  saudacao: {
    color: "#D4AF37",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 16,
    letterSpacing: 1,
  },
  secaoTitulo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 2,
    marginBottom: 12,
  },
  eventoCard: {
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(212,175,55,0.2)",
  },
  eventoImagem: { width: 90, height: 110 },
  eventoInfo:   { flex: 1, padding: 10, gap: 4 },
  eventoNome:   { color: "#fff", fontWeight: "700", fontSize: 14 },
  eventoDesc:   { color: "#ccc", fontSize: 11, lineHeight: 16 },
  eventoDuracao:{ color: "#D4AF37", fontSize: 11, marginTop: 4 },
  raidCard: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(212,175,55,0.2)",
  },
  raidInfo:  { gap: 6 },
  raidNome:  { color: "#fff", fontWeight: "700", fontSize: 15 },
  raidNivel: { color: "#aaa", fontSize: 12 },
  raidMembros: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 4 },
  avatarCirculo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(212,175,55,0.15)",
    borderWidth: 1,
    borderColor: "rgba(212,175,55,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  raidBtnAdicionar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#D4AF37",
    justifyContent: "center",
    alignItems: "center",
  },
});