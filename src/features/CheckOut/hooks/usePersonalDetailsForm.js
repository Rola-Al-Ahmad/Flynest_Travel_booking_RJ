import { useFormik } from "formik";
import * as Yup from "yup";

import useBookingContext from "../../Cart/hooks/useBookingContext";

export const usePersonalDetailsForm = () => {

    const { selectedTour, personalDetails, handleSetTour } = useBookingContext();

    const formik = useFormik({
        initialValues: {
            name: personalDetails?.name || "",
            email: personalDetails?.email || "",
            phone: personalDetails?.phone || "",
            altphone: personalDetails?.altphone || "",
            country: personalDetails?.country || "",
            city: personalDetails?.city || "",
            state: personalDetails?.state || "",
            zip: personalDetails?.zip || "",
            adults: personalDetails?.adults,
            child: personalDetails?.child,
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            phone: Yup.string()
                .matches(/^[0-9]{6,15}$/, "Invalid phone number")
                .required("Phone is required"),
            altphone: Yup.string().matches(/^[0-9]{6,15}$/, "Invalid alternate phone"),
            country: Yup.string().required("Country is required"),
            city: Yup.string().required("City is required"),
            state: Yup.string(),
            zip: Yup.string(),
            adults: Yup.number()
                .min(1, "Must be 1 or greater")
                .when([], {
                    is: () => selectedTour?.type === "tours",
                    then: (schema) => schema.test(
                        "total-travelers-match",
                        `Adults + Children must equal ${selectedTour?.person}`,
                        function (value) {
                            const { child } = this.parent;
                            return Number(value) + Number(child) <= selectedTour?.person;
                        }
                    ),
                    otherwise: (schema) => schema,
                }),
            child: Yup.number()
                .min(0, "Must be 0 or greater")
                .when([], {
                    is: () => selectedTour?.type === "tours",
                    then: (schema) => schema.test(
                        "total-travelers-match",
                        `Adults + Children must equal ${selectedTour?.person}`,
                        function (value) {
                            const { adults } = this.parent;
                            return Number(adults) + Number(value) <= selectedTour?.person;
                        }
                    ),
                    otherwise: (schema) => schema,
                }),

        }),
        onSubmit: (values) => {
            handleSetTour({ personalDetails: { ...values } });
        },
    });

    return { formik, selectedTour };
};
