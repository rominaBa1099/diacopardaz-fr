import React, { useState, useEffect, useRef } from 'react';
import Jalaali from 'jalaali-js';
import { CodeComponentMeta } from '@plasmicapp/host';
import './DatePickers.css';

type DatePickersProps = {
  onChange?: (values: { day: number; month: number; year: number }) => void;
  SelectedDay?: number;
  SelectedMonth?: number;
  SelectedYear?: number;
  selectedValues?: { day: number; month: number; year: number };
  customYears?: { value: number; label: string }[];
  className?: string;
};

const ITEM_HEIGHT = 40;

export const DatePickers = (props: DatePickersProps) => {
  const {
    onChange,
    SelectedDay = 5,
    SelectedMonth = 10,
    SelectedYear = 1403,
    selectedValues = {},
    customYears = [],
    className,
  } = props;

  const [selectedDay, setSelectedDay] = useState<number>(SelectedDay);
  const [selectedMonth, setSelectedMonth] = useState<number>(SelectedMonth);
  const [selectedYear, setSelectedYear] = useState<number>(SelectedYear);

  const dayRef = useRef<HTMLDivElement>(null);
  const monthRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);

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

  const currentYear = Jalaali.toJalaali(new Date()).jy;

  const months = [
    'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند',
  ].map((label, index) => ({ value: index + 1, label: toPersianDigits(label) }));

  const years =
    customYears.length > 0
      ? customYears
      : Array.from({ length: currentYear - 1300 + 1 }, (_, i) => {
          const year = 1300 + i;
          return { value: year, label: toPersianDigits(year) };
        });

  const handleScroll = (ref: React.RefObject<HTMLDivElement>, items: { value: number }[], setSelected: (val: number) => void) => {
    if (ref.current) {
      const scrollTop = ref.current.scrollTop;
      const index = Math.round(scrollTop / ITEM_HEIGHT);
      const item = items[index];
      if (item) setSelected(item.value);
    }
  };

  const handleScrollWithDebounce = (ref: React.RefObject<HTMLDivElement>, items: { value: number }[], setSelected: (val: number) => void) => {
    let timeout: NodeJS.Timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => handleScroll(ref, items, setSelected), 100);
    };
  };

  useEffect(() => {
    onChange?.({ day: selectedDay, month: selectedMonth, year: selectedYear });
  }, [selectedDay, selectedMonth, selectedYear]);

  const scrollToValue = (ref: React.RefObject<HTMLDivElement>, value: number) => {
    if (ref.current) {
      ref.current.scrollTop = (value - 1) * ITEM_HEIGHT;
    }
  };

  useEffect(() => {
    scrollToValue(dayRef, selectedDay);
    scrollToValue(monthRef, selectedMonth);
    scrollToValue(yearRef, selectedYear);
  }, []);

  return (
    <div className={`scroll-picker-container ${className}`} dir="rtl">
      <div className="scroll-column" ref={dayRef} onScroll={handleScrollWithDebounce(dayRef, getDaysOfMonth(selectedMonth, selectedYear), setSelectedDay)}>
        <div className="padding" />
        {getDaysOfMonth(selectedMonth, selectedYear).map((d) => (
          <div
            key={d.value}
            className={`scroll-item ${selectedDay === d.value ? 'selected' : ''}`}
            style={{ height: ITEM_HEIGHT }}
          >
            {d.label}
          </div>
        ))}
        <div className="padding" />
      </div>

      <div className="scroll-column" ref={monthRef} onScroll={handleScrollWithDebounce(monthRef, months, setSelectedMonth)}>
        <div className="padding" />
        {months.map((m) => (
          <div
            key={m.value}
            className={`scroll-item ${selectedMonth === m.value ? 'selected' : ''}`}
            style={{ height: ITEM_HEIGHT }}
          >
            {m.label}
          </div>
        ))}
        <div className="padding" />
      </div>

      <div className="scroll-column" ref={yearRef} onScroll={handleScrollWithDebounce(yearRef, years, setSelectedYear)}>
        <div className="padding" />
        {years.map((y) => (
          <div
            key={y.value}
            className={`scroll-item ${selectedYear === y.value ? 'selected' : ''}`}
            style={{ height: ITEM_HEIGHT }}
          >
            {y.label}
          </div>
        ))}
        <div className="padding" />
      </div>
    </div>
  );
};

// 👇👇👇 حفظ شده بدون تغییر 👇👇👇
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
    customYears: {
      type: 'array',
      displayName: 'Custom Years',
      description: 'Optional custom year list',
      itemType: {
        type: 'object',
        fields: {
          value: { type: 'number' },
          label: { type: 'string' },
        },
      },
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
