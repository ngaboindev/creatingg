import { Skeleton, Text } from '@chakra-ui/react';

const PersonalInfoFormSkeleton = () => {
  return (
    <>
      <Text fontSize="xl" mb={2} fontWeight="semibold">
        Personal information
      </Text>
      {new Array(7).fill('').map((_, index) => (
        <Skeleton
          key={`form-skeleton-${index}`}
          mb={3}
          height="50px"
          rounded="md"
        />
      ))}
    </>
  );
};

export default PersonalInfoFormSkeleton;
