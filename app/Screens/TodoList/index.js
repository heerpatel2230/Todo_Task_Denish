import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import appsApi from '../../api/api';
import _ from 'lodash';
import {BaseColor} from '../../config/theme';
import CModal from '../../Components/CModal';
import CInput from '../../Components/CInput';
import CButton from '../../Components/CButton';
import {useAlert} from '../../Components/UI/NativeAlert';
import {useMutation} from 'react-query';

const RoomList = ({navigation}) => {
  const nAlert = useAlert();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [addTodoModal, setTodoModal] = useState(false);
  const [selectedObj, setSelectedObj] = useState({});
  const [email, setEmail] = useState('');
  const [todoTask, setTodoTask] = useState('');
  const [loadingBool, setLoadingBool] = useState(false);
  const [editBool, setEditBool] = useState(false);
  const [search, setSearch] = useState('');

  // getting list start entry

  useEffect(() => {
    getTodoListCall(search);
  }, [search]);

  // GetTodoListCall fetch data

  const getTodoListCall = async v => {
    const resultData = await appsApi.getTodoList(v);
    if (!_.isEmpty(resultData.data) && _.isArray(resultData.data)) {
      setItems(resultData.data);
      setLoading(false);
    } else {
      setItems(resultData.data);
      setLoading(false);
    }
  };

  // updateCall

  const updateCall = async item => {
    const updatedObject = {
      data: {
        email: editBool ? email : item.attributes.email,
        desciption: editBool ? todoTask : item.attributes.desciption,
        done: editBool ? item.attributes.done : !item.attributes.done,
      },
    };
    const resulComplete = await appsApi.updateTodo(updatedObject, item.id);
    if (resulComplete) {
      setSelectedObj({});
      getTodoListCall(search);
      setTodoModal(false);
      setLoadingBool(false);
      setEditBool(false);
    } else {
      setEditBool(false);
      setLoadingBool(false);
      setLoadingBool(false);
    }
  };

  // delete call

  const onDelete = async () => {
    // selectedObj
    if (!_.isEmpty(selectedObj)) {
      const deleteCall = await appsApi.deleteTodo(selectedObj.id);
      if (deleteCall) {
        nAlert.successToast('Success', 'Delete Successfully!!');
        setSelectedObj({});
        getTodoListCall(search);
      }
    }
  };

  const checkCondition = () => {
    if (_.isEmpty(todoTask)) {
      nAlert.errorToast('Error', 'Please Enter Todo Task!');
    } else if (_.isEmpty(email)) {
      nAlert.errorToast('Error', 'Please Enter Email!');
    } else {
      if (!_.isEmpty(selectedObj)) {
        setLoadingBool(true);
        updateCall(selectedObj);
      } else {
        addTodoCalls();
      }
    }
  };

  const addTodoCalls = () => {
    processCall.mutate({
      data: {
        email: email,
        desciption: todoTask,
        done: false,
      },
    });
  };
  // add call
  const processCall = useMutation(appsApi.createTodo, {
    onSuccess: result => {
      if (result) {
        nAlert.successToast('Success', 'Task Successfully added');
        setEmail('');
        setTodoTask('');
        setTodoModal(false);
        getTodoListCall(search);
      }
    },
  });

  // Render section list of Task

  const renderItem = ({item}) => (
    <View style={styles.firstview}>
      <View style={styles.rowCsss}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            updateCall(item);
          }}>
          <Feather
            name={item.attributes.done ? 'check-circle' : 'circle'}
            size={22}
            color={BaseColor.white}
          />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.textview}>
          {item?.attributes?.desciption || 'No Text'}
        </Text>
      </View>
      <View style={styles.rowCss}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{marginRight: 10}}
          onPress={() => {
            setSelectedObj(item);
            setEmail(item.attributes.email);
            setTodoTask(item.attributes.desciption);
            setEditBool(true);
            setTodoModal(true);
          }}>
          <Feather name={'edit'} size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            setSelectedObj(item);
            setModalVisible(true);
          }}>
          <Feather name={'trash'} size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.main}>
      <StatusBar translucent backgroundColor={BaseColor.primary} />
      <View style={styles.headerTitleInput}>
        <View>
          <CInput
            searchIcon
            onChangeText={setSearch}
            value={search}
            placeholder="Search Your Task"
            keyboardType="email"
            onSubmitEditing={() => {
              Keyboard.dismiss();
              getTodoListCall(search);
            }}
          />
        </View>
      </View>
      <View style={styles.headerTitle}>
        <Text style={styles.textTitle}>Todo List</Text>
        <TouchableOpacity
          style={styles.addNewContainer}
          onPress={() => {
            setEmail('');
            setTodoTask('');
            setTodoModal(true);
            setEditBool(false);
          }}>
          <Text style={styles.addNewText}>Add New</Text>
          <Feather
            style={styles.pluseIconCss}
            name={'plus'}
            size={18}
            color={BaseColor.white}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.borderCss} />
      <View style={styles.flatList}>
        {loading ? (
          <View>
            <ActivityIndicator size={'large'} color={'#fff'} />
          </View>
        ) : (
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => {
              return (
                <View>
                  <Text style={styles.textview}>No Data Found</Text>
                </View>
              );
            }}
          />
        )}
      </View>
      <CModal
        deleteModal
        deleteTitle={'Are You Sure You Want To Delete ?'}
        visible={modalVisible}
        onPressNo={() => {
          setModalVisible(!modalVisible);
        }}
        onPressYes={() => {
          onDelete();
          setModalVisible(!modalVisible);
        }}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      />
      <CModal
        visible={addTodoModal}
        onPressNo={() => {
          setTodoModal(!addTodoModal);
        }}
        onPressYes={() => {
          onDelete();
          setTodoModal(!addTodoModal);
        }}
        onRequestClose={() => {
          setTodoModal(!addTodoModal);
        }}>
        <View style={styles.modalAdd}>
          <View style={{marginBottom: 20}}>
            <Text
              style={{
                fontSize: 16,
                color: BaseColor.primary,
                fontWeight: '700',
              }}>
              {editBool ? 'Edit' : 'Add'} New
            </Text>
          </View>
          <CInput
            onChangeText={setTodoTask}
            value={todoTask}
            placeholder="Enter Todo Task"
            keyboardType="email"
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
          />
          <CInput
            onChangeText={setEmail}
            value={email}
            placeholder="Enter your email"
            keyboardType="email"
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
          />
          <CButton
            title={editBool ? 'Edit Todo' : 'Add Todo'}
            btnStyle={{width: '100%'}}
            handleButtonPress={() => {
              // toggleVisibility();
              Keyboard.dismiss();

              checkCondition();
            }}
            disable={processCall.isLoading || loadingBool}
            loading={processCall.isLoading || loadingBool}
          />
        </View>
      </CModal>
    </View>
  );
};

export default RoomList;
