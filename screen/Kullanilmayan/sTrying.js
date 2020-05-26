import { colors } from './../../src/util/Color'
const styles = {

    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND,
        padding:14,
    },
    frame: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 50,
        borderRadius: 10,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 20,
        padding: 5,
        shadowOpacity: 0.15,
        shadowRadius: 3,
        shadowColor: 'black',
        shadowOffset: { height: 1, width: 1 },
        elevation: 3,
        backgroundColor: colors.MAINCOLOR
    },
    whiteFrame: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20,
        shadowOpacity: 0.15,
        shadowRadius: 3,
        shadowColor: 'black',
        shadowOffset: { height: 1, width: 1 },
        elevation: 3,
        backgroundColor: colors.WHITE
    },
   newStoreFrame: {
        borderRadius: 15,
        borderWith:0,
        shadowOpacity: 0.15,
        shadowRadius: 3,
        shadowColor: 'grey',
        shadowOffset: { height: 1, width: 1 },
        elevation: 3,
        backgroundColor: colors.WHITE
    },
    circleFrame: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 20,
        shadowOpacity: 0.15,
        shadowRadius: 3,
        shadowColor: 'black',
        shadowOffset: { height: 1, width: 1 },
        elevation: 3,
        backgroundColor: colors.WHITE
    },
    textMenu: {
        fontWeight: '800',
        color: colors.WHITE,
        fontSize: 23
    }, 
    textMenuDark: {
        fontWeight: '800',
        color: colors.TEXTCOLOR,
        fontSize: 23
    }, 
    textList: {
        fontWeight: '700',
        color: colors.TEXTCOLOR,
        fontSize: 20,
        marginTop:14,
        marginBottom:14,
    }, 
    textListTitle: {
        fontWeight: '500',
        color: colors.TEXTCOLOR,
        fontSize: 16,
        marginTop:10,
        marginBottom:10,
    }, 
    textListPrice: {
        fontWeight: '700',
        color: colors.G_FOUR,
        fontSize: 18,
        marginTop:10,
        marginBottom:10,
    }, 
    textAllShow: {
        flex:1,
        fontWeight: '600',
        color: colors.MAINCOLOR,
        fontSize: 14,
        marginTop:14,
        marginBottom:14,
        textAlign:'right',
        justifyContent:'center',
        alignSelf:'flex-end'
    }, 
    textSubList: {
        fontWeight: '600',
        color: colors.TEXTCOLOR,
        fontSize: 18,
        textAlign:'center'
    }, 
    textListDesc: {
        textAlign: 'center',
        padding: 10,
        fontWeight: '500',
        color: colors.TEXTCOLOR,
        fontSize: 16
    },
    btn: {
        alignSelf: "stretch",
        padding: 20,
        margin:20,
        alignItems: "center",
        shadowOpacity: 0.35,
        shadowRadius: 10,
        shadowColor: colors.MAINCOLOR,
        shadowOffset: { height: 10, width: 1 },
        elevation: 3,
    }
}

export default styles