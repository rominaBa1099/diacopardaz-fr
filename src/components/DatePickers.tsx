import React, { useEffect, useState } from 'react';
import Jalaali from 'jalaali-js';
import { CodeComponentMeta } from '@plasmicapp/host';
// import './DatePickers.css';

type DatePickersProps = {
  onChange?: (values: { day: number; month: number; year: number }) => void;
  SelectedDay?: number;
  SelectedMonth?: number;
  SelectedYear?: number;
  selectedValues?: { day: number; month: number; year: number };
  className?: string;
};

export const DatePickers = ({
  onChange,
  SelectedDay = 1,
  SelectedMonth = 1,
  SelectedYear = 1400,
  selectedValues = {},
  className = '',
}: DatePickersProps) => {
  const [day, setDay] = useState<number>(selectedValues.day ?? SelectedDay);
  const [month, setMonth] = useState<number>(selectedValues.month ?? SelectedMonth);
  const [year, setYear] = useState<number>(selectedValues.year ?? SelectedYear);

  const toPersianDigits = (num: number | string) => {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    return num.toString().replace(/\d/g, (d) => persianDigits[parseInt(d)]);
  };

  const years = Array.from({ length: 80 }, (_, i) => 1300 + i);
  const months = [
    'فروردین', 'اردیبهشت', 'خرداد', 'تیر',
    'مرداد', 'شهریور', 'مهر', 'آبان',
    'آذر', 'دی', 'بهمن', 'اسفند',
  ];

  const getDays = () => {
    const length = Jalaali.jalaaliMonthLength(year, month);
    return Array.from({ length }, (_, i) => i + 1);
  };

  useEffect(() => {
    onChange?.({ day, month, year });
  }, [day, month, year]);

  useEffect(() => {
    if (selectedValues?.day || selectedValues?.month || selectedValues?.year) {
      setDay(selectedValues.day ?? SelectedDay);
      setMonth(selectedValues.month ?? SelectedMonth);
      setYear(selectedValues.year ?? SelectedYear);
    }
  }, [selectedValues]);

  return (
    <div className={`scroll-picker-container ${className}`} dir="rtl">
      <div className="scroll-column">
        {getDays().map((d) => (
          <div
            key={d}
            className={`scroll-item ${day === d ? 'selected' : ''}`}
            onClick={() => setDay(d)}
          >
            {toPersianDigits(d)}
          </div>
        ))}
      </div>

      <div className="scroll-column">
        {months.map((m, i) => (
          <div
            key={i}
            className={`scroll-item ${month === i + 1 ? 'selected' : ''}`}
            onClick={() => setMonth(i + 1)}
          >
            {m}
          </div>
        ))}
      </div>

      <div className="scroll-column">
        {years.map((y) => (
          <div
            key={y}
            className={`scroll-item ${year === y ? 'selected' : ''}`}
            onClick={() => setYear(y)}
          >
            {toPersianDigits(y)}
          </div>
        ))}
      </div>
    </div>
  );
};

export const DatePickersMeta: CodeComponentMeta<DatePickersProps> = {
  name: 'DatePickers',
  importPath: '@/components/DatePickers',
  props: {
    onChange: {
      type: 'eventHandler',
      argTypes: [
        {
          name: 'selectedValues',
          type: 'object',
        },
      ],
      description: 'Callback for when the date is changed',
    },
    SelectedDay: {
      type: 'number',
      defaultValue: 1,
    },
    SelectedMonth: {
      type: 'number',
      defaultValue: 1,
    },
    SelectedYear: {
      type: 'number',
      defaultValue: 1400,
    },
    selectedValues: {
      type: 'object',
      defaultValue: {},
    },
    className: {
      type: 'class',
    },
  },
  states: {
    value: {
      type: 'writable',
      variableType: 'object',
      valueProp: 'selectedValues',
      onChangeProp: 'onChange',
    },
  },
};
