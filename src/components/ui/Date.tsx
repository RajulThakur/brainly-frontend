import formatDate from '../../helper/DateFormat';

interface DateProps {
  date: string;
  light?: boolean;
}

export default function Date({ date, light }: DateProps) {
  return (
    <p className={`text-sm ${light ? 'text-slate-400' : 'text-slate-400'}`}>
      Added on {formatDate(date)}
    </p>
  );
}
