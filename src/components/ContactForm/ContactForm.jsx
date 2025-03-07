import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAdd({ id: nanoid(), ...values });
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <div className={css.contactFormContainer}>
          <Form className={css.contactForm}>
            <label className={css.contactFormBox}>
              Name
              <Field type="text" name="name" className={css.inputField} />
              <ErrorMessage name="name" component="div" className={css.error} />
            </label>
            <label className={css.contactFormBox}>
              Number
              <Field type="text" name="number" className={css.inputField} />
              <ErrorMessage
                name="number"
                component="div"
                className={css.error}
              />
            </label>
            <button
              type="submit"
              className={css.addBtn}
              disabled={isSubmitting}
            >
              Add contact
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ContactForm;
