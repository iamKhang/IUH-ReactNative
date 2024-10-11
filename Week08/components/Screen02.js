import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Check, Pencil, Trash2, Search, CirclePlus } from 'lucide-react';
import axios from 'axios';

const Item = ({ job, completed, id, onDelete, onToggleCompleted }) => (
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
      <Checkbox
        status={completed ? 'checked' : 'unchecked'}
        onPress={() => onToggleCompleted(id, !completed)}
        color={'#295F98'}
      />
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
        onPress={() => onDelete(id)}>
        <Trash2 style={{ color: 'red' }} />
      </TouchableOpacity>
    </View>
  </View>
);

export default function Screen02({ route, navigation }) {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState('');

  useEffect(() => {
    axios
      .get('https://66ff33ca2b9aac9c997e80a0.mockapi.io/api/todo')
      .then((res) => {
        setJobs(res.data);
        console.log(jobs);
      })
      .catch((error) => {
        console.error('Có lỗi xảy ra khi lấy dữ liệu:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://66ff33ca2b9aac9c997e80a0.mockapi.io/api/todo/${id}`)
      .then(() => {
        setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
      })
      .catch((error) => {
        console.error('Có lỗi xảy ra khi xóa công việc:', error);
      });
  };

  const handleToggleCompleted = (id, completed) => {
    axios
      .put(`https://66ff33ca2b9aac9c997e80a0.mockapi.io/api/todo/${id}`, {
        completed,
      })
      .then(() => {
        setJobs((prevJobs) =>
          prevJobs.map((job) => (job.id === id ? { ...job, completed } : job))
        );
      })
      .catch((error) => {
        console.error('Có lỗi xảy ra khi cập nhật công việc:', error);
      });
  };

  const handleAddJob = () => {
    if (newJob.trim() !== '') {
      const newJobData = { job: newJob, completed: false };
      axios
        .post(
          'https://66ff33ca2b9aac9c997e80a0.mockapi.io/api/todo',
          newJobData
        )
        .then((res) => {
          setJobs((prevJobs) => [...prevJobs, res.data]);
          setNewJob('');
        })
        .catch((error) => {
          console.error('Có lỗi xảy ra khi thêm công việc mới:', error);
        });
    }
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
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            paddingVertical: 5,
          }}
          onPress={() => navigation.navigate('Screen02')}></TouchableOpacity>
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
          renderItem={({ item }) => (
            <Item
              job={item.job}
              completed={item.completed}
              id={item.id}
              onDelete={handleDelete}
              onToggleCompleted={handleToggleCompleted}
            />
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View
        style={{
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10,
          marginBottom: 20,
          borderRadius: 10,
        }}>
        <TouchableOpacity onPress={handleAddJob}>
          <CirclePlus
            style={{
              backgroundColor: '#295F98',
              padding: 5,
              borderRadius: '50%',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
    // <View
    //   style={{
    //     width: '100%',
    //     alignItems: 'center',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     marginTop: 10,
    //     marginBottom: 20,
    //     borderRadius: 10,
    //   }}>
    //   <TouchableOpacity onPress={handleAddJob}>
    //     <Plus style={{ backgroundColor: '#ccc', padding: 5 }} />
    //   </TouchableOpacity>
    //   <TextInput
    //     style={{ height: '100%', backgroundColor: '#ccc', width: '80%' }}
    //     placeholder="Thêm công việc mới"
    //     value={newJob}
    //     onChangeText={setNewJob}
    //   />
    // </View>
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
