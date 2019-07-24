import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    delatKursmaterialContainer: {
        width: '50%',
    },
    delatKursmaterial: {
        width: 300,
        height: 23.6,
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 22,
        letterSpacing: 0,
        color: '#c1c7c7'
    },
    rectangle: {
        width: 120,
        height: 33,
        borderRadius: 25,
        backgroundColor: '#f4f4f4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    seAllaFiler: {
        width: 70,
        height: 14,
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: 'center',
        color: 'gray'
    },
    bgCard: {
        width: 105,
        height: 106,
        borderRadius: 14,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 5,
        shadowOpacity: 1,
        margin: 5,
    },
    rectangle166: {
        width: 34,
        height: 45,
        backgroundColor: 'azure',
    },
    extentaJuli2017Pdf: {
        width: 65,
        height: 16,
        fontFamily: 'Roboto-Regular',
        fontSize: 7,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 16,
        letterSpacing: 0,
        color: 'gray',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    scrollViewContainer: {
        paddingHorizontal: 15,
    },
    topSideBar: {
        justifyContent: 'space-between',
        alignItems:'center',
        width: '100%',
        flexDirection: 'row',
    },
    fileBlockWrapper: {
        marginVertical: 15,
    }
});

export default styles;
