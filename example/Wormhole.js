import * as React from 'react';
import { Animated, Alert, TouchableOpacity } from 'react-native';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function CustomButton() {
    return /*#__PURE__*/_jsx(TouchableOpacity, {
        onPress: () => Alert.alert('Hello!'),
        children: /*#__PURE__*/_jsx(Animated.Text, {
            children: "Click here!"
        })
    });
}
export default function MyNewWormhole() {
    const message = React.useMemo(() => 'Hello, world!', []);
    return /*#__PURE__*/_jsxs(Animated.View, {
        style: {
            flex: 1,
            backgroundColor: 'red'
        },
        children: [/*#__PURE__*/_jsx(Animated.Text, {
            children: message
        }), /*#__PURE__*/_jsx(CustomButton, {})]
    });
}