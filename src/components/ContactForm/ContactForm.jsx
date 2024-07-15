import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";

export default function ContactForm() {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (data, actions) => {
    console.log(data);
    actions.resetForm();
  };
  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} name="name"></Field>
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
