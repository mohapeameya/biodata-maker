import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

import { rashiValues, complexionValues, heightValues, weightValues, bloodGroupValues } from "../constants";
import { useEffect } from 'react';

import bappa from '../ganpati1.png';
import { convertDateFormat, convertTo12HourFormat } from '../utilities';

export default function PDFDoc({
  headerIcon, headerText,
  name, dob, tob, pob, rashi, nakshatra,
  complexion, bloodGroup, height, weight,
  education, job, salary,
  hobbies, religionCaste,
  morePersonalFields,
  father, fatherJob, fatherNative,
  mother, motherJob, motherNative,
  brotherElder, brotherElderJob, brotherYounger, brotherYoungerJob,
  sisterElder, sisterElderJob, sisterYounger, sisterYoungerJob,
  relatives,
  moreFamilyFields,
  contact, address,
  moreContactFields,
  image }) {
  const personalDetailsFlex = image.checked ?
    { label: { flex: '1' }, value: { flex: '1' } } :
    { label: { flex: '1' }, value: { flex: '1' } };
  const familyContactFlex = image.checked ?
    { label: { flex: '1' }, value: { flex: '2' } } :
    { label: { flex: '1' }, value: { flex: '1' } };

  useEffect(() => {
    console.log('Doc component loaded')
  }, [])



  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.border}>
          {headerIcon.checked &&
            <Image src={bappa} style={{ height: '50px', alignSelf: 'center', paddingTop: 5 }}></Image>
          }
          {headerText.checked &&
            <View style={{ paddingTop: 5, alignSelf: 'center' }}>
              <Text style={{ fontSize: 16 }}>{headerText.value}</Text>
            </View>}
          <View style={{ paddingLeft: 25, paddingRight: 25 }}>
            <Text style={styles.headerRow}>PERSONAL DETAILS</Text>
            <View style={{ flexDirection: 'row', fontSize: 12 }}>
              <View style={image.checked ? { flex: '2' } : { flex: '1' }}>
                {name.checked &&
                  <View style={styles.detailRow}>
                    <Text style={personalDetailsFlex.label}>Name</Text>
                    <Text style={personalDetailsFlex.value}>: {name.value}</Text>
                  </View>}
                {dob.checked &&
                  <View style={styles.detailRow}>
                    <Text style={personalDetailsFlex.label}>Date of birth</Text>
                    <Text style={personalDetailsFlex.value}>: {convertDateFormat(dob.value)}</Text>
                  </View>}
                {tob.checked &&
                  <View style={styles.detailRow}>
                    <Text style={personalDetailsFlex.label}>Time of birth</Text>
                    <Text style={personalDetailsFlex.value}>: {convertTo12HourFormat(tob.value)}</Text>
                  </View>}
                {pob.checked &&
                  <View style={styles.detailRow}>
                    <Text style={personalDetailsFlex.label}>Place of birth</Text>
                    <Text style={personalDetailsFlex.value}>: {pob.value}</Text>
                  </View>}
                {religionCaste.checked &&
                  <View style={styles.detailRow}>
                    <Text style={personalDetailsFlex.label}>Caste</Text>
                    <Text style={personalDetailsFlex.value}>: {religionCaste.value}</Text>
                  </View>}
                {rashi.checked &&
                  <View style={styles.detailRow}>
                    <Text style={personalDetailsFlex.label}>Rashi</Text>
                    <Text style={personalDetailsFlex.value}>: {rashiValues[rashi.value]}</Text>
                  </View>}
                {nakshatra.checked &&
                  <View style={styles.detailRow}>
                    <Text style={personalDetailsFlex.label}>Nakshatra</Text>
                    <Text style={personalDetailsFlex.value}>: {nakshatra.value}</Text>
                  </View>}
                {complexion.checked &&
                  <View style={styles.detailRow}>
                    <Text style={personalDetailsFlex.label}>Complexion</Text>
                    <Text style={personalDetailsFlex.value}>: {complexionValues[complexion.value]}</Text>
                  </View>}
                {height.checked &&
                  <View style={styles.detailRow}>
                    <Text style={personalDetailsFlex.label}>Height</Text>
                    <Text style={personalDetailsFlex.value}>: {heightValues[height.value]}</Text>
                  </View>}
                {weight.checked &&
                  <View style={styles.detailRow}>
                    <Text style={personalDetailsFlex.label}>Weight</Text>
                    <Text style={personalDetailsFlex.value}>: {weightValues[weight.value]}</Text>
                  </View>}
                {bloodGroup.checked &&
                  <View style={styles.detailRow}>
                    <Text style={personalDetailsFlex.label}>Blood Group</Text>
                    <Text style={personalDetailsFlex.value}>: {bloodGroupValues[bloodGroup.value]}</Text>
                  </View>}
                {education.checked &&
                  <View style={styles.detailRow}>
                    <Text style={personalDetailsFlex.label}>Education</Text>
                    <Text style={personalDetailsFlex.value}>: {education.value}</Text>
                  </View>}
                {job.checked &&
                  <View style={styles.detailRow}>
                    <Text style={personalDetailsFlex.label}>Occupation</Text>
                    <Text style={personalDetailsFlex.value}>: {job.value}</Text>
                  </View>}
                {salary.checked &&
                  <View style={styles.detailRow}>
                    <Text style={personalDetailsFlex.label}>Salary</Text>
                    <Text style={personalDetailsFlex.value}>: {salary.value}</Text>
                  </View>}
                {hobbies.checked &&
                  <View style={styles.detailRow}>
                    <Text style={personalDetailsFlex.label}>Hobbies</Text>
                    <Text style={personalDetailsFlex.value}>: {hobbies.value}</Text>
                  </View>}
                {morePersonalFields.map((item, index) => (
                  <View key={index} style={styles.detailRow}>
                    <Text style={personalDetailsFlex.label}>{item.name}</Text>
                    <Text style={personalDetailsFlex.value}>: {item.value}</Text>
                  </View>
                ))}
              </View>
              {image.checked &&
                <View style={{ flex: '1' }}>
                  <Image src={image.value}></Image>
                </View>
              }
            </View>
            <Text style={styles.headerRow}>FAMILY DETAILS</Text>
            <View style={{ fontSize: 12 }}>
              {father.checked &&
                <View style={styles.detailRow}>
                  <Text style={familyContactFlex.label}>Father</Text>
                  <Text style={familyContactFlex.value}>: {father.value}</Text>
                </View>}
              {fatherJob.checked &&
                <View style={styles.detailRow}>
                  <Text style={familyContactFlex.label}>Occupation</Text>
                  <Text style={familyContactFlex.value}>: {fatherJob.value}</Text>
                </View>}
              {fatherNative.checked &&
                <View style={styles.detailRow}>
                  <Text style={familyContactFlex.label}>Native</Text>
                  <Text style={familyContactFlex.value}>: {fatherNative.value}</Text>
                </View>}
              {mother.checked &&
                <View style={styles.detailRow}>
                  <Text style={familyContactFlex.label}>Mother</Text>
                  <Text style={familyContactFlex.value}>: {mother.value}</Text>
                </View>}
              {motherJob.checked &&
                <View style={styles.detailRow}>
                  <Text style={familyContactFlex.label}>Occupation</Text>
                  <Text style={familyContactFlex.value}>: {motherJob.value}</Text>
                </View>}
              {motherNative.checked &&
                <View style={styles.detailRow}>
                  <Text style={familyContactFlex.label}>Native</Text>
                  <Text style={familyContactFlex.value}>: {motherNative.value}</Text>
                </View>}
              {brotherElder.checked &&
                <View style={styles.detailRow}>
                  <Text style={familyContactFlex.label}>Brother (Elder)</Text>
                  <Text style={familyContactFlex.value}>: {brotherElder.value}</Text>
                </View>}
              {brotherElderJob.checked &&
                <View style={styles.detailRow}>
                  <Text style={familyContactFlex.label}>Occupation</Text>
                  <Text style={familyContactFlex.value}>: {brotherElderJob.value}</Text>
                </View>}
              {brotherYounger.checked &&
                <View style={styles.detailRow}>
                  <Text style={familyContactFlex.label}>Brother (Younger)</Text>
                  <Text style={familyContactFlex.value}>: {brotherYounger.value}</Text>
                </View>}
              {brotherYoungerJob.checked &&
                <View style={styles.detailRow}>
                  <Text style={familyContactFlex.label}>Occupation</Text>
                  <Text style={familyContactFlex.value}>: {brotherYoungerJob.value}</Text>
                </View>}
              {sisterElder.checked &&
                <View style={styles.detailRow}>
                  <Text style={familyContactFlex.label}>Sister (Elder)</Text>
                  <Text style={familyContactFlex.value}>: {sisterElder.value}</Text>
                </View>}
              {sisterElderJob.checked &&
                <View style={styles.detailRow}>
                  <Text style={familyContactFlex.label}>Occupation</Text>
                  <Text style={familyContactFlex.value}>: {sisterElderJob.value}</Text>
                </View>}
              {sisterYounger.checked &&
                <View style={styles.detailRow}>
                  <Text style={familyContactFlex.label}>Sister (Younger)</Text>
                  <Text style={familyContactFlex.value}>: {sisterYounger.value}</Text>
                </View>}
              {sisterYoungerJob.checked &&
                <View style={styles.detailRow}>
                  <Text style={familyContactFlex.label}>Occupation</Text>
                  <Text style={familyContactFlex.value}>: {sisterYoungerJob.value}</Text>
                </View>}
              {relatives.checked &&
                <View style={styles.detailRow}>
                  <Text style={familyContactFlex.label}>Relatives</Text>
                  <Text style={familyContactFlex.value}>: {relatives.value}</Text>
                </View>}
              {moreFamilyFields.map((item, index) => (
                <View key={index} style={styles.detailRow}>
                  <Text style={familyContactFlex.label}>{item.name}</Text>
                  <Text style={familyContactFlex.value}>: {item.value}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.headerRow}>CONTACT DETAILS</Text>
            <View style={{ fontSize: 12 }}>
              {contact.checked &&
                <View style={styles.detailRow}>
                  <Text style={familyContactFlex.label}>Mobile</Text>
                  <Text style={familyContactFlex.value}>: {contact.value}</Text>
                </View>}
              {address.checked &&
                <View style={styles.detailRow}>
                  <Text style={familyContactFlex.label}>Address</Text>
                  <Text style={familyContactFlex.value}>: {address.value}</Text>
                </View>}
              {moreContactFields.map((item, index) => (
                <View key={index} style={styles.detailRow}>
                  <Text style={familyContactFlex.label}>{item.name}</Text>
                  <Text style={familyContactFlex.value}>: {item.value}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff', // Optional: Set background color for the page
    padding: 25, // Padding for the page content (white space)
  },
  border: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10
  },
  headerRow: {
    paddingTop: 18,
    fontSize: 13,
    paddingBottom: 7
  },
  detailRow: {
    flexDirection: 'row',
    paddingBottom: 5
  }
});