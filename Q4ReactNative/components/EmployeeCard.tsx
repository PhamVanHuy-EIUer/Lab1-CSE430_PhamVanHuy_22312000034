import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

interface Props {
  fullName: string;
  age: string;
  occupation: string;
  setFullName: (text: string) => void;
  setAge: (text: string) => void;
  setOccupation: (text: string) => void;
  handleAddEmployee: () => void;
}

export default function EmployeeCard({
  fullName,
  age,
  occupation,
  setFullName,
  setAge,
  setOccupation,
  handleAddEmployee,
}: Props) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Employee Info</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            placeholder="Enter your full name"
            placeholderTextColor="#94A3B8"
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Age</Text>
          <TextInput
            placeholder="Enter your age"
            placeholderTextColor="#94A3B8"
            keyboardType="numeric"
            style={styles.input}
            value={age}
            onChangeText={setAge}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Occupation</Text>
          <TextInput
            placeholder="Enter your occupation"
            placeholderTextColor="#94A3B8"
            style={styles.input}
            value={occupation}
            onChangeText={setOccupation}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleAddEmployee}
        >
          <Text style={styles.buttonText}>Update Info</Text>
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
    // Đổ bóng cho iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    // Đổ bóng cho Android
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E293B',
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
    backgroundColor: '#4F46E5',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 12,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
