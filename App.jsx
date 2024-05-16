import {Pressable, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from './src/redux_saga/Action';

const App = () => {
  const data = useSelector(state => state.data);
  console.log('🚀 ~ App ~ data:', data);
  const dispatch = useDispatch();

  const clickHandler = () => {
    console.log('Button Clicked');
    dispatch(getData());
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable onPress={()=>clickHandler()}>
        <Text style={{fontSize: 20}}>Get Data</Text>
      </Pressable>
    </View>
  );
};

export default App;

