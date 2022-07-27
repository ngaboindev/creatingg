import { IconButton, useColorMode } from '@chakra-ui/react';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';

const ModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const ModeIcon = colorMode === 'light' ? BsMoonStarsFill : BsFillSunFill;

  return (
    <>
      <IconButton
        variant="ghost"
        aria-label="mode-toggle"
        onClick={toggleColorMode}
        icon={<ModeIcon />}
      />
    </>
  );
};

export default ModeToggler;
