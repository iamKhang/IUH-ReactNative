import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import {
  Check,
  Pencil,
  Trash2,
  Search
} from 'lucide-react';
import axios from 'axios';

const Item = ({ job, id, onDelete }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
      marginHorizontal: 20,
      minHeight: 50,
      backgroundColor: '#ccc',
      padding: 5,
      borderRadius: 5,
    }}>
    <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
      <Check style={{ color: 'green' }} />
    </View>
    <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center' }}>
      <Text>{job}</Text>
    </View>
    <View
      style={{
        justifyContent: 'center',
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          height: '50%',
          marginRight: 20,
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <Pencil />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          height: '50%',
          marginRight: 20,
          alignItems: 'center',
          borderRadius: 5,
        }}
        onPress={() => onDelete(id)}
      >
        <Trash2 style={{ color: 'red' }} />
      </TouchableOpacity>
    </View>
  </View>
);

export default function Screen01() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get('https://66ff33ca2b9aac9c997e80a0.mockapi.io/api/todo')
      .then((res) => {
        setJobs(res.data);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi lấy dữ liệu:", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://66ff33ca2b9aac9c997e80a0.mockapi.io/api/todo/${id}`)
      .then(() => {
        setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi xóa công việc:", error);
      });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#295F98',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text style={styles.headerTitle}>TODO APP</Text>
      </View>

      <View
        style={{
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10,
          borderRadius: 10,
        }}>
        <Search style={{ backgroundColor: '#ccc', padding: 5 }} />
        <TextInput
          style={{ height: '100%', backgroundColor: '#ccc', width: '80%' }}
          placeholder="Tìm kiếm"
        />
      </View>

      <View style={{ flex: 8, marginTop: 10 }}>
        <FlatList
          data={jobs}
          renderItem={({ item }) => <Item job={item.job} id={item.id} onDelete={handleDelete} />}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});