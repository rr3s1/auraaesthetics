/* eslint-disable no-unused-vars */
import { E164Number } from "libphonenumber-js/core";
import Image from "next/image";
import ReactDatePicker from "react-datepicker";
import { Control, ControllerProps as RHFControllerProps, FieldPath, FieldValues, ControllerRenderProps as RHFControllerRenderProps } from "react-hook-form";
import PhoneInput from "react-phone-number-input";

import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "./ui/checkbox";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"; 
import { Input } from "./ui/input"; 
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select"; 
import { Textarea } from "./ui/textarea"; 

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
  FILE_UPLOAD = "file_upload", 
}

interface CustomProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> {
  control: Control<TFieldValues>;
  name: TName;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: RHFControllerRenderProps<TFieldValues, TName>) => React.ReactNode;
  fieldType: FormFieldType;
  className?: string; 
  labelClassName?: string; 
  inputWrapperClassName?: string; 
  selectTriggerClassName?: string; 
  selectContentClassName?: string; 
  checkboxLabelClassName?: string; 
}

const RenderInput = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(
  { field, props }: { field: RHFControllerRenderProps<TFieldValues, TName>; props: CustomProps<TFieldValues, TName> }
) => {
  const { fieldType, iconSrc, iconAlt, placeholder, showTimeSelect, dateFormat, renderSkeleton, children, className, inputWrapperClassName } = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className={`flex rounded-md border border-dark-500 bg-dark-400 ${inputWrapperClassName || ''}`}>
          {iconSrc && (
            <Image
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className={`shad-input border-0 ${className || ''}`}
            />
          </FormControl>
        </div>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={placeholder}
            {...field}
            className={`shad-textArea ${className || ''}`}
            disabled={props.disabled}
          />
        </FormControl>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <div className={`flex rounded-md border border-dark-500 bg-dark-400 ${inputWrapperClassName || ''}`}>
            <PhoneInput
              defaultCountry="US"
              placeholder={placeholder}
              international
              withCountryCallingCode
              value={field.value as E164Number | undefined}
              onChange={field.onChange}
              className={`input-phone ${className || ''}`}
            />
          </div>
        </FormControl>
      );
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className={`flex items-center gap-4 ${className || ''}`}> 
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label htmlFor={props.name} className={`whitespace-nowrap ${props.checkboxLabelClassName || 'checkbox-label'}`}> 
              {props.label}
            </label>
          </div>
        </FormControl>
      );
    case FormFieldType.DATE_PICKER:
      return (
        <div className={`flex rounded-md border border-dark-500 bg-dark-400 ${inputWrapperClassName || ''} ${className || ''}`}>
          {iconSrc && (
            <Image
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <ReactDatePicker
              showTimeSelect={showTimeSelect ?? false}
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              timeInputLabel="Time:"
              dateFormat={dateFormat ?? "MM/dd/yyyy"}
              wrapperClassName="date-picker"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className={`shad-select-trigger ${props.selectTriggerClassName || ''}`}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className={`shad-select-content ${props.selectContentClassName || ''}`}>
              {children}
            </SelectContent>
          </Select>
        </FormControl>
      );
    case FormFieldType.SKELETON:
      return renderSkeleton ? renderSkeleton(field) : null;
    case FormFieldType.FILE_UPLOAD:
      return (
        <FormControl>
          <Input 
            type="file" 
            accept="image/*,application/pdf" 
            onChange={(e) => field.onChange(e.target.files && e.target.files[0])} 
            className={`shad-input ${className || ''}`} 
          />
        </FormControl>
      );
    default:
      return null;
  }
};

const CustomFormField = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(
  props: CustomProps<TFieldValues, TName>
) => {
  const { control, name, label, labelClassName, fieldType } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className={labelClassName || ''}>{label}</FormLabel>
          )}
          <RenderInput field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
