enum Actions {
    LOGIN_USER = "LoginUser",
    ADD_PRODUCT = "AddProduct",
    EDIT_PRODUCT = "EditProduct",
    LOGOUT= "LogoutUser",
    ADD_TO_CART = "AddToCart",
    REMOVE_FROM_CART = "RemoveFromCart",
    IS_MODAL = "IsModal"
}

enum Mutations {
    SET_USER = "SetUser",
    SET_PRODUCT = "SetProduct",
    REMOVE_USER = "RemoveUser",
    SET_CART = "SetCart",
    SET_MODAL = "SetModal"
}

export { Actions, Mutations };