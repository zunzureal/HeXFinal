import React from "react";
import { Image, Text, View, StyleSheet, SafeAreaView } from "react-native";
import COLORS from "./color";
import Icon from "react-native-vector-icons/MaterialIcons";

const DetailEmergency = ({ navigation, route }) => {
  const productData = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/heatS.png")}
          style={{ resizeMode: "contain", flex: 1 }}
        />
      </View>
      <View style={styles.detailContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, marginLeft: 10 }}>State</Text>
          <Text
            style={{
              fontSize: 16,
              padding: 15,
              backgroundColor: COLORS.green,
              justifyContent: "center",
              alignItems: "center",
              borderBottomLeftRadius: 30,
              borderTopLeftRadius: 30,
              color: COLORS.white,
            }}
          ></Text>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={{ fontSize: 16, marginBottom: 10 }}>
            แบ่งได้ 5 state
          </Text>
          <Text style={{ fontSize: 14, color: COLORS.black }}>
            ◦ State1 (ไม่มีผลกระทบจนมาก): ไม่จำเป็นต้องปฏิบัติในทางเฉพาะ
            แต่สามารถคำนึงถึงการดื่มน้ำเพียงพอและเป็นประจำเพื่อรักษาความชุ่มชื้นในร่างกาย.
            {"\n"}◦ State2(ผู้ที่มีความไวต่อความร้อน):
            ให้ระวังอาการเหนื่อยหนำและเหงื่อออก
            ควรดื่มน้ำเพียงพอและสวมใส่เสื้อผ้าบางเบาที่ระบายอากาศได้ดี.{"\n"} ◦
            State3(ผู้ที่มีความไวต่อความร้อน): ควรระวังอาการคลื่นไส้ หน้ามืด
            และอ่อนเพลีย
            ดื่มน้ำเพียงพอและหาที่ร่มเงาหรือที่ระบายอากาศเย็นเพื่อรักษาความรู้สึกสดชื่น.
            {"\n"}◦ State4(ผู้ที่มีความไวต่อความร้อน): ระวังอาการหัวใจเต้นเร็ว
            ซึมเศร้า และเสี่ยงต่อการช็อก
            ควรหาที่ร่มเงาและรีบไปสถานที่ที่มีอุปกรณ์เย็น
            เพื่อป้องกันอันตรายต่อสุขภาพ.{"\n"} ◦
            State5(อันตรายต่อชีวิตและสุขภาพ):
            ให้รีบหาที่ร่มเงาและติดต่อบริการฉุกเฉินโดยเร็วเพื่อรับการช่วยเหลือ.
            คำแนะนำเหล่านี้เป็นเพียงแนวทางทั่วไป
            แต่ควรสังเกตสุขภาพและรู้สึกความร้อนในร่างกายของตนเอง
            เพื่อปฏิบัติตัวอย่างเหมาะสมตามสภาวะอากาศและความร้อนในแต่ละวัน.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  detailContainer: {
    backgroundColor: COLORS.light,
    flex: 0.95,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    marginBottom: 30,
  },
  aboutContainer: {
    marginHorizontal: 10,
  },
  buyContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: "center",
    marginBottom: 50,
  },
});

export default DetailEmergency;
