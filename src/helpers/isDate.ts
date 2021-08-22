import moment from 'moment';

export default function isDate(value: number) {
  if (!value) return false;

  const date = moment(value);
  return date.isValid() ? true : false;
}
