import { colors } from "../../src/util/Color"

const styles = {

    container: {
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1,
        justifyContent: 'center',
        marginLeft: '5%',
        marginRight: '5%',
    },
    header: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: '5%',
        marginTop: 20,
    },
    button: {
        alignSelf: "stretch",
        padding: 20,
        margin: 20,
        alignItems: "center",
        shadowOpacity: 0.35,
        shadowRadius: 10,
        backgroundColor:colors.MAINCOLOR,
        borderRadius:8,
        shadowColor: colors.MAINCOLOR,
        shadowOffset: { height: 10, width: 1 },
        elevation: 3,
    },
    textInput: {
        alignSelf: "stretch",
        flex:1,
        padding: 16,
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
        fontSize:19
    },
    headerTextDesc: {
        fontSize:16,
        color: colors.TEXTDESC
    }


}

export default styles