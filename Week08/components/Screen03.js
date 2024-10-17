import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

export default function Screen03({ route, navigation }) {
  const [newJob, setNewJob] = useState('');

  const handleAddJob = () => {
    console.log(newJob)
    if (newJob.trim() !== '') {
      const newJobData = { job: newJob, completed: false };
      axios
        .post(
          'https://66ff33ca2b9aac9c997e80a0.mockapi.io/api/todo',
          newJobData
        )
        .then((res) => {
          setNewJob('');
           navigation.navigate('Screen02');
        })
        .catch((error) => {
          console.error('Có lỗi xảy ra khi thêm công việc mới:', error);
        });
    }
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: '#f5f5f5', paddingHorizontal: 20 }}>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
        <View
          style={{
            flex: 7,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../assets/doraemon.jpg')}
            style={{
              height: 50,
              width: 50,
              resizeMode: 'cover',
              borderRadius: 50,
            }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Hi Khang</Text>
          <Text style={{ fontSize: 14, color: '#777' }}>
            Have a great day ahead
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 'auto' }}>
          <ArrowRight color="#000" size={20} />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          marginVertical: 40,
        }}>
        ADD YOUR JOB
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 5,
          paddingHorizontal: 10,
          marginBottom: 20,
        }}>
        <Mail color="#295F98" size={20} />
        <TextInput
          placeholder="input your job"
          style={{ flex: 1, padding: 10, fontSize: 16 }}
          value={newJob}
          onChangeText={setNewJob}
        />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#295F98',
          alignItems: 'center',
          paddingVertical: 10,
          borderRadius: 5,
        }}
        onPress={handleAddJob}>
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
          FINISH
        </Text>
      </TouchableOpacity>

      <View style={{ alignItems: 'center', marginTop: 30 }}>
        <Image
          source={{ uri: 'https://path-to-your-image' }}
          style={{ width: 100, height: 100 }}
        />
      </View>
    </View>
  );
}
