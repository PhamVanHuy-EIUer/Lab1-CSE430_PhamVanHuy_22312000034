import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

interface Props {
  valueA: number;
  valueB: number;
  valueC: number;
  setValueA: (val: number) => void;
  setValueB: (val: number) => void;
  setValueC: (val: number) => void;
  findMinimum: () => void;
}

export default function MinimumNumber({
  valueA,
  valueB,
  valueC,
  setValueA,
  setValueB,
  setValueC,
  findMinimum,
}: Props) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Find Minimum Number</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Value A</Text>
          <TextInput
            placeholder="Enter value A"
            placeholderTextColor="#94A3B8"
            keyboardType="numeric"
            style={styles.input}
            value={valueA === 0 ? '' : valueA.toString()}
            onChangeText={text => setValueA(Number(text) || 0)}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Value B</Text>
          <TextInput
            placeholder="Enter value B"
            placeholderTextColor="#94A3B8"
            keyboardType="numeric"
            style={styles.input}
            value={valueB === 0 ? '' : valueB.toString()}
            onChangeText={text => setValueB(Number(text) || 0)}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Value C</Text>
          <TextInput
            placeholder="Enter value C"
            placeholderTextColor="#94A3B8"
            keyboardType="numeric"
            style={styles.input}
            value={valueC === 0 ? '' : valueC.toString()}
            onChangeText={text => setValueC(Number(text) || 0)}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={findMinimum}
        >
          <Text style={styles.buttonText}>Find Minimum</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    padding: 20,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 24,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 6,
  },
  input: {
    fontSize: 16,
    color: '#0F172A',
    backgroundColor: '#F1F5F9',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  button: {
    backgroundColor: '#10B981',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 12,
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
