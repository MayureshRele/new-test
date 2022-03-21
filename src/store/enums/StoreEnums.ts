enum Actions {
    LOGIN_USER = "LoginUser",
    ADD_PRODUCT = "AddProduct",
    EDIT_PRODUCT = "EditProduct",
    LOGOUT= "LogoutUser",
    ADD_TO_CART = "AddToCart",
    REMOVE_FROM_CART = "RemoveFromCart",
    IS_MODAL = "IsModal",
    ADD_CART_COUNT = "AddCartCount"
}

enum Mutations {
    SET_USER = "SetUser",
    SET_PRODUCT = "SetProduct",
    REMOVE_USER = "RemoveUser",
    SET_CART = "SetCart",
    SET_MODAL = "SetModal",
    SET_CART_COUNT = "SetCartCount"
}

export { Actions, Mutations };