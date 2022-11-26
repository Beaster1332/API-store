import { connect } from "react-redux";
import { getShoppingItemsTC } from "../../redux/reducers/contentReducer.js";
import Content from './Content.jsx'

const mapStateToProps = (state) => {
    return {
        items: state.contentReducer.items,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setShoppingItems: () => dispatch(getShoppingItemsTC()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);