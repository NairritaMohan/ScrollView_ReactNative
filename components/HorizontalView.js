import React from 'react';
import {View, Text, StyleSheet,ScrollView,Dimensions} from 'react-native';


export default class HorizontalView extends React.Component{
    render(){
        return(
            
            <ScrollView horizontal = {true} pagingEnable = {true} style = {styles.container}>
                <View style = {styles.outer}>
                    <Text style = {styles.innerText}>WelcomeScreen</Text>
                </View>
                <View style = {[styles.outer, styles.red]}>
                    <Text style = {styles.innerText}>AlzheimerApp</Text>
                </View>

                <View style = {[styles.outer, styles.green]}>
                    <Text style = {styles.innerText}>Best Video</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
       
    },
outer:{
backgroundColor: '#00b5cc',
alignItems : 'center',
justifyContent: 'center',
width : Dimensions.get('window').width,
height : Dimensions.get('window').height

},

innerText:{
 color : '#fff',
 fontSize : 25,
 fontWeight : 'bold'
},
red:{
backgroundColor : '#db0a5b'
},
green : {
    backgroundColor : '#4ecdc4'
}

})