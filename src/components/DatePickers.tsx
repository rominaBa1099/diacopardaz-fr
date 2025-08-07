import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Jalaali from 'jalaali-js';
import { CodeComponentMeta } from '@plasmicapp/host';

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
    return num.toString().replace(/\d/g, (d) => persianDigits[parseInt(d)]);
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

  const scrollToValue = (ref: React.RefObject<HTMLDivElement>, value: number) => {
    if (ref.current) {
      ref.current.scrollTop = (value - 1) * ITEM_HEIGHT;
    }
  };

  // انتخاب آیتمی که در مرکز اسکرول قرار دارد
  const updateFromScroll = (
    ref: React.RefObject<HTMLDivElement>,
    items: { value: number }[],
    setSelected: (val: number) => void
  ) => {
    if (ref.current) {
      const scrollTop = ref.current.scrollTop;
      const center = scrollTop + ref.current.clientHeight / 2;
      const index = Math.floor(center / ITEM_HEIGHT);
      const item = items[index];
      if (item) setSelected(item.value);
    }
  };

  const debounce = (fn: () => void, delay = 100) => {
    let timeout: ReturnType<typeof setTimeout>;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(fn, delay);
    };
  };

  const handleScrollDay = debounce(() =>
    updateFromScroll(dayRef, getDaysOfMonth(selectedMonth, selectedYear), setSelectedDay)
  );
  const handleScrollMonth = debounce(() =>
    updateFromScroll(monthRef, months, setSelectedMonth)
  );
  const handleScrollYear = debounce(() =>
    updateFromScroll(yearRef, years, setSelectedYear)
  );

  useEffect(() => {
    onChange?.({ day: selectedDay, month: selectedMonth, year: selectedYear });
  }, [selectedDay, selectedMonth, selectedYear]);

  useLayoutEffect(() => {
    scrollToValue(dayRef, selectedDay);
    scrollToValue(monthRef, selectedMonth);
    scrollToValue(yearRef, selectedYear);
  }, []);

  return (
    <div className={`scroll-picker-container ${className}`} dir="rtl" style={styles.container}>
      <div ref={dayRef} onScroll={handleScrollDay} style={styles.column}>
        <div style={styles.padding} />
        {getDaysOfMonth(selectedMonth, selectedYear).map((d) => (
          <div
            key={d.value}
            style={{
              ...styles.item,
              ...(selectedDay === d.value ? styles.selected : {}),
            }}
          >
            {d.label}
          </div>
        ))}
        <div style={styles.padding} />
      </div>

      <div ref={monthRef} onScroll={handleScrollMonth} style={styles.column}>
        <div style={styles.padding} />
        {months.map((m) => (
          <div
            key={m.value}
            style={{
              ...styles.item,
              ...(selectedMonth === m.value ? styles.selected : {}),
            }}
          >
            {m.label}
          </div>
        ))}
        <div style={styles.padding} />
      </div>

      <div ref={yearRef} onScroll={handleScrollYear} style={styles.column}>
        <div style={styles.padding} />
        {years.map((y) => (
          <div
            key={y.value}
            style={{
              ...styles.item,
              ...(selectedYear === y.value ? styles.selected : {}),
            }}
          >
            {y.label}
          </div>
        ))}
        <div style={styles.padding} />
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: '200px',
    gap: '8px',
    overflow: 'hidden',
  },
  column: {
    flex: 1,
    height: '100%',
    overflowY: 'scroll',
    scrollSnapType: 'y mandatory',
    scrollbarWidth: 'none',
  },
  item: {
    height: `${ITEM_HEIGHT}px`,
    textAlign: 'center',
    fontSize: '16px',
    lineHeight: `${ITEM_HEIGHT}px`,
    scrollSnapAlign: 'center',
    transition: 'all 0.2s',
  },
  selected: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  padding: {
    height: `${ITEM_HEIGHT * 2}px`,
  },
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
