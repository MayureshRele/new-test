import { Module, Mutation, VuexModule, Action } from "vuex-module-decorators";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { IProduct } from '../../interfaces/IProduct'

@Module
export default class ProductModule extends VuexModule implements IProduct {
    id = 0;
    name = "";
    description = "";
    image = "";
    qty = 0
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
        console.log({ data });
        this.SelectedProduct.push(data);
    }

    @Action
    [Actions.ADD_PRODUCT](payload: IProduct) {
        if (payload) {
            payload.id = this.ProductList.length + 1;
            this.context.commit(Mutations.SET_PRODUCT, payload);
        }
    }

    @Action
    [Actions.EDIT_PRODUCT](payload: IProduct) {
        if (payload) {
            payload.id = this.ProductList.length + 1;
            this.context.commit(Mutations.SET_PRODUCT, payload);
        }
    }

    @Action
    [Actions.ADD_TO_CART](payload: IProduct) {
        if (payload) {
            this.context.commit(Mutations.SET_CART, payload);
        }
    }

}