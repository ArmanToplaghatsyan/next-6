import { createAppSlice } from '@/lib/createAppSlice';
import { IFilter, IProduct } from '@/type/type';
import { createProductAPI, deleteProductAPI, filterProductAPI, getProductsAPI, getSingleProductAPI, updateProductByIdAPI } from './productAPI';

const initialState: { products: IProduct[]; product: IProduct } = {
  products: [],
  product: {} as IProduct,
};

export const productSlice = createAppSlice({
  name: 'products',
  initialState,
  reducers: (create) => ({
    getProductsData: create.asyncThunk(
        async () => {
          return await getProductsAPI();
        },
        {
          fulfilled: (state, action) => {
            state.products = action.payload;
          },
        },
      ),

      getSingleProductData: create.asyncThunk(
        async (id: number) => {
          return await getSingleProductAPI(id);
        },
        {
          fulfilled: (state, action) => {
            state.product = action.payload;
          },
        },
      ),

      createProdcutsData: create.asyncThunk(
        async (obj: IProduct) => {
          return await createProductAPI(obj);
        },
      ),

      updateProductData: create.asyncThunk(
        async ({obj, id}:{obj: IProduct, id:number}) => {
          return await updateProductByIdAPI(id, obj);
        },
        {
          fulfilled: (state, action) => {
            state.product = action.payload;
          },
        },
      ),

      deleteProductsData: create.asyncThunk(
        async (id:number) => {
          return await deleteProductAPI(id);
        },
      ),

      filterProductData: create.asyncThunk(
        async (obj:IFilter) => {
          return await filterProductAPI(obj);
        },
        {
          fulfilled: (state, action) => {
            state.products = action.payload;
          },
        },
      ),
  }),
  selectors: {
    selectProducts: (state) => state.products,
    selectProduct: (state) => state.product,
  },
});

export const {filterProductData, deleteProductsData, updateProductData, createProdcutsData, getProductsData, getSingleProductData} = productSlice.actions;
export const { selectProduct, selectProducts } = productSlice.selectors;
