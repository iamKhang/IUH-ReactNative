import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';
import {
  Check,
  Pencil,
  Trash2,
  Search,
  CirclePlus,
  ChevronLeft,
} from 'lucide-react';
import axios from 'axios';

const Item = ({ job, completed, id, onDelete, onToggleCompleted, onEdit }) => (
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
        }}
        onPress={() => onEdit(id, job)}>
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
  const [editingJobId, setEditingJobId] = useState(null); 
  const [editedJob, setEditedJob] = useState(''); 

  const fetchJobs = () => {
    axios
      .get('https://66ff33ca2b9aac9c997e80a0.mockapi.io/api/todo')
      .then((res) => {
        setJobs(res.data.reverse()); 
      })
      .catch((error) => {
        console.error('Có lỗi xảy ra khi lấy dữ liệu:', error);
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchJobs();
    }, [])
  );

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

  const handleEdit = (id, job) => {
    setEditingJobId(id);
    setEditedJob(job);
  };

  const handleUpdateJob = () => {
    if (editedJob.trim() !== '') {
      axios
        .put(`https://66ff33ca2b9aac9c997e80a0.mockapi.io/api/todo/${editingJobId}`, {
          job: editedJob,
        })
        .then(() => {
          setJobs((prevJobs) =>
            prevJobs.map((job) => (job.id === editingJobId ? { ...job, job: editedJob } : job))
          );
          setEditingJobId(null); 
          setEditedJob(''); 
        })
        .catch((error) => {
          console.error('Có lỗi xảy ra khi cập nhật công việc:', error);
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
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 5,
            paddingVertical: 5,
          }}
          onPress={() => navigation.navigate('Screen01')}>
          <ChevronLeft style={{ color: '#fff' }} />
        </TouchableOpacity>

        <Text style={[styles.headerTitle, { textAlign: 'center', flex: 1 }]}>
          TODO APP
        </Text>

        <View style={{ width: 40 }} />
      </View>

      {editingJobId && (
        <View style={{ flexDirection: 'row', margin: 20, alignItems: 'center' }}>
          <TextInput
            style={{ flex: 1, borderWidth: 1, padding: 10, borderColor: '#ddd', borderRadius: 5 }}
            value={editedJob}
            onChangeText={setEditedJob}
          />
          <TouchableOpacity onPress={handleUpdateJob} style={{ marginLeft: 10 }}>
            <Text style={{ color: '#295F98', fontWeight: 'bold' }}>Update</Text>
          </TouchableOpacity>
        </View>
      )}

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
              onEdit={handleEdit}
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
        <TouchableOpacity onPress={() => navigation.navigate('Screen03')}>
          <CirclePlus
            style={{
              backgroundColor: '#295F98',
              color: '#fff',
              padding: 5,
              borderRadius: '50%',
            }}
          />
        </TouchableOpacity>
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
