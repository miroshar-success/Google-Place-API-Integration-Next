import { useState } from "react";

const useCustomSelect = (initialOptions, isOpenByDefault = false) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = initialOptions;

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    closeDropdown();
  };

  return {
    isOpen,
    selectedOption,
    options,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    selectOption,
  };
};

export default useCustomSelect;
