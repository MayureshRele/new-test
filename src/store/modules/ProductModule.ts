import { Module, Mutation, VuexModule, Action } from "vuex-module-decorators";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { IProduct } from '../../interface/IProduct'

@Module
export default class ProductModule extends VuexModule implements IProduct {
    id = 0;
    name = "";
    description = "";
    image = "";
    qty = 0
    price = 0
    ProductList: IProduct[] = [];
    SelectedProduct: IProduct[] = [];

    /**
     * Authenticate user
     * @returns User
     */

    get products(): IProduct[] {
        return this.ProductList
    }

    get cart(): IProduct[] {
        return this.SelectedProduct
    }

    @Mutation
    [Mutations.SET_PRODUCT](data: IProduct) {
        this.ProductList.push(data);
    }
    @Mutation
    [Mutations.SET_CART](data: IProduct) {
        debugger;
        if (this.SelectedProduct.length === 0) {
            data.qty = this.SelectedProduct.length + 1
            this.SelectedProduct.push(data)
        } else {
            this.SelectedProduct.map((ele) => ele.id === data.id ? ele.qty = ele.qty + 1 : (data.qty = data.qty + 1, this.SelectedProduct.push(data)))
        }
    }

    @Action
    [Actions.ADD_PRODUCT](payload: IProduct) {
        console.log("myload", payload);

        if (payload) {
            { { payload } }
            payload.id = this.ProductList.length + 1;
            this.context.commit(Mutations.SET_PRODUCT, payload);
        }
    }

    @Action
    [Actions.EDIT_PRODUCT](payload: IProduct) {
        if (payload) {
            this.ProductList.map((ele) => ele.id === payload.id ? { ...payload } : ele)
        }
    }

    @Action
    [Actions.ADD_TO_CART](payload: IProduct) {
        debugger;
        if (payload) {
            this.context.commit(Mutations.SET_CART, payload);
        }
    }

}