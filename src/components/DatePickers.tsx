import React, { useState, useEffect, useRef, useCallback } from 'react';
import Picker from 'rmc-picker';
import Jalaali from 'jalaali-js';
import 'rmc-picker/assets/index.css';

type DatePickersProps = {
  onChange?: (values: { day: number; month: number; year: number }) => void;
  SelectedDay?: number;
  SelectedMonth?: number;
  SelectedYear?: number;
  selectedValues?: { day: number; month: number; year: number };
  customYears?: { value: number; label: string }[];
  className?: string;
};

const ITEM_HEIGHT = 34; // ارتفاع ثابت هر آیتم

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

  const dayPickerRef = useRef<HTMLDivElement>(null);
  const monthPickerRef = useRef<HTMLDivElement>(null);
  const yearPickerRef = useRef<HTMLDivElement>(null);

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
    { value: 1, label: 'فروردین' },
    { value: 2, label: 'اردیبهشت' },
    { value: 3, label: 'خرداد' },
    { value: 4, label: 'تیر' },
    { value: 5, label: 'مرداد' },
    { value: 6, label: 'شهریور' },
    { value: 7, label: 'مهر' },
    { value: 8, label: 'آبان' },
    { value: 9, label: 'آذر' },
    { value: 10, label: 'دی' },
    { value: 11, label: 'بهمن' },
    { value: 12, label: 'اسفند' },
  ].map((month) => ({ ...month, label: toPersianDigits(month.label) }));

  const years =
    customYears.length > 0
      ? customYears
      : Array.from({ length: currentYear - 1300 + 1 }, (_, i) => {
          const year = 1300 + i;
          return { value: year, label: toPersianDigits(year) };
        });

  // اصلاح موقعیت بر اساس آیتم انتخاب شده
  const fixPickerPosition = (pickerRef: React.RefObject<HTMLDivElement>, selectedValue: number) => {
    if (!pickerRef.current) return;

    const content = pickerRef.current.querySelector('.rmc-picker-content') as HTMLElement | null;
    if (!content) return;

    const items = content.querySelectorAll('.rmc-picker-item');
    let selectedIndex = -1;

    // پیدا کردن اندیس آیتم انتخاب شده
    items.forEach((item, index) => {
      if (Number(item.textContent?.replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))) === selectedValue) {
        selectedIndex = index;
      }
    });

    if (selectedIndex === -1) return;

    const expectedY = -selectedIndex * ITEM_HEIGHT;
    const currentTransform = content.style.transform;
    const match = currentTransform.match(/translate3d\(0px,\s*(-?\d+(?:\.\d+)?)px,\s*0px\)/);
    const currentY = match ? parseFloat(match[1]) : 0;

    if (currentY !== expectedY) {
      content.style.transform = `translate3d(0px, ${expectedY}px, 0px)`;
    }
  };

  // هر بار مقدار انتخابی تغییر کرد موقعیت اصلاح می‌شود
  useEffect(() => {
    fixPickerPosition(dayPickerRef, selectedDay);
  }, [selectedDay]);

  useEffect(() => {
    fixPickerPosition(monthPickerRef, selectedMonth);
  }, [selectedMonth]);

  useEffect(() => {
    fixPickerPosition(yearPickerRef, selectedYear);
  }, [selectedYear]);

  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    const values = { day: selectedDay, month: selectedMonth, year: selectedYear };
    if (onChangeRef.current) {
      onChangeRef.current(values);
    }
  }, [selectedDay, selectedMonth, selectedYear]);

  useEffect(() => {
    setSelectedDay(SelectedDay);
    setSelectedMonth(SelectedMonth);
    setSelectedYear(SelectedYear);
  }, [SelectedDay, SelectedMonth, SelectedYear]);

  return (
    <div className={className}>
      <div ref={dayPickerRef}>
        <Picker selectedValue={selectedDay} onValueChange={setSelectedDay}>
          {getDaysOfMonth(selectedMonth, selectedYear).map((day) => (
            <Picker.Item key={day.value} value={day.value}>
              {day.label}
            </Picker.Item>
          ))}
        </Picker>
      </div>

      <div ref={monthPickerRef}>
        <Picker selectedValue={selectedMonth} onValueChange={setSelectedMonth}>
          {months.map((month) => (
            <Picker.Item key={month.value} value={month.value}>
              {month.label}
            </Picker.Item>
          ))}
        </Picker>
      </div>

      <div ref={yearPickerRef}>
        <Picker selectedValue={selectedYear} onValueChange={setSelectedYear}>
          {years.map((year) => (
            <Picker.Item key={year.value} value={year.value}>
              {year.label}
            </Picker.Item>
          ))}
        </Picker>
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
      description: 'Callback function to handle changes in selected day, month, and year.',
    },
    SelectedDay: {
      type: 'number',
      defaultValue: 10,
    },
    SelectedMonth: {
      type: 'number',
      defaultValue: 10,
    },
    SelectedYear: {
      type: 'number',
      defaultValue: 1379,
    },
    selectedValues: {
      type: 'object',
      defaultValue: {},
    },
    customYears: {
      type: 'object',
      defaultValue: [],
      description: 'Custom years array to override the default generated years.',
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
