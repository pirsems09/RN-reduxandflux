import { colors } from "../../src/util/Color"

const styles = {

    container: {
        flex: 1,
        width:'100%',
        paddingHorizontal:'5%',
        justifyContent:'center',
        backgroundColor:colors.BACKGROUND
    },
    header: {
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: '2.5%',
        marginRight: '2.55%',
        height: 180,
        marginTop: 10,
        height: 60,
    },
    linelayoud: {
        justifyContent: 'center',
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 30,
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: '2.5%',
        marginRight: '2.55%',
        shadowOpacity: 1,
        shadowRadius: 1,
        shadowColor: 'grey',
        shadowOffset: { height: 1, width: 1 },
    },
    frame: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 50,
        borderRadius: 10,
        marginTop: 20,
        padding: 5,
        shadowOpacity: 0.15,
        shadowRadius: 3,
        shadowColor: 'black',
        shadowOffset: { height: 1, width: 1 },
        elevation: 3,
        backgroundColor: colors.G_SECOND
    },
    newStoreFrame: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderColor:colors.main_color_primary,
        shadowOpacity: 0.1,
        shadowRadius: 1,
        shadowColor: colors.main_color_primaryDark,
        shadowOffset: { height: 1, width: 0 },
        elevation: 1,
        backgroundColor: 'white'
    },
    row: {
        flex:1,
        flexDirection: 'row',
        marginTop: 10,
        width: '100%',
    },
    boxContainer: {
        alignItems: 'center',
        justifyContent: "center",
    },
    boxOne: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 8, 
        paddingTop:5,
        paddingBottom:5,
        backgroundColor: 'white',
        margin:4,
        shadowColor: 'white',
        shadowOpacity: 0.31,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    listItemImage: {
        width: 25,
        height: 25,
        marginLeft: 5,
        backgroundColor: 'transparent',

    },
    listItemName: {
        flex: 10,
        marginLeft: 5,
        justifyContent: 'flex-end',
    },
    listItemDate: {
        flex: 4,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: 'transparent'
    },
    listItemImageButton: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginRight: 5
    },
    listItemImageButtonArrow: {
        width: 10,
        height: 15,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginRight: 5
    },

    /* izin detay start*/

    detail: {
        flex: 8,
        width: '95%',
        marginLeft: '2.5%',
        marginRight: '2.55%',
        marginTop: 10,
        flexDirection: 'column'
    },
    textTitle: {
        fontSize: 23,
        fontWeight:'bold',
        marginBottom: 10,
        marginTop: 20
    },
    textSubBackgroundGrey: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 24,
        backgroundColor: '#E8E8E8',
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        height:45,
    },
    textSub: {
        fontSize: 16,
        marginBottom: 10,
        color: colors.TEXTDESC,
        marginTop: 20
    },
    saveDark: {
        borderRadius: 8,
        backgroundColor: colors.MAINCOLOR,
        margin: 20,
        justifyContent:'center',
        height:50,
        shadowColor: colors.G_SECOND,
        shadowOpacity: 0.4,
        shadowRadius: 10,
        shadowOffset: {
            height: 3,
            width: 1
        }
    },
    saveLight: {
        borderRadius: 24,
        borderWidth: 1.5,
        padding: 10,
        borderColor: '#F49B14',
        backgroundColor: 'transparent',
        marginLeft: 10,
        marginRight: 10
    },
    /* izin detay end*/

    OvalShapeView: {
        width: "60%",
        height: "50%",
        flex: 1,
        alignSelf: "center",
        marginTop: -50,
        position: "absolute",
        backgroundColor: '#2F3640',
        borderRadius: 50,
        transform: [
            { scaleX: 2 }
        ]
    },
    CircleShapeView: {
        width: 45,
        height: 45,
        margin: 10,
        borderRadius: 150 / 2,
        shadowOpacity: 0.1,
        shadowRadius: 1,
        shadowColor: 'grey',
        shadowOffset: { height: 1, width: 1 },
    },


    button: {
        bottom: 0,
        height:100,
        color:'#00000000'
    },
    bottom: {
        flex: 0.1,
        justifyContent: 'flex-end',
        alignSelfr:'flex-start'
    },
    text: {
        color: '#333',
        backgroundColor: 'transparent',
    },
    actionButtonIconBadge: {
        borderWidth: 1,
        opacity:0.9,
        borderColor: '#F49B14',
        color:'#555',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
        bottom: 20,
        right: 20,
        height: 30,
        backgroundColor: 'transparent',
        borderRadius: 100,
    },
    listeTitleName:{
            fontSize: 18,
            fontWeight:'600',
            color: colors.main_color_primaryDark,
            marginRight: 5
    },
    listeTitle:{
            fontSize: 18,
            fontWeight:'600',
            color: colors.main_color_accent,
            marginRight: 5
    },
    listeTitleDesc:{
            fontSize: 16,
            marginBottom: 5,
            fontWeight:'600',
            color: colors.main_color_accent,
            marginRight: 5
    },
    listeTitlePassive:{
            fontSize: 14,
            marginBottom: 5,
            color: colors.main_color_accentLight,
            marginRight: 5
    },


    /////// öncesi kontrol edilerek silinebiliri
    headerText:{
        fontSize: 28,
        color: colors.TEXTCOLOR,

    }

}

export default styles