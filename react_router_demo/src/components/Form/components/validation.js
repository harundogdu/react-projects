import * as yup from "yup";

const contactSchema = yup.object().shape({
  fullname: yup
    .string("Geçerli bir metin giriniz!")
    .required("Zorunlu Alan"),
  email: yup
    .string("Geçerli bir metin giriniz!")
    .email("Geçerli bir e-posta giriniz!")
    .required("Zorunlu Alan"),
  message: yup
    .string("Geçerli bir metin giriniz!")
    .required("Zorunlu Alan"),
  phone: yup
    .string("Geçerli bir metin giriniz!"),
  website: yup.string("Geçerli bir metin giriniz!"),
});

export default contactSchema;
