import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

interface Props {
  value: number;
  setValue: (val: number) => void;
  generateSequence: () => void;
  sequenceNumber: number[];
}

export default function Hailstone({
  value,
  setValue,
  generateSequence,
  sequenceNumber,
}: Props) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Hailstone Sequence</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Enter a Number</Text>
          <TextInput
            placeholder="e.g., 7"
            placeholderTextColor="#94A3B8"
            keyboardType="numeric"
            style={styles.input}
            value={value === 0 ? '' : value.toString()}
            onChangeText={text => setValue(Number(text) || 0)}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={generateSequence}
        >
          <Text style={styles.buttonText}>Generate Sequence</Text>
        </TouchableOpacity>

        {sequenceNumber.length > 0 && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Result Sequence:</Text>
            <View style={styles.scrollBox}>
              <ScrollView
                nestedScrollEnabled
                showsVerticalScrollIndicator={true}
              >
                <Text style={styles.sequenceText}>
                  {sequenceNumber.join(' → ')}
                </Text>
              </ScrollView>
            </View>
            <Text style={styles.countText}>
              Total steps: {sequenceNumber.length}
            </Text>
          </View>
        )}
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
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E1B4B',
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
    color: '#1E293B',
    backgroundColor: '#F1F5F9',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  button: {
    backgroundColor: '#6366F1',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#6366F1',
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
  resultContainer: {
    marginTop: 24,
    paddingTop: 20,
    borderTopWidth: 1,
    borderColor: '#F1F5F9',
  },
  resultLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 10,
  },
  scrollBox: {
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    maxHeight: 150,
  },
  sequenceText: {
    fontSize: 15,
    color: '#4F46E5',
    lineHeight: 24,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  countText: {
    fontSize: 12,
    color: '#94A3B8',
    textAlign: 'right',
    marginTop: 6,
    fontWeight: '500',
  },
});
