import { FlatList, ScrollView, StyleSheet, } from 'react-native'
import React from 'react'

const MyFlatlist = ({ ...props }) => {
    return (
        <FlatList
            {...props}
            ListEmptyComponent
        />
    )
}

export default MyFlatlist
