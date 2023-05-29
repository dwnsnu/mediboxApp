
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  // function setType1() {
  //   let currentState = this.state.type;
  //   let willState =
  //     currentState === Camera.Constants.Type.back
  //       ? Camera.Constants.Type.front
  //       : Camera.Constants.Type.back;
  //   this.setState({
  //     type: willState,
  //   });
  // }

  setSnap = async () => {
    console.log('hi')
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      let photo = await this.camera.takePictureAsync(options);
      this.setState(
        {
          photo: photo.base64,
          scanning: false,
          uri: photo.uri,
        },
        () => this.callGoogleVIsionApi(this.state.result)
      );
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
            {/* SNAP : 사진 촬영 버튼 */}
            <TouchableOpacity
                style={{
                flex: 0.5,
                alignSelf: 'flex-end',
                alignItems: 'center',
                }}
                onPress={this.setSnap}
            >
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }} >
                SNAP
              </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
      {/* <Camera
        style={{ width: 300, height: 400 }}
        type={this.state.type}
        ref={(ref) => {
        this.camera = ref;
        }}
      >
          <View
              style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
              }}
          >
              // FLIP : 전면/후면 카메라 변경 버튼, 
              <TouchableOpacity
                  style={{
                  flex: 0.5,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  }}
                  onPress={setType1}
              >
                  <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }} >
                    Flip
                  </Text>
              </TouchableOpacity>

              // SNAP : 사진 촬영 버튼
              <TouchableOpacity
                  style={{
                  flex: 0.5,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  }}
                  onPress={this.setSnap}
              >
                  <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }} >
                    SNAP
                  </Text>
              </TouchableOpacity>
          </View>
      </Camera> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
