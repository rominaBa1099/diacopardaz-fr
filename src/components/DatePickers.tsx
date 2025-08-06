import React, { useState, useEffect, useRef, useCallback } from 'react';
import Picker from 'rmc-picker';
import Jalaali from 'jalaali-js';
import './DatePickers.css'; // استایل رو اینجا import کن

type DatePickersProps = {
  onChange?: (values: { day: number; month: number; year: number }) => void;
  SelectedDay?: number;
  SelectedMonth?: number;
  SelectedYear?: number;
  selectedValues?: { day: number; month: number; year: number };
  customYears?: { value: number; label: string }[];
  className?: string;
};

export const DatePickers = ({
  onChange,
  SelectedDay = 5,
  SelectedMonth = 10,
  SelectedYear = 1403,
  selectedValues = {},
  customYears = [],
  className = '',
}: DatePickersProps) => {
  const [selectedDay, setSelectedDay] = useState<number>(SelectedDay);
  const [selectedMonth, setSelectedMonth] = useState<number>(SelectedMonth);
  const [selectedYear, setSelectedYear] = useState<number>(SelectedYear);

  const toPersianDigits = (num: number | string): string => {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    return num.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit, 10)]);
  };

  const getDaysOfMonth = (month: number, year: number) => {
    const daysInMonth = Jalaali.jalaaliMonthLength(year, month);
    return Array.from({ length: daysInMonth }, (_, i) => ({
      value: i + 1,
      label: toPersianDigits(i + 1),
    }));
  };

  const months = [
    'فروردین', 'اردیبهشت', 'خرداد', 'تیر',
    'مرداد', 'شهریور', 'مهر', 'آبان',
    'آذر', 'دی', 'بهمن', 'اسفند',
  ].map((name, index) => ({ value: index + 1, label: name }));

  const currentYear = Jalaali.toJalaali(new Date()).jy;

  const years =
    customYears.length > 0
      ? customYears
      : Array.from({ length: currentYear - 1300 + 1 }, (_, i) => {
          const year = 1300 + i;
          return { value: year, label: toPersianDigits(year) };
        });

  const onChangeRef = useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    const values = { day: selectedDay, month: selectedMonth, year: selectedYear };
    onChangeRef.current?.(values);
  }, [selectedDay, selectedMonth, selectedYear]);

  const handleChangeDay = useCallback((val: number) => setSelectedDay(Number(val)), []);
  const handleChangeMonth = useCallback((val: number) => setSelectedMonth(Number(val)), []);
  const handleChangeYear = useCallback((val: number) => setSelectedYear(Number(val)), []);

  return (
    <div className={`date-picker-wrapper ${className}`}>
      <Picker selectedValue={selectedDay} onValueChange={handleChangeDay}>
        {getDaysOfMonth(selectedMonth, selectedYear).map((d) => (
          <Picker.Item key={d.value} value={d.value}>{d.label}</Picker.Item>
        ))}
      </Picker>

      <Picker selectedValue={selectedMonth} onValueChange={handleChangeMonth}>
        {months.map((m) => (
          <Picker.Item key={m.value} value={m.value}>{toPersianDigits(m.label)}</Picker.Item>
        ))}
      </Picker>

      <Picker selectedValue={selectedYear} onValueChange={handleChangeYear}>
        {years.map((y) => (
          <Picker.Item key={y.value} value={y.value}>{y.label}</Picker.Item>
        ))}
      </Picker>
    </div>
  );
};
