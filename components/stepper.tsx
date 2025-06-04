import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/Ionicons';


const steps = [
  'Personal Details',
  'Address',
  'Spouse Details',
  'Parents Details',
  'Savings Details',
  'Loan Details',
];

const RegistrationForm = ({ onCancel, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleSubmit = () => {
    console.log('Submitted Data:', formData);
    onSubmit?.(); // Close modal
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <TextInput style={styles.input} placeholder="Marital Status" onChangeText={text => handleInputChange('maritalStatus', text)} />
            <TextInput style={styles.input} placeholder="Occupation Type" onChangeText={text => handleInputChange('occupationType', text)} />
            <TextInput style={styles.input} placeholder="Profession Type" onChangeText={text => handleInputChange('professionType', text)} />
            <TextInput style={styles.input} placeholder="Sector Type" onChangeText={text => handleInputChange('sectorType', text)} />
            <TextInput style={styles.input} placeholder="Monthly Earning" keyboardType="numeric" onChangeText={text => handleInputChange('monthlyEarning', text)} />
          </>
        );
      case 1:
        return (
          <>
            <TextInput style={styles.input} placeholder="City" onChangeText={text => handleInputChange('city', text)} />
            <TextInput style={styles.input} placeholder="State" onChangeText={text => handleInputChange('state', text)} />
            <TextInput style={styles.input} placeholder="Pincode" keyboardType="numeric" onChangeText={text => handleInputChange('pincode', text)} />
            <TextInput style={styles.input} placeholder="Country" onChangeText={text => handleInputChange('country', text)} />
            <TextInput style={styles.input} placeholder="Date of Birth" onChangeText={text => handleInputChange('dob', text)} />
          </>
        );
      case 2:
        return (
          <>
            <TextInput style={styles.input} placeholder="Spouse Name" onChangeText={text => handleInputChange('spouseName', text)} />
            <TextInput style={styles.input} placeholder="Spouse DOB" onChangeText={text => handleInputChange('spouseDob', text)} />
            <TextInput style={styles.input} placeholder="Profession Type" onChangeText={text => handleInputChange('spouseProfessionType', text)} />
            <TextInput style={styles.input} placeholder="Sector Type" onChangeText={text => handleInputChange('spouseSectorType', text)} />
            <TextInput style={styles.input} placeholder="Occupation Type" onChangeText={text => handleInputChange('spouseOccupationType', text)} />
            <TextInput style={styles.input} placeholder="Monthly Earning" keyboardType="numeric" onChangeText={text => handleInputChange('spouseEarning', text)} />
          </>
        );
      case 3:
        return (
          <>
            <TextInput style={styles.input} placeholder="Father's Name" onChangeText={text => handleInputChange('fatherName', text)} />
            <TextInput style={styles.input} placeholder="Father's Profession" onChangeText={text => handleInputChange('fatherProfession', text)} />
            <TextInput style={styles.input} placeholder="Father's DOB" onChangeText={text => handleInputChange('fatherDob', text)} />
            <TextInput style={styles.input} placeholder="Father's Occupation" onChangeText={text => handleInputChange('fatherOccupation', text)} />
            <TextInput style={styles.input} placeholder="Father's Sector" onChangeText={text => handleInputChange('fatherSector', text)} />
            <TextInput style={styles.input} placeholder="Father's Earning" keyboardType="numeric" onChangeText={text => handleInputChange('fatherEarning', text)} />
            <TextInput style={styles.input} placeholder="Mother's Name" onChangeText={text => handleInputChange('motherName', text)} />
            <TextInput style={styles.input} placeholder="Mother's Profession" onChangeText={text => handleInputChange('motherProfession', text)} />
            <TextInput style={styles.input} placeholder="Mother's DOB" onChangeText={text => handleInputChange('motherDob', text)} />
            <TextInput style={styles.input} placeholder="Mother's Occupation" onChangeText={text => handleInputChange('motherOccupation', text)} />
            <TextInput style={styles.input} placeholder="Mother's Sector" onChangeText={text => handleInputChange('motherSector', text)} />
            <TextInput style={styles.input} placeholder="Mother's Earning" keyboardType="numeric" onChangeText={text => handleInputChange('motherEarning', text)} />
          </>
        );
      case 4:
        return (
          <>
            <TextInput style={styles.input} placeholder="Scheme Type" onChangeText={text => handleInputChange('schemeType', text)} />
            <TextInput style={styles.input} placeholder="Scheme Amount" keyboardType="numeric" onChangeText={text => handleInputChange('schemeAmount', text)} />
            <TextInput style={styles.input} placeholder="Scheme Sector" onChangeText={text => handleInputChange('schemeSector', text)} />
          </>
        );
      case 5:
        return (
          <>
            <TextInput style={styles.input} placeholder="EMI Type" onChangeText={text => handleInputChange('emiType', text)} />
            <TextInput style={styles.input} placeholder="EMI Amount" keyboardType="numeric" onChangeText={text => handleInputChange('emiAmount', text)} />
            <TextInput style={styles.input} placeholder="EMI Date" onChangeText={text => handleInputChange('emiDate', text)} />
            <TextInput style={styles.input} placeholder="Tenure of EMI" onChangeText={text => handleInputChange('emiTenure', text)} />
            <TextInput style={styles.input} placeholder="Financer Details" onChangeText={text => handleInputChange('financerDetails', text)} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* <Progress.Bar progress={(currentStep + 1) / steps.length} width={null} height={10} borderRadius={5} /> */}

      <View style={styles.stepIndicator}>
  {[0, 1, 2, 3, 4].map((step, index) => {
    const isCompleted = currentStep > index;
    const isCurrent = currentStep === index;

    return (
      <React.Fragment key={index}>
        <TouchableOpacity
          disabled={!isCompleted && !isCurrent}
          onPress={() => {
            if (isCompleted || isCurrent) setCurrentStep(index);
          }}
        >
          <View
            style={[
              styles.stepCircle,
              {
                backgroundColor:
                  isCompleted || isCurrent ? '#00D09E' : '#ccc',
              },
            ]}
          >
            <Text style={styles.stepLabel}>{step + 1}</Text>
          </View>
        </TouchableOpacity>

        {index !== 4 && (
          <View
            style={[
              styles.stepLine,
              {
                backgroundColor: isCompleted ? '#00D09E' : '#ccc',
              },
            ]}
          />
        )}
      </React.Fragment>
    );
  })}
</View>


      <ScrollView style={styles.formContainer}>
        <Text style={styles.heading}>{steps[currentStep]}</Text>
        <Text style={styles.subheading}>Please ensure all information is entered accurately to enable seamless calculations and provide you with the best possible experience.</Text>
        {renderStep()}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelBtn}  onPress={onCancel}>
        <Icon name="close-circle-outline" size={28} color="#ff4d4d" />
        </TouchableOpacity>

        {/* {currentStep > 0 && 
        
        <Button title="Back" onPress={prevStep} />}
        {currentStep < steps.length - 1
          ? <Button title="Next" onPress={nextStep} />
          : <Button title="Submit" onPress={handleSubmit} />} */}
           {currentStep < steps.length - 1 ? (
    <TouchableOpacity onPress={nextStep} style={styles.iconButton}>
      <Icon name="arrow-forward-circle-outline" size={32} color="#00D09E" />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={handleSubmit} style={styles.iconButton}>
      <Icon name="checkmark-done-circle-outline" size={32} color="#00D09E" />
    </TouchableOpacity>
  )}
      </View>
    </View>
  );
};

export default RegistrationForm;

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#F1FFF3' ,borderRadius:20},
  formContainer: { marginVertical: 20 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 5 , fontFamily: 'NotoSans' , color:'#052224' },
  subheading: {fontSize: 12, fontWeight: '400', marginBottom: 20 , fontFamily: 'NotoSans' , color:'#052224'},
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginBottom: 12 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cancelBtn: { padding: 10 },
  cancelText: { color: 'red' },
  iconButton: {
    marginHorizontal: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  stepButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  stepIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  stepLine: {
    height: 4,
    width: 30,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
    borderRadius: 2,
  },
  
});
