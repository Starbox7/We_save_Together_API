
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

import GridLayout from '../components/GridLayout';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CampaginView = ({ navigation }) => {

  const [buttonColor, setButtonColor] = useState('#FFF1D7');
  
  const handleButtonPress = () => {
    setButtonColor('green');

  }
  

  const [roomNum, setRoomNum] = useState(0)
  
  const rooms = [
    {

    },

    {
      id1: "누적 봉사 시간이란?",
      desc1: "• 총 봉사 시간과 지급 예정 시간를 합산한 시간을 누적 봉사 시간이라고 합니다.",
      id2: "총 시간이란?",
      desc2: "• 봉사활동 인정 시간이 지급 완료된 시간입니다.",
      id3: "지급 예정 시간이란?",
      desc3: "• 봉사활동이 완료되어 기관의 봉사활동 인정 시간 지급을 기다리는 상태인 봉사시간의 총량입니다.",
    },

    {
        id1: "누적 봉사 시간이란?",
        desc1: "• 총 봉사 시간과 지급 예정 시간를 합산한 시간을 누적 봉사 시간이라고 합니다.",
        id2: "총 시간이란?",
        desc2: "• 봉사활동 인정 시간이 지급 완료된 시간입니다.",
        id3: "지급 예정 시간이란?",
        desc3: "• 봉사활동이 완료되어 기관의 봉사활동 인정 시간 지급을 기다리는 상태인 봉사시간의 총량입니다.",
    }
  ]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => { navigation.pop() }}>
          <AntDesign name="closecircleo" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>

        <View style={styles.fotterElement}>
        <TouchableOpacity point
          onPress={() => setRoomNum(0)} >
            <View style={{
            borderRadius: 10,
            padding: 10,
            alignItems: 'center',
            width:75,
            height:50,
             
            padding: 10           
            }}>
              <MaterialCommunityIcons name="file-powerpoint-box-outline" size={30} color="black" />
            </View>
        </TouchableOpacity>
        </View>


        <View style={styles.fotterElement}>
        <TouchableOpacity 
          onPress={() => setRoomNum(1)} >
            <View style={{
            borderRadius: 10,
            padding: 10,
            alignItems: 'center',
            width:75,
            height:50,            
            }}>
              <FontAwesome name="leaf" size={30} color="black" />
            </View>
        </TouchableOpacity>
        </View>


        <View style={styles.fotterElement}>
        <TouchableOpacity 
          onPress={() => setRoomNum(2)} >
            <View style={{
            borderRadius: 10,
            padding: 10,
            alignItems: 'center',
            width:75,
            height:50,            
            }}>
              <FontAwesome name="leaf" size={30} color="black" />
            </View>
        </TouchableOpacity>
        </View>
               
      </View>
      
      <GridLayout />
      

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'center',
    padding: 20,
  },
  header: {
    height: 60,
    backgroundColor: '#ffffff',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    flex: 3,
    padding: 20,
    backgroundColor: '#FFF1D7',
    shadowColor: "#A01900", 
    shadowOpacity: 0.1,
    shadowOffset: { width: 3, height: 3 }, 
    elevation: 9,
    borderRadius:20,
    marginLeft:10
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  footer: {
    flexDirection: "row",
    marginLeft:100,
    justifyContent: 'space-around',
    paddingBottom: 10
  }, 
  fotterElement: {
    backgroundColor: '#FFF1D7',
    shadowColor: "#A01900", 
    shadowOpacity: 0.1,
    shadowOffset: { width: 3, height: 3 }, 
    elevation: 9,
    borderRadius:20,
  },
  case1: {
    flex: 1,
  },

});

export default CampaginView;