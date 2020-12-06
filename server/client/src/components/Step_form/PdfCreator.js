import React from 'react'
import { Document, Page, Text, View, StyleSheet, Image, Font } from "@react-pdf/renderer";


const styles = StyleSheet.create({
  page: { backgroundColor: 'tomato' },
  body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
      fontFamily: 'Times-Roman'
    },
})

const PdfCreator = (props) =>{
    return(
    <Document>
        <Page style={styles.body}>
        <View>
          <Text style={styles.text}>
            Name: {props.firstName} {props.lastName}
          </Text>
          <Text style={styles.text}>Email: {props.email}</Text>
        </View>
      </Page>
    </Document>
    )
};




export default PdfCreator;