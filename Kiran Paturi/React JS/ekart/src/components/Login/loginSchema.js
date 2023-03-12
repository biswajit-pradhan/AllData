import * as Yup from "yup";

export const addBookSchema=Yup.object({
    username: Yup.string(),
    password: Yup.string()
});