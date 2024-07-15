import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";

export default function ContactForm() {
  const initialValues = {
    name: "",
    number: "",
  };

  const registerSchema = Yup.object({
    name: Yup.string()
      .required("This field is required")
      .min(3, "Name must be more than 3 chars!")
      .max(50, "Name must be less than 50 chars!"),
  });

  const handleSubmit = (data, actions) => {
    console.log(data);
    actions.resetForm();
  };
  return (
    <div className={s.formWrapper}>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} name="name"></Field>
            <ErrorMessage
              name="name"
              component="span"
              className={s.error}
            ></ErrorMessage>
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} name="number"></Field>
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}
