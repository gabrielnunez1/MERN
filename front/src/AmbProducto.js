import { connect } from "http2"

const mapStateToProps=(state)=>{
    return{
        products:state
        // si tiene convine reducer product.reducer user.reducer
    }
}


export default connect(mapStateToProps)(AbmProducto);