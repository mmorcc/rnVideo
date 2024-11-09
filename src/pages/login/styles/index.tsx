import { StyleSheet, PixelRatio ,Dimensions} from 'react-native';
const Screen = Dimensions.get("window")

const st=   StyleSheet.create({
    
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  text12:{
    fontSize:12,
  },
  text14:{
    fontSize:14,
  },
  text16:{
    fontSize:16,
  },
  text18:{
    fontSize:18,
  },
  tCenter:{
    textAlign:"center"
  },
    redBg: {
      backgroundColor: "#f00"
    },
    flex: {
     display:"flex"
    },
    rowLayout:{
        flexDirection: "row",
    },
    colLayout:{
        flexDirection: "column",
    },
    colCenter:{
        alignItems:"center",
    },
    jCenter:{
        justifyContent:"center"
    },
    img:{
        width:40,
        height:40,
        resizeMode: "contain",
    },
    imgchangyong:{
        width:50,
        height:20,
        resizeMode: "contain",
    },
    text:{
        color:"#000",
        fontSize:16,
        maxWidth:220
    },
    text333:{
        color:"#999",
        fontSize:13,
        maxWidth:220
    },
    textNormal:{
        flex:1,
        textAlign:"right",
        fontSize:14,
        color:"#208CFE",
        marginRight:20,
    },
    rowCenter:{
        alignItems:"center"
    },
   aTop:{
        alignItems:"baseline"
    },
    infoItem:{
        flexDirection: "row",
        height:50,
        alignItems:"center",
    },
    infoImage:{
        width:30,
        height:30,
        resizeMode: "contain",
        marginLeft:15,
        borderRadius: 30,
    },
    rainImage:{
        width:15,
        height:15,
        resizeMode: "contain",
    },
    deviceImage:{
        width:45,
        height:45,
        resizeMode: "contain",
    },
    deviceHeader:{
        fontSize:14,
        color:"#666",
        textAlign:"center"
    },
    bt:{
       justifyContent:"space-between"
    },
    infoLabel:{
        fontSize:15,
        color:"#666666",
        flex:1,
        marginLeft:10
    },
    infoValue:{
        fontSize:15,
        color:"#666666",
        marginRight:20
    },
    regText:{
        flex:1,
        backgroundColor:"#f00",
        fontSize:15,
        color:"#40454B",
        textAlign:"center",
        textAlignVertical:'center',
    },
    regImage:{
        width:30,
        height:30,
        resizeMode: "contain",
    },
    ml10:{
        marginLeft:10
    },
    mt10:{
        marginTop:10
    },
    mt20:{
        marginTop:20
    },
    mt40:{
        marginTop:40
    },
    mb10:{
        marginBottom:10
    }, 
    mb20:{
        marginBottom:20
    }, 
    mb40:{
        marginBottom:40
    }, 
    mh10:{
        marginHorizontal:10
    },
    mh20:{
        marginHorizontal:20
    },
    mh40:{
        marginHorizontal:40
    },
    mh60:{
        marginHorizontal:60
    },
    mh80:{
        marginHorizontal:80
    },
    mv10:{
        marginVertical:10
    }, 
    divider:{
        height:20,
        width:3,
        backgroundColor:"#F65B12",
    },
    shadowedView: {
        marginTop: 10,
        backgroundColor: '#fff',
        width: 100,
        height:100,
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5, // 仅在Android上有效
      },
      flex1:{
          flex:1,
      }, 
      flex2:{
          flex:2,
      }, 
      
  icon: {
    width: 30,
    height: 13,
    resizeMode:"contain",
  },
})
export {st};