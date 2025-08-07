import React, { useState, useEffect, useRef } from 'react';
import Picker from 'rmc-picker';
import { CodeComponentMeta } from "@plasmicapp/host";
import 'rmc-picker/assets/index.css';

type PickersProps = {
  data ?: { value: string | number; label: string }[];
  initialValue?: string | number;
  onChange?: (value: string | number) => void;
}

export const Pickers = (props: PickersProps) => {
  const {
    data = [],
    onChange,
    initialValue,
  } = props;

  const [selectedValue, setSelectedValue] = useState<string | number>(initialValue || data[0]?.value);

  // 📌 1. Ref برای گرفتن DOM عنصر
  const pickerRef = useRef<HTMLDivElement>(null);

  // 📌 2. اعمال تصحیح دقیق scroll برای جلوگیری از ممیز
  useEffect(() => {
    const content = pickerRef.current?.querySelector('.rmc-picker-content') as HTMLElement;
    if (!content) return;

    const ITEM_HEIGHT = 34;

    const observer = new MutationObserver(() => {
      const transform = content.style.transform;
      const match = transform.match(/translate3d\(0px,\s*(-?\d+(?:\.\d+)?)px, 0px\)/);

      if (match) {
        const currentY = parseFloat(match[1]);
        const index = Math.round(Math.abs(currentY) / ITEM_HEIGHT);
        const exactY = -index * ITEM_HEIGHT;

        if (exactY !== currentY) {
          content.style.transform = `translate3d(0px, ${exactY}px, 0px)`;
        }
      }
    });

    observer.observe(content, { attributes: true, attributeFilter: ['style'] });

    return () => observer.disconnect();
  }, []);

  // 📌 3. sync با prop
  useEffect(() => {
    if (initialValue !== undefined) {
      setSelectedValue(initialValue);
    }
  }, [initialValue]);

  const handleChange = (value: string | number) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  // 📌 4. Wrap در یک div با ref
  return (
    <div ref={pickerRef}>
      <Picker selectedValue={selectedValue} onValueChange={handleChange}>
        {data.map((item) => (
          <Picker.Item value={item.value} key={item.value}>
            {item.label}
          </Picker.Item>
        ))}
      </Picker>
    </div>
  );
};

export const PickersMeta: CodeComponentMeta<PickersProps> = {
  name: 'Pickers',
  importPath: '@/components/Pickers',
  props: {
    data: {
      type: 'array',
      defaultValue: [],
      description: 'List of options for the picker.',
    },
    initialValue: {
      type: 'number', 
      defaultValue: 0,
      description: 'Initial selected value.',
    },
    onChange: {
      type: 'eventHandler',
      argTypes: [
        {
          name: 'value',
          type: 'number',
        },
      ],
      description: 'Callback when a value is selected.',
    },
  },
  states: {
    value: {
      type: 'writable',
      variableType: 'number',
      valueProp: 'initialValue',
      onChangeProp: 'onChange',
    },
  },
};
