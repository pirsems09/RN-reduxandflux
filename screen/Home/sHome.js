const styles = {

    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        height: '100%',
        paddingTop:5,
        paddingBottom:30,
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    header: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: '5%',
        marginRight: '5%',
        height: 220,
        marginTop: 20,
        padding: 5,
        shadowOpacity: 0.15,
        shadowRadius: 3,
        shadowColor: 'black',
        shadowOffset: { height: 1, width: 1 },
        elevation: 3,
    },
    row: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },

    subRow: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: '5%',
        marginRight: '5%',
        paddingTop: 5,
        paddingRight: 5,
        paddingLeft: 5,
        marginTop: 20,
        paddingBottom: 5,
        shadowOpacity: 0.15,
        shadowRadius: 3,
        shadowColor: 'black',
        shadowOffset: { height: 1, width: 1 },
        elevation: 3,
    },

    leaveapprove: {
        backgroundColor: 'white',
        borderRadius: 10,
    },
    leaveapproveheader: {
        borderRadius: 10,
        backgroundColor: '#f3f3f3',
        height: 38,
        flex: 1,
    },
    leaveapprovetext: {
        fontSize: 14,
        fontWeight: 'bold',
        margin: 10,
    },
    leaveapprovefooter: {
        height: 30,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    leaveapprovebody: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10,
        flex: 4,
        flexDirection: 'row',
    },
    leaveapprovebodytext: {
        flex: 3,
    },
    leaveapprovebodycount: {
        flex: 1,
        textAlign: 'center',
        borderRadius: 10,
        borderColor: 'yellow',
        borderWidth: 2,
        backgroundColor: 'orange',
        color: 'white',
        paddingTop: 2,
        paddingBottom: 2,
        fontWeight: 'bold'

    },
    leaveapprovefooter: {
        height: 30,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    buttons: {
        flex: 1,
    },
    button: {
        marginTop: 27.5,
        alignSelf: 'center',
    },
    title: {
        flexDirection: 'row',
        height: 40,
    },
    titleText: {
        fontFamily:'Roboto',
        flex: 1,
        fontSize:15,
        fontWeight: 'bold',
        marginLeft: 20,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    titleImageRight: {
        backgroundColor: 'orange',
        marginRight: 15,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 5,
        color: 'white'
    },
    titleImage: {
        flex:0.1,
        marginLeft: 10,
        resizeMode: 'contain',
        height: 16,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    titleLogo: {
        marginLeft: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    titleImageRight: {
        marginLeft: 10,
        marginRight: 10,
        resizeMode: 'contain',
        height: 16,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    listItemImageButton: {
        width: 20,
        height: 20,
        marginTop: 2.5,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginLeft: 2.5
    },
    titleImageMore: {
        width: 20,
        height: 20,
        marginRight: 15,
        justifyContent: 'center',
        alignSelf: 'center',
        resizeMode: 'contain',

    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    actionButtonIconBadge: {
        borderWidth: 1,
        borderColor: 'orange',
        color: '#555',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        position: 'absolute',
        bottom: 70,
        right: 30,
        height: 20,
        backgroundColor: '#fff',
        borderRadius: 100,
    }, textMail: {
        color:'#333',
        fontWeight:'600',
        marginBottom: 5
    }, textCompany: {
        color:'#333',
        fontWeight:'200'
    }, textName: {
        fontWeight:'800',
        color:'#fda000'
    }
}

export default styles