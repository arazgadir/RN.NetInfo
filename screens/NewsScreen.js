
import React, { Component } from 'react';
import { WebView} from 'react-native-webview';
import { View} from 'react-native';
import SecondAnimation from '../Animation/SecondAnimation'

export  class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

handleClose() {

<SecondAnimation />
  
}


  hideSpinner=()=> {
    this.setState({ visible: false });
  }
  showSpinner=()=> {
    this.setState({ visible: true });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          onError={this.handleClose}
          onLoadStart={() => (this.showSpinner())}
          onLoad={() => this.hideSpinner()}
          onError={()=>alert("Check Internet Connection ")}
          style={{ flex: 1 }}
          source={{ uri: 'https://1news.az/' }}
        />
        {this.state.visible && (
          <SecondAnimation />
        )}
      </View>
    );
  }
}










