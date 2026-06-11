export const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

if (!WEB3FORMS_KEY) {
  console.error(
    '[Gastro Clinic 27] VITE_WEB3FORMS_KEY is not set. ' +
    'Form submissions will fail. Add it to your .env file.'
  );
}
