import { Formik, Form } from 'formik';
import css from './ContactForm.module.css';

function ContactForm() {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
