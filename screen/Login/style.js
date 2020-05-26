import { colors } from "../../src/util/Color"

const styles = {

    container: {
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1,
        justifyContent: 'center',
        paddingLeft: '5%',
        paddingRight: '5%',
        backgroundColor:colors.BACKGROUND
    },
    header: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: '10%',
        marginHorizontal:'10%',
        marginTop:20,
        
    },
    button: {
        alignSelf: "stretch",
        padding: 20,
        marginTop: 20,
        alignItems: "center",
        shadowOpacity: 0.35,
        shadowRadius: 10,
        backgroundColor:colors.main_color_primary,
        borderRadius:8,
        shadowColor: colors.main_color_primaryDark,
        shadowOffset: { height: 10, width: 1 },
        elevation: 3,
    },
    textInput: {
        alignSelf: "stretch",
        padding:14,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: "white",
        borderColor: colors.EXTRA_LIGHT_GRAY,
        borderRadius: 5,
        borderWidth: 1
    },
    text: {
        fontSize:14,
        color: colors.TEXTDESC
    },
    headerText: {
        fontSize:19,
        fontWeight:'bold',
        color:colors.TEXTCOLOR
    },
    headerTextDesc: {
        fontSize:16,
        color: colors.TEXTDESC
    }


}

export default styles