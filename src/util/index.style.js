import { StyleSheet } from 'react-native';

export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignSelf: 'center'
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    //değiştirdim
    exampleContainer: {
        paddingVertical: 0
    },
    exampleContainerDark: {
        backgroundColor: colors.black
    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: colors.black
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 15,
        overflow: 'visible', // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 0, // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },detailWrapper: {
        backgroundColor: 'white',
        width: '80%',
        justifyContent:'center',
        alignSelf:'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    }
});
