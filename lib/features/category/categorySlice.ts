import { createAppSlice } from "@/lib/createAppSlice";
import { ICategory } from "@/type/type";
import { createCategoryAPI, deleteCategoryAPI, getCategoriesAPI, getSingleCategoryAPI } from "./categoryAPI";

const initialState:{categories: ICategory[], category:  ICategory} ={
    categories:[],
    category: {} as ICategory
}

export const categorySlice =createAppSlice({
    name: 'category',
    initialState,
    reducers: (create) => ({
        getCategoriesData : create.asyncThunk(
            async ()=>await getCategoriesAPI(),
            {
                fulfilled:(state, action) => {
                    state.categories = action.payload;
                }
            }
        ) ,



        createCategoriesData: create.asyncThunk(
            async (obj:ICategory)=>await createCategoryAPI(obj)
        ) ,



        updateCategoryData : create.asyncThunk(
            async (id:number)=>await getSingleCategoryAPI(id),
            {
                fulfilled:(state, action) => {
                    state.category = action.payload;
                }
            }
        ),

        getSingleCategoryData : create.asyncThunk(
            async (id:number)=>await getSingleCategoryAPI(id),
            {
                fulfilled:(state, action) => {
                    state.category = action.payload;
                }
            }
        ) ,
        

        deleteCategory : create.asyncThunk(
            async (id: number)=>await deleteCategoryAPI(id),
        )
    }),

    selectors:{
        selectCategories: (state) => state.categories,
        selectCategory: (state) => state.category
    }
})

export const {getSingleCategoryData, getCategoriesData, deleteCategory, createCategoriesData, updateCategoryData} = categorySlice.actions;
export const {selectCategories, selectCategory} = categorySlice.selectors;