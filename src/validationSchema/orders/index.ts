import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  status: yup.string().required(),
  total_price: yup.number().integer().required(),
  date_time: yup.date().required(),
  user_id: yup.string().nullable().required(),
  menu_id: yup.string().nullable().required(),
});
