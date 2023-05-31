import React from "react";
import { Image, Text, View, StyleSheet, SafeAreaView } from "react-native";
import COLORS from "./color";
import Icon from "react-native-vector-icons/MaterialIcons";

const Detail = ({ navigation, route }) => {
  const productData = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/sohot.png")}
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
          <Text style={{ fontSize: 18, marginLeft: 10 }}>คำแนะนำ</Text>
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
          <Text style={{ fontSize: 13, color: COLORS.black }}>
            1. อย่าลืมใส่ครีมกันแดด: คำเตือนว่าในขณะที่อากาศร้อนและมีแสงแดดแรง
            การสวมครีมกันแดดเป็นสิ่งสำคัญ
            เพื่อปกป้องผิวหน้าและผิวกายจากการเผาผลาญจากแสงแดด
            อย่าลืมเลือกครีมที่มีปัจจัยกันแดด SPF สูงพอดีกับสภาพผิวของคุณ
            {"\n"}2. ใส่เสื้อผ้าที่ครอบผิว:
            เสื้อผ้าที่มีการครอบผิวและทำจากวัสดุที่หายใจได้ เช่นเสื้อผ้าบาง
            รูปแบบแจ็คเก็ตหรือเสื้อผ้าที่มีคุณสมบัติกันแสง UV
            จะช่วยปกป้องผิวคุณจากแสงแดดที่เข้ม
            {"\n"}3. อยู่ในที่ร่มเงา: ลมแดดมีความร้อนและรังสี UV
            ที่สามารถทำให้ร่างกายเกิดอันตรายได้
            ดังนั้นควรหลีกเลี่ยงการอยู่ภายใต้แสงแดดโดยตรงในช่วงเวลาที่ร้อนแรง
            เช่นเวลาประมาณ 10 โมงเช้าถึง 4 โมงเย็น
            และหาที่ร่มเงาเพื่อปกป้องตัวเอง
            {"\n"}4. ใส่หมวกกันแดด:
            หมวกกันแดดช่วยปกป้องใบหน้าและหน้าผากจากแสงแดดโดยตรง
            ควรเลือกหมวกที่มีซองที่กว้างพอที่จะปกป้องจมูกและคางด้วย
            {"\n"}5. ดื่มน้ำเพียงพอ:
            ลมแดดสามารถทำให้ร่างกายขาดน้ำและถูกล้างออกได้
            คำเตือนว่าควรดื่มน้ำเพียงพอและบ่อยครั้งเพื่อรักษาความชุ่มชื้นและป้องกันการเกิดอาการขาดน้ำในร่างกาย
            {"\n"}6. ระวังผลิตภัณฑ์ที่ตอบสนองต่อแสงแดด:
            มีบางสารเคมีหรือผลิตภัณฑ์ที่อาจมีส่วนประกอบที่ทำให้ผิวแดงหรือระคายเคืองเมื่อมาอยู่ในแสงแดด
            ควรอ่านฉลากผลิตภัณฑ์และปฏิบัติตามคำแนะนำของผู้ผลิต
            {"\n\n"}
            คำเตือนเหล่านี้ช่วยให้คุณปกป้องตัวเองจากผลกระทบของลมแดดที่มีความร้อนและรังสี
            UV
            อย่างมีประสิทธิภาพและช่วยให้คุณสามารถเพลิดเพลินกับกิจกรรมกลางแจ้งในระหว่างช่วงเวลาที่ร้อนแรงได้อย่างปลอดภัย
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
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  detailContainer: {
    backgroundColor: COLORS.light,
    flex: 0.95,
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

export default Detail;
