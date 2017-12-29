import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    FlatList,
    StyleSheet,
    Dimensions,
    View,
    TouchableOpacity,
    ToastAndroid,
    Alert,

} from 'react-native';

var deviceHeight = Dimensions.get('window').height;//640
var deviceWidth = Dimensions.get('window').width;//360

import {Overlay, Menu, Button, Theme} from 'teaset';

export default class Bottom extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    show(view, align) {
        view.measure((x, y, width, height, pageX, pageY) => {
            let items = [
                {title: 'Search', icon: 'none', onPress: () => alert('Search')},
                {title: 'Edit', icon: 'none', onPress: () => alert('Edit')},
                {title: 'Remove', icon: 'none', onPress: () => alert('Remove')},
            ];
            Menu.show({x: pageX, y: pageY, width, height}, items, {align});
        });
    }

    show22(view,flexDirection) {
        view.measureInWindow((x, y, width, height) => {
            let popoverStyle = {
                backgroundColor: 'rgba(66, 33, 33, 0.2)',
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 12,
                paddingRight: 12,
            };
            let fromBounds = {x, y, width,height};
            let overlayView = (
                <Overlay.PopoverView
                    popoverStyle={popoverStyle}
                    fromBounds={fromBounds}
                    direction={flexDirection}
                    align='center'
                    directionInsets={4}
                    showArrow={true}
                    paddingCorner={30}
                >
                    <View style={{height:60,justifyContent:'center',alignItems:'center'}}>
                    <Text>HELLOOOOOOOOOOOOOO</Text>
                    </View>
                </Overlay.PopoverView>
            );
            Overlay.show(overlayView);
        });}


        render()
        {
            return (
                <View style={{
                    width: deviceWidth,
                    height: 40,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center'

                }}>
                    <TouchableOpacity onPress={() => this.show22(this.refs.AA,'right')}>
                        <Text ref='AA'>点击</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.show(this.refs.AAA, 'center')}>
                        <Text ref='AAA'>点击</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.show22(this.refs.AAAA,'left')}>
                        <Text ref='AAAA'>点击</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    const
    styles = StyleSheet.create({
        contain: {
            flex: 1,
            backgroundColor: '#f4f4f4',
            alignItems: 'center'
        },
        item: {
            width: deviceWidth,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center'
        }

    });