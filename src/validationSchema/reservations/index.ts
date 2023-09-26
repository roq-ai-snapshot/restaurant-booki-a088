import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  guest_count: yup.number().integer().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  table_id: yup.string().nullable().required(),
});
