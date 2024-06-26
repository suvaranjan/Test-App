import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    mark: Yup.number()
        .min(1, "The minimum mark must be 1")
        .max(2, "The maximum mark must be 2")
        .required("mark is required"),
    percentage: Yup.number()
        .min(30, "minimum percentage must be 30")
        .max(40, "maximum percentage must be 40")
        .required("percentage is required"),
});
