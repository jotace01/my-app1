import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('Julio César Hernández');
  const [mensaje, setMensaje] = useState('¡Bienvenido!');
  const [colorFondo, setColorFondo] = useState('#FFFFFF');

  const cambiarColorFondo = (color) => {
    setColorFondo(color);
  };

  const mostrarMensajePersonalizado = () => {
    if (nombre.trim() === '') {
      alert('Por favor, ingresa tu nombre.');
    } else {
      setMensaje(`Hola, ${nombre}!`);
    }
  };

  const nombreCurso = 'Análisis de Desarrollo de Software';
  const numeroCurso = 'Ficha 091';

  return (
    <View style={[styles.container, { backgroundColor: colorFondo }]}>
      <Text style={styles.courseTitle}>{nombreCurso}</Text>
      <Text style={styles.courseNumber}>{numeroCurso}</Text>
      <Text style={styles.title}>Mi App Personalizada</Text>
      <Text style={styles.subtitle}>{mensaje}</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />

      <TouchableOpacity style={styles.button} onPress={mostrarMensajePersonalizado}>
        <Text style={styles.buttonText}>Mostrar Saludo</Text>
      </TouchableOpacity>

      <View style={styles.colorOptions}>
        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: '#FF6347' }]}
          onPress={() => cambiarColorFondo('#FF6347')}
        />
        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: '#4682B4' }]}
          onPress={() => cambiarColorFondo('#4682B4')}
        />
        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: '#32CD32' }]}
          onPress={() => cambiarColorFondo('#32CD32')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  courseNumber: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  colorOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 5,
  },
});



// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// export default function App() {
//   const nombreCompleto = 'Julio César Hernández';
//   const ficha = 'Ficha 091 - Análisis de Desarrollo de Software';
//   const profesor = 'Profesor: Carlos Mora';

//   const handlePress = () => {
//     // Acción al presionar el botón (puedes agregar más funcionalidad aquí)
//     alert('¡Hola, Julio César! Esta es tu aplicación personalizada.');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>¡Hola, Julio César!</Text>
//       <Text style={styles.subtitle}>Bienvenido a tu aplicación personal</Text>
//       <Text style={styles.details}>{nombreCompleto}</Text>
//       <Text style={styles.details}>{ficha}</Text>
//       <Text style={styles.details}>{profesor}</Text>
//       <TouchableOpacity style={styles.button} onPress={handlePress}>
//         <Text style={styles.buttonText}>Presiona aquí</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
//   details: {
//     fontSize: 16,
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });



// import React from "react";

// import {
//   StyleSheet,
//   Button,
//   View,
//   SafeAreaView,
//   Text,
//   Alert,
// } from "react-native";

// const Separator = () => <View style={styles.separator} />;

// const App = () => (
//   <SafeAreaView style={styles.container}>
//     <View>
//       <Text style={styles.title}>
//         En esta ocacion estamos haciendo una prueba de react native con
//         expo,tanto en dispocitivo android android como en web.
//       </Text>
//       <Button
//         title="analisis y desarrollo de software"
//         onPress={() => Alert.alert("Simple Button pressed")}
//       />
//     </View>
//     <Separator />
//     <View>
//       <Text style={styles.title}>
//         Adjust the color in a way that looks standard on each platform. On iOS,
//         the color prop controls the color of the text. On Android, the color
//         adjusts the background color of the button.
//       </Text>
//       <Button
//         title="julio cesar hernandez ficha 090"
//         color="#9CD9AD"
//         onPress={() => Alert.alert("Button with adjusted color pressed")}
//       />
//     </View>
//     <Separator />
//     <View>
//       <Text style={styles.title}>
//         All interaction for the component are disabled.
//       </Text>
//       <Button
//         title="profesor carlos mora"
//         color="#34DB42"
//         onPress={() => Alert.alert("Cannot press this one")}
//       />
//     </View>
//     <Separator />
//     <View>
//       <Text style={styles.title}>
//         This layout strategy lets the title define the width of the button.
//       </Text>
//       <View style={styles.fixToText}>
//         <Button
//           title="Left button"
//           onPress={() => Alert.alert("Left button pressed")}
//         />
//         <Button
//           title="Right button"
//           onPress={() => Alert.alert("Right button pressed")}
//         />
//       </View>
//     </View>
//   </SafeAreaView>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     marginHorizontal: 16,
//   },
//   title: {
//     textAlign: "center",
//     marginVertical: 8,
//   },
//   fixToText: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: "#737373",
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
// });

// export default App;

// import React from 'react'
// import { View, Text, StyleSheet} from 'react-native'

// const estilos = StyleSheet.create({

//   titulo: {
//     fontSize: 20,
//     color: 'red'
//   }
// })

// const App = () => {
//   return (
//     <View>
//       <Text style = {estilos.titulo}>esta es una prueba de react con react-native</Text>
//     </View>
//   )
// }

// export default App
