// import { ScrollView, StyleSheet } from 'react-native';
// import { data } from './constants/data';
// import { Square } from './components/Square';

import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import MinimumNumber from './components/MinimumNumber';
import EmployeeCard from './components/EmployeeCard';
import Hailstone from './components/Hailstone';
import { SafeAreaView } from 'react-native-safe-area-context';

// export default function App() {
//   return (
//     <ScrollView style={styles.container}>
//       {data.map((item, index) => (
//         <Square key={item} text={`Square ${index + 1}`} />
//       ))}
//     </ScrollView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 20,
//   },
// });

export default function App() {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [valueC, setValueC] = useState(0);
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  // Hailstone
  const [value, setValue] = useState(0);
  const [sequence, setSequence] = useState<number[]>([]);
  const generateSequence = () => {
    if (value <= 0) {
      Alert.alert('Please enter a positive number and greater or equal than 1');
      return;
    }

    let tempValue = value;
    const resultSequence = [tempValue];

    while (tempValue > 1) {
      if (tempValue % 2 == 0) {
        tempValue = tempValue / 2;
      } else {
        tempValue = 3 * tempValue + 1;
      }
      resultSequence.push(tempValue);
    }
    setSequence(resultSequence);
  };
  const handleAddEmployee = () => {
    Alert.alert(
      'Employee Updated',
      `Name: ${fullName}\nAge: ${age}\nOccupation: ${occupation}`,
    );
  };
  const findMinimum = () => {
    const min = Math.min(valueA, valueB, valueC);
    Alert.alert('Minimum Number is', min.toString());
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <ScrollView>
          <EmployeeCard
            fullName={fullName}
            age={age}
            occupation={occupation}
            setFullName={setFullName}
            setAge={setAge}
            setOccupation={setOccupation}
            handleAddEmployee={handleAddEmployee}
          />
          <MinimumNumber
            valueA={valueA}
            valueB={valueB}
            valueC={valueC}
            setValueA={setValueA}
            setValueB={setValueB}
            setValueC={setValueC}
            findMinimum={findMinimum}
          />
          <Hailstone
            value={value}
            setValue={setValue}
            generateSequence={generateSequence}
            sequenceNumber={sequence}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
